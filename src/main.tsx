import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthStore from './store/AuthStore.ts';

interface IStore {
  authStore: AuthStore;
  // какие то еще сторы
};

const authStore = new AuthStore();

export const Context = createContext<IStore>({
  authStore,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{ authStore }}>
      <App />
    </Context.Provider>
  </StrictMode>,
)
