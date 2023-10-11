import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './constants/routes.constants'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import MainLayout from './layouts/MainLayout'
function App() {
  const isAuthenticated = true
  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          <Route path={routes.login} element={<Login />} />
        ) : (
          <Route
            path={routes.dashboard}
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
        )}

        {!isAuthenticated ? (
          <Route path='*' element={<Navigate to={routes.login} />} />
        ) : (
          <Route path='*' element={<Navigate to={routes.dashboard} />} />
        )}
      </Routes>
    </>
  )
}

export default App
