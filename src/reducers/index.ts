import { combineReducers } from 'redux';
import { hospital } from './hospital.reducer';

const rootReducer = combineReducers({
    hospital
});

export default rootReducer;
