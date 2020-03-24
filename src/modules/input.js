import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션타입
export const SET_INPUT = 'input/SET_INPUT';
// export const SET_INPUT_REQUEST = 'input/SET_INPUT_REQUEST';
// export const SET_INPUT_SUCCESS = 'input/SET_INPUT_SUCCESS';
// export const SET_INPUT_FAILURE = 'input/SET_INPUT_FAILURE';


// export const getInput = (input) => {
//     return new Promise(
//         (resolve) => {
//             setTimeout(()=>{
//                 console.log('1초 후 입력:', input);
//                 resolve(input);
//             },1000);
//         },
//         (reject) => {

//         }
//     );
// }

// 액션생성함수
export const setInput = createAction(SET_INPUT);
//export const setInput = createAction(SET_INPUT_REQUEST, getInput);
//export const setInput = createAction(SET_INPUT_REQUEST, ({input}) => ({input}));
// export const setInput = (input) => ({
//     type : SET_INPUT_REQUEST,
//     input
// });

const initialState = Map({
    value : ''
});

// 리듀서
export default handleActions({
    [SET_INPUT] : (state, action) => {
        return state.set('value', action.payload);
    }
}, initialState);


// export default handleActions({
//     [SET_INPUT_SUCCESS] : (state, action) => {
//         return state.set('value', action.payload);
//     }
// }, initialState);