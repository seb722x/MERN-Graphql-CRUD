import Clients from "../components/Clients";
import AddClientsModal from "../components/AddClientsModal";
import Projects from "../components/Projects";
import AddProjectModal from "../components/AddProjectModal";



export default function Home() {
  return (
      <>
        <div className="d-flex gap-3 mb-4">
          <AddClientsModal />
          <AddProjectModal />
        </div>
       <Projects />
       <hr />
       <Clients />
    </>
  )
}
