import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Card, Row,Container,Button,ProgressBar} from 'react-bootstrap';
import bg from './shibuya.jpg';

export const SuperCard = ({title, content, initialWidth, endingWidth}) => {


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
            <Card.Body className="text-center">
            
            {content.map(line => 
              <p>{line.toUpperCase()}</p>
            )}
                
                
            </Card.Body>
            </animated.div>
            </div>
            
            ):(null) } 
            

          </Card>
          
          </animated.div>
        
          

  )
}

export default SuperCard;