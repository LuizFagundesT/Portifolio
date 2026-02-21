import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./Layout/MainLayout"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<MainLayout/>}>
            
        </Route>
      </Routes>
    </Router>
  )
}

export default App
