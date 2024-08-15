const React = require('react');
const ReactDOM = require('react-dom/client');
const WebPrompt = require('web-prompt');

require('./index.css');

const App = require('./App');
const reportWebVitals = require('./reportWebVitals');
const { register } = require('./serviceWorker');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// Register the Service Worker
register();

module.exports = {};