import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import InterestReducer from './reducers/InterestReducer';
import LifeStyleReducer from './reducers/LifeStyleReducer';
// import AuthReducer from './reducers/AuthReducer';
import isDark, {IsEvent, isMatch, yourProfile} from './slices/';
import UserData from './slices/';
import googleData from './slices/';
import Albums from './slices/';
import AuthReducer from './slices/user';

export const Store = configureStore({
  reducer: {
    isDark: isDark,
    isMatch: isMatch,
    yourProfile: yourProfile,
    IsEvent: IsEvent,
    UserData: UserData,
    googleData: googleData,
    Albums: Albums,
    AuthReducer: AuthReducer,
    lifeStyle: LifeStyleReducer,
    interest: InterestReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
