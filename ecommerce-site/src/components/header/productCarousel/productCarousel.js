import "./productCarousel.css";

function ProductCarousel() {
  const images = [
    "https://www.gonoise.com/cdn/shop/files/Dekstop_1.jpg?v=1702988656",
    "https://www.gonoise.com/cdn/shop/files/image_43_1.png?v=1702539594",
    "https://www.gonoise.com/cdn/shop/files/image_40_1_b2c66dde-cfbc-4c2b-a7a5-d51bb069111e.png?v=1702539595",
  ];

  return (
    <div id="productCarousel" className="carousel slide productCarouselSection" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


export default ProductCarousel;

