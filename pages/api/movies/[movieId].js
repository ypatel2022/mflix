import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../util/mongodb';


export default async (req, res) => {

    const { db } = await connectToDatabase()
    const { movieId } = req.query

    const movieObjectId = ObjectId(movieId)

    const movie = await db
        .collection("movies")
        .find({ "_id": movieObjectId })
        .limit(20)
        .toArray()

    res.json(movie)
}