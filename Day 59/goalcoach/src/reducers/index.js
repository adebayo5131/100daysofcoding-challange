import {combineReducers} from 'redux';
import goals from './reducer_goal'
import user from './reducer_user'

export default combineReducers({
  user,
  goals
})