import mongoose from "mongoose"

const URI="mongodb+srv://carlosapolayasanchez:myenglishbro@cluster0.cbayzpv.mongodb.net/ecommerce?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")


