
import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const handleClick = (e: object): void => {
  console.log('click ', e);
};

export default (lists: object) => (
  <Menu
    onClick={handleClick}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
      <Menu.ItemGroup key="g1" title="Item 1">
        <Menu.Item key="1"><Link to="/domReady与onload">domReady与onload</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/阿里某次面试题">阿里某次面试题</Link></Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
  </Menu>
)