import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './constants/routes.constants'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import MainLayout from './layouts/MainLayout'
import Inventory from './views/Inventory'
import ListOfMedicines from './views/Inventory/views/ListOfMedicines'
import EditMedicines from './views/Inventory/views/EditMedicines'
function App() {
  const isAuthenticated = true
  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          <Route path={routes.login} element={<Login />} />
        ) : (
          <>
            <Route
              path={routes.dashboard}
              element={
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              }
            />
            <Route
              path={routes.inventory}
              element={
                <MainLayout>
                  <Inventory />
                </MainLayout>
              }
            />
            <Route
              path={routes.listOfMedicines}
              element={
                <MainLayout>
                  <ListOfMedicines />
                </MainLayout>
              }
            />
            <Route
              path={routes.editMedicines}
              element={
                <MainLayout>
                  <EditMedicines />
                </MainLayout>
              }
            />
            <Route path={routes.medicineGroups} element={<MainLayout>lisst</MainLayout>} />
          </>
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
