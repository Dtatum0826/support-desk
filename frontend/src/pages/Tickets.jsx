import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getTickets ,reset} from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'


function Tickets() {
  const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)

  const dispatch = useDispatch()


  useEffect(()=>{
    return () => {
      if(isSuccess){
        dispatch(reset)
      }
    }
  })


  useEffect(() => {
    dispatch(getTickets)
  },[dispatch])
  

  if(isLoading){
    return <Spinner/>
  }
  return (
    <div>
      Tickets
    </div>
  )
}

export default Tickets