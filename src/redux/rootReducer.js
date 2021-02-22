import { combineReducers } from 'redux';
import { localStorageSlice } from '../localStorageRedux/Slice';

export const rootReducer = combineReducers({
    localStorage: localStorageSlice.reducer

})