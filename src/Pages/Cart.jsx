import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
  const cartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  return (
    <div className='container' style={{ marginTop: "100px" }}>

      {
        cartArray.length > 0 ?
          <div className='row mt-5'>
            <div className='col-lg-8'>
              
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>image</td>
                    <td>price</td>
                    <td>action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((products, index)=>(
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{products.title}</td>
                        <td><img width={'100px'} height={'130px'} src={products.image} alt="" /></td>
                        <td>${products.price}</td>
                        <td><button onClick={()=>dispatch(removeFromCart(products.id))} className='btn'><i style={{overflowY:'hidden'}} className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
           

          </div>:<div style={{ height: '60vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'250px'} src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="" />
            <h3 className='fw-bolder text-primary'>Your Wishlist is Empty!!!</h3>
            <Link to={'/'} style={{ textDecoration: 'none' }} className='btn btn-success rounded'>Back To Home Page</Link>
          </div>
      }
 
    </div>
  )
}

export default Cart