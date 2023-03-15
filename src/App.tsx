import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Components/Layout/Layout";
import MainPage from "./Containers/MainPage/MainPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'}element={<Layout/>}>
                      <Route index={true} element={<MainPage />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
