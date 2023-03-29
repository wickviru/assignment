import React from 'react'
import { useEffect, useState } from 'react';
import { BACKEND_API_PATHS } from '@/helpers/constants/backendApi.constants';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import InterviewShow from './InterviewShow';
import EmptyList from './EmptyList';
import styles from './DashBoard.module.scss';
import { Spin } from 'antd';
import Heading from './Heading';

interface InterviewProps {
  name: string;
  time: string;
}

export const Dashboard = () => {
  const { axiosInterviewAPI } = useAxiosPrivate();
  const [interviews, setData] = useState<InterviewProps[]>([]);
  const [todayInterviews, setTodayInterviews] = useState<InterviewProps[]>([]);
  const [tomorrowInterviews, setTomorrowInterviews] = useState<InterviewProps[]>([]);
  const [upcomingInterviews, setUpcomingInterviews] = useState<InterviewProps[]>([]);

  useEffect(() => {
    const fetchData = async () =>  axiosInterviewAPI.get("https://my-json-server.typicode.com/wickviru/temp/content")
    .then((res) => {
      setData(res.data);
    })
      .catch(error => {
        console.error('Error fetching data', error);
      });
      fetchData();
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().substring(0, 10);
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .substring(0, 10);

    setTodayInterviews(
      interviews.filter((interview) => interview.time.substring(0, 10) === today)
    );

    setTomorrowInterviews(
      interviews.filter(
        (interview) => interview.time.substring(0, 10) === tomorrow
      )
    );
    setUpcomingInterviews(
      interviews.filter(
        (interview) => interview.time.substring(0,10) > tomorrow
      )
    );
  }, [interviews]);

   return (
    <>
      <Heading heading='Today'/>
        {todayInterviews.length!=0?todayInterviews.map((interview) => (
          <InterviewShow name={interview.name} time={interview.time.substring(11,16)}/>
        )):<EmptyList message='today'/>}

      <Heading heading='Tomorrow'/>
      {tomorrowInterviews.length!=0?tomorrowInterviews.map((interview) => (
          <InterviewShow name={interview.name} time={interview.time.substring(0,10)+" "+interview.time.substring(11,16)}/>
        )):<EmptyList message='tomorrow'/>}

      <Heading heading='Other Dates'/>
      {upcomingInterviews.length!=0?upcomingInterviews.map((interview) => (
          <InterviewShow name={interview.name} time={interview.time.substring(0,10)+" "+interview.time.substring(11,16)}/>
        )):<EmptyList message='other dates'/>}
      
    </>
  );
}
