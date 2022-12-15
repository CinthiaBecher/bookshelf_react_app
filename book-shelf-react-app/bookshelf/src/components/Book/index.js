import './book.css'

const Book = (props) => {
    return (
        <div className='bookCard'>
            <div className='bookCover'>
                <img src={props.cover}/>
            </div>

            <div className='bookInfo'>
                <h4>{props.title}</h4>
                <h5>{props.author}</h5>
                <div className='ratingStar'>
                    <p>5</p>
                    <img src='/images/star.png'/>
                </div>

            </div>
        </div>
    )

}

export default Book