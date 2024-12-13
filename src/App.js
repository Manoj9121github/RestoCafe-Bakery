import logo from './logo.svg';
import './App.css';
import Cards from './components/Card';
import Data from './components/Data';
import { Button, Card, CardBody, CardImg, Container, Form, FormControl, InputGroup, Nav, Navbar, NavItem } from 'react-bootstrap';
import { useState } from "react";
import {  } from "react-bootstrap";

function App() {

  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);  
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));  
  };
  
  


  return (
    
    <div className="container m-auto text-center p-2">
    <Navbar expand="lg" className="bg-body-tertiary">
   
        <Navbar.Brand href="#"><h4><i>RestoCafe</i></h4></Navbar.Brand>
   
    </Navbar>
    <Nav className=' m-auto text-center  p-1  w-50 rounded border border-secondary' activeKey="/home">
    
      <NavItem>
      <Nav.Link className='text-dark' href="/home"><h6>Home</h6></Nav.Link>
      </NavItem>
      <Nav.Item>
        <Nav.Link ><h6 className='text-dark'>Waffles</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link ><h6 className='text-dark'>PanCakes</h6></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          <h6 className='text-dark'>Cod</h6>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link ><h6 className='text-dark'>Contact</h6></Nav.Link>
      </Nav.Item>
    </Nav>
    <Form className='w-50 m-auto d-flex justify-content-end'>
      <InputGroup>
        <FormControl onChange={(e)=> setSearch(e.target.value)} className="border-border dark m-2 " placeholder="search"></FormControl>
      </InputGroup>
    </Form>
      <div className="row m-auto p-2">
        {Data.filter((item) => {
        return search.toLowerCase()=== '' ? item: item.Item.toLowerCase().includes(search)
      }).map((items, index) => (
          <div className="col-12 col-md-4 mb-4" key={index}>
            <Card className='w-75 '>
              <CardImg src={items.image}></CardImg>
              <CardBody>{items.Item}</CardBody>
              <div className='d-flex m-auto  text-center'>
              <Button onClick={() => addToCart(items)} className='m-2 bg-dark'>Add</Button>
              <Button onClick={() => removeFromCart(items.id)} className='m-2 bg-dark'>Remove</Button>
              </div>
              <p className='p-1'>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </Card>
            
          </div>
        ))}
      </div>
      <div className="cart">
        <h3 className='text-danger'>Your Items</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.Item} - {item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
