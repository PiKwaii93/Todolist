import React from "react";

export default function Card({finishID, deleteID, title, content, id}) {


    return (

            <div className="card mb-5 mx-auto unchecked" onClick={() => finishID(id)} id={id} style={{maxWidth: '400px'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 ">Tâche numéro : {id}</h6>
                    <p className="card-text">{content}</p>
                    <button className="btn btn-danger" onClick={() => deleteID(id)}>Delete</button>
                </div>
            </div>
    )
}