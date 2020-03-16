import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Menu from './Menu';
import MenuCardGrid from './MenuCardGrid/MenuCardGrid';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <Menu />
          <MenuCardGrid />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
