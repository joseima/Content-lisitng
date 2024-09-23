import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { SearchProvider } from './context/search'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SearchProvider>
    <App />
  </SearchProvider>
)
