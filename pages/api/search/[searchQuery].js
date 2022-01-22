import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../util/mongodb';


export default async (req, res) => {

    const { db } = await connectToDatabase()
    const { searchQuery } = req.query

    const movie = await db
        .collection("movies")
        .aggregate(
            [
                {
                    '$search': {
                        'index': 'movieTitleSearch', 'text': {
                            query: searchQuery, path: 'title'
                        }
                    }
                }
            ]
        )
        .limit(50)
        .toArray()


    res.json(movie)
}