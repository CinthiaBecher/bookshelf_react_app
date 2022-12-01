import './RatingInput.css'

const RatingInput = () =>{
    return (
        <div className='rating'>
            <label>Rating</label>
            <input type="radio" name="webmaster" value="0"/> 0
            <input type="radio" name="webmaster" value="1"/> 1
            <input type="radio" name="webmaster" value="2"/> 2
            <input type="radio" name="webmaster" value="3"/> 3
            <input type="radio" name="webmaster" value="4"/> 4
            <input type="radio" name="webmaster" value="5"/> 5
        </div>
    )
}

export default RatingInput