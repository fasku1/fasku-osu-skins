import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fasku Osu Skins</h1>
      <p>this is where you can download all my osu skins :D</p>

      <Card>
        <Carousel>
          <Carousel.Item>
            <Card.Img
              variant="top"
              src="../temp/bluey.png"
              class=".skin-img-16by9"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card.Img
              variant="top"
              src="../temp/bluey.png"
              class=".skin-img-16by9"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>"Osu Skin1"</Card.Title>
        </Card.Body>
      </Card>
      
    </>
  )
}

export default App
