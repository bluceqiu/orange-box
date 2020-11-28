import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu';
import { PageHeader } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import 'antd/dist/antd.min.css';

ReactDOM.render(
  <React.StrictMode>
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      backIcon={false}
      title="筆記"
    />
    <div className='page'>
      <Router>
        <Menu />
        <App />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
