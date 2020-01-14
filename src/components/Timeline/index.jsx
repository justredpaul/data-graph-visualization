import React from 'react';

export const Timeline = () => (
    <div className="timeline">
      <h2>Timeline</h2>
      <input type="date" value="2019-01-01" min="2019-01-01" max="2019-12-31" />
      <input type="date" value="2019-12-31" min="2019-01-01" max="2019-12-31" />
    </div>
);
