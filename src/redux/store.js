import { configureStore } from "@reduxjs/toolkit";

//reducerları import et
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

//configurstore createstore farkları
//1- varsayılan olarak thunk kurulu gelir
// 2- verilen reducer'ları otomatik olark birleştirir
// 3- devtools eklentisini destekler
export default configureStore({
  reducer: { counterReducer, crudReducer },
});
