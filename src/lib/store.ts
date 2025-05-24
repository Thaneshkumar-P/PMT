import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import userReducer from '@/src/lib/slice/UserSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer,
});

const ER = process.env.NEXT_PUBLIC_ER

if(!ER) 
  throw new Error('ER NOT FOUND')

const encryptor = encryptTransform({
  secretKey: ER,
  onError: (error) => {
    console.error('Encryption error:', error);
  },
});


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [encryptor], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
export { store }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
