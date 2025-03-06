
// import mysql from 'mysql2/promise';

// const Connect = async ()=>{
//     try {
//         const connection = await mysql.createConnection({
//             host:process.env.HOST,
//             user:process.env.USER,
//             password:process.env.PASSWORD,
//             database:process.env.DATABASE,
//             multipleStatements:true
//         });
//         connection.connect((error)=>{
//             if(!error){
//                 console.log('Mysql Connected Successfully')
//             }else{
//                 console.log('Error Occurred mysql could not successfully connected');
//             }
//         })
//     } catch (error) {
//         console.error('Error connecting to MySQL:', error.message);
//     }
// }
// export default Connect


// mongodb connections

import mongoose from "mongoose";

const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true, // Fixed typo here
      useUnifiedTopology: true,
      dbName: 'LLB_WEBSITE',
    });

    const connection = mongoose.connection;

    // Correctly listen for connection success
    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    // Listen for errors on the connection
    connection.on('error', (err) => {
      console.log('Error occurred: MongoDB could not be connected successfully', err.message);
    });
    
  } catch (error) {
    console.log('Error Occurred: MongoDB could not connect successfully', error.message);
  }
};

export default Connect;
