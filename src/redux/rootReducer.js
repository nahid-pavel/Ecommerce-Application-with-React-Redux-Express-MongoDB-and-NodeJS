import { combineReducers } from 'redux';
import { localStorageSlice } from '../localStorageRedux/Slice';
import { authSlice } from '../auth/redux/Slice';
import { productSlice } from '../component/product/_redux/Slice';



export const rootReducer = combineReducers({
    localStorage: localStorageSlice.reducer,
    auth: authSlice.reducer,
    product:productSlice.reducer,
   

})