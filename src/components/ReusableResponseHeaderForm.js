import React from "react";
 
const ReusableResponseHeaderForm = ({formTitle,formLabel1,formLabel2,formLabel3,name,type,description,nameFunc,typeFunc,descriptionFunc,handleAddFields,handleRemoveFields}) =>{
   
    const ChildToParentName = (e) =>{
        nameFunc(e)
    }
 
    const ChildToParentType = (e) =>{
        typeFunc(e)
    }
    const ChildToParentDescription = (e) =>{
        descriptionFunc(e)
    }
    
    return(
        <>
            <h6>{formTitle}</h6>
            <label>{formLabel1}</label>
            <input name='name' type='text' value={name} onChange={ChildToParentName}></input><br></br>
            <label>{formLabel2}</label>
            <select name='type' value={type} onChange={ChildToParentType}>
                <option>String</option>
                <option>Boolean</option>
                <option>Array</option>
            </select><br></br>
            <label>{formLabel3}</label>
            <input name='description' type='text' value={description} onChange={ChildToParentDescription}></input><br></br>
            <button type='button' onClick={()=>handleAddFields()}>Add Response Header</button>
            <button type='button' onClick={()=>handleRemoveFields()}>Remove Response Header</button>
        </>
    )
}
 
export default ReusableResponseHeaderForm