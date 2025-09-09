import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LandingPage from './components/LandingPage'
import './App.css'
// import AdminDashboard from './components/AdminDashboard'
// import DropSheet from './components/DropSheet'

import Layout from './components/Layout'

import LandingPageLayout from './components/LandingPageLayout'
import DropSheetLayout from './components/DropSheetLayout'
import AdminLayout from './components/AdminLayout'




function App() {

  return (
    <>

      {/* <div> */}
      {/* <LandingPage /> */}
      {/* <DropSheet /> */}

      {/* </div> */}
      {/* <AdminDashboard /> */}

      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<LandingPageLayout />} />
            <Route path="/drop-sheet" element={<DropSheetLayout />} />
            <Route path="/admin-dashboard" element={<AdminLayout />} />
          </Routes>
        </Layout>
      </Router>



    </>
  )
}

export default App
