import React from 'react';
import ReactMarkdown from 'react-markdown'
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu';
import { PageHeader } from 'antd';

const gfm = require('remark-gfm')


ReactDOM.render(
  <React.StrictMode>
    {/* <ReactMarkdown plugins={[gfm]} children={art} /> */}
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
    <div className='page'>
      <Menu />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
