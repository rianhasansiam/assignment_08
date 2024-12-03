import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import StatisticsPage from "../StatisticsPage/StatisticsPage";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import AllProduct from "../Home/All Items/AllProduct";
import Laptops from "../Home/All Items/Laptops";
import Phones from "../Home/All Items/Phones";
import SmartWatches from "../Home/All Items/SmartWatches";
import Chargers from "../Home/All Items/Chargers";
import PowerBanks from "../Home/All Items/PowerBanks";
import Iphones from "../Home/All Items/Iphones";
import Error from "../Home/Error";
import DetailsPro from "../Home/DetailsPro";


import Carts from "../Dashboard/Carts";
import Wishlists from "../Dashboard/Wishlists";
import AboutUs from "../AboutUs/AboutUs";
  

  // const Roots =createBrowserRouter ([
  //   {
  //     path: "/",
  //     element: <App/>,
  //     errorElement:<Error/>,
  //     children:[
  //       {
  //           path: "/",
  //           element: <Home/>,
  //           children:[
  //             {
  //               path:"",
  //               element:<AllProduct/>,
  //               loader:()=>fetch('./data.json')
  //             },
  //             {
  //               path:"/laptops",
  //               element:<Laptops/>,
  //               loader:()=>fetch('./data.json')
  //             },
  //             {
  //               path:"/phones",
  //               element:<Phones/>,
  //               loader:()=>fetch('./data.json')
  //             },
  //             {
  //               path:"/smartwatches",
  //               element:<SmartWatches/>,
  //               loader:()=>fetch('./data.json')
  //             },
  //             {
  //               path:"/powerbank",
  //               element:<PowerBanks/>,
  //               loader:()=>fetch('./data.json')
  //             },
  //             {
  //               path:"/chargers",
  //               element:<Chargers/>,
  //               loader:()=>fetch('./data.json')
  //             },
  //             {
  //               path:"/iphones",
  //               element:<Iphones/>
  //             },
              
        
  //           ]

  //       },
  //       {
  //           path:"/statistics",
  //           element:<StatisticsPage/>,
  //           loader:()=>fetch('./data.json')
  //       },
  //       {
  //           path:"/dashboard",
  //           element:<Dashboard/>,
  //           children:[
  //             {
  //               path:"",
  //               element:<Carts/>
  //             },
  //             {
  //               path:"/wishlist",
  //               element:<Wishlists/>
  //             }
  //           ]
  //       },
  //       {
  //         path:"/details",
  //         element:<DetailsPro/>,
          
  //       },
  //       {
  //         path:"/aboutus",
  //         element:<AboutUs/>
          
  //       }

  //     ]
  //   },
  // ]);

  const Roots = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "",
              element: <AllProduct />,
              loader: () => fetch('../data.json') 
            },
            {
              path: "laptops",  
              element: <Laptops />,
              loader: () => fetch('../data.json')
            },
            {
              path: "phones",
              element: <Phones />,
              loader: () => fetch('../data.json')
            },
            {
              path: "smartwatches",
              element: <SmartWatches />,
              loader: () => fetch('../data.json')
            },
            {
              path: "powerbank",
              element: <PowerBanks />,
              loader: () => fetch('../data.json')
            },
            {
              path: "chargers",
              element: <Chargers />,
              loader: () => fetch('../data.json')
            },
            {
              path: "iphones",
              element: <Iphones />
            }
          ]
        },
        {
          path: "statistics", 
          element: <StatisticsPage />,
          loader: () => fetch('../data.json')
        },
        {
          path: "dashboard",  
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <Carts />
            },
            {
              path: "wishlist",  
              element: <Wishlists />
            }
          ]
        },
        {
          path: "details", 
          element: <DetailsPro />
        },
        {
          path: "aboutus",  
          element: <AboutUs />
        }
      ]
    }
  ]);
  



  export default Roots