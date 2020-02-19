import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Card, Row,Container,Button,ProgressBar} from 'react-bootstrap';
import bg from './shibuya.jpg';
import { FaNodeJs, FaReact, FaJava, FaPython } from 'react-icons/fa';



export const SuperCardDetailed = ({title, content, initialWidth, endingWidth}) => {


  const [hover, setHover] = useState(false)


  const config = { mass: 90, tension: 4000, friction: 1500 };
  const enlarge = useSpring({
    config,
    width: hover ? endingWidth : initialWidth
  })
  
  
  const jumpIn = useSpring({
    config : { mass: 90, tension: 6000, friction: 1000 },
    
     transform: hover ?   'translate3d(0,0,0)': 'translate3d(0,-50px,0)', 
     opacity:hover ? 1 : 0,
  })
  


  return (
   

        <animated.div style={enlarge}>
        <Card onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  className="m-4 shadow border-0">
    
        <Card.Title className="m-4 text-center">{title}</Card.Title>
        
        
            
            {hover ? (
            <div>
            <animated.div style={jumpIn}>
            <Card.Body>
              
            <Card.Text className="text-center">

            <strong>University</strong>
            <p>NTNU BSc. Computer Science 2021</p>
            <p>SCRUM and team projects</p>
            <p>Computer engineering and theory</p>
            <p>Real world problem solving</p>
            <FaNodeJs size={'4em'} />
            <FaReact size={'4em'}/>
            <FaJava size={'4em'}/>
            <FaPython size={'4em'}/>


            <p/>
            
            <strong>Mekanisk AS</strong>
            <p>CAD, production, customer relations, managing business</p>

            <strong>High school</strong>
            <p>Vocational ICT/electronics background</p>
            
            
            </Card.Text>
          

           

                
            </Card.Body>
            </animated.div>
            </div>
            
            ):(null) } 
            

          </Card>
          
         
          </animated.div>
        
          

  )
}

export default SuperCardDetailed;