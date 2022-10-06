import './content.scss';
import LoginAPI from './microComponents/LoginAPI';
import OTPVerify from './microComponents/OTPVerify';
import Prescription from './microComponents/Prescription';
import SingleAPI from './microComponents/SingleAPI';

const testData = [
  {
    id:1,
    title:"Login",
    des:"This endpoint login a patient to the portal.",
    httpurl:"https://ept.praavahealth.com/Admin/otp/createPhblOtp?token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest: `var request = require('request');
                  var options = {
                    'method': 'GET',
                    'url': 'https://ept.praavahealth.com/Admin/otp/createPhblOtp?token=<token>&upi=<upi>',
                    'headers': {
                    }
                  };
                  request(options, function (error, response) {
                    if (error) throw new Error(error);
                    console.log(response.body);
                  });`,
    codeStringResponse:`{
                  "success": true,
                  "result": "OTP Sent",
                  "message": "An OTP has been sent to your registered mobile number +88017*****300"
              }`,              
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'result of the request.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:2,
    title:"Verify OTP",
    des:"This endpoint verifies an OTP.",
    httpurl:"https://ept.praavahealth.com/Admin/otp/validatePhblOtp?otp=<otp>&token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                      var options = {
                        'method': 'GET',
                        'url': 'https://ept.praavahealth.com/Admin/otp/validatePhblOtp?otp=836254&token=<token>&upi=<upi>',
                        'headers': {
                        }
                      };
                      request(options, function (error, response) {
                        if (error) throw new Error(error);
                        console.log(response.body);
                      });`,
    codeStringResponse:`{
                      "Success": false,
                      "Result": "No Data Found",
                      "Message": "Invalid Patient"
                  }`,
    inputSR:[
      {id:1, parameter:'otp', description:'OTP for verification.', required:'true'},
      {id:2, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:3, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all lab reports.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:3,
    title:"GET All Prescriptions",
    des:"This endpoint retrives all the prescriptions of an indivual patient.",
    httpurl:"https://ept.praavahealth.com/Admin/otp/createPhblOtp?token=<token>&upi=<api>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                        var options = {
                          'method': 'GET',
                          'url': 'https://ept.praavahealth.com/API/MS/GetPrescriptions?token=<token>&upi=<upi>',
                          'headers': {
                          }
                        };
                        request(options, function (error, response) {
                          if (error) throw new Error(error);
                          console.log(response.body);
                        });`,
    codeStringResponse:`{
                          "success": true,
                          "result": [
                              {
                                  "upi": "upi",
                                  "patient_name": "DEWAN RABITA AREFIN",
                                  "consultation_date": "7/24/2022 1:31:25 PM",
                                  "doctor_name": "Perpetuo Dela Cruz",
                                  "doctor_department": "Physiotherapy",
                                  "prescription_link": "link of prescription"
                              },
                              {
                                  "upi": "upi",
                                  "patient_name": "DEWAN RABITA AREFIN",
                                  "consultation_date": "7/21/2022 2:47:08 PM",
                                  "doctor_name": "Perpetuo Dela Cruz",
                                  "doctor_department": "Physiotherapy",
                                  "prescription_link": "link of prescription"
                              }
                          ],
                          "message": "Fetched Prescriptions"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all prescriptions.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:4,
    title:"GET All Lab Reports",
    des:"This endpoint retrives all the lab reports of an indivual patient.",
    httpurl:"https://ept.praavahealth.com/API/Lab/GetLabReports?token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                        var options = {
                          'method': 'GET',
                          'url': 'https://ept.praavahealth.com/API/Lab/GetLabReports?token=<token>&upi=<upi>',
                          'headers': {
                          }
                        };
                        request(options, function (error, response) {
                          if (error) throw new Error(error);
                          console.log(response.body);
                        });`,
    codeStringResponse:`{
                          "success": true,
                          "result": [
                              {
                                  "upi": "upi",
                                  "patient_name": "DEWAN RABITA AREFIN",
                                  "mobile": "88017*300",
                                  "certified_date": "7/3/2022 5:45:47 PM",
                                  "lab_service_name": "Serum Creatinine",
                                  "lab_report": "lab report link"
                              },
                              {
                                  "upi": "upi",
                                  "patient_name": "DEWAN RABITA AREFIN",
                                  "mobile": "88017*300",
                                  "certified_date": "7/1/2022 3:15:57 PM",
                                  "lab_service_name": "Glucose - Random",
                                  "lab_report": "lab report link"
                              }
                          ],
                          "message": "Fetched Investigation Reports"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all lab reports.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:5,
    title:"GET All Files",
    des:"This endpoint retrives all the files of an indivual patient",
    httpurl:"https://ept.praavahealth.com/API/MS/GetMyFiles?token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                          var options = {
                            'method': 'GET',
                            'url': 'https://ept.praavahealth.com/API/MS/GetMyFiles?token=<token>&upi=<upi>',
                            'headers': {
                            }
                          };
                          request(options, function (error, response) {
                            if (error) throw new Error(error);
                            console.log(response.body);
                          });`,
    codeStringResponse:`{
                            "success": true,
                            "result": [
                                {
                                    "id": "68736",
                                    "name": "xr",
                                    "code": "68736_0111.pdf",
                                    "type": "pdf",
                                    "uploadeddate": "7/12/2022 5:14:53 PM",
                                    "link": "http://52.221.159.98:9090/live/fos?type_=14&filename=68736_0111.pdf&patientDocumentId=68736"
                                },
                                {
                                    "id": "1694",
                                    "name": "XR",
                                    "code": "1694_0111 MR.PONCHANON.jpg",
                                    "type": "jpg",
                                    "uploadeddate": "5/27/2018 5:28:49 PM",
                                    "link": "http://52.221.159.98:9090/live/fos?type_=14&filename=1694_0111 MR.PONCHANON.jpg&patientDocumentId=1694"
                                },
                                {
                                    "id": "464",
                                    "name": "Lab Report (6-12-2017)",
                                    "code": "464_PHBL0000000111 PONCHANON DATTA.pdf",
                                    "type": "pdf",
                                    "uploadeddate": "12/11/2017 5:10:03 PM",
                                    "link": "http://52.221.159.98:9090/live/fos?type_=14&filename=464_PHBL0000000111 PONCHANON DATTA.pdf&patientDocumentId=464"
                                }
                            ],
                            "message": "Fetched Uploaded Files"
                        }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all files.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:6,
    title:"Lab Services",
    des:"This endpoint retrives all the lab services.",
    httpurl:"https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                        var options = {
                          'method': 'GET',
                          'url': 'https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>',
                          'headers': {
                          }
                        };
                        request(options, function (error, response) {
                          if (error) throw new Error(error);
                          console.log(response.body);
                        });`,
    codeStringResponse:`{
                          "success": true,
                          "result": [
                              {
                                  "service_name": "​Hepatitis-B Core IgM",
                                  "id": "238",
                                  "org": "Praava Health",
                                  "price_mrp": "1,100",
                                  "price_offer": "880",
                                  "add_to_cart": "false",
                                  "qty": "1"
                              },
                              {
                                  "service_name": "​Hepatitis-B Core IgM",
                                  "id": "133",
                                  "org": "Praava Health",
                                  "price_mrp": "1,100",
                                  "price_offer": "880",
                                  "add_to_cart": "false",
                                  "qty": "1"
                              }
                          ],
                          "message": "Fetched Service List"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'code', description:'Service code.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all lab services.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:7,
    title:"Imaging Services",
    des:"This endpoint retrives all the imagine services.",
    httpurl:"https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                          var options = {
                            'method': 'GET',
                            'url': 'https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>',
                            'headers': {
                            }
                          };
                          request(options, function (error, response) {
                            if (error) throw new Error(error);
                            console.log(response.body);
                          });`,
    codeStringResponse:`{
                          "success": true,
                          "result": [
                              {
                                  "service_name": "X-ray Whole abdomen lateral view",
                                  "id": "400",
                                  "org": "Praava Health",
                                  "price_mrp": "600",
                                  "price_offer": "480",
                                  "add_to_cart": "false",
                                  "qty": "1"
                              },
                              {
                                  "service_name": "X-ray Whole abdomen lateral view",
                                  "id": "399",
                                  "org": "Praava Health",
                                  "price_mrp": "600",
                                  "price_offer": "480",
                                  "add_to_cart": "false",
                                  "qty": "1"
                              }
                          ],
                          "message": "Fetched Service List"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'code', description:'Service code.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all imagine services.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:8,
    title:"Package & Plans",
    des:"This endpoint retrives all the packages and plans.",
    httpurl:"https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                          var options = {
                            'method': 'GET',
                            'url': 'https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>',
                            'headers': {
                            }
                          };
                          request(options, function (error, response) {
                            if (error) throw new Error(error);
                            console.log(response.body);
                          });`,
    codeStringResponse:`{
                          "success": true,
                          "result": [
                              {
                                  "service_name": "Women's Health Screening Package",
                                  "id": "530",
                                  "org": "Praava Health",
                                  "price_mrp": "2,000",
                                  "price_offer": "1,600",
                                  "add_to_cart": "false",
                                  "qty": "1"
                              },
                              {
                                  "service_name": "Women's Health Screening Package",
                                  "id": "529",
                                  "org": "Praava Health",
                                  "price_mrp": "2,000",
                                  "price_offer": "1,600",
                                  "add_to_cart": "false",
                                  "qty": "1"
                              }
                          ],
                          "message": "Fetched Service List"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'code', description:'Service code.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all packages and plans.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:9,
    title:"Other Services",
    des:"This endpoint retrives all the other services.",
    httpurl:"https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                          var options = {
                            'method': 'GET',
                            'url': 'https://ept.praavahealth.com/API/PatientPortal/ServiceMaster?token=<token>&code=<code>,100066,1012,1118',
                            'headers': {
                            }
                          };
                          request(options, function (error, response) {
                            if (error) throw new Error(error);
                            console.log(response.body);
                          });`,
    codeStringResponse:`{
                            "success": true,
                            "result": [
                                {
                                    "service_name": "Zirconia Crown (Per Unit)",
                                    "id": "406",
                                    "org": "Praava Health",
                                    "price_mrp": "25,000",
                                    "price_offer": "20,000",
                                    "add_to_cart": "false",
                                    "qty": "1"
                                },
                                {
                                    "service_name": "Zirconium Jacket Crown",
                                    "id": "405",
                                    "org": "Praava Health",
                                    "price_mrp": "20,000",
                                    "price_offer": "16,000",
                                    "add_to_cart": "false",
                                    "qty": "1"
                                }
                            ],
                            "message": "Fetched Service List"
                        }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'code', description:'Service code.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all the other services.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:10,
    title:"GET All Special Discounts",
    des:"This endpoint retrives all the special discounts.",
    httpurl:"GET https://ept.praavahealth.com/API/PatientPortal/Offers?token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                          var options = {
                            'method': 'GET',
                            'url': 'https://ept.praavahealth.com/API/PatientPortal/Offers?token=<token>&upi=<upi>',
                            'headers': {
                            }
                          };
                          request(options, function (error, response) {
                            if (error) throw new Error(error);
                            console.log(response.body);
                          });`,
    codeStringResponse:`{
                          "success": true,
                          "result": [
                              {
                                  "id": "27",
                                  "is_special": "False",
                                  "title": "Covid Supportive Pack ",
                                  "image_link": "image link",
                                  "offer_link": "offer link"
                              },
                              {
                                  "id": "28",
                                  "is_special": "False",
                                  "title": "Fit to fly",
                                  "image_link": "image link",
                                  "offer_link": "offer link"
                              }
                          ],
                          "message": "Fetched Offer Reports"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'	json array of all the special discounts.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:11,
    title:"Patient Profile",
    des:"This endpoint retrives profile of a patient.",
    httpurl:"GET https://ept.praavahealth.com/API/PatientPortal/PatientProfile?token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                        var options = {
                          'method': 'GET',
                          'url': 'https://ept.praavahealth.com/API/PatientPortal/PatientProfile?token=<code>&upi=<upi>',
                          'headers': {
                          }
                        };
                        request(options, function (error, response) {
                          if (error) throw new Error(error);
                          console.log(response.body);
                        });`,
    codeStringResponse:`{
                          "success": true,
                          "result": {
                              "upi": "upi",
                              "patientname": "SHARIFUL ISLAM SHAUGH",
                              "email": "s.i.shaugh@gmail.com",
                              "mobileno": "88017*****300",
                              "country": "Bangladesh",
                              "gender": "Male",
                              "dob": "01-03-1995",
                              "division": "Dhaka",
                              "district": "Dhaka",
                              "upozilla": "Dhaka",
                              "zipcode": "Not Avaiable",
                              "address": "HOUSE-274/1, DHAHIN KHAN, UTTARA",
                              "isrural": "N",
                              "isurban": "Y",
                              "policestation": "",
                              "runningbalance": "0",
                              "profile_pic": "profile picture link"
                          },
                          "message": "Fetched Profile Data"
                      }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all informations of a PatientProfile.'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
  {
    id:12,
    title:"Family Members",
    des:"This endpoint retrives all the family members of a patient.",
    httpurl:"GET https://ept.praavahealth.com/API/PatientPortal/MyFamilyList?token=<token>&upi=<upi>",
    headers:'No Headers required',
    codeStringRequest:`var request = require('request');
                        var options = {
                          'method': 'GET',
                          'url': 'https://ept.praavahealth.com/API/PatientPortal/MyFamilyList?token=<token>&upi=<upi>',
                          'headers': {
                          }
                        };
                        request(options, function (error, response) {
                          if (error) throw new Error(error);
                          console.log(response.body);
                        });`,
    codeStringResponse:`{
                            "success": true,
                            "result": [
                                {
                                    "id": "3",
                                    "upi": "PHBL0000377472",
                                    "patient_name": "Patient Name",
                                    "relation": "Colleauge",
                                    "profile_pic": "https://ui-avatars.com/api/?name=Patient Name&color=800054&background=FFFFFF&size=128"
                                },
                                {
                                    "id": "14",
                                    "upi": "PHBL0000210987",
                                    "patient_name": "Patient Name",
                                    "relation": "Wife",
                                    "profile_pic": "https://ui-avatars.com/api/?name=Patient Name&color=800054&background=FFFFFF&size=128"
                                }
                            ],
                            "message": "Fetched Offer Reports"
                        }`,
    inputSR:[
      {id:1, parameter:'token', description:'Mandatory token for authorization.', required:'true'},
      {id:2, parameter:'upi', description:'UPI of the individual patient.', required:'true'}
    ],
    outSR:[
      {id:1,field:'success', description:'Status of the request.'},
      {id:2,field:'result', description:'Json array of all the family members of a patient..'},
      {id:3,field:'message', description:'Message of the response.'}
    ],

  },
]


const Content = () => {
    
  return (
    <div className='container'>
        <div className="hero">
            <div className="title">
            Patient Portal API V1
            </div>
            <p className='text-center'>Welcome to the Patient Portal API!</p>
        </div>
        {/* <LoginAPI />
        <OTPVerify />
        <Prescription /> */}
        { testData.map(data =>(
          <SingleAPI key={data.id} data={data}/>
        ))}
        
       
    </div>
  )
}

export default Content