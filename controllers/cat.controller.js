var cats = ["Fluffy", "Snowy"]

exports.create = (req, res)=>{
    const {name} = req.body
    cats.push(name)
    res.send(`added cat:${name}`);
}

exports.read = (req, res)=>{
    res.send(`cat name: ${cats}`)
}

exports.update = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    cats[id] = name
    res.send(`cat names:${cats}`) 
}

exports.delete = (req, res)=>{
    const {id} = req.params
    cats.splice(id,1)
    res.send(`cat names:${cats}`)
}