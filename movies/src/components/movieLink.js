import List from '../components/list.js'

function MovieLink({movieLinks}) {
    const arrayOfJsxElements = movieLinks.map((link) => {
        return (
            <List url={link.url} name = {link.name}></List>
            )
    })

    return (
        <>
        <p>{arrayOfJsxElements}</p>
        </>
    )
}

export default MovieLink