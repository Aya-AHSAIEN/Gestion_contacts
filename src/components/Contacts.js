import React from 'react'
import { useContext, useState } from 'react';
import { ContactContext }  from '../context/ContactContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faTrash);

export default function Contacts() {
  const [Contact, setContact] = useContext(ContactContext);
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function deleteContact(index) {
    const updatedContacts = Contact.filter((c, i) => i !== index);
    setContact(updatedContacts); 
  }

  const filteredContacts = Contact.filter(c => c.ville.toLowerCase().includes(search.toLowerCase()));

  function sortContacts() {
    filteredContacts.sort((a, b) => {
      if (a.Nom < b.Nom) return -1;
      if (a.Nom > b.Nom) return 1;
      return 0;
    });
    setContact([...filteredContacts]);
  }
  

  return (
      <section>
        <h1>Les Contacts</h1>
        <Link to="/form"><button className='New'>+</button></Link>
        <input type="text" id='search' placeholder="Rechercher par ville" onChange={handleSearch} />
        <button onClick={sortContacts} className='Trier'  ><i className="fa-solid fa-arrow-down-a-z"></i></button>
        {filteredContacts.map((element, index) => {
          const {Nom, Téléphone, Email, ville} = element;
          return (
          <div className='info'>
            <img src="user.png" alt="user" />
            <h2>{Nom}</h2>
            <p><span>Téléphone :</span>{Téléphone}</p>
            <p><span>Email : </span> {Email}</p>
            <p><span>Ville : </span> {ville}</p>
            <button id='delete' onClick={() => deleteContact(index)}><FontAwesomeIcon className="trash-icon" icon={faTrash} /></button>
            <br />
          </div>
          );
        })}
      </section>
  );
}
