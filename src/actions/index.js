import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const SMURF_ERROR_TEXT = 'SMURF_ERROR_TEXT';




export const getSmurf = () => dispatch =>{
    dispatch({type: FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
    .then((res)=>{
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch((err) =>{
        dispatch({ type: FETCH_SMURF_FAIL, payload: err})
    })
}

export const addSmurf = (smurf) => dispatch =>{
    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res) =>{
        // console.log('RES',res.data)
        dispatch({ type: ADD_SMURF_SUCCESS, payload: smurf});
    })
    .catch((err) =>{
        console.log('jhvjhvjhv',err)
        dispatch({ type: ADD_SMURF_FAIL, payload: err.message});
    })
}

export const errorText = (errMessage) =>{
    return({ type: SMURF_ERROR_TEXT, payload: errMessage})
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.