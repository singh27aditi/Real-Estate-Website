import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/sign-in" element = {<SignIn />}></Route>
        <Route path = "/sign-up" element = {<SignUp />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route element = {<PrivateRoute />}>
          <Route path = "/profile" element = {<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
