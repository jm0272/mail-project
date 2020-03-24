import {takeLatest, put, call} from 'redux-saga/effects'
import * as todosActions from '../modules/todos';

export default function* rootSaga(){
    yield takeLatest(todosActions.INSERT_REQUEST, insertInput$);
}

function* insertInput$(action){
    const { payload } = action;
    console.log('제너레이터 insertInput$ : ', payload);
    
    try{
        yield call(todosActions.insertInput, payload);
        yield put({ type: todosActions.INSERT_SUCCESS, payload: payload });
    } catch(e){
        console.log('exception 발생');
        yield put({ type: todosActions.INSERT_FAILURE, payload: '입력에 실패했습니다.' });
    }

}