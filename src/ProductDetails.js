
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { additem } from './Createslice';
import {useDispatch} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



 const Details = () => {
const [products,setproducts]=useState()
const params = useParams()
console.log(params,"prasad")

const Dispatch = useDispatch()

 async function api(){
  const url = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  setproducts(url.data)
}



const addCart=()=>{

 cartDetails.push(products)
  localStorage.setItem("cart" ,JSON.stringify(cartDetails))
}
let cartPro=  localStorage.getItem("cart")
let  cart =JSON.parse(cartPro)
let cartDetails=[]

useEffect(()=>{
  api()
},[])

  return (
    <div style={{backgroundColor:"#146eb4"}}>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>Products</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"><h1>Details</h1></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      {products?
      <div>
            <Card style={{ width: '18rem', marginTop: '10px' ,marginLeft:'30px' }}>
      <Card.Img variant="top" src={products.image} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
         {products.description.slice(0,50)}
        </Card.Text>
        {/* <Link to={'/'}>
        <Button variant="primary">GO HOME</Button></Link> */}
        <Button onClick={()=>Dispatch(additem(products))}>Add to Cart</Button>
        
      </Card.Body>
    </Card>

      </div>:<div>...Loading</div>}
    </div>
  )
}

export default  Details;
