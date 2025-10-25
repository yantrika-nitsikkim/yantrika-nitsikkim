const { 
    registrationSchema, 
    statusUpdateSchema, 
    queryParamsSchema 
} = require('../schemas/registrationSchema');

// Generic Joi validation middleware
const validate = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[property], {
            abortEarly: false, // Return all validation errors
            stripUnknown: true, // Remove unknown properties
            convert: true // Convert types when possible
        });

        if (error) {
            const errors = error.details.reduce((acc, detail) => {
                const field = detail.path.join('.');
                acc[field] = detail.message;
                return acc;
            }, {});

            // Set flash message for validation errors
            req.flash('error_msg', 'Please check the form for validation errors.');

            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors,
                flashMessage: req.flash('error_msg')
            });
        }

        // Replace the original data with validated and sanitized data
        req[property] = value;
        next();
    };
};

// Specific validation middlewares
const validateRegistration = validate(registrationSchema, 'body');
const validateStatusUpdate = validate(statusUpdateSchema, 'body');
const validateQueryParams = validate(queryParamsSchema, 'query');

module.exports = {
    validateRegistration,
    validateStatusUpdate,
    validateQueryParams,
    validate // Generic validator for future use
};
