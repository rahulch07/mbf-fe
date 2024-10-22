import React, { useEffect, useState } from 'react'
import axios from 'axios'



const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default function DisplayTickets() {
    const [allTicketsData, setAllTicketsData] = useState()
    useEffect(()=>{
        allTickets()
    },[])

    const allTickets = async ()=>{
        try{
            const response = await axios.get(`${BACKEND_URL}/getALLTickets`)
            setAllTicketsData(response.data);
        }catch(error){
            console.log("Error: ", error)
        }
    }
  return (
    <div>
      <h1>ALL TICKETS</h1>
      <div>
        {allTicketsData?.map((ticket)=>(
            <div>
                <h6>{ticket.id}</h6>
                <div>{ticket.region}</div>
                <div>{ticket.status}</div>
            </div>
        ))}
      </div>
    </div>
  )
}
