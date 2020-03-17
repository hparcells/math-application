import React from 'react';
import { Row } from 'antd';

import MenuCard from '../MenuCard';

function BasicAlgebraCards() {
  return (
    <div style={{ maxWidth: '1500px', margin: 'auto' }}>
      <Row justify='center' gutter={[16, 16]} style={{ margin: '0px' }}>
        <MenuCard title='1' to='test' desc='Card' />
        <MenuCard title='1' to='test' desc='Card' />
        <MenuCard title='1' to='test' desc='Card' />
        <MenuCard title='1' to='test' desc='Card' />
        <MenuCard title='1' to='test' desc='Card' />
      </Row>
    </div>
  );
}

export default BasicAlgebraCards;
