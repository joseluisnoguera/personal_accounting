import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Mainboard from '../pages/Mainboard/Mainboard'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Mainboard />} />
      </Route>
    </Routes>
  )
}

export default PublicRoutes
