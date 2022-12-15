import './GenreSection.css'
import Book from '../Book';

const GenreSection = (props) => {
    const css = { backgroundColor: props.secondColor }

    return (
        (props.books.length > 0) && <section className='GenreSection' style={css}>
            <h3 style={{borderColor:  props.firstColor}}>{props.name}</h3>
            <div className='books'>
                {props.books.map(book => <Book key={book.title} title = {book.title} author = {book.author} cover={book.cover}/>)} 
            </div>
        </section>
        /*: ''*/
    )
}

export default GenreSection