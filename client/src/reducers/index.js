//root reducer to bring all reducers together
import { combineReducers} from 'redux';
//add reducers here
import itemReducer from './itemReducer';

//can add more reducers
export default combineReducers({
	item: itemReducer

});