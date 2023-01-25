import React, { createContext, useState } from 'react'

export const ContactContext = createContext();

export default function ContactContextProvider({children}) {
    const [Contact, setContact] = useState([
      {
        Nom : "Aya AHSAIEN", 
        Téléphone : "555-555-5999",
        Email : "aaya.ahsaien@gmail.com",
        ville : "Tanger"
      },
      {
        Nom : "Sarah Johnson", 
        Téléphone : "555-555-1234", 
        Email : "sarahj@example.com",
        ville : "New York"
      },
      {
        Nom : "Michael Brown", 
        Téléphone : "555-555-5678",
        Email : "michaelb@example.com",
        ville : "Los Angeles"
      },
      {
        Nom : "Jennifer Martinez", 
        Téléphone : "555-555-3579", 
        Email : "jenniferm@example.com",
        ville : "Chicago"
      },
      {
        Nom : "John Smith", 
        Téléphone : "555-555-5555", 
        Email : "johnsmith@email.com",
        ville : "Houston"
      }]);
    
    
  return (
    <div>
      <ContactContext.Provider value={[Contact, setContact]}>
        {children}
      </ContactContext.Provider>
    </div>
  )
}
