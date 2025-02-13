import "./_product.scss";

const Product = () => {
  const productData = [
    {
      pName: "Jacket",
      price: 45,
      img: "shop-1.jpg",
    },
    {
      pName: "Purse",
      price: 50,
      img: "shop-2.jpg",
    },
    {
      pName: "Dress",
      price: 38,
      img: "shop-3.jpg",
    },
    {
      pName: "Denim",
      price: 42,
      img: "shop-4.jpg",
    },
    {
      pName: "Boots",
      price: 65,
      img: "shop-5.jpg",
    },
    {
      pName: "Bag",
      price: 35,
      img: "shop-6.jpg",
    },
  ];

  return (
    <div className="product-container">
      {productData.map((ele) => {
        return (
          <div className="mx-4 p-3  product-card">
            <div className="product-image">
              <img src={require(`../../assets/images/shop/${ele.img}`)} />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{ele.pName}</a>
              </h5>
              <p className="product-price">{ele.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
