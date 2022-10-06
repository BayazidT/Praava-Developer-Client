import './endpointform.scss';

const EndpointForm = () => {


    const handleSubmit = () => {
        console.log('I am pressed');
    }


  return (
    <div className='endpoints'>
        <form className='form' onSubmit={handleSubmit()}>
           <div className='form-input'>
           <label >Title</label>
            <input type="text" name='title' required />
           </div>
            <div className='form-input'>
            <label >Headers</label>
            <input type="text" name='headers' />
            </div>
          <div className='form-input'>
          <label >Request</label>
          <textarea type="text" ></textarea>
          </div>
            <div className='form-input'>
            <label >Response</label>
            <textarea type="text" ></textarea>
            </div>
            <div className='form-input'><label >URL</label>
            <input type="text" name='url' /></div>
           <div className='form-input'> <label >Code</label>
           <textarea type="text" ></textarea>
            </div>

            <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default EndpointForm