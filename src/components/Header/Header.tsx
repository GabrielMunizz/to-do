import formatDate from "../../utils/formatDate";
import logo from "../../assets/logo.png";
import Image from "next/image";
import "./Header.scss";

export default function Header() {
  const today = new Date();

  return (
    <header>
      <div className="container">
        <Image id="logo" src={logo} alt="FocalPoint logo" />
        <p className="welcome">Bem vindo de volta, Marcus</p>
        <p className="date">{formatDate(today)}</p>
      </div>
      <hr />
    </header>
  );
}
