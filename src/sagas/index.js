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

    }

}