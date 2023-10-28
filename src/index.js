import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import App from "./components/App";
// import { createRoot } from "react-dom/client";
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
//       root.render(<App />);
