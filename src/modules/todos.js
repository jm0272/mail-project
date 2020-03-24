import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션타입
//export const INSERT = 'todos/INSERT';
export const INSERT_REQUEST = 'todos/INSERT_REQUES';
export const INSERT_SUCCESS = 'todos/INSERT_SUCCESS';
export const INSERT_FAILURE = 'todos/INSERT_FAILURE';
export const TOGGLE = 'todos/TOGGLE';
export const REMOVE = 'todos/REMOVE';


// 액션생성함수
//export const onInsert = createAction(INSERT);
//export const onInsert = createAction(INSERT_REQUEST, ({input}) => ({input}));
export const onInsert = createAction(INSERT_REQUEST);
export const onToggle = createAction(TOGGLE);
export const onRemove = createAction(REMOVE);


// API
export const insertInput = (input) => {
    return new Promise(
        (resolve, reject) => {
            console.log('promise 구문, ', input);
            if(input.text === '0'){
                reject('err 발생');
            }
            else{
                setTimeout(()=>{
                    console.log('1초 후 입력:', input);
                    resolve(input);
                },1000);
            }
        }
    );
}

// 초기값
const initialState = List([
    Map({
        id : 0, text : 'sample Item', isBold:false
    })
]);

// 리듀서
export default handleActions({
    // [INSERT] : (state, action) => {
    //     const { id, text, isBold } = action.payload;
    //     return state.push(Map({
    //         id : id,
    //         text : text,
    //         isBold : isBold
    //     }));
    // },
    [INSERT_SUCCESS] : (state, action) => {
        const { id, text, isBold } = action.payload;
        return state.push(Map({
            id : id,
            text : text,
            isBold : isBold
        }));
    },
    [INSERT_FAILURE] : (state, action) => {
        alert('실패');
        return state;
    },
    [TOGGLE] : (state, action) => {
        // const index = action.payload;
        // console.log('toggle payload : ', index);
        // return state.setIn([index, 'isBold'], !state.getIn([index, 'isBold']));
        // return state.updateIn([index, 'isBold'], isBold => !isBold);

        const id = action.payload;
        const index = state.findIndex(todo => todo.get('id') === id);
        console.log('payload ID : ', id);
        console.log('Toogle할 index : ', index);
        return state.setIn([index, 'isBold'], !state.getIn([index, 'isBold']));
    },
    [REMOVE] : (state, action) => {
        const id = action.payload;
        const index = state.findIndex(todo => todo.get('id') === id);
        console.log('payload ID : ', id);
        console.log('삭제할 index : ', index);
        //return state.delete(index);
        return state.delete(index);
    } 
}, initialState);
