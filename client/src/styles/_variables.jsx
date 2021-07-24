// ------- colors ---------
// default colors
export const defaults = {
  light_grey: '#eee',

  primary_color: '#1e90ff',

  op_primary_color: '#fff',
};

// light theme
export const light_theme = {
  // setting button
  setting_color: '#fff',

  setting_bg: '#000',

  setting_border: '#ccc',

  // for login & signup
  body_bg: '#f1f1f6',

  op_body_bg: '#111',

  // for portfolio
  portfolio_body_bg: '#fff',

  portfolio_op_body_bg: '#111',

  portfolio_op_body_bg_darker: '#ccc',
};

// Dark theme
export const dark_theme = {
  // setting button
  setting_color: '#222',

  setting_bg: '#fff',

  setting_border: '#333',

  // for login & signup
  body_bg: '#161616',

  op_body_bg: '#fff',

  // for portfolio
  portfolio_body_bg: '#000',

  portfolio_op_body_bg: '#fff',

  portfolio_op_body_bg_darker: '#333',
};

// ------- breakpoints ------
export const display = {
  desktop: '1024px',

  laptop: '992px',

  tablet: '768px',

  mobile: '640px',
};

export const media = {
  md: `(max-width: ${display.laptop})`,

  sm: `(max-width: ${display.mobile})`,
};
