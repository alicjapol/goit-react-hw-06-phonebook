import ContactForm from '../redux/contacts/ContactForm/ContactForm.js'
import ContactList from '../redux/contacts/ContactList/ContactList.js';
import Filter from '../redux/contacts/Filtrer/Filter.js';
import './App.css'
function App() {
  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
