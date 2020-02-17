import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

export const Toggle = () => {
    

    const fade = useSpring({
        from: {width:'1rem'}, width:'40rem'
    })

    

    return(
        <div>
           
            <center>
            <animated.div
            style={fade}>
            
            <div 
            class="mt-2 card shadow-lg bg-dark"
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