import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import skin00 from './assets/skin-images/skin0-0.jpg';
import skin01 from './assets/skin-images/skin0-1.jpg';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fasku Osu Skins</h1>
      <p>this is where you can download all my osu skins :D</p>

      <Card className="mb-3">
        <Carousel>
          <Carousel.Item>
            <Card.Img
              variant="top"
              src={skin00}
              class="skin-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card.Img
              variant="top"
              src={skin01}
              class="skin-img"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>  <a
            href="https://drive.google.com/file/d/1MEl35a3YGfV0ilUJI-RbshcN-jBJoi6l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            fireku v8
          </a></Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Carousel>
          <Carousel.Item>
            <div
              className="skin-placeholder"
              style={{
                width: '100%',
                height: '200px',       // same height as images
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#eee', // gray box
                color: '#555',
                fontSize: '1.2rem',
              }}
            >No img yet :(</div>
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>  <a
            href="https://drive.google.com/file/d/1QRL7XPXKLdeyGbppr-y4Cug6OmMh5vUI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            bashua priv skin
          </a></Card.Title>
        </Card.Body>
      </Card>

    </>
  )
}

export default App
