import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))
  }
  return (
    <div>
      <Row className='ms-5' style={{ marginTop: "100px" }}>        
    {
      wishlistArray.length>0?wishlistArray?.map((products,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width:'17rem', height:"30rem" }}>
            <Card.Img height={'250px'} variant="top" src={products?.image} />
            <Card.Body>
              <Card.Title>{products?.title}</Card.Title>
              <Card.Text>
                <h5>${products?.price}</h5>
              </Card.Text>
              <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(removeFromWishlist(products.id))}   className='btn btn-light'>
                  <i style={{overflowY:'hidden'}} className='fa-solid fa-trash text-danger fa-2x'></i>
                </Button>
                <Button onClick={()=>handleWishlistCart(products)} className='btn btn-light'>
                  <i style={{overflowY:'hidden'}} className='fa-solid fa-cart-plus text-success fa-2x'></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

      )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
      <img height={'250px'} src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="" />
      <h3 className='fw-bolder text-primary'>Your Wishlist is Empty!!!</h3>
      <Link to={'/'} style={{textDecoration:'none'}} className='btn btn-success rounded'>Back To Home Page</Link>
    </div>
        
      
      }
  </Row></div>
  )
}

export default Wishlist