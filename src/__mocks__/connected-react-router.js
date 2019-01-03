import React from 'react';
const rrd = require('connected-react-router');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>;
module.exports = rrd;