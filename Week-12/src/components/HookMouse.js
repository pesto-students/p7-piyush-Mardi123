import React, {useState, useEffect} from 'react';

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouselog = (e)=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log("useEffect event")
        window.addEventListener('mousemove', mouselog)
        return()=>{
            console.log("unmount")
            window.removeEventListener('mousemove', mouselog)
        }

    }, [])

  return (
    <div>
      Hook X:{x} Y:{y}
    </div>
  );
}

export default HookMouse;
