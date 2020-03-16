import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

function MenuCard(
  {
    title,
    to,
    desc
  }:
  {
    title: string,
    to: string,
    desc: string
  }
) {
  return (
    <Card title={title} extra={<Link to={`/${to}`}>Go</Link>} style={{ width: 300 }}>
      <p>{desc}</p>
    </Card>
  );
}

export default MenuCard;
