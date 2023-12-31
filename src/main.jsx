import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import Provider from './provider/Provider.jsx'
import CountProvider from './provider/CountProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <Provider>
        <App />
      </Provider>
    </CountProvider>
  </React.StrictMode>,
)
