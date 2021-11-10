import React from 'react'
import {useEffect, useState} from 'react'

function Leyendo_url() {

    const url="https://jsonplaceholder.typicode.com/users";
    const [users, setUsers]=useState();

    const fetchApi= async ()=>{
        const response = await fetch(url);
        const json = await response.json();
        setUsers(json);
    }

    useEffect(() => {
        fetchApi();
    },[])


    return (
        <div className="row">
            <div className="col">
                <h1>
                    Users:
                    <hr />
                    <ul>
                        {
                            users.map((users,index)=>{
                                return(
                                    <li className="h4">{users.name}</li>
                                )
                            })
                        }
                    </ul>
                </h1>
            </div>
        </div>
    )
}

export default Leyendo_url
