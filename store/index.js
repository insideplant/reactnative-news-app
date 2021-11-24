import { createStore, combineReducers } from "redux";
import userReducer from './reducers/user'
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import { AsyncStorage } from "@react-native-community/async-storage";
import Storage from 'react-native-storage';


const rootReducer = combineReducers({
  user: userReducer,
});

const storage = new Storage({
  storageBackend: AsyncStorage
});
 

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;