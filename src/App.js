import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Card, Row,Container,Button, ProgressBar} from 'react-bootstrap';
import bg from './shibuya.jpg';
import SuperCard from './SuperCard';



//usecontext
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

  const summary =[
    "BSc. Computer Science 2021",
    "Java, Python, JavaScript",
    "React.js, Node.js, mySQL",
    "Vocational ICT/electronics background",
    "CAD, production, customer relations"
  ]

  const projects =[
    "Harmoni",
    "Karakterkalkulator",
    "Mekanisk.xyz"
  ]

  const contact =[
    "william@mekanisk.co",
  ]

  return (
    
    <Container fluid>
    <animated.div  style={jumpIn}>
      <Button disabled variant={"secondary"} className="m-4 ">DARK MODE</Button>
      <Button disabled variant={"outline-secondary"} className="m-4">NORSK</Button>
      <h1 className="text-center">WILLIAM JARBEAUX</h1>
      <h4 className="text-center">COMPUTER SCIENCE STUDENT</h4>
      
        <Row className="justify-content-center mt-4">

          <SuperCard title="SUMMARY" content={summary} initialWidth='20rem' endingWidth='35rem'/>
          <SuperCard title="PROJECTS" content={projects} initialWidth='20rem' endingWidth='35rem'/>
          <SuperCard title="CONTACT" content={contact} initialWidth='20rem' endingWidth='35rem'/>
          
          </Row>
    </animated.div>
    

    </Container>
  )
}

export default App;
