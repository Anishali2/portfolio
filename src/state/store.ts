// import { createStore } from 'redux';
// import { theme } from '@/state/reducers/theme';

// export const store: any = createStore(theme);
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { theme } from '@/state/reducers/theme';
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, theme)

export const store: any = createStore(persistedReducer)

export const persistor = persistStore(store)
