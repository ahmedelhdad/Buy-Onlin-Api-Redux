
import {Navbar,Nav,Container} from 'react-bootstrap';
import {BsBoxArrowLeft,BsFillCartPlusFill } from 'react-icons/bs'
import { AiOutlineUserAdd } from "react-icons/ai";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

function NavScrollExample() {
  const state =useSelector((state) => state.cart.counter)
  return (
    <Navbar bg="light" expand="lg" className='py-3'>
      <Container >
        <Link to="/" className='fs-3 fw-bolder text-decoration-none text-black'>LA COLLECTION</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 d-flex text-center justify-content-center align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className=' btn text-decoration-none text-black-50 fs-5 fw-bolder me-3'>Home</Link>
            <Link to="/Products" className=' btn text-decoration-none text-black-50 fs-5 fw-bolder me-3'>Products</Link>       
            <Link to="/About" className='btn text-decoration-none text-black-50 fs-5 fw-bolder me-3'>About</Link>
            <Link to="/Contact" className=' btn text-decoration-none text-black-50 fs-5 fw-bolder me-3' >Contact</Link>    
          </Nav>
          <div className='buttons'>
            <Link to='*' className='btn btn-outline-dark me-2'>
            <BsBoxArrowLeft className='me-1 fs-3' />Login</Link>
            <Link to='*' className='btn btn-outline-dark me-2'>
            <AiOutlineUserAdd className='me-1 fs-3' />Register</Link>
            <Link to='/cart' className='btn btn-outline-dark me-2'>
            <BsFillCartPlusFill className='me-1 fs-3' />Cart({state})</Link>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;