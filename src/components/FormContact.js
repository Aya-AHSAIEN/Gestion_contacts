import React from 'react'
import { useState, useContext } from 'react'
import { ContactContext } from '../context/ContactContext';
import { useNavigate } from 'react-router-dom';

export default function FormContact() {
    const navigate = useNavigate()
    const [Nom, setNom] = useState('');
    const [phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [ville, setVille] = useState('');
    const [Contact, setContact] = useContext(ContactContext);

    function addContact(e) {
      e.preventDefault();
      if (!Nom || !phone || !Email || !ville) {
        alert('Please fill out all the fields!');
        return;
      }
      setContact([...Contact, { Nom: Nom, Téléphone: phone, Email: Email, ville: ville }])
      setNom('');
      setPhone('');
      setEmail('');
      setVille('');
      navigate('/');
    }
    
    function Cancel(){
      navigate('/');
    }
    
  return (
    <div>
      <h1 id='Form-title'>Ajouter un contact</h1>
      <form className='FormContact'>
        <div className='form-input'>
          <label> Nom :</label>
          <input type="text" value={Nom} onChange={e => setNom(e.target.value)} />
        </div>
        
        <div className='form-input'>
          <label> Téléphone : </label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>

        <div className='form-input'>
          <label> Email : </label>
          <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className='form-input'>
          <label> Ville :</label>
          <input type="text" value={ville} onChange={e => setVille(e.target.value)} />
        </div>
        <br />
        <button onClick={addContact} className='Ajouter'>Ajouter</button>
        <button onClick={Cancel} className='Cancel'>Annuler</button>

      </form>
    </div>
  )
}
