import React, { useReducer, useEffect } from 'react';
import { GRAPH_TYPES } from '../../constants/GRAPH_TYPES';
import { ThemeSwitcher } from '../ThemeSwitcher';

function reducer(state, action) {
  switch (action.type) {
    case 'setSource':
      return {
        ...state,
        source: action.payload,
      };
    case 'setGraph':
      return {
        ...state,
        graph: action.payload,
      };
    default:
      return state;
  }
}

export const ControlPanel = props => {
  const [state, dispatch] = useReducer(reducer, props.options);

  const changeSource = evt => dispatch({
    type: 'setSource',
    payload: evt.target.value,
  });
  const changeGraph = evt => dispatch({
    type: 'setGraph',
    payload: evt.target.value,
  });

  useEffect(() => {
    props.setDataOptions(state);
  }, [state]);

  return (
    <form className="control-panel">
      <div className="control-panel__heading">
        <h2 className="control-panel__title">
          Data sources
          <br />
          and graph type
        </h2>
        <ThemeSwitcher theme={props.theme} toggleTheme={props.toggleTheme} />
      </div>
      <div className="control-panel__layer">
        <label>
          <input type="radio" name="source" value="1" checked={state.source === '1'} onChange={changeSource} />
          First data source
        </label>
        <label>
          <input type="radio" name="source" value="2" checked={state.source === '2'} onChange={changeSource} />
          Second data source
        </label>
      </div>

      <div className="control-panel__layer">
        <label>
          <input type="radio" name="graph" value={GRAPH_TYPES.LINKS} checked={state.graph === GRAPH_TYPES.LINKS} onChange={changeGraph} />
          Links graph
        </label>
        <label>
          <input type="radio" name="graph" value={GRAPH_TYPES.THREE} checked={state.graph === GRAPH_TYPES.THREE} onChange={changeGraph} />
          Three graph
        </label>
        <label>
          <input type="radio" name="graph" value={GRAPH_TYPES.TABLE} checked={state.graph === GRAPH_TYPES.TABLE} onChange={changeGraph} />
          Table
        </label>
      </div>
    </form>
  );
};
