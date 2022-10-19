import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskContentProvider } from './context/TaskContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContentProvider>
    <App />
    </TaskContentProvider>
  </React.StrictMode>
)
