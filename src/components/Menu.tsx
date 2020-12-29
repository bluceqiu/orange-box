
import React from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const handleClick = (e: object): void => {
  console.log('click ', e);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Menu
    onClick={handleClick}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
      <Menu.ItemGroup key="g1" title="Item 1">
        <Menu.Item key="1"><Link to="/a">a</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/b">b</Link></Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
  </Menu>
)