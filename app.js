const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

//app.use(cors())
// For Upload image give Cors error
 app.use(cors('indentImages',express.static('/images')));

app.post('/images', upload.single('file'), function (req, res) {
  res.json({})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
