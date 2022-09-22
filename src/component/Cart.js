import React from "react";
import "./cart.css";
import imgg2 from "../img/product-2.jpg";
import imgg3 from "../img/product-3.jpg";
import imgg4 from "../img/product-4.jpg";

const Cart = () => {
  return (
    <>     
    <div class="container cart">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src={imgg2} alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $50.00</span> <br />
                <a href="/">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$50.00</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src={imgg3} alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $90.00</span> <br />
                <a href="/">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$90.00</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src={imgg4} alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $60.00</span> <br />
                <a href="/">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$60.00</td>
        </tr> 
      </table>
     
        <div className="total-price">
            <table>
                <tr>
                    <td>subtotal</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$2</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$202</td>
                </tr>
            </table>
        <a href="/" class="checkout btn">Proceed</a>
      </div>
    </div>
  </>
      
  );
};

export default Cart;
