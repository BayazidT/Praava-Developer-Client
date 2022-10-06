import './createsection.scss';
import EndpointForm from './EndpointForm';

const CreateAPI = () => {
  return (
    <div className='container'>
        <div className="titleSection">
            <p className="title">CreateAPI</p>
        </div>
        <div className="mainContent">
            <div className="leftSection">
                Endpoints
                <EndpointForm />
               
            </div>
            <div className="rightSection">
                Api Collections

            </div>
        </div>
        </div>
  )
}

export default CreateAPI