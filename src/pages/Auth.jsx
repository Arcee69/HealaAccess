import React from "react";
import logo from "../assets/svg/logo.svg";

import Slide1 from '../assets/img/authimg.jpeg'
import { useQuery, gql } from "@apollo/client";

import { useLocation, useParams } from "react-router-dom";
import Access from "../pages/Access"
import { GET_ENROLLEES } from "../api";





export default function Auth() {
     const location = useLocation();

     const id = useParams()

     const hmoId = id?.id

     const { data, loading, error } = useQuery(GET_ENROLLEES , {
          variables: { hmoId }
        });

     console.log(data, "data")

     const handleRedirect = () => {
          window.open("https://heala.ng/terms/", "_blank");
     }  

     

     return (
          <div className="h-screen w-screen flex">
               <div className="flex-1 h-screen block">    
                    <img src={Slide1} className="h-full w-full object-cover"/>
               </div>
               <div className="mid:max-w-[582px] w-full mid:w-2/4 flex flex-col px-6 phones:px-12 h-full gap-16">
                    <div className={`w-full flex-1 flex items-center`}>
                         <Access clientData={data} />
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="flex justify-center items-center space-x-1">
                              <p className="leading-5 m-0 whitespace-nowrap">powered by</p>
                              <img src={logo} alt="heala logo" className="w-[50%] h-[50%]" />
                         </div>
                         <p onClick={handleRedirect} className="mid:block hidden text-primary cursor-pointer text-[13px] m-0 mt-[5px] mb-[10px]">
                              Heala's Terms & Conditions
                         </p>
                    </div>
               </div>
          </div>
     );
}
