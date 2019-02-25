const router = require('express').Router()

let dogs = [{
  name: 'Charlie',
  age: 8
}, {
  name: 'Fred',
  age: 13
}
]
//GET ALL DOG
router.get('', (req, res, next) => {
  res.status(200).send(dogs)
})

//GET ONE DOG
router.get('/:id', (req, res, next) => {
  let dog = dogs[req.params.id]
  if (!dog) {
    return res.status(400).send('No dog at this id!')
  }
  res.status(200).send(dog)
})

//ADD DOG
router.post('', (req, res, next) => {
  let newDog = req.body
  dogs.push(newDog)
  res.status(201).send('newDog')
})

//DELETE DOG

router.delete('/:id', (req, res, next) => {
  if (req.params.id > -1 && req.params.id < dogs.length) {
    dogs.splice(req.params.id, 1)
    return res.status(200).send('Dog Deleted')
  } res.status(400).send('No dog at that ID')
})

module.exports = router