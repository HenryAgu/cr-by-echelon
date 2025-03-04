// stylesheet
import "./Gallery.css";

// helmet
import { Helmet } from "react-helmet";

// images
import image1 from "../../../img/home.jpg";
import image2 from "../../../img/gym-2.jpg";
import image3 from "../../../img/hallway.jpg";
import image4 from "../../../img/bar-1.jpg";
import image5 from "../../../img/rest.jpg";
import image6 from "../../../img/gym-1.jpg";
import image7 from "../../../img/lobby.jpg";
import image8 from "../../../img/lobby-2.jpg";
import image9 from "../../../img/restaurant.jpg";
import image10 from "../../../img/store.jpg";
import image11 from "../../../img/swimming.jpg";
import image12 from "../../../img/conf-room.jpg";

import Footer from "../Footer";
import Nav from "../Nav";

const Gallery = () => {
  let cards = [
    { image: image1, title: " Reception", id: crypto.randomUUID() },
    { image: image2, title: " Gym", id: crypto.randomUUID() },
    { image: image3, title: " Hallway", id: crypto.randomUUID() },
    { image: image4, title: " Bar", id: crypto.randomUUID() },
    { image: image5, title: " Lounge", id: crypto.randomUUID() },
    { image: image6, title: " Gym", id: crypto.randomUUID() },
    { image: image7, title: " Lobby", id: crypto.randomUUID() },
    { image: image8, title: " Hallway", id: crypto.randomUUID() },
    { image: image9, title: " Restaurant", id: crypto.randomUUID() },
    { image: image10, title: " Store", id: crypto.randomUUID() },
    { image: image11, title: " Swimming Pool", id: crypto.randomUUID() },
    { image: image12, title: " COnference", id: crypto.randomUUID() },
  ];

  return (
    <div className="section-4">
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gallery | Corporate Residence</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="gallery-title">
          <Nav />
          <h2> Our Gallery</h2>
          <p className="gallery-title-p">
            In this gallery, you'll find a collection of stunning images that
            showcase some of the highlights of our hotel. From our sparkling
            pool and fitness center to our elegant restaurants and bars, there's
            something here for everyone.
          </p>
        </div>
        <div className="gallery">
          <div className="gallery-main">
            {cards.map((card) => (
              <div className="gallery-card" key={card.id}>
                <div className="card-img">
                  <img src={card.image} alt="our hotel" />
                </div>
                <div className="card-text">{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default Gallery;
