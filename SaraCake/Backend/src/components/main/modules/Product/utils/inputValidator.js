const Joi = require ('@hapi/joi');

const customerRegisterValidation = data => {
  const schema = {
    customer_mobile: Joi.number ().min (11).max (11).required (),
  };
  return Joi.validate (data, schema);
};

const customerProfileValidation = data => {
  const schema = {
    customer_firstname: Joi.string ().min (3).max (25),
    customer_lastname: Joi.string ().min (3).max (25),
    customer_email: Joi.string ().email (),
    customer_birthdate: Joi.string ().isoDate (),
  };
  return Joi.ValidationError (data, schema);
};

const productValidation = data => {
  const schema = Joi.object ({
    product_id: Joi.number ().integer ().min (1),
    product_name: Joi.string ().min (3).max (1000).required (),
    product_code: Joi.string ().alphanum ().min (3).max (10).required (),
    product_description: Joi.string ().max (1000),
    product_image_src: Joi.string ().max (1000),
    product_off_percent: Joi.number ().integer ().min (0).max (100),
    product_off_toman: Joi.number ()
      .integer ()
      .min (0)
      .max (Joi.ref ('product_price_former')),
    product_price_current: Joi.number ().integer ().positive (),
    product_price_former: Joi.number ().integer ().positive (),

    cake_id: Joi.number ().integer ().min (1),
    category_id: Joi.number ().integer ().min (1),
    taste_id: Joi.number ().min (1),
    cake_floorcount: Joi.number ().min (1),
    cake_weight: Joi.number ().integer (),
    doublecake_count: Joi.number ().integer (),

    themetable_id: Joi.number ().integer ().min (1),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};

module.exports.customerRegisterValidation = customerRegisterValidation;
module.exports.customerProfileValidation = customerProfileValidation;
module.exports.productValidation = productValidation;
