const router = require('express').Router()

let cats = [{
  name: 'Garfield',
  age: 7
}, {
  name: 'Felix',
  age: 25
}
]

// Get All Cats

router.get('', (req, res, next) => {
  res.status(200).send(cats)
})

//Get One Cat
router.get('/:id', (req, res, next) => {
  let cat = cats[req.params.id]
  if (!cat) {
    return res.status(400).send('no cat at that id')
  }
  res.status(200).send(cat)
})

//Add Cat
router.post('', (req, res, next) => {
  let newCat = req.body
  cats.push(newCat)
  res.status(201).send('newCat')
})

//Delete Cat
router.delete('/:id', (req, res, next) => {
  if (req.params.id > -1 && req.params.id < cats.length) {
    cats.splice(req.params.id, 1)
    return res.status(200).send('Cat Deleted')
  }
  res.status(400).send('no cat at that id')
})












module.exports = router