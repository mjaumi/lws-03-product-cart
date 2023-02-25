import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/product/actionCreators';

const ProductInputForm = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // handler function to handle form submission
    const formSubmissionHandler = e => {
        e.preventDefault();

        const formData = {
            productName: e.target.productName.value,
            category: e.target.category.value,
            imgUrl: e.target.imgUrl.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
        }

        dispatch(addProduct(formData));

        e.target.reset();
    }

    // rendering add product form component here 
    return (
        <div>
            <h4 className='formTitle'>Add New Product</h4>
            <form onSubmit={formSubmissionHandler} className='space-y-4 text-[#534F4F]' id='lws-addProductForm'>

                <div className='space-y-2'>
                    <label htmlFor='name'>Product Name</label>
                    <input className='addProductInput' name='productName' id='lws-inputName' type='text' required />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='category'>Category</label>
                    <input className='addProductInput' name='category' id='lws-inputCategory' type='text' required />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='image'>Image Url</label>
                    <input className='addProductInput' name='imgUrl' id='lws-inputImage' type='text' required />
                </div>

                <div className='grid grid-cols-2 gap-8 pb-4'>

                    <div className='space-y-2'>
                        <label htmlFor='price'>Price</label>
                        <input className='addProductInput' name='price' type='number' id='lws-inputPrice' required />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input className='addProductInput' name='quantity' type='number' id='lws-inputQuantity' required />
                    </div>
                </div>

                <button type='submit' id='lws-inputSubmit' className='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default ProductInputForm;