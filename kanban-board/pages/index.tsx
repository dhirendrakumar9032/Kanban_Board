import React from 'react'
import KanbanBoard from '@/components/kanban-board'
import { Navbar } from '@/components/navbar'

const Home = () => {
  return (
    <main>
    <Navbar/>
   <KanbanBoard/>
  </main>
  )
}

export default Home


