import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
import HistoryRouter from './components/history-router/history-router.tsx'
import browserHistory from './broser-history.ts'
import ErrorMessage from './components/error-message/error-message.tsx'
import { checkAuthAction } from './store/api-actions.ts'

store.dispatch(checkAuthAction());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </StrictMode>,
)
