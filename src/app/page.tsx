import AddTaskModal from "@/components/Modals/AddTaskModal/AddTaskModal";
import Header from "@/components/Header/Header";
import Tasks from "@/components/Tasks/Tasks";
import DeleteTaskModal from "@/components/Modals/DeleteTaskModal/DeleteTaskModal";
import './Home.scss'

export default function Home() {
  return (
    <main className='home'>
      <Header />
      <Tasks />
      <AddTaskModal />
      <DeleteTaskModal />
    </main>
  );
}
