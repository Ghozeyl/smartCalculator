module.exports = {
  //find all advises method
  sum: (req, res, next) => {
    total = req.body.firstNumber + req.body.secondNumber;
    res.locals.total = total;
  },
  sub: (req, res, next) => {
    total = req.body.firstNumber - req.body.secondNumber;
    res.locals.total = total;
  },
  mult: (req, res, next) => {
    total = req.body.firstNumber * req.body.secondNumber;
    res.locals.total = total;
  },
  div: (req, res, next) => {
    total = req.body.firstNumber / req.body.secondNumber;
    res.locals.total = total;
  },
  indexView: (req, res) => {
    res.render("home");
  },
};
