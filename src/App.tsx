import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage"
import AdminPage from "./pages/AdminPage/AdminPage"
import SOPDPage from "./pages/SOPDPage/SOPDPage"
import LetterTemplatePage from "./pages/LetterTemplatePage/LetterTemplatePage"
import TestPage from "./pages/TestPage/TestPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestPage/>} ></Route>
        <Route path="*" element={<TestPage/>} />

        <Route path="/auth" element={<AuthorizationPage/>} ></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        <Route path="/admin/sopd" element={<SOPDPage/>}></Route>
        <Route path="/admin/letter" element={<LetterTemplatePage/>}></Route>

        <Route path="/error" element={<ErrorPage/>}></Route>


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
