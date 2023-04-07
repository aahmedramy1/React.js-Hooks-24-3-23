import { combineReducers } from 'redux';
import { countReducer } from './count';
import { authenticationReducer} from "./authentication";

export const rootReducer = combineReducers({
    count: countReducer,
    authentication: authenticationReducer
}
);