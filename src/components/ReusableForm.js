import React  from 'react'

const ReusableForm = ({formTitle,formLabel1,formLabel2,formLabel3,formLabel4,formButton1,formButton2,name,type,description,required,nameFunc,descriptionFunc,typeFunc,requiredFunc,handleAddFields,handleRemoveFields}) => {
    const ChildToParentName = (e) =>{
        nameFunc(e)
    }
 
    const ChildToParentType = (e) =>{
        typeFunc(e)
    }
 
    const ChildToParentDescription = (e) =>{
        descriptionFunc(e)
    }
 
    const ChildToParentRequired = (e) =>{
        requiredFunc(e)
    }

    return (
        <>
            <h6>{formTitle}</h6>
            <label>{formLabel1}</label>
            <input name='name' type='text' placeholder='Name..' value={name} onChange={ChildToParentName}></input><br></br>
            <label>{formLabel2}</label>
            <select name = 'type' value = {type} onChange={ChildToParentType}>
                <option>string</option>
                <option>number</option>
                <option>boolean</option>
                <option>integer</option>
                <option>array</option>
            </select> &nbsp; <br></br>
            <label>{formLabel3}</label>
            <input name='description' type='text' placeholder='Description..' value={description} onChange={ChildToParentDescription}></input>
            <label>{formLabel4}</label>
            <select name='required' value={required} onChange={ChildToParentRequired}>
                <option>yes</option>
                <option>no</option>
            </select><br></br>
            <button type="button" onClick={()=>handleAddFields()}>{formButton1}</button> &nbsp;
            <button type="button" onClick={()=>handleRemoveFields()}>{formButton2}</button>
        </>
    )
}

export default ReusableForm