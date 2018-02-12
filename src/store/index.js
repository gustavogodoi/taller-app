import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
//import rootReducer from "./reducers";

var firebaseConfig = {
  apiKey: 'AIzaSyDuYqCihPD2JpcjSScpJ_ABjJgVCPiFusk',
  authDomain: 'taller-app-5e656.firebaseapp.com',
  databaseURL: 'https://taller-app-5e656.firebaseio.com',
  projectId: 'taller-app-5e656',
  storageBucket: '',
  messagingSenderId: '459339265730',
};

const rrfConfig = {
  userProfile: 'users',
};

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
