import app from "./index.js";
import colors from 'colors'
// import Connect from "./db/Connect.js";
import Connect from "./db/Connect.js";
app.listen(process.env.PORT,async()=>{
  await Connect();
    console.log(`My app is running on ${process.env.PORT}`.yellow)
})