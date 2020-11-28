
import ReactMarkdown from 'react-markdown';
import { Switch, Route } from "react-router-dom";
import './App.css';
import md from './docs/domReady与onload.md';
import md1 from './docs/abc.md';

const gfm = require('remark-gfm')

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/阿里某次面试题'>
          <ReactMarkdown children={md1} />
        </Route>
        <Route exact path="/domReady与onload">
          <ReactMarkdown children={md} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
