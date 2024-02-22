import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTicket,reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Ticket() {
  const {ticket, isLoading,  isSuccess, isError,message}= useSelector((state) => state.tickets)

  
const  params = useParams()
const dispatch = useDispatch()
const {ticketId} = useParams()

useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  dispatch(getTicket(ticketId))
  //eslint-disable-next-line
}, [isError,message,ticketId])
  if(isLoading){
    <Spinner/>
  }
  if(isError){
   <h3>Uh OH</h3>
  }
  
  return (
    <div>
      
     <div className="ticket-page">
      <header className="ticket-header">
      <BackButton url='/tickets'/>
      <h2>Ticket Id: {ticket._id}
      <span className={`status status-${ticket.status}`}>
        {ticket.status}
      </span>
      </h2>
      <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
      <hr />
      <div className="ticket-desc">
        <h3>Description of Issue</h3>
        <p>{ticket.description}</p>
      </div>
      </header>
     </div>
    </div>
  )
}

export default Ticket
