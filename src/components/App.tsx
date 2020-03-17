import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Menu from './Menu';
import BasicAlgebraCards from './card-grids/BasicAlgebraCards';

import { Tab } from '../types';

function App() {
  const [tab, setTab] = useState<Tab>('basicalgebra');

  function switchTab(newTab: Tab) {
    setTab(newTab);
  }

  return (
    <div>
      <Switch>
        <Route path='/'>
          <Menu tab={tab} switchTab={switchTab} />

          { tab === 'basicalgebra' ? <BasicAlgebraCards /> : null }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
