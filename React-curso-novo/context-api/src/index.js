import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{ContadorContextProvider} from './context/ContadorContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* criando provider */}
    <ContadorContextProvider>
    <App />
    </ContadorContextProvider>
  </React.StrictMode>
);


reportWebVitals();
