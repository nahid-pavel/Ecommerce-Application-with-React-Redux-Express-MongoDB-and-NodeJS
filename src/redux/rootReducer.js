import { combineReducers } from 'redux';
import { localStorageSlice } from '../localStorageRedux/Slice';
import { authSlice } from '../auth/redux/Slice';

export const rootReducer = combineReducers({
    localStorage: localStorageSlice.reducer,
    auth: authSlice.reducer

})