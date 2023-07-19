import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Toast from './components/Toast/ToastContainer';

window.BACKEND_URL ="https://watch-ecomm.onrender.com/"
// window.BACKEND_URL ="http://localhost:7000/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Toast />
    <App />
    
</BrowserRouter>

);

