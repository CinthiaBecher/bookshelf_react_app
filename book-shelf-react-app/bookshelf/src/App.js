import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import GenreSection from './components/GenreSection';

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
            <GenreSection name= "Romance"/>
            <GenreSection name= "Fiction"/>
        </div>
    );
}

export default App;