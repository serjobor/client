import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthStore from './store/AuthStore.ts';
import AdminStore from './store/AdminStore.ts';
import CandidateStore from './store/CandidateStore.ts';

interface IStore {
  authStore: AuthStore;
  adminStore: AdminStore;
  candidateStore: CandidateStore;
  // какие то еще сторы
};

const authStore = new AuthStore();
const adminStore = new AdminStore();
const candidateStore = new CandidateStore();

export const Context = createContext<IStore>({
  authStore,
  adminStore,
  candidateStore,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{ authStore, adminStore, candidateStore }}>
      <App />
    </Context.Provider>
  </StrictMode>,
)
