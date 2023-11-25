import React from 'react'
import { render } from 'react-dom'
import { Router, Routes } from 'react-router'
import App from './App' 
import ReactDOM from 'react-dom/client'; 
import './index.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
  render(
    <Router history={History} routes={Routes} />,
    document.getElementById('app')
  )

 const test = () => {
  const history = createMemoryHistory(location)
    return (
      <div>main</div>
    )
  }
  
  export default { history };

