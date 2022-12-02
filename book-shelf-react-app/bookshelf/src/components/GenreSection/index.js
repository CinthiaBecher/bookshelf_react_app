import './GenreSection.css'

const GenreSection = (props) => {
    const css = { backgroundColor: props.secondColor }

    return (
        <section className='GenreSection' style={css}>
            <h3 style={{borderColor:  props.firstColor}}>{props.name}</h3>
            
        </section>
    )
}

export default GenreSection