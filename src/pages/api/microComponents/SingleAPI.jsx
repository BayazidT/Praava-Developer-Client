import Code from '../code/Code';
import './singleapi.scss';


const SingleAPI = ({ data }) => {
    const url="https://www.praavahealth.com";
    console.log(data);
  return (
    <div className="singleAPI">
            <div className="title" id={data.id}>{data.title}</div>
            <div className='apiContent'>
                <div className="left">
                    <p>{data.des}</p>
                    <h4 className='sub-head'>GET HTTP Request</h4>
                    <p className="url">{data.httpurl}</p>
                    <h4 className='sub-head'>Request Information</h4>

                    <table className='table'>
                            <thead>
                            <tr className='table-header-row'>
                                <th style={{width:'200px'}}>Category</th>
                                <th  style={{width:'500px'}}>Value</th>
                            </tr>
                            </thead>
                            <tbody className='tableBody'>
                                
                            <tr>
                                <td>HTTP Request</td>
                                <td>GET</td>
                               
                            </tr>
                            <tr>
                                <td>URL</td>
                                <td>{data.httpurl}</td>
                                
                            </tr>
                            </tbody>
                    </table>
                    
                    <h3 className="sub-head">
                    Headers
                    </h3>
                    <small>{data.headers}</small>

                    <h4 className="sub-head">
                    Input Schema of request
                    </h4>
                    <table className='table'>
                            <thead>
                            <tr className='table-header-row'>
                                <th style={{width:'20%'}}>Parameter</th>
                                <th  style={{width:'50%'}}>Description</th>
                                <th  style={{width:'30%'}}>Required</th>
                            </tr>
                            </thead>
                            <tbody className='tableBody'>
                            {data.inputSR.map(item =>(
                                    <tr key={item.id}>
                                        {console.log(item.parameter)}
                                        <td>{item.parameter}</td>
                                    <td>{item.description}</td>
                                    <td>{item.required}</td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>

                    <h4 className="sub-head">
                    Output Schema of request
                    </h4>
                    <table className='table'>
                            <thead>
                            <tr className='table-header-row'>
                                <th style={{width:'200px'}}>Field</th>
                                <th style={{width:'500px'}}>Description</th>
                            </tr>
                            </thead>
                            <tbody className='tableBody'>
                            {data.outSR.map(item =>(
                                    <tr key={item.id}>
                                        {console.log(item.id)}
                                        <td>{item.field}</td>
                                    <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>

                </div>
                <div className="right">
                   <Code codeString={data.codeStringRequest}/>
                   <Code codeString={data.codeStringResponse}/>
               
                </div>
            </div>
        </div>
  )
}

export default SingleAPI