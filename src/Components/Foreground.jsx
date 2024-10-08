import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null);
    const data =[
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize : ".4mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagColor:"green"
            }
        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize : ".4mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Upload",
                tagColor:"blue"
            }
        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize : ".4mb",
            close:false,
            tag:{
                isOpen:false,
                tagTitle:"Download Now",
                tagColor:"green"
            }
        },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-5 p-5'>
        {data.map((item,index)=>(
            <Cards data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground
