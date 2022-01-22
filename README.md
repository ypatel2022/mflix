# mflix - A place to search and discover movies

mlfix uses the sample database that MongoDB Atlas provides called [sample_mflix](https://docs.atlas.mongodb.com/sample-data/sample-mflix/). This database contains 20000+ movies with data such as title, ratings, release date, etc...

This project was made to learn, use, and get familiar with [Next.js](https://nextjs.org/) with [MongoDB](https://mongodb.com).


# Setup
*Note: These instructions assume that you already have [node.js](https://nodejs.org/en/), npm (comes with node.js), [git](https://git-scm.com/downloads), and [mongodb](https://www.mongodb.com/try/download/community) setup on your computer.*


Start off by [creating an account on MongoDB's website](https://www.mongodb.com/cloud/atlas/register). After creating the account, follow [these steps](https://docs.mongodb.com/drivers/node/current/quick-start/#create-a-mongodb-cluster) to create a new cluster until you get your cluster's connection string. We will need this connection string later for our `.env.local` file. Until then, copy it somewhere so we can grab it later. Next download the [sample data](https://docs.atlas.mongodb.com/sample-data/#std-label-load-sample-data) to your MongoDB Atlas. This will take some time to download so don't worry! 


<br/>

Clone the repository on your terminal:
```sh
git clone https://github.com/ypatel2022/mflix.git
```

Change terminal directory to project directory:
```sh
cd mflix
```

Install relevant project dependancies in terminal:
```sh
npm install
```

Create a file called `.env.local` in the project directory and copy the following code. Make sure to replace `YOUR_CONNECTION_STRING_HERE` with your connection string you got earlier.
```sh
MONGODB_URI=YOUR_CONNECTION_STRING_HERE
MONGODB_DB=sample_mflix
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
