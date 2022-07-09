import { Outlet } from 'react-router-dom'
import Navbar from '../components/bars/Navbar'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Navbar />
      <main><Outlet /></main>
    </div>
  )
}

export default MainLayout
