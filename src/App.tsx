import { Route, Routes } from 'react-router'
import { Masthead } from './components/Masthead'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export function App() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <Masthead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        <Route path="*" element={<PlaceholderPage title="Not Found" />} />
      </Routes>
    </div>
  )
}
