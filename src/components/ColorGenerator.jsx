import React from 'react'
import { useState } from 'react'


const ColorGenerator = () => {
    const [hexColor,setHexColor]=useState('')
    const [rgbColor,setRgbColor]=useState('')
    const [type,setType]=useState('rgb')

    const handleHex=()=>{
        setType('hex')
        const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexcolor='#';// initialized with #
        let i;
        for(i=0;i<6;i++){//6 digits
            hexcolor=hexcolor+ hex[Math.floor(Math.random()*16)]
        }
        setHexColor(hexcolor)
        console.log(hexColor)

    }

    const handleRgb=()=>{
        setType('rgb')
        const rr=Math.floor(Math.random()*255)
        const gg=Math.floor(Math.random()*255)
        const bb=Math.floor(Math.random()*255)
        let i;
        let rgbColor=`rgb(${rr},${gg},${bb})`
        setRgbColor(rgbColor)

       

    }
  return (
    <>
   <div style={{backgroundColor:type==='hex' ? hexColor:rgbColor,height:"100vh"}}>
    <div>
        <button onClick={handleHex}>GENERATE HEX color</button>
        <button onClick={handleRgb}>GENERATE RGB color</button>
       
    </div>
    <div>
        <h1>{type==='hex'? ' HEX COLOR':'RGB COLOR'}</h1>
        <h1>{type==='hex'? ` ${hexColor}`:rgbColor}</h1>

    </div>

   </div>
    </>
  )
}

export default ColorGenerator