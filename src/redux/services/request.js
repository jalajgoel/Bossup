import axios from 'axios'
// import Config from 'constants/Config'

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
        // "Authorization": localStorage.getItem('token')
    },
});

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
    const onSuccess = (response) => {
        return response.data;
    }

    const onError = (error) => {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:', error.response.status);
            // console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);



        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.error('Error Message:', error.request);
        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;