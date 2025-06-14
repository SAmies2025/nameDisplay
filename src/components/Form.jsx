import { useState } from "react";

export default function Form ({ firstName, middleName, lastName, setFirstName, setMiddleName, setLastName } ) {

    return (
        <form >
            <h1>Friendly Form</h1>
            <input name="firstName" placeholder="Enter First Name" onChange={(e)=>setFirstName(e.currentTarget.value)} value={firstName}/>
            <input name="middleName" placeholder="Enter Middle Name" onChange={(e)=>setMiddleName(e.currentTarget.value)} value={middleName}/>
            <input name="lastName" placeholder="Enter Last Name"onChange={(e)=>setLastName(e.currentTarget.value)} value={lastName}/>
            {/* <button>Submit</button> */}
            {console.log(`${firstName}`) }
        </form>
    );
    //this would be the submit logic which made a whole lot more sense then the OnChange!!!!!!!! 
    // function submitFunc(event) {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     console.log();
    //     const firstName = formData.get("firstName");
    //     const middleName = formData.get("middleName");
    //     const lastName = formData.get("lastName");
    //     const fullName = `${firstName} ${middleName} ${lastName}`.trim();
    //     setNameOfUser(fullName);
    // }

}