import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import root from 'react-shadow';

ReactDOM.render(
  <React.StrictMode>
    <root.div> {/* this breaks styles */}
      <GlobalStyles />
      <App />
    </root.div>
  </React.StrictMode>,
  document.getElementById('root'),
)
