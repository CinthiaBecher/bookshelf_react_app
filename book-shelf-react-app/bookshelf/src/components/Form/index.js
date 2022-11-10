import './Form.css'
import InputText from '../InputText';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const genres = [
        'Romance',
        'Action/Adventure', 
        'History',
        'Fantasy',
        'Horror/Mystery',
        'Biography',
        'Self-help',
        'Economics/Finance' 
    ]

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [genre, setGenre] = useState('')

    const save = (evento) => {
        evento.preventDefault()
        props.onNewBook({title, author, cover, genre})
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Please, provide book's information</h2>
                <InputText required = {true} label="Title" placeholder="Type book title" newValue = {title} onChanges = {newValue => setTitle(newValue)}/>
                <InputText required = {true} label="Author" placeholder="Type book author's name" newValue = {author} onChanges = {newValue => setAuthor(newValue)}/>
                <InputText required = {true} label="Cover" placeholder="Cover image URL" newValue = {cover} onChanges = {newValue => setCover(newValue)}/>
                <Dropdown label = "Genre" items = {genres} newValue = {genre} onChanges = {newValue => setGenre(newValue)}></Dropdown>
                <Button>Add new book</Button>
            </form>
        </section>
    )
}

export default Form