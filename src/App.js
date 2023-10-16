
import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
function App() {
  const [Activities,setActivities] = useState(JSON.parse(localStorage.getItem('activitiesList')) || []);
  const [search,setSearch] = useState("");
  const [newActivitie,setnewActivitie] = useState("");


  useEffect(

    () =>{localStorage.setItem("activitiesList",JSON.stringify(Activities))}
  ,[Activities])

  const handleCheck = (id) => {
      const updateActivities =  Activities.map((activitie) => (
        activitie.id === id ? {...activitie, checked : !(activitie.checked)} : activitie
      ));

      setActivities(updateActivities);
  }

  const addActivitie = (activitie) => {
    const id = Activities.length ? Activities[Activities.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, Activitie:activitie };
    const listItems = [...Activities, myNewItem];
    setActivities(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newActivitie) return;
    addActivitie(newActivitie);
    setnewActivitie("");
  }


  const handleDelete = (id) => {
    const updateActivities = Activities.filter((activitie)=> activitie.id!==id);
    setActivities(updateActivities);
  }
  return (
    <div className='min-h-screen max-w-2xl mx-auto border border-black border-solid '>
      <Header title={"Activities List"}/>
      <Content Activities={Activities} setActivities={setActivities} search={search} setSearch={setSearch} handleCheck={handleCheck} handleDelete={handleDelete} newActivitie={newActivitie} setnewActivitie={setnewActivitie} handleSubmit={handleSubmit}/>
      <Footer length={Activities.length}/>
    </div>
  );
}

export default App;
