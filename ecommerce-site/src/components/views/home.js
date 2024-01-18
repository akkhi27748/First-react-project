import ProductCarousel from "../header/productCarousel/productCarousel";

function Home() {
  return (
    <div>
      <ProductCarousel/>
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h1 className="text-center m-5">
              Fire-Boltt | Ignite the fire in you
            </h1>
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm">
                    <img
                      src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm">
                    <h4>1300% YOY</h4>
                    <h4>400% QOQ</h4>
                    <h4>Growth</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm">
                    <img
                      src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm">
                    <h4>1300% YOY</h4>
                    <h4>400% QOQ</h4>
                    <h4>Growth</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm">
                    <img
                      src="https://www.fireboltt.com/cdn/shop/files/stopwatch.gif.gif?37994"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm">
                    <h4>1 Unit Sold</h4>
                    <h4>Every 05 Sec</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm">
                    <img
                      src="https://www.fireboltt.com/cdn/shop/files/review.gif?v=6281934118567879272"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm">
                    <h4>2Mn+ Product</h4>
                    <h4>Reviews</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
