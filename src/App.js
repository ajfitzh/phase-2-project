import React, {useEffect, useState} from "react";
import "./styles.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Projects from "./component/Projects";
import Navbar from "./component/Navbar";
import ProductsList from "./component/ProductsList"
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import commerce from "./lib/commerce"
import CartNav from "./component/CartNav"
import Cart from "./component/Cart"
import Checkout from "./pages/Checkout"
import Confirmation from "./pages/Confirmation"
import TestRoute from "./component/TestRoute";

const useStyles = makeStyles({});



export default function App() {
  const [merchant, setMerchant] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  

   // Because React rendering can be triggered for many different reasons, 
  // it is best practice to wrap our commerce object method calls into a 
  // useEffect() hook. This hook acts as the replacment to componentWillMount() 
  // function when using class components. By leaving the second argument array 
  // empty, this method will run once before the initial render.
  useEffect(() => {
    fetchMerchantDetails();
    fetchProducts();
    fetchCart();
  }, []);

  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */
   const fetchMerchantDetails = () => {
    commerce.merchants.about().then((merchant) => {
      setMerchant(merchant);
    }).catch((error) => {
      console.log('There was an error fetching the merchant details', error)
    });
  }

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  /**
   * Retrieve the current cart or create one if one does not exist
   * https://commercejs.com/docs/sdk/cart
   */
  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */
   const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }

  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }
  
  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} newQuantity New line item quantity to update
   */
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  const handleEmptyCart = () => {
    commerce.cart.empty().then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar 
        cart={cart}        />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/projects" element={<Projects />}  />
        <Route path="/merchandise" element={<ProductsList products={products} onAddToCart={handleAddToCart}/>} />
        <Route path="/cartnav" element={<CartNav                cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart} />} />
        <Route path="/cart" 
              element={<Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart} />} />
        <Route path="/checkout"
              element={<Checkout />} />
        <Route path="/testroute"
              element={<TestRoute />} />
      </Routes>
    </div>
  );
}


