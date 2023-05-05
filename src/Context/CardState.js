import React, { useState, useEffect } from 'react'
import CardContext from './CardContext'

const CardState = (props) => {
    const [allDettails, updatenewDetails] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/find', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        updatenewDetails(json);
    }

    const saveData = async (enterdallData) => {
        await fetch('http://localhost:4000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enterdallData),
        }).then(
            response => {
                fetchData();
            }
        )
        // updatenewDetails(updateDetails);
    }

    const DeleteCard = (id) => {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(
            response => {
                fetchData();
            }
        )
    }
    const UpdateCard = async (dataContainer) => {
        await fetch(`http://localhost:4000/data/${dataContainer.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataContainer)
        }).then(
            response => {
                fetchData();
            }
        )
    }
    return (
        <div>
            <CardContext.Provider value={{ UpdateCard, DeleteCard, saveData, allDettails }}>
                {props.children}
            </CardContext.Provider>
        </div>
    )
}

export default CardState
