import './prescription.scss';

const Prescription = () => {
   const url = "GET https://ept.praavahealth.com/Admin/otp/createPhblOtp?token=<token>&upi=<api>";
  return (
    <div className="prescription">
    <div className="title">GET All Prescriptions</div>
    <div className='apiContent'>
        <div className="left">
            <p>This endpoint retrives all the prescriptions of an indivual patient.</p>
            <h3 className='sub-head'>GET HTTP Request</h3>
            <p className="url">{url}</p>
            <h3 className='sub-head'>Request Information</h3>

            <table className='table'>
                    <tr className='table-header-row'>
                        <th style={{width:'200px'}}>Category</th>
                        <th  style={{width:'500px'}}>Value</th>
                    </tr>
                    <tbody className='tableBody'>
                    <tr>
                        <td>HTTP Request</td>
                        <td>GET</td>
                       
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td>https://ept.praavahealth.com/Admin/otp/createPhblOtp?token= upi=</td>
                        
                    </tr>
                    </tbody>
            </table>
            
            <h3 className="sub-head">
            Headers
            </h3>
            <small>No Headers required</small>

            <h4 className="sub-head">
            Input Schema of request
            </h4>
            <table className='table'>
                    <tr className='table-header-row'>
                        <th style={{width:'20%'}}>Parameter</th>
                        <th  style={{width:'50%'}}>Description</th>
                        <th  style={{width:'30%'}}>Required</th>
                    </tr>
                    <tbody className='tableBody'>
                        <tr>
                            <td>otp</td>
                            <td>OTP for verification .</td>
                            <td>true</td>
                        </tr>
                    <tr>
                        <td>token</td>
                        <td>Mandatory token for authorization.</td>
                        <td>true</td>
                       
                    </tr>
                    <tr>
                        <td>upi</td>
                        <td>UPI of the individual patient.</td>
                        <td>true</td>
                        
                    </tr>
                    </tbody>
            </table>

            <h4 className="sub-head">
            Output Schema of request
            </h4>
            <table className='table'>
                    <tr className='table-header-row'>
                        <th style={{width:'200px'}}>Field</th>
                        <th style={{width:'500px'}}>Description</th>
                    </tr>
                    <tbody className='tableBody'>
                    <tr>
                        <td>success</td>
                        <td>status of the request.</td>
                       
                    </tr>
                    <tr>
                        <td>result</td>
                        <td>json array of prescriptions</td> 
                    </tr>
                    <tr>
                        <td>message</td>
                        <td>message of the response</td> 
                    </tr>
                    </tbody>
            </table>

        </div>
        <div className="right">
            Code section
       
        </div>
    </div>
</div>
  )
}

export default Prescription