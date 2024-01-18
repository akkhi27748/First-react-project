import { Link } from "react-router-dom";
// import images from '../../assets/catalogimages/img1'

function ProductCatalog() {
  const images = [
  "https://www.gonoise.com/cdn/shop/files/2_fb338103-931d-45d6-ab7f-e67e09f60432.png?v=1701155326",
  "https://www.gonoise.com/cdn/shop/files/New_launch_7b1114a9-82fe-4c68-8a51-c076ac8e7a82.png?v=1669961808",
  "https://www.gonoise.com/cdn/shop/files/Smart_watches_faf22dcd-3b66-427d-a3f0-2227e69764f1.png?v=1694695121",
  "https://www.gonoise.com/cdn/shop/files/Wireless_earbuds_1c1a039e-a404-4334-9697-e0a2d3c709e9.png?v=1669961808",
  "https://www.gonoise.com/cdn/shop/files/Wirelesss_earphones_52733822-ef8d-486a-89ec-03d499f65514.png?v=1669961808",
  "https://www.gonoise.com/cdn/shop/files/Calling_smartwatches_74f7b372-3e1e-4cdd-860f-9e883dfdda4e.png?v=1669961808",
  "https://www.gonoise.com/cdn/shop/files/Amoled_Screen_6a2ea3b9-5a6b-4b2e-bcbb-0a062bd22c9b.png?v=1669961808",
  "https://www.gonoise.com/cdn/shop/files/nav.png?v=1684842058"
];
  return (
    <div className="container productCatalog">
      <div className="row">
        {images.map((image, index) => (
          <Link key="{index}" className="products">
            <img src="{image}" alt={`Product ${index + 1}`}/>
            <span></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;