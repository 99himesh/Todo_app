import React, { useEffect, useState } from 'react'
import deleteIcon from "../../src/assets/bin.gif"
import resetIcon from "../../src/assets/reset.gif"

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
            </div>

{trashData?.map((item,idx)=>{
  // console.log(item);
  
  return(
    // <div className='flex justify-between gap-10'>
    //       <h6>{item.work}</h6>
    //             <div>{item.priority}</div>
    //       <div onClick={()=>{restoreHandler(item,idx)}}>Restore</div>
    //       <div onClick={()=>{deleteHandler(idx)}}>delete</div>
    // </div>




<div className='flex  items-center px-5 pt-5 pb-3 border-b-2 '>
<div className='flex gap-5 w-[400px] items-center'>
<h6 className='text-[16px] font-semibold max-w-[100px] '>{item?.work}</h6> 
</div>
<div className='flex gap-10 justify-end'>
<div className='text-[red]  w-[50px]   ' style={{color:item?.priority==="High" && "red" || item?.priority==="Medium" && "#FFBF00" ||item?.priority==="Low" && "green"}}  >{item?.priority}</div>
{/* <div>{}</div> */}
<div className='flex items-center cursor-pointer  '   onClick={() => { restoreHandler(item,idx) }}><img  height={"30px"} width={"30px"} src={resetIcon}/></div>

<div className='flex items-center cursor-pointer'   onClick={() => { deleteHandler(idx) }}><img className='' height={"30px"} width={"30px"} src={deleteIcon}/></div>
</div>
</div>
  )
})}
        </div>
  )
}

export default Trash