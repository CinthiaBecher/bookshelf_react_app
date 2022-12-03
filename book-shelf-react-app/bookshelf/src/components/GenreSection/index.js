import './GenreSection.css'
import Book from '../Book';

const GenreSection = (props) => {
    const css = { backgroundColor: props.secondColor }

    return (
        <section className='GenreSection' style={css}>
            <h3 style={{borderColor:  props.firstColor}}>{props.name}</h3>
            {props.books.map ( book => <Book/> )}
            
        </section>
    )
}

export default GenreSection