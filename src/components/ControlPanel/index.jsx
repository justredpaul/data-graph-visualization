import React from 'react';

export const ControlPanel = () => (
  <div className="control-panel">
    <form className="control-panel__form">
      <h2>Data sources and graph type</h2>
      <div className="control-panel__layer">
        <label>
          <input type="radio" name="group" value="1" checked />
          Group 1
        </label>
        <label>
          <input type="radio" name="group" value="2" />
          Group 2
        </label>
      </div>
      <div className="control-panel__layer">
        <label>
          <input type="radio" name="subgroup" value="1" checked />
          Subgroup 1
        </label>
        <label>
          <input type="radio" name="subgroup" value="2" />
          Subgroup 2
        </label>
        <label>
          <input type="radio" name="subgroup" value="3" />
          Subgroup 3
        </label>
      </div>

      <div className="control-panel__layer">
        <label>
          <input type="radio" name="graph" value="1" checked />
          Graph Type 1
        </label>
        <label>
          <input type="radio" name="graph" value="2" />
          Graph Type 2
        </label>
        <label>
          <input type="radio" name="graph" value="3" />
          Graph Type 3
        </label>
      </div>
    </form>
  </div>
);
