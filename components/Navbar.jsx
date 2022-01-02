import { FilmIcon } from "@heroicons/react/outline"
import { StarIcon, SearchIcon } from "@heroicons/react/solid"

function Navbar() {
    return (
        <div>
            <nav className="sticky top-0 z-20 bg-[#2e2e2e] border-b border-gray-900">
                <div className=" px-4">
                    <div className="flex items-center justify-between h-16">
                        <span>
                            <a className="flex items-center" href="/">

                                <FilmIcon className="h-8 w-8 text-logo mr-2" />

                                <p className="font-medium text-2xl text-white">mflix</p>

                            </a>
                        </span>
                        <div className="flex space-x-4 text-white text-sm">
                            <a href="/movies" className="px-2 py-1 btn btn-primary rounded-lg flex items-center">


                                <StarIcon className="h-4 w-4 text-logo mr-2" />

                                <p>Top 100</p>


                            </a>

                            <a href="/search" className="px-2 py-1 btn btn-secondary rounded-lg flex items-center">


                                <SearchIcon className="h-4 w-4 text-logo mr-2" />

                                <p>Search</p>


                            </a>

                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar
