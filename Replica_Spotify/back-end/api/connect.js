import { MongoClient } from "mongodb";

const URI = "mongodb+srv://oficialthurhenrique:rTL7Dt51RHOQahiC@cluster0.u6vwulz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Cop_Spotify");

// const songsCollection = await db.collection('songs').find({}).toArra();



