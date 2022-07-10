module.exports = {
    //DON"T CHANGE THIS CODE, USE AS INSPIRATION
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
// REQUIRED TO DO A POST PUT AND DELETE request!!!!
    //look into back-end-2 for how to do those
    getFortune: (req, res) => {
        const fortune = [
            "Look how far you've come.",
            "Little by little, one travels far.",
            "Don't let yesterday take up too much of today",
            "Love all, trust a few, do wrong to none",
            "It is never too late to be what you might have been.",
        ];

    let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    createFortune: (req, res) => {
        let {string} = req.body
        let newFort = {string}
        fortune.push(newFort)
        res.status(200).send(fortune)
    },

    submitFunc: (req, res) => {const alertBox = ["Fortune Sent"];res.status(200).send(alertBox)
    },

    deleteFortune: (req, res) => {
        let index = fortune.findIndex(elem => elem.id === +req.params.id)
        fortune.splice(index,1)
        res.status(200).send(fortune)
    },

    updateFortune: (req, res) => {
        let {string} = req.params.body
        let index = fortune.findIndex(elem => +elem.id === +id)

        if(string[index] === index){
            fortune.splice(index,1)
            let adjustFort = ""
            fortune.push(adjustFort)
            res.sendStatus(200).send(fortune)
        } else{
            res.sendStatus(400)
        }
    }

}