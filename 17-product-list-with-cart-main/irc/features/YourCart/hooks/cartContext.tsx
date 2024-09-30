import { Component, createContext } from "react";
import { Product } from "@/interfaces";
export const CartContext = createContext([]);

class CartProvider extends Component {
  state = {
    cart: [] as Product[],
  };

  render() {
    return (
      <CartContext.Provider value={this.state.cart}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
