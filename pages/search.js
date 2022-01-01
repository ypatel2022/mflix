import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Movie from '../components/Movie'
import { connectToDatabase } from '../util/mongodb'

function Search({ movies }) {

    const [searchQuery, setSearchQuery] = useState('')
    const [foundMovies, setFoundMovies] = useState([])

    useEffect(() => {

        // find matching movies from search query

        if (searchQuery.length >= 4) {

            const filteredData = movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

            setFoundMovies(filteredData)
        }

    }, [searchQuery])


    return (
        <div className='p-4'>

            <h1 className='text-4xl mb-4'>Search for a movie</h1>

            <input onChange={(e) => { setSearchQuery(e.target.value) }} className='text-gray-900 rounded-sm p-1 w-full' type="text"></input>



            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">

                {foundMovies.map((foundMovie) => (

                    <Movie key={foundMovie._id} movie={foundMovie} />

                ))}

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