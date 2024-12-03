import { useNavigate } from "react-router-dom"


const Error = () => {
  const navigate=useNavigate()
  return (
    <div className="font-extrabold text-xl lg:text-5xl flex flex-col justify-center items-center h-[100vh] gap-5">

        <h1>No Page Found....</h1>
        <h1>Error 404</h1>
        <button onClick={()=>{navigate('/')}} className="text bg-center btn bg-[#9538E2]">Go Back Home</button>
      
    </div>
  )
}

export default Error
