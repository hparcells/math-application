import React, { useState } from 'react';
import { Menu, Affix } from 'antd';

import { Tab } from '../types';

function MenuComponent(
  {
    tab,
    switchTab
  }:
  {
    tab: Tab,
    switchTab: (tab: Tab) => void
  }
) {
  function handleMenuClick(event: any) {
    switchTab(event.key);
  }

  return (
    <Affix offsetTop={0}>
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[tab]}
        mode='horizontal'
        style={{ marginBottom: '1em' }}
      >
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
    </Affix>
  );
}

export default MenuComponent;
