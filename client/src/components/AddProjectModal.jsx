import { useMutation , useQuery} from '@apollo/client';
import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import { GET_CLIENTS } from '../queries/clientQueries';
import { ADD_PROJECT } from '../mutations/projectMutations';




export default function AddProjectModal() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [clientId, setClientId] = useState('');
    const [status, setStatus] = useState('new');
    
        const [addProject] = useMutation(ADD_PROJECT, {
            variables: { name, description, clientId, status },
            update(cache, { data: { addProject } }) {
                const { projects } = cache.readQuery({ query: GET_PROJECTS });
                cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject]}
             })
            }
    })
    const { loading, error, data} = useQuery(GET_CLIENTS)
    
    
    const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || status === '') {
    return alert('Pleas fill in all fields')
    }
    
    addProject(name,description,clientId,status)
    setName('')
    setDescription('');
    setClientId('');
    setStatus('new');
    };
    
    if (loading) return null;
    if(error) return 'something went wrong'



return (
<>
    { !loading && !error &&(
    <>
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
            <div className="d-flex align-items-center">
                <FaList className='icon' />
                <div>New Project</div>
            </div>
        </button>


        <div className="modal fade" id="addProjectModal" tabIndex="-1" aria-labelledby="addProjectModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addProjectModalLabel"> Add Project
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </ button>
                    </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="" className='form-label'>
                                Name
                            </label>
                            <input type="text" className='form-control' id='name' value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label"> Description
                            </label>
                            <textarea className='form-control' id='description' value={description} onChange={(e)=>setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor=""
                                    className="form-label"
                                >Status
                                </label>
                                <select className="form-select" id="status" value={status} onChange={(e)=> setStatus(e.target.value)}>
                                    <option value="new">Not started</option>
                                    <option value="progress">In progress</option>
                                    <option value="completed">Completed</option>  
                                </select>
                                    
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor=""
                                    className="form-label"
                                >Client
                                </label>
                                <select className="form-select" id="clientId" value={clientId} onChange={(e)=> setClientId(e.target.value)}>
                                            <option value="">Select client</option>
                                            {data.clients.map((client) => (
                                                <option key={client.id} value={client.id}>{client.name}</option>
                                                
                                            ))}
                                    
                                </select>
                                    
                            </div>
                            <button 
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                type='submit'
                            >Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>    
            
            </>
         )}   
        
    </>
    )
}