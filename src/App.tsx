import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from "./environments/environment.prod";
import { collection, getDocs } from "firebase/firestore";
import CreateContent from './components/Home/CreateContent';
import DisplayContent from './components/Home/DisplayContent';


const App = () => {

  //Use State for Thesis Collection
  const [thesis, setThesis] : any = useState([]);

  //Reference of Thesis Collesction
  const thesisCollectionRef = collection(db, "thesis");

  //Use to render the list of Thesis Content
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(thesisCollectionRef);
      const thesisData = data.docs.map((doc) => ({...doc.data(), id: doc.id }))
      setThesis(thesisData);
    };
    getUsers();
  }, []);

  return (
    <div>
      <CreateContent thesisCollection={thesisCollectionRef} />
      <DisplayContent thesisList={thesis} />
    </div>
  );
}

export default App;
