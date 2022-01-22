import { debounce } from 'lodash';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react';
import Movie from '../../components/Movie';
import Navbar from '../../components/Navbar';

function SearchResults({ movies }) {

    const router = useRouter()

    const [searchQuery, setSearchQuery] = useState('')


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

    // prevent updating search results every time user inputs. 
    // Waits a little bit after latest input to show results
    const debouncedSearch = useCallback(
        debounce((searchQuery) => {

            if (searchQuery.length > 1) {

                router.push(`/search/${searchQuery}`)
            }

        }, 300), []
    )

    useEffect(() => {

        debouncedSearch(searchQuery)

    }, [searchQuery])




    return (
        <div>


            <Head>
                <title>mflix: Search Movies</title>
            </Head>


            <Navbar />


            <div className='p-4'>

                <h1 className='text-4xl mb-4'>Search for a movie</h1>

                <form method='post' onSubmit={(e) => {

                    e.preventDefault();

                    router.push(`/search/${searchQuery}`)
                }}>

                    <input
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        className='text-gray-900 rounded-sm p-1 w-full focus:outline-none focus:ring focus:ring-gray-300'
                        type="text"
                        placeholder='Enter movie name...' />
                </form>



                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 mt-4">

                    {movies.map((foundMovie) => (

                        <Movie key={foundMovie._id} movie={foundMovie} />

                    ))}

                </div>

            </div>

        </div>
    )
}


export async function getServerSideProps({ query }) {

    // console.log(query);

    // get todo data from API
    const res = await fetch(`${process.env.API_ENDPOINT}/api/search/${query.query}`)
    const movies = await res.json()


    // return props
    return {
        props: { movies },
    }
}

export default SearchResults