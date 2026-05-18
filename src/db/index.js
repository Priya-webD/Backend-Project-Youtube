import mongoose from "mongoose";

import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        //mongodb gives us response which can be hold 
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        //above injected the connection instance to the variable and then we are printing the host name of the database
        //assignment => console log the connetion instance 
        //console.log("Connection Instance: ", connectionInstance);
    }catch(error){
        console.log("ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;