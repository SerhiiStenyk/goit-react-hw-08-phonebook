/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/reducers';
import authReducer from './auth/reducers';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })];
const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistConfig,authReducer),
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default { store, persistor };