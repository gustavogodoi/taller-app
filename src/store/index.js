import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDuYqCihPD2JpcjSScpJ_ABjJgVCPiFusk',
  authDomain: 'taller-app-5e656.firebaseapp.com',
  databaseURL: 'https://taller-app-5e656.firebaseio.com',
  projectId: 'taller-app-5e656',
  storageBucket: '',
  messagingSenderId: '459339265730',
};

const rrfConfig = { userProfile: 'users' };

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase, rrfConfig))
);

export default store;
