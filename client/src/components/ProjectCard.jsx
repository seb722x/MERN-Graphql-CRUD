
export default function ProjectCard({ project }) {
    
    console.log(project)
  return (
    <div className="col-md-4">
        <div className="card mb-3">
            <div className="card-body">
                  <div className="dflex justify-content-between align-items-center">
                      <h5 className="card-title">{ project.name }</h5>
                      
                      <a className="btn btn-light" href={`/projects/${project.id}`}>view</a>
                  </div>
                  <p className="small">Status: <strong>{project.status}</strong></p>
            </div>
        </div>
      
    </div>
  )
}
