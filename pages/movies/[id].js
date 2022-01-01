import { useRouter } from 'next/router'

function Movie({ movie }) {


    movie = movie[0]

    console.log(movie)


    function separateWithCommas(list) {
        return list.join(', ')
    }

    function convertRuntime(runtime) {
        const mins = runtime % 60;
        const hours = (runtime - mins) / 60;
        return `${hours}h ${mins}m`
    }


    return (
        <div className='p-4'>

            <section className={`flex sm:items-end space-x-7 bg-gradient-to-b from-[#444444] to-inherit  p-8 rounded-md`}>
                <img
                    className="object-cover h-2/3 w-1/3 sm:h-full sm:w-44 shadow-2xl rounded-md"
                    src={movie.poster}
                    alt=""
                    id="img"
                />

                {/* {get_average_rgb(document.getElementById('img'))} */}


                <div>
                    <p>{movie.year}</p>
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{movie.title}</h1>

                    <h3 className='xl:mt-4'>{`Rated ${movie.rated}`} &middot; {convertRuntime(movie.runtime)}</h3>

                    <hr className='border-gray-700 my-2' />

                    <p>{separateWithCommas(movie.genres)}</p>

                </div>



            </section>

            <div className='p-8'>




                <p>
                    Directed by: {separateWithCommas(movie.directors)}
                </p>

                <p>
                    Starring: {separateWithCommas(movie.cast)}
                </p>

                <hr className='border-gray-700 my-2' />

                <p>{movie.fullplot}</p>

                <hr className='border-gray-700 my-2' />

                <p>{`Metacritic ${movie.metacritic}`}</p>
                <p>{`Rotten Tomatoes ${movie.tomatoes.viewer.meter}`}</p>
                <p>{`IMDB ${movie.imdb.rating}`}</p>


            </div>
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