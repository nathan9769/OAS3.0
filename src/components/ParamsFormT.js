import React, { useState} from 'react'
import styles from '../style.module.css'
import OperationsForm from './OperationsForm'
import { Button, Tab, Tabs } from "react-bootstrap";
import ApiDesign from './ApiDesign';
import ReusableResponseForm from './ReusableResponseForm';
import ReusableResponseHeaderForm from './ReusableResponseHeaderForm';
import ReusableForm from './ReusableForm';

const ParamsFormT = () => {
    const[isToggled,setIsToggled] = useState(false)
    const[operationName,setOperationName] = useState('')
    const[url,setUrl] = useState('')
    const[endpoint,setEndpoint] = useState('')
    const[formData,setFormData] = useState(
      [{name:'',description:'',type:'',required:''}]
    )
    const objValsPathParam = Object.values(formData[0])
    let flagObjVals = false
    

    const[operationId,setOperationId] = useState('')
    const[description,setDescription] = useState('')
    const[getOperationAddHeaderFormData,setGetOperationAddHeaderFormData] = useState(
      [{name:'',description:'',type:'',required:''}]
    )
    const[getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
    )
    const[getOperationAddCookieFormData,setGetOperationAddCookieFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
    )
    const[getOperationAddResponseFormData,setGetOperationAddResponseFormData] = useState(
        [{type:'',description:'',format:'',headers:[]}]
    )
    const objValsGetOperationId = Object.values(operationId)
    const objValsGetOperationDescription = Object.values(description)
    // const[getOperationAddResponseFormData,setGetOperationAddResponseFormData] = useState(
    //     [{type:'',description:'',format:'',headers:[{name:'',type:'',description:''}]}]
    // )
    const[getOperationAddResponseAddHeaderFormData,setGetOperationAddResponseAddHeaderFormData] = useState(
        [{name:'',type:'',description:''}]
    )

    const [saveState, setSaveState] = useState([])
 
    const[postOperationId,setPostOperationId] = useState('')
    const[postOperationDescription,setPostOperationDescription] = useState('')
    const[postOperationAddHeaderFormData,setPostOperationAddHeaderFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
      )
    const[postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData] = useState(
          [{name:'',description:'',type:'',required:''}]
      )
    const[postOperationAddCookieFormData,setPostOperationAddCookieFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
        )
    const[postOperationAddResponseFormData,setPostOperationAddResponseFormData] = useState(
            [{type:'',description:'',format:'',headers:[]}]
        )
    const[postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData] = useState(
            [{name:'',type:'',description:''}]
        )
   
      const[putOperationId,setPutOperationId] = useState('')
      const[putOperationDescription,setPutOperationDescription] = useState('')
      const[putOperationAddHeaderFormData,setPutOperationAddHeaderFormData] = useState(
          [{name:'',description:'',type:'',required:''}]
        )
        const[putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData] = useState(
            [{name:'',description:'',type:'',required:''}]
        )
        const[putOperationAddCookieFormData,setPutOperationAddCookieFormData] = useState(
            [{name:'',description:'',type:'',required:''}]
        )
        const[putOperationAddResponseFormData,setPutOperationAddResponseFormData] = useState(
            [{type:'',description:'',format:'',headers:[]}]
        )
    const[putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData] = useState(
            [{name:'',type:'',description:''}]
        )
   
    
    
    
 
   
  
    const[isToggledGet,setIsToggledGet] = useState(false)
    const[isToggledPost,setIsToggledPost] = useState(false)
    const[isToggledPut,setIsToggledPut] = useState(false)

    const[isToggledGetHeaderBtn,setIsToggledGetHeaderBtn] = useState(false)
    const[isToggledGetQueryParamBtn,setIsToggledQueryParamBtn] = useState(false)
    const[isToggledGetCookieBtn,setIsToggledGetCookieBtn] = useState(false)
    const[isToggledGetSecurityBtn,setIsToggledGetSecurityBtn] = useState(false)
    const[isToggledGetResponseBtn,setIsToggledGetResponseBtn] = useState(false)
    const[isToggledGetAddResponseAddHeaderBtn,setIsToggledGetAddResponseAddHeaderBtn] = useState('false')


    const[isToggledPostHeaderBtn,setIsToggledPostHeaderBtn] = useState(false)
    const[isToggledPostQueryParamBtn,setIsToggledPostQueryParamBtn] = useState(false)
    const[isToggledPostCookieBtn,setIsToggledPostCookieBtn] = useState(false)
    const[isToggledPostSecurityBtn,setIsToggledPostSecurityBtn] = useState(false)
    const[isToggledPostResponseBtn,setIsToggledPostResponseBtn] = useState(false)
    const[isToggledPostAddResponseAddHeaderBtn,setIsToggledPostAddResponseAddHeaderBtn] = useState(false)

    const[isToggledPutHeaderBtn,setIsToggledPutHeaderBtn] = useState(false)
    const[isToggledPutQueryParamBtn,setIsToggledPutQueryParamBtn] = useState(false)
    const[isToggledPutCookieBtn,setIsToggledPutCookieBtn] = useState(false)
    const[isToggledPutSecurityBtn,setIsToggledPutSecurityBtn] = useState(false)
    const[isToggledPutResponseBtn,setIsToggledPutResponseBtn] = useState(false)
    const[isToggledPutAddResponseAddHeaderBtn,setIsToggledPutAddResponseAddHeaderBtn] = useState(false)
  
    const handleChangeOperationName = (e) =>{
        setOperationName(e.target.value)
    }        
    

    const handleInputChange = (e, setInput) => setInput(e.target.value);
 
    const handleSubmit = (e) =>{
        getOperationAddResponseFormData.forEach((formData)=>{
            formData.headers.push(...getOperationAddResponseAddHeaderFormData)
        })
        // console.log(objValsGetOperationId)
        // console.log(objValsGetOperationDescription)
    
        postOperationAddResponseFormData.forEach((formData)=>{
            formData.headers.push(...postOperationAddResponseAddHeaderFormData)
        })
        putOperationAddResponseFormData.forEach((formData)=>{
            formData.headers.push(...putOperationAddResponseAddHeaderFormData)
        })
      e.preventDefault()
        // if(objValsGetOperationDescription.length==0 || objValsGetOperationId.length==0){
         
        // }
        for(let i=0;i<=objValsPathParam.length;i++)
        {
            if(objValsPathParam[i]==='')
            {
                flagObjVals = true
            }
        }
        if(flagObjVals){
            console.log(JSON.stringify({
                operationName,
                url,
                endpoint,
                formData,
                operationId,
                description,
                getOperationAddHeaderFormData,
                getOperationAddQueryParamFormData,
                getOperationAddCookieFormData,
                getOperationAddResponseFormData,
                postOperationId,
                postOperationDescription,
                postOperationAddHeaderFormData,
                postOperationAddQueryParamFormData,
                postOperationAddCookieFormData,
                postOperationAddResponseFormData,
                postOperationAddResponseAddHeaderFormData,
                putOperationId,
                putOperationDescription,
                putOperationAddHeaderFormData,
                putOperationAddQueryParamFormData,putOperationAddCookieFormData},null,4)) 
        }
       
        
        // else{
        //     console.log(JSON.stringify({
        //         operationName,
        //         url,
        //         endpoint,
        //         formData,
        //         operationId,
        //         description,
        //         getOperationAddHeaderFormData,
        //         getOperationAddQueryParamFormData,
        //         getOperationAddCookieFormData,
        //         getOperationAddResponseFormData,
        //         getOperationAddResponseAddHeaderFormData,
        //         postOperationId,
        //         postOperationDescription,
        //         postOperationAddHeaderFormData,
        //         postOperationAddQueryParamFormData,
        //         postOperationAddCookieFormData,
        //         putOperationId,
        //         putOperationDescription,
        //         putOperationAddHeaderFormData,
        //         putOperationAddQueryParamFormData,putOperationAddCookieFormData},null,4))
        // }
        
       
    }

    // Common Handler to handle TabFormOperations(GET,POST,PUT) data
    const handleFormData = (e,index,data,setData) => {
        const values = [...data]
        values[index][e.target.name] = e.target.value
        setData(values)
    }

    const handleChangeInput = (index,e) =>{
      const values = [...formData]
      values[index][e.target.name] = e.target.value
      setFormData(values)
    }

    
    const handleChangeInputGetAddResponseOperation = (index,e)=>{
        const values = [...getOperationAddResponseFormData]
        values[index][e.target.name] = e.target.value
        setGetOperationAddResponseFormData(values)
    }

    const handleChangeInputGetAddResponseAddHeaderOperation = (index,e)=>{
        const values = [...getOperationAddResponseAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setGetOperationAddResponseAddHeaderFormData(values)
    }
 
    const handleAddFields = () =>{
      setFormData([...formData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetAddHeaderOperation = () =>{
      setGetOperationAddHeaderFormData([...getOperationAddHeaderFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetQueryParamOperation = () =>{
        setGetOperationAddQueryParamFormData([...getOperationAddQueryParamFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetCookieOperation = () =>{
        setGetOperationAddCookieFormData([...getOperationAddCookieFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetResponseOperation = () =>{
        setGetOperationAddResponseFormData([...getOperationAddResponseFormData,{type:'',description:'',format:'',headers:[]}])
    }
    // const handleAddFieldsGetResponseOperation = () =>{
    //     setGetOperationAddResponseFormData([...getOperationAddResponseFormData,{type:'',description:'',format:'',headers:[{name:'',type:'',description:''}]}])
    // }
    const handleAddFieldsGetResponseAddHeaderOperation = () =>{
        setGetOperationAddResponseAddHeaderFormData([...getOperationAddResponseAddHeaderFormData,{name:'',type:'',description:''}])
    }
    const handleAddFieldsPostAddHeaderOperation = () =>{
        setPostOperationAddHeaderFormData([...postOperationAddHeaderFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPostAddQueryParamOperation = () =>{
        setPostOperationAddHeaderFormData([...postOperationAddQueryParamFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPostCookieOperation = () =>{
        setGetOperationAddCookieFormData([...postOperationAddCookieFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPostResponseOperation = () =>{
        setPostOperationAddResponseFormData([...postOperationAddResponseFormData,{type:'',description:'',format:'',headers:[]}])
    }
    const handleAddFieldsPostResponseAddHeaderOperation = () =>{
        setPostOperationAddResponseAddHeaderFormData([...postOperationAddResponseAddHeaderFormData,{name:'',type:'',description:''}])
    }
    const handleAddFieldsPutAddHeaderOperation = () =>{
        setPutOperationAddHeaderFormData([...putOperationAddHeaderFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPutAddQueryParamOperation = () =>{
        setPutOperationAddHeaderFormData([...putOperationAddQueryParamFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPutCookieOperation = () =>{
        setGetOperationAddCookieFormData([...putOperationAddCookieFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPutResponseOperation = () =>{
        setPutOperationAddResponseFormData([...putOperationAddResponseFormData,{type:'',description:'',format:'',headers:[]}])
    }
    const handleAddFieldsPutResponseAddHeaderOperation = () =>{
        setPutOperationAddResponseAddHeaderFormData([...putOperationAddResponseAddHeaderFormData,{name:'',type:'',description:''}])
    }
 
    const handleRemoveFields = (index) =>{
      const values = [...formData]
      values.splice(index,1)
      setFormData(values)
    }
    const handleRemoveFieldsGetAddHeaderOperation = (index) =>{
        const values = [...getOperationAddHeaderFormData]
        values.splice(index,1)
        setGetOperationAddHeaderFormData(values)
    }
    const handleRemoveFieldsGetQueryParamOperation = (index)=>{
        const values = [...getOperationAddQueryParamFormData]
        values.splice(index,1)
        setGetOperationAddQueryParamFormData(values)
    }
    const handleRemoveFieldsGetAddCookieOperation = (index)=>{
        const values = [...getOperationAddCookieFormData]
        values.splice(index,1)
        setGetOperationAddCookieFormData(values)
    }
    const handleRemoveFieldsGetAddResponseOperation = (index)=>{
        const values = [...getOperationAddResponseFormData]
        values.splice(index,1)
        setGetOperationAddResponseFormData(values)
    }
    const handleRemoveFieldsGetAddResponseAddHeaderOperation = (index)=>{
        const values = [...getOperationAddResponseAddHeaderFormData]
        values.splice(index,1)
        setGetOperationAddResponseAddHeaderFormData(values)
    }
    
    const handleRemoveFieldsPostAddHeaderOperation = (index) =>{
        const values = [...postOperationAddHeaderFormData]
        values.splice(index,1)
        setPostOperationAddHeaderFormData(values)
    }
    const handleRemoveFieldsPostAddQueryParamOperation = (index) =>{
        const values = [...postOperationAddQueryParamFormData]
        values.splice(index,1)
        setPostOperationAddQueryParamFormData(values)
    }
    const handleRemoveFieldsPostAddCookieOperation = (index)=>{
        const values = [...postOperationAddCookieFormData]
        values.splice(index,1)
        setPostOperationAddCookieFormData(values)
    }
    const handleRemoveFieldsPostAddResponseOperation = (index)=>{
        const values = [...postOperationAddResponseFormData]
        values.splice(index,1)
        setPostOperationAddResponseFormData(values)
    }
    const handleRemoveFieldsPostAddResponseAddHeaderOperation = (index)=>{
        const values = [...postOperationAddResponseAddHeaderFormData]
        values.splice(index,1)
        setPostOperationAddResponseAddHeaderFormData(values)
    }

    const handleRemoveFieldsPutAddHeaderOperation = (index) =>{
        const values = [...putOperationAddHeaderFormData]
        values.splice(index,1)
        setPutOperationAddHeaderFormData(values)
    }
    const handleRemoveFieldsPutAddQueryParamOperation = (index) =>{
        const values = [...putOperationAddQueryParamFormData]
        values.splice(index,1)
        setPutOperationAddQueryParamFormData(values)
    }
    const handleRemoveFieldsPutAddCookieOperation = (index) =>{
        const values = [...putOperationAddCookieFormData]
        values.splice(index,1)
        setPutOperationAddCookieFormData(values)
    }
    const handleRemoveFieldsPutAddResponseOperation = (index)=>{
        const values = [...putOperationAddResponseFormData]
        values.splice(index,1)
        setPutOperationAddResponseFormData(values)
    }
    const handleRemoveFieldsPutAddResponseAddHeaderOperation = (index)=>{
        const values = [...putOperationAddResponseAddHeaderFormData]
        values.splice(index,1)
        setPutOperationAddResponseAddHeaderFormData(values)
    }

 
  return (
    <div className={styles.paramFormsContainer}>
      <form onSubmit={handleSubmit}>
        <ApiDesign
        operationName={operationName}
        operationNameFunc={(e)=>handleChangeOperationName(e)}
        >
        </ApiDesign><br></br>
        {/* <input type='text' name='url' placeholder='Url..' value={url} onChange={handleChangeUrl}></input>
        <input type='text' name='endpoint' placeholder='Endpoint...' value={endpoint} style={{flex : 1 }} onChange={handleChangeEndpoint}></input> */}
        <input type='text' name='url' placeholder='Url..' value={url} onChange={e => handleInputChange(e, setUrl)}></input>
        <input type='text' name='endpoint' placeholder='Endpoint...' value={endpoint} style={{flex : 1 }} onChange={e => handleInputChange(e, setEndpoint)}></input>

        <button type='button' onClick={()=>setIsToggled(!isToggled)} className={styles.pathParamFormsBtn}>Path Params</button>
        {formData.map((formData,index)=>(
          <div key={index} style={{marginLeft : '-60px'}}>
            {isToggled && <OperationsForm name={formData.name} description={formData.description} type={formData.type} required={formData.required} handleAddFields={handleAddFields} nameFunc={e =>handleChangeInput(index,e)} descriptionFunc={e =>handleChangeInput(index,e)} typeFunc={e =>handleChangeInput(index,e)} requiredFunc={e =>handleChangeInput(index,e)}  handleRemoveFields={handleRemoveFields}></OperationsForm>}
        <br></br><br></br>
          </div>
        ))}
        <div className={styles.tabForms}>
                <Tabs defaultActiveKey="first">
 
                    <Tab eventKey="first" title="GET">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledGet(!isToggledGet)}>+ GET Operation</Button>
                        </div>
                        <div>
                            {isToggledGet &&
                         
                            <div className={styles.GetOperation}>
                                <div>
                                    {/* <label>Operation ID : </label><input name='operationId' value={operationId} onChange={handleChangeOperationId} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='description' value={description} onChange={handleChangeDescription} size={40} type='text' placeholder='Enter any description'></input> */}
                                    <label>Operation ID : </label><input name='operationId' value={operationId} onChange={e => handleInputChange(e, setOperationId)} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='description' value={description} onChange={e => handleInputChange(e, setDescription)} size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledGetHeaderBtn(!isToggledGetHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledQueryParamBtn(!isToggledGetQueryParamBtn)}>+ Query Param</button>
                                    <button type='button' onClick={()=>setIsToggledGetCookieBtn(!isToggledGetCookieBtn)}>+ Cookie</button>
                                    <button type="button" onClick={()=>setIsToggledGetSecurityBtn(!isToggledGetSecurityBtn)}>+ Security</button>
                                    <button type='button' onClick={()=>setIsToggledGetResponseBtn(!isToggledGetResponseBtn)}>+ Responses</button>
                                    <br></br>
                                    {isToggledGetHeaderBtn &&
                                    getOperationAddHeaderFormData.map((formData,index)=>(
                                        <div key={index} className={styles.getHeadersFormContainer}>
                                            
                                            {/* GET OPERATION , ADD HEADERS FORM */}
                                            <ReusableForm
                                            formTitle={'Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsGetAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsGetAddHeaderOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))
                                     
                                    }
                                    <br></br>
                                    {isToggledGetQueryParamBtn &&
                                    getOperationAddQueryParamFormData.map((formData,index)=>(
                                        <div key={index}>

                                            {/* GET OPERATION , ADD QUERY PARAMS FORM */}
                                            <ReusableForm
                                            formTitle={'Query Params :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            handleAddFields={handleAddFieldsGetQueryParamOperation}
                                            handleRemoveFields={handleRemoveFieldsGetQueryParamOperation}
                                            ></ReusableForm>

                                            {/* <TabGetOpAddQueryParamForm
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleChangeInputGetQueryParamOperation(index,e)}
                                            typeFunc={(e)=>handleChangeInputGetQueryParamOperation(index,e)}
                                            descriptionFunc={(e)=>handleChangeInputGetQueryParamOperation(index,e)}
                                            requiredFunc={(e)=>handleChangeInputGetQueryParamOperation(index,e)}
                                            handleAddFieldsGetQueryParamOperation={handleAddFieldsGetQueryParamOperation}
                                            handleRemoveFieldsGetQueryParamOperation={handleRemoveFieldsGetQueryParamOperation}
                                            >
                                            </TabGetOpAddQueryParamForm> */}
                                        </div>
                                    )) 
                                    }
                                    <br></br>
                                    {isToggledGetCookieBtn &&
                                    getOperationAddCookieFormData.map((formData,index)=>(
                                        <div key={index}>
                                            {/* GET OPERATION , ADD COOKIES FORM */}
                                            <ReusableForm
                                            formTitle={'Cookies :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            handleAddFields={handleAddFieldsGetCookieOperation}
                                            handleRemoveFields={handleRemoveFieldsGetAddCookieOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))}
                                    <br></br>
                                    {isToggledGetSecurityBtn && <h6>Security Button Clicked</h6>}
                                    <br></br>
                                    {isToggledGetResponseBtn &&
                                    getOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <h6>Response</h6>
                                            <label>Type : </label>
                                            <select name='type' value={formData.type} onChange={(e)=>handleChangeInputGetAddResponseOperation(index,e)}>
                                                <option>100 : Continue </option>
                                                <option>101 : Switching Protocols</option>
                                                <option>200 : Ok </option>
                                                <option>201 : Created</option>
                                                <option>202 : Accepted </option>
                                                <option>203 : Non Authorative Information</option>
                                                <option>204 : No Content </option>
                                                <option>205 : Reset Content</option>
                                                <option>206 : Partial Content </option>
                                                <option>207 : Multi Status</option>
                                                <option>208 : Already Reported </option>
                                                <option>226 : IM Used</option>
                                                <option>300 : Multiple Choices </option>
                                                <option>301 : Moved Permanently</option>
                                                <option>302 : Found </option>
                                                <option>303 : See Other</option>
                                                <option>304 : Not Modified </option>
                                                <option>305 : Use Proxy</option>
                                                <option>306 : (Unused)</option>
                                                <option>307 : Temporary Redirect </option>
                                                <option>308 : Permanent Redirect</option>
                                                <option>400 : Bad Request </option>
                                                <option>401 : Unauthorized</option>
                                                <option>402 : Payment Required </option>
                                                <option>403 : Forbidden</option>
                                                <option>404 : Not Found </option>
                                                <option>405 : Method Not Allowed</option>
                                                <option>406 : Not Acceptable </option>
                                                <option>407 : Proxy Authentication Required</option>
                                                <option>408 : Request Timeout </option>
                                                <option>409 : Conflict</option>
                                                <option>410 : Gone </option>
                                                <option>411 : Length Required</option>
                                                <option>412 : Continue </option>
                                                <option>413 : Switching Protocols</option>
                                                <option>414 : Request-URI Too Long </option>
                                                <option>415 : Unsupported Media Type</option>
                                                <option>416 : Requested Range Not Satisfied </option>
                                                <option>417 : Expectation Failed</option>
                                                <option>418 : I'm a teapot(RFC 2324) </option>
                                                <option>420 : Enhance Your Calm(Twitter)</option>
                                                <option>422 : Unprocessable Entity </option>
                                                <option>423 : Locked</option>
                                                <option>424 : Failed Dependency </option>
                                                <option>425 : Too Early</option>
                                                <option>426 : Upgrade Required </option>
                                                <option>428 : Precondition Required</option>
                                                <option>429 : Too Many Requests </option>
                                                <option>431 : Request Header Fields Too Large</option>
                                                <option>444 : No Response </option>
                                                <option>449 : Retry With(Microsoft)</option>
                                                <option>450 : Blocked by Windows Parental Control </option>
                                                <option>451 : Unavailable for Legal Reasons</option>
                                                <option>499 : Client Closed Request </option>
                                                <option>500 : Internal Server Error</option>
                                                <option>501 : Not Impressed </option>
                                                <option>502 : Bad Gateway</option>
                                                <option>503 : Service Unavailable </option>
                                                <option>504 : Gateway Timeout</option>
                                                <option>505 : HTTP Version Not Supported </option>
                                                <option>506 : Variant Also Negotiates</option>
                                                <option>507 : Insufficient Storage </option>
                                                <option>508 : Loop Detected</option>
                                                <option>509 : Bandwidth Limit Exceeded </option>
                                                <option>510 : Not Extended</option>
                                                <option>511 : Network Authentication Required </option>
                                                <option>598 : Network read timeout error</option>
                                                <option>599 : Network connect timeout error </option>
                                            </select>
                                            <label>Response Description : </label>
                                            <input type='text' name='description' value={formData.description} onChange={(e)=>handleChangeInputGetAddResponseOperation(index,e)}></input>
                                            <label>Response Format : </label>
                                            <select value={formData.format} name='format' onChange={(e)=>handleChangeInputGetAddResponseOperation(index,e)}>
                                                <option>application/json</option>
                                                <option>application/xml</option>
                                            </select><br></br>
                                            {/* <button type='button' onClick={()=>setIsToggledGetAddResponseAddHeaderBtn(!isToggledGetAddResponseAddHeaderBtn)}>+ Header</button> */}
                                            
                                            {isToggledGetAddResponseAddHeaderBtn && getOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                            <div key={index}>
                                                <label>Name :</label>
                                                    <input name='name' type='text'  placeholder='Name...' value={formData.name} onChange={(e)=>handleChangeInputGetAddResponseAddHeaderOperation(index,e)}></input><br></br>
                                                    <label>Type : </label> 
                                                    <select name='type' value={formData.type} onChange={(e)=>handleChangeInputGetAddResponseAddHeaderOperation(index,e)}>
                                                        <option>String</option>
                                                        <option>Any</option>
                                                        <option>Boolean</option>
                                                        <option>Number</option>
                                                        <option>Integer</option>
                                                        <option>Array</option>
                                                    </select><br></br>
                                                    <label>Description : </label>
                                                    <input name='description' value={formData.description} type='text' placeholder='Description...' onChange={(e)=>handleChangeInputGetAddResponseAddHeaderOperation(index,e)}></input><br></br>
                                                    <button type='button' onClick={()=>handleAddFieldsGetResponseAddHeaderOperation()}>AddHeader</button>
                                                    <button type='button' onClick={()=>handleRemoveFieldsGetAddResponseAddHeaderOperation()}>RemoveHeader</button> 
                                            </div>))}
                                            <br></br>
                                            <button type='button' onClick={()=>handleAddFieldsGetResponseOperation()}>Add Response</button>
                                            <button type='button' onClick={()=>handleRemoveFieldsGetAddResponseOperation()}>Remove Response</button>
                                        </div>
                                    ))
                                         
                                    }
                                </div>
                                </div>}
                        </div>
                    </Tab>
 
                    <Tab eventKey="second" title="POST">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledPost(!isToggledPost)}>+ POST Operation</Button>
                        </div>
                        <div>
                            {isToggledPost && <div className={styles.GetOperation}>
                                <div>
                                    {/* <label>Operation ID : </label><input name='postOperationId' value={postOperationId} onChange={handleChangePostOperationId} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='postDescription' value={postOperationDescription} onChange={handleChangePostOperationDescription} size={40} type='text' placeholder='Enter any description'></input> */}
                                    <label>Operation ID : </label><input name='postOperationId' value={postOperationId} onChange={e => handleInputChange(e, setPostOperationId)} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='postDescription' value={postOperationDescription} onChange={e => handleInputChange(e, setPostOperationDescription)} size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledPostHeaderBtn(!isToggledPostHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledPostQueryParamBtn(!isToggledPostQueryParamBtn)}>+ Query Param</button>
                                    <button type='button' onClick={()=>setIsToggledPostCookieBtn(!isToggledPostCookieBtn)}>+ Cookie</button>
                                    <button type="button" onClick={()=>setIsToggledPostSecurityBtn(!isToggledPostSecurityBtn)}>+ Security</button>
                                    <button type='button' onClick={()=>setIsToggledPostResponseBtn(!isToggledPostResponseBtn)}>+ Responses</button>
                                    {/* <button type='button' onClick={()=>setIsToggledPostAddResponseAddHeaderBtn(!isToggledPostAddResponseAddHeaderBtn)}>+ Response Headers</button> */}

                                    <br></br>
                                    {isToggledPostHeaderBtn &&
                                        postOperationAddHeaderFormData.map((formData,index)=>(
                                        <div key={index} className={styles.getHeadersFormContainer}>
                                            {/* POST OPERATION , ADD HEADERS FORM */}
                                            <ReusableForm
                                            formTitle={'Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPostAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddHeaderOperation}
                                            ></ReusableForm>
                                        </div>
                                        ))
                                       
                                    }
                                    <br></br>
                                    {isToggledPostQueryParamBtn &&
                                        postOperationAddQueryParamFormData.map((formData,index)=>(
                                        <div key={index}>
                                            {/* POST OPERATION , ADD QUERY PARAM FORM */}
                                            <ReusableForm
                                            formTitle={'Query Params :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            handleAddFields={handleAddFieldsPostAddQueryParamOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddQueryParamOperation}
                                            ></ReusableForm>
                                        </div>
                                        )) 
                                    }
                                    <br></br>
                                    {isToggledPostCookieBtn &&
                                    postOperationAddCookieFormData.map((formData,index)=>(
                                        <div key={index}>
                                            {/* POST OPERATION , ADD COOKIE FORM */}
                                            <ReusableForm
                                            formTitle={'Cookies :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            handleAddFields={handleAddFieldsPostCookieOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddCookieOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))   
                                    }
                                    <br></br>
                                    {isToggledPostSecurityBtn && <p>Security Button Clicked</p>}
                                    <br></br>
                                    {isToggledPostResponseBtn &&
                                    postOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseForm
                                            formTitle={'Response'}
                                            formLabel1={'Type: '}
                                            formLabel2={'Description: '}
                                            formLabel3={'Format: '}
                                            type={formData.type}
                                            description={formData.description}
                                            format={formData.format}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddResponseFormData,setPostOperationAddResponseFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddResponseFormData,setPostOperationAddResponseFormData)}
                                            formatFunc={(e)=>handleFormData(e,index,postOperationAddResponseFormData,setPostOperationAddResponseFormData)}
                                            handleAddFields={handleAddFieldsPostResponseOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddResponseOperation}
                                            />
                                        </div>
                                      
                                    ))
                                    }
                                    <br></br>
                                    {isToggledPostResponseBtn && <button type='button' onClick={()=>setIsToggledPostAddResponseAddHeaderBtn(!isToggledPostAddResponseAddHeaderBtn)}>+ Response Headers</button>}
                                    {isToggledPostAddResponseAddHeaderBtn &&
                                    postOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseHeaderForm
                                            formTitle={'Response Headers'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description :'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPostResponseAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddResponseAddHeaderOperation}
                                            ></ReusableResponseHeaderForm>
                                        </div>
                                    ))
                                    }
                                </div>
                                </div>}
                        </div>
                    </Tab>
 
                    <Tab eventKey="third" title="PUT">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledPut(!isToggledPut)}>+ PUT Operation</Button>
                        </div>
                        <div>
                            {isToggledPut && <div className={styles.GetOperation}>
                                <div>
                                    {/* <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id" name='operation-id' value={putOperationId} onChange={handleChangePutOperationId}></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description' name='description' value={putOperationDescription} onChange={handleChangePutOperationDescription}></input> */}
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id" name='operation-id' value={putOperationId} onChange={e => handleInputChange(e, setPutOperationId)}></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description' name='description' value={putOperationDescription} onChange={e => handleInputChange(e, setPutOperationDescription)}></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledPutHeaderBtn(!isToggledPutHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledPutQueryParamBtn(!isToggledPutQueryParamBtn)}>+ Query Param</button>
                                    <button type='button' onClick={()=>setIsToggledPutCookieBtn(!isToggledPutCookieBtn)}>+ Cookie</button>
                                    <button type="button" onClick={()=>setIsToggledPutSecurityBtn(!isToggledPutSecurityBtn)}>+ Security</button>
                                    <button type='button' onClick={()=>setIsToggledPutResponseBtn(!isToggledPutResponseBtn)}>+ Responses</button>
                                    <br></br>
                                    {isToggledPutHeaderBtn &&
                                    putOperationAddHeaderFormData.map((formData,index)=>(
                                        <div key={index} className={styles.getHeadersFormContainer}>
                                            {/* PUT OPERATION , ADD HEADERS FORM */}
                                            <ReusableForm
                                            formTitle={'Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPutAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddHeaderOperation} 
                                            ></ReusableForm>
                                        </div>
                                    ))
                                        
                                    }
                                    <br></br>
                                    {isToggledPutQueryParamBtn &&
                                    putOperationAddQueryParamFormData.map((formData,index)=>(
                                        <div key={index}>
                                            {/* PUT OPERATION , ADD QUERY PARAMS FORM */}
                                            <ReusableForm
                                            formTitle={'Query Params :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            handleAddFields={handleAddFieldsPutAddQueryParamOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddQueryParamOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))
                                       
                                    }
                                    <br></br>
                                    {isToggledPutCookieBtn &&
                                    putOperationAddCookieFormData.map((formData,index)=>(
                                        <div key={index}>
                                            
                                            {/* PUT OPERATION , ADD COOKIE FORM */}
                                            <ReusableForm
                                            formTitle={'Cookie :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            handleAddFields={handleAddFieldsPutCookieOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddCookieOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))
                                    }
                                    <br></br>
                                    {isToggledPutSecurityBtn && <p>Security Button Clicked</p>}
                                    <br></br>
                                    {isToggledPutResponseBtn &&
                                    putOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseForm
                                            formTitle={'Response'}
                                            formLabel1={'Type : '}
                                            formLabel2={'Description : '}
                                            formLabel3={'Format : '}
                                            type={formData.type}
                                            description={formData.description}
                                            format={formData.format}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddResponseFormData,setPutOperationAddResponseFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddResponseFormData,setPutOperationAddResponseFormData)}
                                            formatFunc={(e)=>handleFormData(e,index,putOperationAddResponseFormData,setPutOperationAddResponseFormData)}
                                            handleAddFields={handleAddFieldsPutResponseOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddResponseOperation}
                                            />
                                        </div>
                                      
                                    ))
                                    }
                                    <br></br>
                                    {isToggledPutResponseBtn && <button type='button' onClick={()=>setIsToggledPutAddResponseAddHeaderBtn(!isToggledPutAddResponseAddHeaderBtn)}>+ Response Headers</button>}
                                    {isToggledPutAddResponseAddHeaderBtn &&
                                    putOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseHeaderForm
                                            formTitle={'Response Headers'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description :'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPutResponseAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddResponseAddHeaderOperation}
                                            ></ReusableResponseHeaderForm>
                                        </div>
                                    ))
                                    }
                                </div>
                                </div>}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        {/* <button>
        <a
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify({url},null,4)
        )}`}
        download="filename.json"
        style={{textDecoration:'none',fontColor:'black'}}
        >
            Download JSON
          </a>
        </button> */}
        
      </form>
    </div>
  )
}
export default ParamsFormT
