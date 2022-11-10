import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';

function App() {
    const [books, setBooks] = useState([])

    const onNewBookAdded = (book) => {
        console.log(book)
        setBooks(...books, book)
    }

    return (
        <div className = "App">
            <Banner/> 
            <Form onNewBook = {book => onNewBookAdded(book)}/>
        </div>
    );
}

export default App;