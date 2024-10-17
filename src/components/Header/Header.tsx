import formatDate from "../../utils/formatDate";
import logo from "../../assets/my_to-do.png";
import Image from "next/image";
import "./Header.scss";

export default function Header() {
  const today = new Date();

  return (
    <header>
      <div className="container">
        <div className='imageContainer'>
          <Image id="logo" src={logo} alt="FocalPoint logo" />
        </div>
        <p className="welcome">Bem vindo de volta!</p>
        <p className="date">{formatDate(today)}</p>
      </div>
      <hr />
    </header>
  );
}
