const { MongoClient, ObjectId, MongoAPIError } = require('mongodb');
const uri = "mongodb+srv://dbUser:dbUserPassword@moviedb.une0wac.mongodb.net/test";

const dbName = 'moviedb';
const userCollection = 'users';
const reviewRatingsCollection = 'ratings-reviews';

exports.DA = {
    getAllMovies: async function () {

    },
    getAllUsers: async function () {
        const client = await MongoClient.connect(uri);
        try {
            const db = client.db(dbName);
            const collection = db.collection(userCollection);
            var query = {};
            var results = await collection.find(query).toArray();
            return results;
        } catch (e) {
            console.log(e);
        } finally {
            client.close();
        }
    },
    getUserById: async function () {
        const userId = Number(request.params.id);
        const getAccount = userCollection.find((user) => user.id === userId);

        if (!getAccount) {
            response.status(500).send('Account not found.')
        } else {
            response.json(getAccount);
        }
    },
    getAllRevAndRat: async function () {
        //take in movieID, get movie's rev and rats 

    },
    addRevAndRat: async function () {

    },
    findUserByUsername: async function (username) {
        const client = await MongoClient.connect(uri);
        try {
            const db = client.db(dbName);
            const collection = db.collection(userCollection);
            var results = await collection.find({ "username": username }).toArray();
            return results;
        } catch (e) {
            console.log(e);
        } finally {
            client.close();
        }
    },
    getMovieById: async function () {

    },
    findRevAndRatByUser: async function (username) {
        const client = await MongoClient.connect(uri);
        try {
            const db = client.db(dbName);
            const collection = db.collection(reviewRatingsCollection);
            var results = await collection.find({ "username": username }).toArray();
            return results;
        } catch (e) {
            console.log(e);
        } finally {
            client.close();
        }
    },
    addUser: async function () {

    },
    deleteUser: async function () {

    },
    deleteRevRat: async function () {

    },
}