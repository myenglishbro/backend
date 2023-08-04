import mongoose from "mongoose";
const URI="mongodb+srv://carlosapolayasanchez:ensolver@cluster0.cbayzpv.mongodb.net/ecommerce?retryWrites=true&w=majority"
 

const connectToDB = () => {
    try {
        mongoose.connect(URI)
        console.log('connected to DB ecommerce')
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB