import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'
import MainLayout from './layouts/MainLayout.tsx'
import App from './App.tsx'
import ProjectPage from './pages/ProjectPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
