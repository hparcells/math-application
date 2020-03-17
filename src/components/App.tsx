import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Row } from 'antd';

import Menu from './Menu';
import ToolPage from './ToolPage';
import MenuCard from './MenuCard';
import NotFound from './NotFound';

import { Tab } from '../types';

import { data } from '../data';

function App() {
  const [tab, setTab] = useState<Tab>('basicalgebra');

  function switchTab(newTab: Tab) {
    setTab(newTab);
  }

  return (
    <div>
      <Switch>
        {
          data.map((tool) => {
            return (
              <Route path={`/${tool.id}`} key={tool.id}>
                <ToolPage title={tool.name} description={tool.description} component={tool.component}  />
              </Route>
            );
          })
        }

        <Route exact path='/'>
          <Menu tab={tab} switchTab={switchTab} />

          <Row justify='center' gutter={[16, 16]} style={{ margin: '0px' }}>
            {
              data.filter((tool) => {
                return tool.tab === tab;
              }).map((tool) => {
                return (
                  <MenuCard title={tool.name} to={tool.id} desc={tool.description} key={tool.id} />
                );
              })
            }
          </Row>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
