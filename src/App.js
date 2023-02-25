import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import ProductInputForm from './components/ProductInputForm/ProductInputForm';
import ProductItem from './components/ProductItem/ProductItem';
import './output.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
              {
                products.length ?
                  <div className='productContainer' id='lws-productContainer'>
                    {
                      products.map(product => <ProductItem
                        key={product.id}
                        product={product}
                      />)
                    }
                  </div>
                  :
                  <div className='h-full w-full flex items-center justify-center'>
                    <h3 className='text-xl font-bold'>No product found. But you can add.</h3>
                  </div>
              }
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
      <ToastContainer position='top-center' theme='colored' />
    </div>
  );
}

export default App;
