import Joi from '@hapi/joi';

const regvalidation = data =>{
    const schema = Joi.object({
    Fname: Joi.string().min(3).required(),
    Lname: Joi.string().min(3).required(),
    Email: Joi.string().min(8).required().email(),
    Password: Joi.string().min(8).required()
});
   return schema.validate(data);
};

const loginvalidation = data =>{
    const schema = Joi.object({
    Email: Joi.string().min(8).required().email(),
    Password: Joi.string().min(8).required()
});
   return schema.validate(data);
};

module.exports.loginvalidation = loginvalidation;
module.exports.regvalidation = regvalidation;