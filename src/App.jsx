import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import skin00 from './assets/skin-images/skin0-0.jpg';
import skin01 from './assets/skin-images/skin0-1.jpg';
import wiiClick from './assets/sounds/wii-click.mp3'
import wiiHover from './assets/sounds/wii-hover.wav'
import fasku from './assets/fasku.jpeg'


function App() {
  const [count, setCount] = useState(0)

  function click() {
    const audio = new Audio(wiiClick)
    audio.volume = 0.5 // 20% volume
    audio.play()
  }

  return (
    <>
      <Card className="card-line"></Card>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '20vh' }}>
        {/* Image Column */}
        <Col xs="auto">
          <img src={fasku} style={{ width: '125px' }} alt="Fasku Avatar" />
        </Col>
        {/* Text Column */}
        <Col xs="auto">
          <h1 className="fw-bold m-0" style={{ color: '#FFFFFF', fontSize: '64px' }}>
            Fasku Osu Skins
          </h1>
        </Col>
      </Row>
      <p className="light" style={{ color: '#FFFFFF' }}>this is where you can download all my osu skins :D</p>


      {/* Add align-items-stretch to the Row */}
      <Row className="justify-content-center align-items-stretch g-4">
        <Col xs="auto">
          {/* Add h-100 to the Card */}
          <Card className="mb-3 h-100" xs="auto">
            <Carousel onSelect={click} interval={null}>
              <Carousel.Item>
                <Card.Img variant="top" src={skin00} className="skin-img" />
              </Carousel.Item>
              {/* ... other items */}
            </Carousel>
            <Card.Body>
              <Card.Title>
                <a
                  href="https://drive.google.com/file/d/1MEl35a3YGfV0ilUJI-RbshcN-jBJoi6l/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={click}
                  style={{
                    textDecoration: 'none',
                    color: '#A2FF00'
                  }}>
                  ⬇️ fireku v8 ⬇️
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="auto">
          {/* Add h-100 to this Card too */}
          <Card className="h-100" xs="auto">
            <Carousel onSelect={click} interval={null}>
              <Carousel.Item>
                <div
                  className="skin-placeholder"
                  style={{
                    width: '484px',
                    aspectRatio: '16 / 9',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '2px dashed rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    color: '#ffffffa7',
                  }}
                >
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>No img yet :(</span>
                  <p style={{ opacity: 0.5 }}>1920 x 1080 Preview Pending</p>
                </div>
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>
                <a
                  href="https://drive.google.com/file/d/1QRL7XPXKLdeyGbppr-y4Cug6OmMh5vUI/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={click}
                  style={{
                    textDecoration: 'none',
                    color: '#A2FF00'
                  }}>
                  ⬇️ bashua priv skin ⬇️
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </>
  )
}

export default App
