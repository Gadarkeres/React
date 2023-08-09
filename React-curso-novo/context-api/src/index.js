import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{ContadorContextProvider} from './context/ContadorContext'
import{CordotituloContextProvider} from './context/CordotituloContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* criando provider */}
    <ContadorContextProvider>
  <CordotituloContextProvider>
  <App/>
  </CordotituloContextProvider>
  
    </ContadorContextProvider>
  </React.StrictMode>
);


reportWebVitals();
