import './createapi.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import CreateSection from '../../components/createapi/CreateSection';

const CreateAPI = () => {
  return (
   <div className="create">
   <Sidebar />
    <div className="main-content">
        <Navbar />
        <div className="self-content">
        <CreateSection />
    </div>
    </div>
   
   </div>
  )
}

export default CreateAPI