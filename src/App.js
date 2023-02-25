import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import ProductInputForm from './components/ProductInputForm/ProductInputForm';
import ProductItem from './components/ProductItem/ProductItem';
import './output.css';

function App() {
  // integration of react hooks here
  const [rerouteToPage, setRerouteToPage] = useState('home');

  // integration of react-redux hooks here
  const products = useSelector(state => state.products);

  return (
    <div>
      <Navbar setRerouteToPage={setRerouteToPage} />
      <main className='py-16'>
        {
          rerouteToPage === 'home' ?
            <div className='productWrapper'>
              <div className='productContainer' id='lws-productContainer'>
                {
                  products.map(product => <ProductItem />)
                }
              </div>
              <div>
                <div className='formContainer'>
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
