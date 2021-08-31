const index = async (req, res) => {
  try {
    res.render('index', { title: 'Express 300' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index
}
