import { useState } from 'react'
import Home from './components/Home'
import Courses from '../Courses/Courses'
import {Routes,Route,Navigate} from "react-router-dom"
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="course"   element={authUser ? <Courses /> : <Navigate to="/signup" />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="signup" element={<Signup/>} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App
