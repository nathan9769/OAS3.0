import React , {useState} from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import styles from '../style.module.css'
 
const TabForms = () =>{
 
    const[isToggledGet,setIsToggledGet] = useState(false)
    const[isToggledPost,setIsToggledPost] = useState(false)
    const[isToggledPut,setIsToggledPut] = useState(false)

    const[isToggledGetHeaderBtn,setIsToggledGetHeaderBtn] = useState(false)
    const[isToggledGetQueryParamBtn,setIsToggledQueryParamBtn] = useState(false)
    const[isToggledGetSecurityBtn,setIsToggledGetSecurityBtn] = useState(false)

    const[isToggledPostHeaderBtn,setIsToggledPostHeaderBtn] = useState(false)
    const[isToggledPostQueryParamBtn,setIsToggledPostQueryParamBtn] = useState(false)
    const[isToggledPostSecurityBtn,setIsToggledPostSecurityBtn] = useState(false)

    const[isToggledPutHeaderBtn,setIsToggledPutHeaderBtn] = useState(false)
    const[isToggledPutQueryParamBtn,setIsToggledPutQueryParamBtn] = useState(false)
    const[isToggledPutSecurityBtn,setIsToggledPutSecurityBtn] = useState(false)


 
    return(
        <>
            <div className={styles.tabForms}>
                <Tabs defaultActiveKey="first">


                    <Tab eventKey="first" title="GET">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledGet(!isToggledGet)}>+ GET Operation</Button>
                        </div>
                        <div>
                            {isToggledGet && <div className={styles.GetOperation}>
                                <form>
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledGetHeaderBtn(!isToggledGetHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledQueryParamBtn(!isToggledGetQueryParamBtn)}>+ Query Param</button>
                                    <button type="button" onClick={()=>setIsToggledGetSecurityBtn(!isToggledGetSecurityBtn)}>+ Security</button>
                                    <br></br>
                                    {isToggledGetHeaderBtn &&
                                        <div className={styles.getHeadersFormContainer}>
                                            <h6>Headers</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select><br></br>
                                            <button type='submit'>Add</button> &nbsp;
                                            <button type="submit">Remove</button>
                                        </div> 
                                    }
                                    <br></br>
                                    {isToggledGetQueryParamBtn &&
                                        <div>
                                            <h6>Query Parameters</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                            
                                        </div>  
                                    }
                                    {isToggledGetSecurityBtn && <p>Security Button Clicked</p>}
                                </form>
                                </div>}
                        </div>
                    </Tab>


                    <Tab eventKey="second" title="POST">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledPost(!isToggledPost)}>+ POST Operation</Button>
                        </div>
                        <div>
                            {isToggledPost && <div className={styles.GetOperation}>
                                <form>
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledPostHeaderBtn(!isToggledPostHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledPostQueryParamBtn(!isToggledPostQueryParamBtn)}>+ Query Param</button>
                                    <button type="button" onClick={()=>setIsToggledPostSecurityBtn(!isToggledPostSecurityBtn)}>+ Security</button>
                                    <br></br>
                                    {isToggledPostHeaderBtn &&
                                        <div className={styles.getHeadersFormContainer}>
                                            <h6>Headers</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div> 
                                    }
                                    <br></br>
                                    {isToggledPostQueryParamBtn &&
                                        <div>
                                            <h6>Query Parameters</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div>  
                                    }
                                    <br></br>
                                    {isToggledPostSecurityBtn && <p>Security Button Clicked</p>}
                                </form>
                                </div>}
                        </div>
                    </Tab>


                    <Tab eventKey="third" title="PUT">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledPut(!isToggledPut)}>+ PUT Operation</Button>
                        </div>
                        <div>
                            {isToggledPut && <div className={styles.GetOperation}>
                                <form>
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledPutHeaderBtn(!isToggledPutHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledPutQueryParamBtn(!isToggledPutQueryParamBtn)}>+ Query Param</button>
                                    <button type="button" onClick={()=>setIsToggledPutSecurityBtn(!isToggledPutSecurityBtn)}>+ Security</button>
                                    <br></br>
                                    {isToggledPutHeaderBtn &&
                                        <div className={styles.getHeadersFormContainer}>
                                            <h6>Headers</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div> 
                                    }
                                    <br></br>
                                    {isToggledPutQueryParamBtn &&
                                        <div>
                                            <h6>Query Parameters</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div>  
                                    }
                                    <br></br>
                                    {isToggledPutSecurityBtn && <p>Security Button Clicked</p>}
                                </form>
                                </div>}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
 
export default TabForms