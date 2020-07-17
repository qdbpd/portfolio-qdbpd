// pugをインポートする
const req = require.context('../../pug/', true, /\.pug/)
req.keys().forEach((fileName) => {
  req(fileName)
})
