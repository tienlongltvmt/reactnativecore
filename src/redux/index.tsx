export * from './App.Reducer'; // Make sure that `AllReducers` is exported from './App.Reducer'
export * from './App.Saga'; // Make sure that `AllSagas` is exported from './App.Saga'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Middleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {AllSagas} from './App.Saga';
import {AllReducers} from './App.Reducer';
import {configureStore} from '@reduxjs/toolkit'; // Removed Tuple, since it's unused

// persistConfig
const persistConfig = {
  key: 'reactnativecore', // The key to store in AsyncStorage
  whitelist: [''], // Only 'AccountReducer' will be persisted
  storage: AsyncStorage, // Uses AsyncStorage to persist data
};

const middleware: Middleware[] = [];
const reducer = persistReducer(persistConfig, AllReducers); // Apply persistence to your reducers

const sagaMiddleware = createSagaMiddleware(); // Create the Saga middleware
middleware.push(sagaMiddleware); // Add the Saga middleware to the middleware array

// Configure the Redux store with the reducer and middleware
const store = configureStore({
  reducer: reducer, // The reducer with persistence
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // You might want to disable serializability checks if you encounter warnings with Redux Persist
    }).concat(sagaMiddleware), // Combine default middleware with the Saga middleware
});

sagaMiddleware.run(AllSagas); // Start running your Sagas

// Create the persistor
const persistor = persistStore(store);

export {persistor, store}; // Export both store and persistor
