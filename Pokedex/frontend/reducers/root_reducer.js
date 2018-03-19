import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';

//Here we'll call combineReducers such that our entitiesReducer is respoonsible for the entities slice of the app

const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;
