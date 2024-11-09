import React, { useEffect, useState } from 'react'

const Crud = () => {
  const [input, setInput] = useState({
    priority: "medium"
  })
  const [status,setStatus]=useState(false)
  const [completedData,setComplededData]=useState([])
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
  setStatusid([...statusid,idx])
  setStatus(true)
}

console.log(statusid);


  return (
    <div className='w-[50%] mx-auto'>
      <div className='flex  items-center justify-center gap-5 '>
        <input name='work' onChange={(e) => { inputHandler(e) }} className='border' />
        <select defaultValue={"medium"} name='priority' onChange={(e) => { inputHandler(e) }} className='h-[20px]'>
          <option value={"high"}>High</option>
          <option value={"medium"}>Medium</option>
          <option value={"low"}>Low </option>
        </select>
        <button className='bg-red-400 px-4 py-1 rounded' onClick={() => { saveDataHandler() }}>save</button>
      </div>


      {data?.map((item, idx) => {
        return (
          <div className='flex gap-10 items-center'>
            <div className='border h-4 w-4 rounded-full' style={{background:statusid.includes(idx)  && status?"green":"yellow"}} onClick={() => {statusHandler(idx,item)}} ></div>
            <h6>{item?.work}</h6> 
            <div>{item?.priority}</div>
            {/* <div>{}</div> */}
            <div >{status?"Completed":"Pending"}</div>
            <div onClick={() => { deleteHandler(idx) }}>delete</div>
          </div>
        )
      })}

    </div>



  )
}

export default Crud