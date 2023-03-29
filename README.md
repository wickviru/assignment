# Frontend candidate task

## Task description

Task is to integrate upcoming interview API in the upcoming interview widget.

Make your changes in @pages/dashoboard/Dashboard.tsx
You can make use of the abstracted axios interceptor (already imprted in Dashboard.tsx) intstead of native axios.
You are free to use any css libraries of your choice.

Enpoint to be used : http://interview-service-alb-355656776.ap-south-1.elb.amazonaws.com/api/v1/interviews

Apply the below filters to the endpoint to get the list of interviews from the current date

**filter: scheduledTime ge {fromDate}** <br />

**sort: scheduledTime asc** <br />

Sample request : http://interview-service-alb-355656776.ap-south-1.elb.amazonaws.com/api/v1/interviews?filter=scheduledTime+ge+%272023-03-24+02:14:48%27&sort=scheduledTime+asc

After retrieving the list of interviews, categorize them into interviews scheduled for today, tomorrow and other dates as in the design attached.<br/>
On hover each candidate change candidate section and button color<br/>
Values to be retirieved are "candidate full name" and "scheduledTime".<br/>
Role detail i.e "Role Senior Developer" can be hard coded


<img width="692" alt="Screenshot 2023-03-24 at 2 49 47 AM" src="https://user-images.githubusercontent.com/9131336/227365435-09711d80-ca72-4917-ab14-9a22c9f6448c.png">




## Installation

Clone the repo and run `yarn install`

## Start

After the successfull installation of the packages: `yarn dev`

## credentials

username : praveesh

password : c0gn!tOD2fault
