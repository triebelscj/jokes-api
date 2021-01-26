const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "You need to set up your joke!"],
        minlength: [10, "Your joke is too short!"]
    },
    punchline: {
        type: String,
        required: [true, "Forgot the punchline?"],
        minlength: [3, "Your punchline is too short!"]
    }
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;