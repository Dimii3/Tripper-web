import "./Banner.scss";
export default function Banner() {
  return (
    <section className="banner container">
      <h2 className="heading-1">
        Ready for the adventure
        <br />
        of a lifetime?
      </h2>
      <div className="banner__image">
        <img src="banner.png" alt="" />
      </div>
    </section>
  );
}
