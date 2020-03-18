import React from 'react';
import { PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

import { Tab } from '../types';

function ToolPage(
  {
    title,
    description,
    component: ToolContent,
    tab
  }:
  {
    title: string,
    description: string,
    component: () => JSX.Element,
    tab: Tab
  }
) {
  const history = useHistory();

  function handleBack() {
    history.push(`/?tab=${tab}`);
  }

  return (
    <div>
      <PageHeader
        onBack={handleBack}
        title={title}
        subTitle={description}
      />

      <div style={{ maxWidth: '1500px', margin: 'auto'}}>
        <ToolContent />
      </div>
    </div>
  );
}

export default ToolPage;
