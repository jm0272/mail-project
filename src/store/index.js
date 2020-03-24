import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import modules from '../modules';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    modules,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;