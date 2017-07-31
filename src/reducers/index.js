import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import flowReducer from './flowReducer';

const rootReducer = combineReducers({
    appData : dataReducer,
    flow : flowReducer
});

export default rootReducer;
