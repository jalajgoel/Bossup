import request from './request';

  //API service for reject profile where url: is api url.
  const rejectProfile = (message, mail) => {
    return request({
        url: `/api/v1/estimates/share/`,
        method: 'POST',
        data: {message, mail}
    });
  };

  const profileServices = {
    rejectProfile
  }

  export default profileServices;