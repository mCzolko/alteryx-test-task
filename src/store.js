import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import rootReducer from './reducer';

export default createStore(
  combineReducers({
    rootReducer,
    form: formReducer
  }),
  applyMiddleware(
    thunkMiddleware,
  )
)
