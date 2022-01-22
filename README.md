# mflix - A place to search and discover movies

mflix uses the sample database that MongoDB Atlas provides called [sample_mflix](https://docs.atlas.mongodb.com/sample-data/sample-mflix/). This database contains 20000+ movies with data such as actors, ratings, release date, etc...

This project was made to learn, use, and get familiar with [Next.js](https://nextjs.org/) with [MongoDB](https://mongodb.com).

View deployed app here: https://mflix-ypatel2022.vercel.app

# Setup
*Note: These instructions assume that you already have [Node.js](https://nodejs.org/en/), npm (comes with Node.js), and [git](https://git-scm.com/downloads) setup on your computer.*

<br/>

### MongoDB Setup
1. Start off by [creating an account on MongoDB's website](https://www.mongodb.com/cloud/atlas/register). 
2. After creating an account, follow [these steps](https://docs.mongodb.com/drivers/node/current/quick-start/#create-a-mongodb-cluster) to create a new cluster until you get your cluster's connection string. Copy the connection string somewhere because we will need it later for our `.env.local` file.
3. Next download the [sample_data](https://docs.atlas.mongodb.com/sample-data/#std-label-load-sample-data) to your MongoDB Atlas. This will download our sample_mflix database for us. This will take some time to download so don't worry!
4. Finally, follow steps 1-7 from [here](https://docs.atlas.mongodb.com/atlas-search/create-index/#procedure). When on step 6, use `movieTitleSearch` as the Index Name and select the movies collection under the sample_mflix database.


<br/>

### Project Setup

Clone the repository on your terminal:
```sh
git clone https://github.com/ypatel2022/mflix.git
```

Change terminal directory to project directory:
```sh
cd mflix
```

Install relevant project dependencies in terminal:
```sh
npm install
```

Create a file called `.env.local` in the project directory and copy the following code. Make sure to replace `YOUR_CONNECTION_STRING_HERE` with your connection string you got earlier.
```
MONGODB_URI=YOUR_CONNECTION_STRING_HERE
MONGODB_DB=sample_mflix
API_ENDPOINT=http://localhost:3000
```

Start up the development server by typing:
```sh
npm run dev
```

Open up a web browser and visit:
```
http://localhost:3000/
```

<br/>

## Now you can edit the code inside the project and see live changes! 🚀

<br/>

For more information on developing Next.js websites, take a look at the [documentation](https://nextjs.org/docs). If you want to deploy your Next.js website, use [Vercel](https://vercel.com/) (the creators of Next.js!)
