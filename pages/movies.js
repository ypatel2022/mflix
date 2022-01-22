import { connectToDatabase } from "../util/mongodb";
import Movie from "../components/Movie";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Movies({ movies }) {
    return (
        <div className="">

            <Head>
                <title>mflix</title>
            </Head>

            <Navbar />

            <div className="py-8 px-4">
                <h1 className="text-4xl">Top 100 Movies of All Time</h1>

                <p className="text-xl">
                    (According to Metacritic)
                </p>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 px-4 pb-4">

                {movies.map((movie) => (


                    <Movie key={movie._id} movie={movie} showRating={true} />

                ))}
            </div>

        </div>
    )
}

export async function getStaticProps() {

    // grab top 100 movies sorted by metacritic ratings

    const { db } = await connectToDatabase()

    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(100)
        .toArray()

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        },
    }
}