import React, { useEffect, useState } from 'react'
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row  from "react-bootstrap/Row";
import {Link} from "react-router-dom"




 const Api = () => {
const [api,setapi]=useState("")
 
const fetchdata = async()=>{
    const fetchapi = await axios.get(" https://fakestoreapi.com/products")
    console.log(fetchapi)
    setapi(fetchapi.data)
}
useEffect(()=>{
  
   fetchdata()
},[])

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      { api? <Row>
        {api.map((item)=>{
            return(
                <Col md={3} >
                     <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={item.image}    height={'250px'}/>
      <Card.Body>
        <Card.Title>{item.title }</Card.Title>
        <Card.Text>
        {item.description .slice(0,60)}  
        </Card.Text>
        
        <Link  to={`/products/ ${item?.id}`}>
        <Button variant="dark">details</Button></Link>

      </Card.Body>
    </Card>
     </Col>

            )
        })}
      </Row>:<div><h1>Loading..🔃</h1></div>}
    </div>
  )
}
export default Api;
