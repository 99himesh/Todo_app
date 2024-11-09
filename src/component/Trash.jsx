import React, { useEffect, useState } from 'react'

const  Trash=()=> {
    const [trashData,setTrashData]=useState([])
  const deleteHandler=(id)=>{
      let copy=[...trashData]
      copy.splice(id,1)
      setTrashData(copy)
      localStorage.setItem("trash",JSON.stringify(copy))
 
  }

  const restoreHandler=(item,id)=>{
     let mainData=JSON.parse(localStorage.getItem("data"));
    let data=[...mainData,item]
    localStorage.setItem("data",JSON.stringify(data))
    let copy=[...trashData]
    copy.splice(id,1);
    setTrashData(copy)
    localStorage.setItem("trash",JSON.stringify(copy))
  }




  useEffect(()=>{
    let data=localStorage.getItem("trash")
    setTrashData(JSON.parse(data))
  },[])
  

  return (
    <div  >
        
        <div className='flex justify-center'>
            <div>Trash</div>
            <div>:</div>
            </div>

{trashData?.map((item,idx)=>{
  // console.log(item);
  
  return(
    <div className='flex justify-between gap-10'>
          <h6>{item.work}</h6>
                <div>{item.priority}</div>
          <div onClick={()=>{restoreHandler(item,idx)}}>Restore</div>
          <div onClick={()=>{deleteHandler(idx)}}>delete</div>
    </div>
  )
})}
        </div>
  )
}

export default Trash