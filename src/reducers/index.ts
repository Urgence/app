import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import {confirmWithPassword} from "./confirm.withpassword.reducer";

const rootReducer = combineReducers({
  confirmWithPassword,
  authentication,
  users,
  alert
});

export default rootReducer;
