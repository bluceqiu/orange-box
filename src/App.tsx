
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Switch, Route } from "react-router-dom";
import CodeBlock from './components/CodeBlock.jsx';
import './App.css';
import Nav from './components/Nav.jsx';

import 阿里某次面试题 from './docs/阿里某次面试题.md';
import domReady与onload from './docs/domReady与onload.md';


const gfm = require('remark-gfm')

const RMD = (source: string) => (
  <ReactMarkdown renderers={{
    code: CodeBlock
  }} skipHtml={true} children={source} />
);

const navFn = (source: string) => (
  <Nav source={source} />
  // 不能缩写为source
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/domReady与onload">
          {RMD(domReady与onload)}
          {navFn(domReady与onload)}
        </Route>
        <Route exact path='/阿里某次面试题'>
          {RMD(阿里某次面试题)}
          {navFn(阿里某次面试题)}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
