import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"

function Movie(props) {

    const defaultImage = 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg'

    const movie = props.movie


    let [isHovering, setIsHovering] = useState(false)


    return (

        <Link href='/movies/[id]' as={`/movies/${movie._id}`} >
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="bg-[#242424] hover:bg-[#2c2c2c] rounded overflow-hidden shadow-md relative cursor-pointer"
            >


                <img src={movie.poster} alt="" className={`w-full object-cover movie-transition max-h-72 ${isHovering ? '-translate-y-72' : 'h-72'}`} />



                <div className={`m-4 movie-transition ${isHovering ? '-translate-y-72' : ''}`}>

                    <span className="font-bold">{movie.title}</span>
                    <span className="block text-gray-500 text-sm">{movie.year}</span>


                    <div className="flex items-center">
                        <StarIcon className="w-5 inline-block" />
                        <span>{movie.metacritic}</span>
                    </div>

                    <div className={`absolute left-0 top-20 turncate ${isHovering ? '' : 'hidden'}`}>
                        {movie.plot}
                    </div>

                </div>

            </div>
        </Link >
    )

}

export default Movie
