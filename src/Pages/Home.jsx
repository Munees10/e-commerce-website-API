import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
function Home() {
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => setData(products))

  },[])
  console.log(data);
  const dispatch = useDispatch()
  
  return (
    <div className='home-conent pt-5'>
       <Row className='ms-5'>
        {data.map((products)=>
         <Col  className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded container' style={{ width:'18rem', height:"32rem" }}>
          <Card.Img height={"250px"} variant="top" src={products.image} />
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>
              <h5 className='fw-bolder'>$ {products.price}</h5>
            </Card.Text>
            <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(addToWishlist(products))}> <i style={{overflowY:'hidden'}} className='fa-solid fa-heart text-danger fa-2x'></i></Button>
            <Button onClick={()=>dispatch(addToCart(products))}><i style={{overflowY:'hidden'}} className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
            </div>
          </Card.Body>
        </Card>
         </Col>)}
       </Row>
    </div>
  )
}

export default Home