import Head from 'next/head';
import { useRouter } from 'next/router'

function Movie({ movie }) {


    movie = movie[0]


    // separate list items with commas
    function separateWithCommas(list) {
        return list.join(', ')
    }

    // convert total runtime into mins and hours
    function convertRuntime(runtime) {
        if (runtime) {

            const mins = runtime % 60;
            const hours = (runtime - mins) / 60;
            return `${hours}h ${mins}m`
        }
        return ''
    }


    return (
        <div className='p-4'>

            <Head>
                <title>{"mflix: " + movie.title}</title>
            </Head>


            <section className={`flex sm:items-end space-x-7 bg-gradient-to-b from-[#444444] to-inherit  p-8 rounded-md`}>

                <img
                    className="object-cover h-2/3 w-1/3 sm:h-full sm:w-44 shadow-2xl rounded-md"
                    src={movie.poster}
                    alt=""
                    id="img"
                />



                <div>
                    <p>{movie?.year}</p>
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{movie.title}</h1>

                    <h3 className='xl:mt-4'>{`Rated ${movie?.rated}`} &middot; {convertRuntime(movie.runtime)}</h3>

                    <hr className='border-gray-700 my-2' />

                    <p>{separateWithCommas(movie?.genres)}</p>

                </div>



            </section>

            <div className='p-8'>

                <p>
                    <span className='font-semibold text-lg'>Directed by:</span> {separateWithCommas(movie?.directors)}
                </p>

                <p>
                    <span className='font-semibold text-lg'>Starring:</span> {separateWithCommas(movie?.cast)}
                </p>



                <hr className='border-gray-700 my-2' />
                <h1><span className='font-semibold text-lg'>Plot:</span></h1>
                <p>{movie?.fullplot}</p>



                <hr className='border-gray-700 my-2' />

                <p><span className='font-semibold text-lg'>Metacritic</span> {movie?.metacritic}</p>

                <p><span className='font-semibold text-lg'>Rotten Tomatoes</span> {movie?.tomatoes?.viewer?.meter}</p>

                <p><span className='font-semibold text-lg'>IMDB</span> {movie?.imdb?.rating}</p>


            </div>
        </div>
    )
}


export async function getServerSideProps({ query }) {

    // console.log(query);

    // get todo data from API
    const res = await fetch(`${process.env.API_ENDPOINT}/api/movies/${query.id}`)
    const movie = await res.json()

    // return props
    return {
        props: { movie },
    }
}

export default Movie