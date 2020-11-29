import React from 'react';
import { Anchor } from 'antd';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const Nav = (props) => (
  <div style={{ position: 'absolute', top: 100 + 'px', right: 20 + 'px', width: '250px' }}>
    <Anchor>
      <div className="markNav-title">文章目录</div>
      <MarkNav
        className="article-menu"
        source={props && props.source}
        headingTopOffset={80}
      />
    </Anchor></div>)

export default Nav;