import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage"
import AdminPage from "./pages/AdminPage/AdminPage"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthorizationPage/>} ></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        {/* <Route path="/admin/sopd" element={<SOPDPage/>}></Route> */}
        {/* <Route path="/admin/letter" element={<TemplateLetterPage/>}></Route> */}

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
