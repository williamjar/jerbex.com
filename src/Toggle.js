import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Button} from 'react-bootstrap';

export const Toggle = () => {
    const [isToggled, setToggle] = useState(true);

    const fade = useSpring({
        opacity: isToggled ? 1:0
    })


    return(
        <div>
            <button 
            type="button"
            class="btn btn-primary shadow justify-content-center" 
            onClick ={() => setToggle(!isToggled)}
            align="middle"
            >
            aaaaa
            </button>
            <center>
            
            
            <animated.div
            style={fade}>
            
            <div 
            class="card p-2"
            style={{ width: '25rem' }}
            >
            
            <img
            class="card-img"
            src="https://i.imgur.com/yYKh8Sm.jpg" 
            />
            </div>
           

            </animated.div>
            
            </center>
            
            
        </div>
    )
}

export default Toggle;