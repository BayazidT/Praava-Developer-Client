import './content.scss';

const Content = ({ user }) => {
    
  return (
    <div className='content'>
        <div className="title">
            <h4>Name :  {user[0].firstName+' '}{user[0].lastName}</h4>
            <p>Age : {user[0].age}</p>
        </div>
        
    </div>
  )
}

export default Content