import React from 'react';

import MenuCard from '../MenuCard';

import classes from './MenuCardGrid.module.scss';

function MenuCardGrid() {
  return (
    <div className={classes.root}>
      <MenuCard title='1' to='test' desc='Card' />
      <MenuCard title='1' to='test' desc='Card' />
      <MenuCard title='1' to='test' desc='Card' />
      <MenuCard title='1' to='test' desc='Card' />
    </div>
  );
}

export default MenuCardGrid;
