import './Form.css'
import InputText from '../InputText';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Please, provide book's information</h2>
                <InputText label="Title" placeholder="Type book title" />
                <InputText label="Author" placeholder="Type book author's name" />
                <InputText label="Cover" placeholder="Cover image URL" />

            </form>
        </section>
    )
}

export default Form