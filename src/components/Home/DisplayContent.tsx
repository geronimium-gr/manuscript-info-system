import React from "react";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../environments/environment.prod";

import './DisplayContent.css';


const DisplayContent = (props: { thesisList: any[]; }) => {

    const updateThesisContent = async (id: string, surname: string) => {
        const thesisDoc = doc(db, "thesis", id);
        const newData = {thesisTitle: surname + " (Just Changed)"};
        await updateDoc(thesisDoc, newData);

        //Paayos na lang nito kung maaari ahaha
        window.location.reload();
    }

    const deleteThesisContent = async (id: string) => {
        const thesisDoc = doc(db, "thesis", id);
        await deleteDoc(thesisDoc);

        //Paayos na lang nito kung maaari ahaha
        window.location.reload();
    }

    return (
        <div>
            {
                props.thesisList.map((thesis: any) => {
                    return (
                    <div key={thesis.id} className="thesis-item__holder">
                        <h2>Title: {thesis.thesisTitle}</h2>
                        <h3>Abstract: {thesis.abstract}</h3>
                        <button onClick={() => updateThesisContent(thesis.id, thesis.thesisTitle)}>Change Title</button>
                        <button onClick={() => deleteThesisContent(thesis.id)}>Delete</button>
                    </div>
                    );
                })
            }
        </div>
    )
}

export default DisplayContent