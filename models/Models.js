import mongoose from "mongoose";

const tourismSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    maintext: {
        type: String,
        required: true
    }
    
});
export default mongoose.model('data', tourismSchema);