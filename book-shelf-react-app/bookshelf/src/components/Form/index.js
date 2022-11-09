import './Form.css'
import InputText from '../InputText';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = () => {

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

    const save = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Please, provide book's information</h2>
                <InputText required = {true} label="Title" placeholder="Type book title" />
                <InputText required = {true} label="Author" placeholder="Type book author's name" />
                <InputText required = {true} label="Cover" placeholder="Cover image URL" />
                <Dropdown label = "Genre" items = {genres}></Dropdown>
                <Button>Add new book</Button>
            </form>
        </section>
    )
}

export default Form