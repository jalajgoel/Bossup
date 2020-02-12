import profileServices from '../services/profileServices';
import * as types from '../types';


//Api wrapper as action for handling api logic.
export const rejectProfile = (message, mail) => {
    return async dispatch => {
        dispatch({type: types.REJECT_PROFILE_LOADING})
        try {
            //Hiting api service.
            let response = await profileServices.rejectProfile(message, mail)
            if (response.statusCode === 200) {
                return dispatch({type: types.REJECT_PROFILE_SUCCESS, payload: response.data})
            }else{
                return dispatch({type: types.REJECT_PROFILE_ERROR, payload: response.data})
            }
        } catch (error) {
            console.error("fetch customer by Id error", error)
            return dispatch({type: types.REJECT_PROFILE_ERROR, payload: error})
        }
    }
}