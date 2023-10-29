import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import HomePage from './pages/homePage.jsx'
import Register from './pages/registerPage.jsx'
import Login from './pages/loginPage.jsx'
import ExercisePage  from './pages/exercisePage'
import ExerciseFormPage  from './pages/ExerciseFormPage'
import Navbar from './components/navbar.jsx'
import Footer  from './components/footer.jsx'
function App() {

  return (
    <AuthProvider>
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/exercises' element={<ExercisePage/>}/>
          <Route path='/add-exercises' element={<ExerciseFormPage/>}/>
          <Route path='/exercises/:id' element={<ExerciseFormPage/>}/>
        </Routes>
        <Footer/>   
     </BrowserRouter>
   
 
    </AuthProvider>
  )
}

export default App
