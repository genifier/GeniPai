import Button from "./Button";
import logo from "../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={logo} alt="GeniPai" width="26" height="26"/>
          <strong style={{fontSize:18}}>GeniPai</strong>
        </div>

        <nav className="nav__menu">
          <a className="nav__link" href="#">Product</a>
          <a className="nav__link" href="#">Solutions</a>
          <a className="nav__link" href="#">Resources</a>
          <a className="nav__link" href="#">Pricing</a>
          <Button as="a" to="#" style={{marginLeft:8}}>Get Started</Button>
        </nav>
      </div>
    </header>
  );
}