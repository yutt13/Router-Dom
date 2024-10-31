import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = () => {
    let products = [
        { id: 0, name: "Cake", price: 1000, },
        { id: 1, name: "Cookie", price: 2000, },
        { id: 2, name: "Pastry", price: 3000, },
        { id: 3, name: "Donut", price: 4000, },
        ];
  return (
    <>
    <h1>Product</h1>
    <hr />
    <table border="1" style={{width:"100%"}}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Detail</th>
        </tr>
        {
            products.map((p)=>(
                <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>
                        <NavLink to={"/product/"+p.id}>[Detail]</NavLink>
                    </td>
                </tr>
            )) 
        }

    </table>
    </>
  )
}

export default Product
