import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import ProductInputForm from './components/ProductInputForm/ProductInputForm';
import ProductItem from './components/ProductItem/ProductItem';
import './output.css'

function App() {
  // integration of react hooks here
  const [rerouteToPage, setRerouteToPage] = useState('home');

  return (
    <div>
      <Navbar setRerouteToPage={setRerouteToPage} />
      <main class="py-16">
        {
          rerouteToPage === 'home' ?
            <div class="productWrapper">
              <div class="productContainer" id="lws-productContainer">
                <ProductItem />
              </div>
              <div>
                <div class="formContainer">
                  <ProductInputForm />
                </div>
              </div>
            </div>
            :
            <Cart />
        }
      </main>
    </div>
  );
}

export default App;
