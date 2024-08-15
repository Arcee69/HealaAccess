import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { client } from './apollo/Client.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />   
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)
