import React, { useState } from 'react';
import { Menu } from 'antd';

function MenuComponent() {
  const [tab, setTab] = useState('algebra');

  function handleMenuClick(event: any) {
    setTab(event.key);
  }

  return (
    <Menu onClick={handleMenuClick} selectedKeys={[tab]} mode='horizontal'>
      <Menu.Item key='basicalgebra'>
        Basic Math and Algebra
      </Menu.Item>
      <Menu.Item key='geometry'>
        Geometry
      </Menu.Item>
      <Menu.Item key='biochem'>
        Biology and Chemistry
      </Menu.Item>
    </Menu>
  );
}

export default MenuComponent;
