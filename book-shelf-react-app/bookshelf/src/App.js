import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import GenreSection from './components/GenreSection';

function App() {

    const genres = [
        {
            name: 'Fiction & Fantasy',
            firstColor: '#521ad1',
            secondColor: '#d4c5f5'
        },        
        {
            name: 'Romance',
            firstColor: '#E896B3',
            secondColor: '#F6E0E1'
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
        }
    ]

    const [books, setBooks] = useState([])

    const aoNovoLivroAdicionado = (book) => {
        console.log(book)
        setBooks([...books, book])
    }

    return (
        <div className = "App">
            <Banner/> 
            <Form genres={genres.map(genre => genre.name)} aoLivroCadastrado ={book => aoNovoLivroAdicionado(book)}/>
            <h2 className='shelfTitle'>Your Shelf</h2>
            {genres.map (genre => <GenreSection 
                key={genre.name} 
                name={genre.name} 
                firstColor={genre.firstColor} 
                secondColor={genre.secondColor}
                books = {books.filter(book => book.genre == genre.name)}
            />)}            

        </div>
    );
}

export default App;