import './Form.css'
import InputText from '../InputText';
import Dropdown from '../Dropdown';
import Button from '../Button';
import RatingInput from '../RatingInput';
import { useState } from 'react';

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [genre, setGenre] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form Submetido =>' ,title, author, cover, genre)
        props.aoLivroCadastrado({
            title,
            author,
            cover,
            genre
        })
        setTitle('')
        setAuthor('')
        setCover('')
        setGenre('')
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Add a new book to your shelf</h2>
                <div className='SideBySide'>
                    <InputText 
                        required = {true} 
                        label="Title" 
                        placeholder="Type book title" 
                        valor = {title} 
                        aoAlterado = {valor => setTitle(valor)}
                    />
                    <InputText 
                        required = {true} 
                        label="Author" 
                        placeholder="Type book author's name" 
                        valor = {author} 
                        aoAlterado = {valor => setAuthor(valor)}
                    />                
                </div>
                <div className='SideBySide'>
                    <InputText 
                        required = {true} 
                        label="Cover" 
                        placeholder="Cover image URL" 
                        valor = {cover} 
                        aoAlterado = {valor => setCover(valor)}
                    />
                    <Dropdown 
                        label = "Genre" 
                        items = {props.genres} 
                        valor = {genre} 
                        aoAlterado = {valor => setGenre(valor)}>
                        </Dropdown>
                </div>
                <div className='SideBySide'>
                    <RatingInput></RatingInput>
                    <div className='align-button'><Button>Add new book</Button></div>
                </div>
            </form>
        </section>
    )
}

export default Form