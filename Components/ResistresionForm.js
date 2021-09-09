import React, { useState } from "react";

export default function ResistresionForm() {

    const [userResistresion, setUserResistresion] = useState({
        name: "",
        age: "",
        location: "",
        intrest: "",
        webpage: "",
        description: ""
    })

    const [record, setRecord] = useState([]);

    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserResistresion({ ...userResistresion, [name]: value });
    }

    const handeleSubmit =(e)=>{
        e.preventDefault();

        const newRecord = {...userResistresion, id:new Date().getTime().toString()};
        console.log(record);
        setRecord([...record, newRecord]);
        setUserResistresion({ name: "", age: "", location: "", intrest: "", webpage: "", description: ""})
    }
    return (
        <>
            <form action="" onSubmit={handeleSubmit}>
                <div>
                    Enter name : <input type="text"
                        value={userResistresion.name}
                        onChange={handelInput}
                        name="name" />
                </div>
                <br />
                <div>
                    Enter age : <input type="number"
                        value={userResistresion.age}
                        onChange={handelInput}
                        name="age" />
                </div>
                <br />
                <div>
                    Enter location : <input type="text"
                        value={userResistresion.location}
                        onChange={handelInput}
                        name="location" />
                </div>
                <br />
                <div>
                    Enter intrest : <input type="text"
                        value={userResistresion.intrest}
                        onChange={handelInput}
                        name="intrest" />
                </div>
                <br />
                <div>
                    Enter webpage : <input type="url"
                        value={userResistresion.webpage}
                        onChange={handelInput}
                        name="webpage" />
                </div>
                <br />
                <div>
                    Description : <textarea
                        value={userResistresion.description}
                        onChange={handelInput}
                        name="description" cols="15" rows="1">description</textarea>
                </div>
                <br />
                <button type="submite">submite</button>
            </form>
            <div>
                {
                    record.map((curElement)=>{
                        return (
                            <table border="1" cellSpacing="0">
                                <tr>
                                    <th>Name</th><th>Age</th><th>Location</th><th>intrest</th><th>webpage</th><th>desctiption</th>
                                </tr>
                                <tr>
                                    <td>{curElement.name}</td>
                                    <td>{curElement.age}</td>
                                    <td>{curElement.location}</td>
                                    <td>{curElement.intrest}</td>
                                    <td>{curElement.webpage}</td>
                                    <td>{curElement.description}</td>
                                </tr>
                            </table>
                        )
                    })
                }
            </div>
        </>
    )
}