import { Link } from "react-router-dom";
import Logo from "./assets/logo-main.png";
Link

export default function AppLogo() {
  return (
    <>
      
      <a href="/">
        <img src={Logo} alt="App Logo" className="logo app-logo" />
      </a>

    </>
  )
}
