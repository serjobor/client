import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthorizationPage from "./pages/AuthorizationPage"
import RegistrationPage from "./pages/RegistrationPage"
import RequestCandidateSOPDPage from "./pages/RequestCandidateSOPDPage"
import ResponseCandidatePage from "./pages/ResponseCandidatePage"
import SentEmailsPage from "./pages/SentEmailsPage"
import SendNewEmailsPage from "./pages/SendNewEmailsPage"
import AdminPage from "./pages/AdminPage"
import SOPDPage from "./pages/SOPDPage"
import LetterTemplatePage from "./pages/LetterTemplatePage"
import TestPage from "./pages/TestPage"
import ErrorPage from "./pages/ErrorPage"
import ManagerPage from "./pages/ManagerPage"


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

        <Route path="/registration/:id" element={<RegistrationPage/>} ></Route>
        <Route path="/registration/:id/sopd-request" element={<RequestCandidateSOPDPage/>} ></Route>
        <Route path="/success" element={<ResponseCandidatePage/>} ></Route>

        <Route path="/manager" element={<ManagerPage/>} ></Route>
        <Route path="/manager/sent-emails" element={<SentEmailsPage/>} ></Route>
        <Route path="/manager/send-emails" element={<SendNewEmailsPage/>} ></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
