import React, { useState } from 'react'
import Crud from './Crud';
import Trash from './Trash';

const MainCrud = () => {
    const [trash,setTrash]=useState(true)
    
    
    return (
        <div className='bg-gray-400 relative h-[100vh]' >
        <h1  className='text-center text-[40px] bold py-10'>Todo List</h1>
        {trash ? <Crud />:
         <Trash />}
        <div className='absolute bottom-10 right-10' onClick={()=>{setTrash(prev=>!prev)}} >trash</div>
        </div>
    )
}

export default MainCrud ;