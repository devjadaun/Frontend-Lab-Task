import './App.css';

function Header() {
  return (
    <div className="header">
      <h1>Product Gallery</h1>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="card">
      <img src="https://up.yimg.com/ib/th/id/OIP.cKnGFqLNCgNiB2S1k8e5JAHaFj?pid=Api&rs=1&c=1&qlt=95&w=141&h=106" alt="" />
      <h3>Laptop</h3>
      <p>Price: $1000</p>
      <p>Category: Electronics</p>
    </div>
  );
}
function ProductCard2() {
  return (
    <div className="card">
      <img src="https://s.yimg.com/fz/api/res/1.2/o71ArLIpalPhvE8wbjVfjA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/09/b8/64/09b864f338df8c8e60b580f5081c4a11.jpg" alt="" />
      <h3>Shirt</h3>
      <p>Price: $50</p>
      <p>Category: Clothes</p>
    </div>
  );
}
function ProductCard3() {
  return (
    <div className="card">
      <img src="https://up.yimg.com/ib/th/id/OIP.mNcR45ZaAuxavw6ptQoJdgHaEo?pid=Api&rs=1&c=1&qlt=95&w=176&h=110" alt="" />
      <h3>Shoes</h3>
      <p>Price: $60</p>
      <p>Category: Shoes</p>
    </div>
  );
}
function ProductCard4() {
  return (
    <div className="card">
      <img src="https://up.yimg.com/ib/th/id/OIP.wJwYj1g3r1BzqO7tPgUs3QHaEo?pid=Api&rs=1&c=1&qlt=95&w=188&h=117" alt="" />
      <h3>Camera</h3>
      <p>Price: $600</p>
      <p>Category: Electronics</p>
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <div className="product-container">
        <ProductCard1 />
        <ProductCard2 />
        <ProductCard3 />
        <ProductCard4 />
      </div>

    </>
  );
}

export default App;