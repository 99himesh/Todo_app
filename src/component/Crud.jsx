import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import deleteIcon from "../../src/assets/bin.gif"

const Crud = () => {
  const [input, setInput] = useState({
    priority: "Medium"
  })
  const [statusid,setStatusid]=useState([])
  const [data, setData] = useState([])
  const [trashData, setTrashData] = useState([])
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }
  console.log(data);

  const saveDataHandler = () => {
    setData([...data, input])
    localStorage.setItem("data", JSON.stringify([...data, input]))
  }
  const deleteHandler = (id) => {
    const copy = [...data];
    let deletedData = copy.splice(id, 1);
    console.log(deletedData,"knkj");
    
    let trashDatacopy = [...trashData, ...deletedData]    
    setTrashData([...trashData, ...deletedData])
    setData(copy)

    localStorage.setItem("data", JSON.stringify(copy))
    localStorage.setItem("trash", JSON.stringify(trashDatacopy))

  }
  useEffect(() => {

    let lsdata = localStorage.getItem("data")
    const data = JSON.parse(lsdata)
    if (data != null) {
      setData(data)
    }
  }, [])

const statusHandler=(idx,item)=>{
  debugger
  if(statusid.includes(idx)){
    let copy=[...statusid];
    let index=copy.indexOf(idx)
    copy.splice(index,1)

    setStatusid(copy)
    console.log(copy);
    

  }else{
    setStatusid([...statusid,idx])
  


  }

}



  return (
    <div className=''>
      <div className='w-[50%]  mx-auto flex  items-center justify-center gap-5 '> 
        <input name='work' onChange={(e) => { inputHandler(e) }} className='border rounded ps-2  h-[30px] text-[14px] ' placeholder='Please Enter Todo' />
        <select  defaultValue={"Medium"} name='priority' onChange={(e) => { inputHandler(e) }} className= 'h-[30px] border rounded text-[14px] cursor-pointer'>
          <option  value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low </option>
        </select>
        <button className='px-3 py-[3px] text-[#fff] rounded bg-[#000]' onClick={() => { saveDataHandler() }}>save</button>
      </div>
      {data?.map((item, idx) => {
        return (
          <div className='flex  items-center px-5 pt-5 pb-3 border-b-2 '>
            <div className='flex gap-5 w-[400px] items-center'>
            <div className='border h-4 w-4 rounded-full cursor-pointer' style={{background:statusid.includes(idx)  ?"green":"#FFBF00"}} onClick={() => {statusHandler(idx,item)}} ></div>
            <h6 className='text-[16px] font-semibold max-w-[300px] '>{item?.work}</h6> 
            </div>
            <div className='flex gap-10 justify-end'>
            <div className='  w-[50px] ' style={{color:item?.priority==="High" && "red" || item?.priority==="Medium" && "#FFBF00" ||item?.priority==="Low" && "green"}} >{item?.priority}</div>
            {/* <div>{}</div> */}
            <div style={{background: statusid.includes(idx) ?"green":"#FFBF00"}} className='px-5  rounded-xl bg-yellow-300 pb-[1px] text-[14px] max-w-[100px] text-[#fff]' >{  statusid.includes(idx)?"Completed":"Pending"}</div>
            <div className='flex items-center cursor-pointer bg-[red]'   onClick={() => { deleteHandler(idx) }}><img className='bg-[red]' height={"25px"} width={"25px"} src={deleteIcon}/></div>
          </div>
          </div>
        )
      })}

    </div>



  )
}

export default Crud