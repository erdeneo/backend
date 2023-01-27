const Url = require("../model/urlModel")

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  

exports.createUrl = async (req, res) => {
    const {orignal} = req.body;
    if(!orignal) {
        res.status(400).json({
            message: "Please provide the original url"
        })
    }
    try {
        const code = makeid(6);
        const newUrl = await Url.create({
            orignal: orignal,
            short: code,
            owner: req.body.owner ? req.body.user : 'owner',
        })
        res.status(201).json(newUrl)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}
exports.getUrl  = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({
            message: "Please provide the id"
        });
    }
    try {
        const url = await Url.findOne({
            short: req.params.id,
        });
        res.status(200).json(url);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}
exports.getHistory = async (req, res) => {
    if (!req.params.email) {
        res.status(400).json({
            message: "Please provide the email"
        });
    }
    try {
        const history = await Url.find({
            owner: req.params.email,
        });
        res.status(200).json(history);
    }catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}