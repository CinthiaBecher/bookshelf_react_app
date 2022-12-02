import './RatingInput.css'

const RatingInput = () =>{
    return (
        <div className='rating'>
            <label className='name'>Rating</label>
            <input type="radio" name="webmaster" value="0"/> <label>0</label>
            <input type="radio" name="webmaster" value="1"/> <label>1</label>
            <input type="radio" name="webmaster" value="2"/> <label>2</label>
            <input type="radio" name="webmaster" value="3"/> <label>3</label>
            <input type="radio" name="webmaster" value="4"/> <label>4</label>
            <input type="radio" name="webmaster" value="5"/> <label>5</label>
        </div>
    )
}

export default RatingInput