const City = require ('../../../User/controllers/City');

module.exports = (req, res) => {
  City.GetCitiesByProvinceId ({
    province_id: req.params.id,
  })
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      res.status (400).json (err);
    });
};
