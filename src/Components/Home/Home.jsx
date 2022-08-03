import React from 'react'
import {Card, Container} from 'react-bootstrap'
import Background from '../Image/heroy.jpg'
import './Home.css'
const Home = () => {
  return (
    <div className='landing '>
        <Card className="bg-dark text-white border-0">
        <Card.Img src={Background} alt="Card image" className='image' />
        <Card.ImgOverlay>
          <Container className='d-flex flex-column text-black  h-100 justify-content-center'>
            <h5 className='card-title display-3 fw-bolder mb-0'>NEW SEASON ARRIVALS</h5>
            <p className='fs-3 fw-bolder text-black'>
                CHXK OUT ALL THE TRENDS
            </p>
          </Container>
        </Card.ImgOverlay>
        </Card>
    </div>
  )
}

export default Home
