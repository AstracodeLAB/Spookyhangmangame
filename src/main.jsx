import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AudioProvider } from './components/AudioContext.jsx'

createRoot(document.getElementById('root')).render(
  <AudioProvider>
    <App />
  </AudioProvider>
)
