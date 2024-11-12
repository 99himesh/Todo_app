import React, { useState } from 'react'
import Crud from './Crud';
import Trash from './Trash';
import bgImg from "../assets/bg.webp"
import trashImg from "../assets/dumpster.gif"

const MainCrud = () => {
    const [trash,setTrash]=useState(true)
    
    
    return (
        <div className=' relative h-[100vh] bg-[#B2FFFF] '  >
        <div className='w-[50%] mx-auto bg-[#fff]  h-[500px] absolute top-[50px] left-0 right-0  rounded-xl    '>
        <h1  className='text-center text-[40px] bold py-4'>Todo List</h1>
        {trash ? <Crud />:
         <Trash />}
        <div className='absolute bottom-10 right-10 cursor-pointer' onClick={()=>{setTrash(prev=>!prev)}} ><img height={"40px"} width={"40px"}  src={trashImg}/></div>
        </div>
        </div>
    )
}

export default MainCrud ;