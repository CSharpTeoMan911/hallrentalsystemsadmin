export default function Render_Image_Carousel(properties) {
  let images = [];

  if (properties.images !== null && properties.images !== undefined) {
    if (properties.images.length > 0) {
      for (let i = 0; i < properties.images.length; i++) {
        images.push(properties.images[i]);
      }
    } else {
    }
  } else {
  }

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.topgear.com/sites/default/files/2021/12/8.%20Lotus%20Evija.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://car-images.bauersecure.com/wp-images/3695/mclaren-artura.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
