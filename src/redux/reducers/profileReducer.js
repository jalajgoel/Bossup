import * as types from '../types';

const initialState = {
    success:false,
    error:false,
    loading: false,
    resp: null
}
export const profileReject = (state = initialState, {type,payload}) => {
	switch(type){
        case types.REJECT_PROFILE_SUCCESS :
            return {
                ...initialState,
                success:true,
                resp:payload
            }
        case types.REJECT_PROFILE_ERROR :
            return {
                ...state,
                error:true,
                resp:payload
            }
        case types.REJECT_PROFILE_LOADING :
            return {
                ...state,
                loading:true,
            }
        default :
    	    return state;
    }
}