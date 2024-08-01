import './App.css'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import Add from './pages/Add/Add'

function App() {
  

  return (
    <div>
      <NavBar/>
      <hr />
      <div className="app-content">
         <SideBar/>
         <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Order/>}/>
         </Routes>
      </div>
      
    </div>
  )
}

export default App
