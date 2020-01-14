import React, { useState } from 'react';

import { ControlPanel } from '../components/ControlPanel';
import { Timeline } from '../components/Timeline';
import { LinksGraph } from '../components/LinksGraph';
import { ThreeGraph } from '../components/ThreeGraph';
import { Table } from '../components/Table';
import { GRAPH_TYPES } from '../constants/GRAPH_TYPES';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const [dataOptions, setDataOptions] = useState({
    source: '1',
    graph: GRAPH_TYPES.LINKS,
  });

  return (
    <main className={`app app_${theme}`}>
      <ControlPanel theme={theme} toggleTheme={toggleTheme} options={dataOptions} setDataOptions={setDataOptions} />
      <div className="app__graph">
        {dataOptions.graph === GRAPH_TYPES.LINKS && <LinksGraph />}

        {dataOptions.graph === GRAPH_TYPES.THREE && <ThreeGraph />}

        {dataOptions.graph === GRAPH_TYPES.TABLE && <Table />}
      </div>
      <Timeline />
    </main>
  );
};
