import Movie from "../components/Movie";
import { connectToDatabase } from "../util/mongodb";


export default function Top({ movies }) {
    return (
        <div className="h-full bg-[#151515] text-white">

            <div className="py-8 px-4">
                <h1 className="text-4xl">Top 1000 Movies of All Time</h1>

                <p className="text-xl">
                    (According to Metacritic)
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">

                {movies.map((movie) => (

                    <Movie key={movie._id} movie={movie} />

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
        .sort({ metacritic: -1 })
        .limit(1000)
        .toArray()

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        },
    }
}