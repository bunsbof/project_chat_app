import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Forms from '../components/Forms'

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    if(user) navigate("/chats")
  }, [navigate])
  return (
    <div>
      <Forms />
    </div>
  )
}

export default Home