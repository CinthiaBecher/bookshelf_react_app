import './book.css'

const Book = () => {
    return (
        <div className='bookCard'>
            <div className='bookCover'>
                <img src='https://m.media-amazon.com/images/I/91bPixy8YxL.jpg' />
            </div>

            <div className='bookInfo'>
                <h4>Orgulho e Preconceito</h4>
                <h5>Jane Austen</h5>
                <div className='ratingStar'>
                    <p>5</p>
                    <img src='/images/star.png'/>
                </div>

            </div>
        </div>
    )

}

export default Book