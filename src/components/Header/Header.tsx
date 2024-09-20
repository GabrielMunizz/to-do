import formatDate from "../../utils/formatDate";
import logo from "../../assets/logo.png";
import Image from "next/image";

export default function Header() {
  const today = new Date();

  return (
    <header>
      <div>
        <Image src={logo} alt="FocalPoint logo" />
      </div>
      <div>
        <h2>Bem vindo de volta, Marcus</h2>
      </div>
      <div>
        <p>{formatDate(today)}</p>
      </div>
      <hr />
    </header>
  );
}
