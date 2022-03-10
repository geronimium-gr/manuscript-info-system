import React, {useState} from "react";
import { addDoc, CollectionReference } from "firebase/firestore";
import './CreateContent.css'

const CreateContent = (props: { thesisCollection: CollectionReference<unknown>; }) => {
    const [newTitle, setTitle] = useState("");
    const [newAbstract, setAbstract] = useState("");
    const [newAdviser, setAdviser] = useState("");


    const titleHandler = (event: any) => {
        setTitle(event.target.value);
    }

    const abstractHandler = (event: any) => {
        setAbstract(event.target.value);
    }

    const adviserHandler = (event: any) => {
        setAdviser(event.target.value);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();
        await addDoc(props.thesisCollection, {thesisTitle: newTitle, abstract: newAbstract, adviser: newAdviser});

        setTitle('');
        setAbstract('');
        setAdviser('');

        //Paayos na lang to kung maaari ahaha
        window.location.reload();
    } 

    return (
        <form onSubmit={submitHandler}>
            <div className="new-thesis">
                <div className="new-thesis__controls">
                    <div className="new-thesis__control">
                        <label>Thesis Title</label>
                        <input 
                            type="text"
                            placeholder="Enter Thesis Title"
                            value={newTitle}
                            onChange={titleHandler}
                        />
                    </div>
                    <div className="new-thesis__control">
                        <label>Adviser</label>
                        <input 
                            type="text"
                            placeholder="Enter Adviser"
                            value={newAdviser}
                            onChange={adviserHandler}
                        />
                    </div>
                    <div className="new-thesis__control">
                        <label>Abstract</label>
                        <textarea 
                            rows={4}
                            placeholder="Enter Abstract"
                            value={newAbstract}
                            onChange={abstractHandler}
                        />
                    </div>
                </div>
                <div className="new-thesis__actions">
                    <button type="submit">Add Thesis Content</button>
                </div>
            </div>
        </form>
    );
}

export default CreateContent;