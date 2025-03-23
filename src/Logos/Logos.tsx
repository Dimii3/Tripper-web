import LogoList from "./LogoList";
import "./Logos.scss";

export default function Logos() {
  return (
    <section className="container logos">
      <h2 className="heading-2 logos__heading">We love to collaborate</h2>
      <LogoList></LogoList>
    </section>
  );
}
