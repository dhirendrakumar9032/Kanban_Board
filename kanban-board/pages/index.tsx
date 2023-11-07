import KanbanBoard from '@/components/kanban-board'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
     <KanbanBoard/>
    </main>
  )
}
