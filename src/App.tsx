
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Switch, Route } from "react-router-dom";
import CodeBlock from './components/CodeBlock.jsx';
import './App.css';
import Nav from './components/Nav.jsx';

import routes from './docs/index';

// const gfm = require('remark-gfm')

const RMD = (source: string) => (
  <ReactMarkdown renderers={{
    code: CodeBlock
  }} skipHtml={true} children={source} />
);

const navFn = (key: string) => (
  <Nav source={key} />
)

function App() {
  return (
    <div className="App">
      <div className='content-wrapper'>
        <Switch>
          {
            Object.keys(routes).map((key, index) => {
              console.log(key);
              return (
                <Route exact path={'/' + key} key={key}>
                  {RMD(routes[key as keyof typeof routes])}
                  {navFn(key)}
                </Route>
              )
            })
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
