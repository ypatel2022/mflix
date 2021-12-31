import { useRouter } from 'next/router'

function Movie({ movie }) {


    console.log(movie);

    return (
        <div>
            {movie[0].title}
        </div>
    )
}


export async function getServerSideProps({ query }) {

    // console.log(query);

    // get todo data from API
    const res = await fetch(`http://localhost:3000//api/movies/${query.id}`)
    const movie = await res.json()

    // return props
    return {
        props: { movie },
    }
}

export default Movie