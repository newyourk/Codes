var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const Brand = require ('../../../controllers/Brand');
const InputValidation = require ('../../../functions/InputValidation/Brand/');

module.exports = (req, res, next) => {
  //Input Validation
  var error = InputValidation.CreateBrand (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  Brand.CreateBrand (req.body)
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
