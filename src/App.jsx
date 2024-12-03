import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./StaticElements/NavBar"
import Footer from "./StaticElements/Footer"
import { createContext, useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const DataContext=createContext()


function App() {
  const [load,setLoad]=useState([])

  const reciveData=(rective)=>{
    setLoad(rective)
  }
  const [total,setTotal]=useState(0)
  const balanceemty=()=>{
    setTotal(0)
   }

const [cartAmount,setCartAmount]=useState([])
const cartamountemty=()=>{
  setCartAmount([])
}
  const addtocartHandle=(indicator)=>{
    setCartAmount([...cartAmount,indicator])
    setTotal(total+indicator.price)


    toast.success("Item added to cart", {
      position: "top-center"
    });

  }

  const [wislist,setwislist]=useState([])

  const wislishthandle=(indi)=>{
    const check = wislist.some(product => product.product_id === indi.product_id);

    if(!check){

      setwislist([...wislist,indi])
      toast.success("Item added to WishList", {
        position: "top-center"
      });

    }else{
      toast.error("Item already added to WishList", {
        position: "top-center"
      });

    }

  }
 
  const [check,setcheck]=useState(true)
  const checkHandle=(para)=>{
    setcheck(para)
  }



    const [title, setTitle] = useState('Home Page | Gadget Heaven');
    useEffect(() => {
      document.title = title;
    }, [title]);

    
   

    const locations=useLocation()

    useEffect(()=>{
      if(locations.pathname==='/'){

        setTitle('Home | Gadget Heaven')
      }else if(locations.pathname==='/statistics'){
        setTitle('Statistics | Gadget Heaven')

      }else if(locations.pathname==='/dashboard'){
        setTitle('Dashboard | Gadget Heaven')
      }else if(locations.pathname==='/aboutus'){
        setTitle('About Us | Gadget Heaven')

      }

    },[locations])

  return (
    <>


    <DataContext.Provider value={{reciveData,load,addtocartHandle,cartAmount,wislishthandle,wislist,checkHandle,check,total,cartamountemty,setTitle,balanceemty}}>
    <NavBar/>
    <Outlet/>
    </DataContext.Provider>
    <ToastContainer />
    <Footer/>
      
    </>
  )
}

export default App
