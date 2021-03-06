import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import Movie from '../components/Movie'
import { connectToDatabase } from '../util/mongodb'
import { debounce } from "lodash"
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Search(/*{ movies }*/) {

    const router = useRouter()

    const [searchQuery, setSearchQuery] = useState('')
    const [foundMovies, setFoundMovies] = useState([])


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

                    e.preventDefault()

                    router.push(`/search/${searchQuery}`)
                }}>

                    <input
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        className='text-gray-900 rounded-sm p-1 w-full focus:outline-none focus:ring focus:ring-gray-300'
                        type="text"
                        placeholder='Enter movie name...' />
                </form>




            </div>

        </div>
    )
}


export async function getStaticProps() {


    const { db } = await connectToDatabase()

    const movies = await db
        .collection("movies")
        .find({ "_id": "doesnt exist" })
        .toArray()

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        },
    }
}
export default Search