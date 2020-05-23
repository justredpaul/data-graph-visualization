import React from 'react';

import './ThemeSwitcher.scss';

export const ThemeSwitcher = props => (
    <button type="button" className={`theme-switcher theme-switcher_${props.theme}`} onClick={props.toggleTheme}>
      Toggle theme
    </button>
);
