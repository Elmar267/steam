import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './style.css'
import App from './App.jsx'
import DataContext from './components/context/DataContext.jsx'
import BasketContext from './components/context/BasketContext.jsx'
import WishContext from './components/context/WishContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataContext>
    <BasketContext>
      <WishContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WishContext>
    </BasketContext>
  </DataContext>
)
