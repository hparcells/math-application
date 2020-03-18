import React, { useState } from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory
} from 'react-router-dom';
import { Row, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Menu from './Menu';
import ToolPage from './ToolPage';
import MenuCard from './MenuCard';
import NotFound from './NotFound';
import NoContent from './NoContent';

import { Tab } from '../types';

import { data } from '../data';

function App() {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  const [tab, setTab] = useState<Tab>(query.get('tab') as Tab || 'basicalgebra');
  const [filter, setFilter] = useState<string>('');

  function switchTab(newTab: Tab) {
    setTab(newTab);
    history.push(`/?tab=${newTab}`);
  }
  function handleFilterChange(event: any) {
    setFilter(event.target.value);
  }

  return (
    <div>
      <Switch>
        {
          data.map((tool) => {
            return (
              <Route path={`/${tool.id}`} key={tool.id}>
                <ToolPage
                  title={tool.name}
                  description={tool.description}
                  component={tool.component}
                  tab={tool.tab}
                />
              </Route>
            );
          })
        }

        <Route exact path='/'>
          <Menu tab={tab} switchTab={switchTab} />

          <div style={{ maxWidth: '1500px', margin: 'auto'}}>
            <Input
              placeholder='Search...'
              prefix={<SearchOutlined />}
              style={{ margin: '0px 1em 1em 1em', width: 'calc(100% - 2em)' }}
              allowClear={true}
              onChange={handleFilterChange}
              value={filter}
            />

            <Row justify='center' gutter={[16, 16]} style={{ margin: '0px' }}>
              {/* TODO: Make this better. */}
              {
                data.filter((tool) => {
                  if(filter) {
                    return (
                      tool.name.toLowerCase().includes(filter.toLowerCase())
                      || tool.description.toLowerCase().includes(filter.toLowerCase())
                    );
                  }
                  return tool.tab === tab;
                }).length > 0
                  ? data.filter((tool) => {
                    if(filter) {
                      return (
                        tool.name.toLowerCase().includes(filter.toLowerCase())
                        || tool.description.toLowerCase().includes(filter.toLowerCase())
                      );
                    }
                    return tool.tab === tab;
                  }).map((tool) => {
                    return (
                      <MenuCard title={tool.name} to={tool.id} desc={tool.description} key={tool.id} />
                    );
                  })
                  : <NoContent />
              }
            </Row>
          </div>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
