import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catalog from './pages/Catalog.jsx';

// export default function App (){
//   return(
//     <BrowserRouter>
//     <Routes>
//     <Route path="Catalog" element={<Catalog />} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
