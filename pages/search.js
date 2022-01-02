import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import Movie from '../components/Movie'
import { connectToDatabase } from '../util/mongodb'
import { debounce } from "lodash"
import Navbar from '../components/Navbar'

function Search({ movies }) {

    const [searchQuery, setSearchQuery] = useState('')
    const [foundMovies, setFoundMovies] = useState([])


    const debouncedSearch = useCallback(
        debounce((searchQuery) => {

            if (searchQuery.length > 1) {

                const filteredData = movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

                setFoundMovies(filteredData)
            }

        }, 300), []
    )

    useEffect(() => {

        debouncedSearch(searchQuery)

    }, [searchQuery])




    return (



        <div>

            <Navbar />


            <div className='p-4'>

                <h1 className='text-4xl mb-4'>Search for a movie</h1>

                <input
                    onChange={(e) => { setSearchQuery(e.target.value) }}
                    className='text-gray-900 rounded-sm p-1 w-full focus:outline-none focus:ring focus:ring-gray-300'
                    type="text"
                    placeholder='Enter movie name...' />



                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">

                    {foundMovies.map((foundMovie) => (

                        <Movie key={foundMovie._id} movie={foundMovie} />

                    ))}

                </div>

            </div>

        </div>
    )
}


export async function getStaticProps() {

    const { db } = await connectToDatabase()

    const movies = await db
        .collection("movies")
        .find({})
        .toArray()

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        },
    }
}
export default Search