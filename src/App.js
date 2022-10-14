import './App.scss'
import Layout from './components/Layouts'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  )
}

export default App
