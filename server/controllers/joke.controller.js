const Joke = require("../models/jokes.model");

// GET all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

// GET one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

// POST a joke
module.exports.createJoke = (req, res) => {
    console.log("CREATE JOKE", req.body);
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

//UPDATE one joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// DELETE one joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// GET a random joke
module.exports.findRandom = (req, res) => {
    Joke.find()
        .then(randomJoke => res.json(
            {
                joke: randomJoke[Math.floor(Math.random() * Math.floor(randomJoke.length))]
            }))
        .catch(err => res.json({ message: "Couldn't find a random joke", error: err }));
}


