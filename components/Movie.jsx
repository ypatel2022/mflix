import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"

function Movie(props) {

    // const defaultImageSrc = 'https://res.cloudinary.com/drkd0m8ag/image/upload/v1641153815/default_nbypkz.jpg'
    const defaultImageSrc = './default.jpg'
    const movie = props.movie
    const showRating = props.showRating

    const [isHovering, setIsHovering] = useState(false)
    const [imgSrc, setImgSrc] = useState(movie.poster)

    // if image does not exist
    // if (typeof imgSrc == 'undefined') {
    //     setImgSrc(defaultImageSrc)
    //     console.log('error');
    // }


    return (

        <Link href='/movies/[id]' as={`/movies/${movie._id}`} >
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="bg-[#242424] hover:bg-[#1c1c1c] rounded overflow-hidden shadow-md relative cursor-pointer"
            >


                <img
                    src={imgSrc}
                    alt=""
                    onError={() => {
                        setImgSrc(defaultImageSrc)
                        console.log('error');
                    }}
                    className="w-full object-cover movie-transition h-72"
                />



                <div className="m-4 movie-transition text-sm lg:text-base">

                    <span className="font-bold">{movie.title}</span>
                    <span className="block text-gray-500 text-sm">{movie.year}</span>


                    {showRating ?
                        <div className="flex items-center">
                            <StarIcon className="w-5 inline-block mr-1" />
                            <span>{
                                movie?.metacritic
                            }</span>
                        </div>
                        : ''}



                    <div className={`object-cover movie-transition h-72 w-full absolute top-0 left-0 ${isHovering ? 'backdrop-blur-xl bg-black bg-opacity-60' : ''}`}>

                        <div className={`turncate m-4 text-gray-200 font-semibold ${isHovering ? '' : 'hidden'}`}>
                            {movie.plot}
                        </div>

                    </div>

                </div>

            </div>
        </Link >
    )

}

export default Movie
