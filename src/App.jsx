import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import skin00 from './assets/skin-images/skin0-0.jpg';
import skin01 from './assets/skin-images/skin0-1.jpg';
import wiiClick from './assets/sounds/wii-click.mp3'
import wiiHover from './assets/sounds/wii-hover.wav'


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
      <h1 className="fw-bold light" style={{ color: '#FFFFFF', fontSize: '64px'  }}>Fasku Osu Skins</h1>
      <p className="light" style={{ color: '#FFFFFF' }}>this is where you can download all my osu skins :D</p>

      <Card className="mb-3">
        <Carousel onSelect={click} interval={null}>
          <Carousel.Item>
            <Card.Img
              variant="top"
              src={skin00}
              className="skin-img" // Use className in React, not class
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card.Img
              variant="top"
              src={skin01}
              className="skin-img"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>  <a
            href="https://drive.google.com/file/d/1MEl35a3YGfV0ilUJI-RbshcN-jBJoi6l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#A2FF00' }}
            className="light"
          >
            ⬇️ fireku v8
          </a></Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Carousel onSelect={click} interval={null}>
          <Carousel.Item>
            <div
              className="skin-placeholder card"
              style={{
                width: '100%',
                height: '200px',       // same height as images
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#eee', // gray box
                color: '#555',
                fontSize: '1.2rem',
                color: '#ffffffa7'
              }}
            >No img yet :(</div>
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>  <a
            href="https://drive.google.com/file/d/1QRL7XPXKLdeyGbppr-y4Cug6OmMh5vUI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#A2FF00' }}
            className="light"

          >
            ⬇️ bashua priv skin
          </a></Card.Title>
        </Card.Body>
      </Card>

    </>
  )
}

export default App
