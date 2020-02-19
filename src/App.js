import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Card, Row,Container,Button, ProgressBar} from 'react-bootstrap';
import bg from './shibuya.jpg';
import SuperCard from './SuperCard';

const App = () => {

  
  const jumpIn = useSpring({
    from: {
      transform:'translate3d(0,-200px,0)',
      opacity:0,
      
     }, 

     transform:'translate3d(0,0,0)', 
     opacity:1,
  })


  const [hover, setHover] = useState(false)

  const enlarge = useSpring({
    width: hover ? '40rem' : '15rem' 
  })

  return (
    
    <Container fluid>
    <animated.div  style={jumpIn}>
      <Button disabled variant={"secondary"} className="m-4 ">DARK MODE</Button>
      <Button disabled variant={"outline-secondary"} className="m-4">NORSK</Button>
      <h1 className="text-muted text-center">WILLIAM JARBEAUX</h1>
      <h4 className="text-muted text-center">STUDENT</h4>
      
        <Row className="justify-content-center mt-4">

          <SuperCard title="SUMMARY" content="JUNE 2021 - BSc. COMPUTER ENGINEERING" initialWidth='20rem' endingWidth='35rem'/>
          <SuperCard title="PROJECTS" content="WILL APPEAR SHORTLY - GITHUB.COM/WILLIAMJAR" initialWidth='20rem' endingWidth='35rem'/>
          <SuperCard title="CONTACT" content="WILLIAM@MEKANISK.CO" initialWidth='20rem' endingWidth='35rem'/>
          
          </Row>
    </animated.div>
    

    </Container>
  )
}

export default App;
