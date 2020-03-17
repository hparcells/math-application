import React from 'react';
import { Card, Col } from 'antd';
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
    <Col>
      <Card title={title} extra={<Link to={`/${to}`}>Go</Link>} style={{ width: 300 }}>
        <p>{desc}</p>
      </Card>
    </Col>
  );
}

export default MenuCard;
