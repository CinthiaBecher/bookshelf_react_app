import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import GenreSection from './components/GenreSection';

function App() {

    const genres = [
        {
            name: 'Romance',
            firstColor: '#E896B3',
            secondColor: '#F6E0E1'
        },
        {
            name: 'Action/Adventure',
            firstColor: '#B8F1B',
            secondColor: '#DEF9DB'
        },
        {
            name: 'Fantasy',
            firstColor: '#BD7AFF',
            secondColor: '#F5E6FF'
        },
        {
            name: 'Horror/Mystery',
            firstColor: '#B1B1B1',
            secondColor: '#E9E9E9'
        },
        {
            name: 'Biography',
            firstColor: '#F6E0A5',
            secondColor: '#F8EED4'
        },
        {
            name: 'Self-help',
            firstColor: '#82CFFA',
            secondColor: '#DAEEFA'
        },
        {
            name: 'Economics/Finance',
            firstColor: '#A6D157',
            secondColor: '#E7F0D1'
        },
    ]
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