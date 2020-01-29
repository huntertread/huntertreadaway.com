// jshint esversion:6
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import NavigationReducer from "./navigation/navigation.reducer.js";
import ModalReducer from "./modal/modal.reducer.js";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  navigationView: NavigationReducer,
  modalImg: ModalReducer
});

export default persistReducer(persistConfig, rootReducer);