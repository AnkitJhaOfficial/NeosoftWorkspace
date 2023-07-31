import React from "react";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}
    style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

function HelloWorld(props){
    return (
        <div>
        <h1>Welcome To react App</h1>
        <ul>{listItems}</ul>
        </div>
    );
}

export default HelloWorld;