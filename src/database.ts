import {connect} from 'mongoose';
const mongodb_uri: string = (process.env.MONGODB_URI as string);

export async function startConnection() {
    await connect(mongodb_uri, {
       useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
    //console.log(process.env.MONGODB_URI);
}
