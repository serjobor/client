import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthStore from './store/AuthStore.ts';
import AdminStore from './store/AdminStore.ts';

interface IStore {
  authStore: AuthStore;
  adminStore: AdminStore;
  // какие то еще сторы
};

const authStore = new AuthStore();
const adminStore = new AdminStore();


export const Context = createContext<IStore>({
  authStore,
  adminStore,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{ authStore, adminStore }}>
      <App />
    </Context.Provider>
  </StrictMode>,
)
