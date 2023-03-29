import { BACKEND_API_PATHS } from '@/helpers/constants/backendApi.constants';
import useAuth from '@/hooks/useAuth';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const interviewService = () => {
  const { axiosInterviewAPI } = useAxiosPrivate();
  const { axiosUserAPI } = useAxiosPrivate();
  const { auth } = useAuth();

  const addRole = (roleObj: any) => {
    return axiosInterviewAPI
      .post(`${BACKEND_API_PATHS.ROLES}`, roleObj)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const addRound = (roundObj: any, roleId: any) => {
    return axiosInterviewAPI
      .patch(
        `${BACKEND_API_PATHS.ROLES}/${roleId}${BACKEND_API_PATHS.ROUND_DETAILS}`,
        roundObj,
      )
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const getRole = () => {
    return axiosInterviewAPI
      .get(`${BACKEND_API_PATHS.ROLES}?size=100`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const getCandidateWithRounds = (id: string) => {
    const params = {
      filter: `candidate.id eq ${id}`,
    };
    return axiosInterviewAPI
      .get(`${BACKEND_API_PATHS.CANDIDATES_ROUNDS}`, {
        params,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const addCandidate = (candidateObj: any) => {
    const apiReadyObject = transformCandidateObject(candidateObj);
    return axiosInterviewAPI
      .post(`${BACKEND_API_PATHS.CANDIDATES}`, apiReadyObject)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const transformCandidateObject = (candidateObj: any) => {
    if (candidateObj.contacts == null) {
      candidateObj.contacts = {};
    }
    if (candidateObj.email != null && candidateObj.contacts.PERSONAL_EMAIL == null) {
      const email = {
        value: candidateObj.email,
      };
      candidateObj.contacts['PERSONAL_EMAIL'] = email;
    }
    if (candidateObj.linkedin != null && candidateObj.contacts.LINKEDIN == null) {
      const linkedin = {
        value: candidateObj.linkedin,
      };
      candidateObj.contacts['LINKEDIN'] = linkedin;
    }
    if (candidateObj.phone != null && candidateObj.contacts.PERSONAL_MOBILE == null) {
      const phone = {
        value: candidateObj.phone,
      };
      candidateObj.contacts['PERSONAL_MOBILE'] = phone;
    }
    return candidateObj;
  };

  const getCandidate = (email: any) => {
    const params = {
      contactType: `PERSONAL_EMAIL`,
      value: email,
    };
    return axiosInterviewAPI
      .get(`${BACKEND_API_PATHS.CANDIDATES}`, { params })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const addInterviewer = (interviewerObj: any) => {
    return axiosUserAPI
      .post(`${BACKEND_API_PATHS.USERS}`, {
        firstName: interviewerObj?.firstName,
        lastName: interviewerObj?.lastName,
        userName: auth?.username,
        roles: ['Interviewer'],
        contacts: {
          PERSONAL_EMAIL: {
            value: interviewerObj?.email,
          },
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const getInterviewers = () => {
    const params = {
      filter: `contains(roles,'Interviewer')`,
      size: 100,
    };
    return axiosUserAPI
      .get(`${BACKEND_API_PATHS.USERS}`, {
        params,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const createInterview = (data: any) => {
    return axiosInterviewAPI
      .post(`${BACKEND_API_PATHS.INTERVIEWS}`, data)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const getEmailTemplate = (role: string) => {
    const params = {
      filter: `role eq '${role}'`,
    };
    return axiosInterviewAPI
      .get(`${BACKEND_API_PATHS.EMAIL_TEMPLATE}`, { params })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const parseResume = (file: any) => {
    return axiosInterviewAPI
      .post(`${BACKEND_API_PATHS.PARSE_RESUME}`, file)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  const uploadAttachments = (file: any) => {
    return axiosInterviewAPI
      .patch(`${BACKEND_API_PATHS.UPLOAD_ATTACHMENTS}`, file)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error.data && error.data.message) {
          return Promise.reject(error.data.message);
        }
        return Promise.reject(error.message ? error.message : 'Something went wrong');
      });
  };

  return {
    addRole,
    getRole,
    addRound,
    parseResume,
    getCandidate,
    addCandidate,
    addInterviewer,
    getInterviewers,
    createInterview,
    getEmailTemplate,
    getCandidateWithRounds,
    uploadAttachments,
  };
};

export default interviewService;
