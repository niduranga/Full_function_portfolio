import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './utilities/routes/AppRoutes.tsx'
import { Provider } from 'react-redux'
import { store } from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <AppRoutes />
      </Provider>
  </StrictMode>,
)
