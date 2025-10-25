const Joi = require('joi');

// Registration form validation schema
const registrationSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.empty': 'Name is required',
            'string.min': 'Name must be at least 2 characters long',
            'string.max': 'Name cannot exceed 100 characters',
            'any.required': 'Name is required'
        }),

    rollNo: Joi.string()
        .trim()
        .pattern(/^[A-Za-z0-9]+$/)
        .min(3)
        .max(20)
        .required()
        .messages({
            'string.empty': 'Roll number is required',
            'string.pattern.base': 'Roll number should contain only letters and numbers',
            'string.min': 'Roll number must be at least 3 characters long',
            'string.max': 'Roll number cannot exceed 20 characters',
            'any.required': 'Roll number is required'
        }),

    email: Joi.string()
        .trim()
        .email()
        .lowercase()
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required'
        }),

    contactNumber: Joi.string()
        .trim()
        .pattern(/^[6-9]\d{9}$/)
        .required()
        .messages({
            'string.empty': 'Contact number is required',
            'string.pattern.base': 'Please enter a valid 10-digit mobile number starting with 6-9',
            'any.required': 'Contact number is required'
        }),

    skills: Joi.string()
        .trim()
        .min(3)
        .max(5000)
        .required()
        .messages({
            'string.empty': 'Skills field is required',
            'string.min': 'Please provide more details about your skills (at least 10 characters)',
            'string.max': 'Skills description cannot exceed 500 characters',
            'any.required': 'Skills field is required'
        }),

    technicalKnowledge: Joi.string()
        .trim()
        .min(3)
        .max(5000)
        .required()
        .messages({
            'string.empty': 'Technical knowledge is required',
            'string.min': 'Please provide more details about your technical knowledge (at least 10 characters)',
            'string.max': 'Technical knowledge cannot exceed 1000 characters',
            'any.required': 'Technical knowledge is required'
        }),

    problemSolvingSkills: Joi.string()
        .trim()
        .min(3)
        .max(5000)
        .required()
        .messages({
            'string.empty': 'Problem-solving skills are required',
            'string.min': 'Please provide more details about your problem-solving skills (at least 10 characters)',
            'string.max': 'Problem-solving skills description cannot exceed 1000 characters',
            'any.required': 'Problem-solving skills are required'
        }),

    practicalSkills: Joi.string()
        .trim()
        .min(3)
        .max(5000)
        .required()
        .messages({
            'string.empty': 'Practical skills are required',
            'string.min': 'Please provide more details about your practical skills (at least 10 characters)',
            'string.max': 'Practical skills description cannot exceed 1000 characters',
            'any.required': 'Practical skills are required'
        }),

    softSkills: Joi.string()
        .trim()
        .min(3)
        .max(5000)
        .required()
        .messages({
            'string.empty': 'Soft skills are required',
            'string.min': 'Please provide more details about your soft skills (at least 10 characters)',
            'string.max': 'Soft skills description cannot exceed 1000 characters',
            'any.required': 'Soft skills are required'
        }),

    whyJoin: Joi.string()
        .trim()
        .min(3)
        .max(5000)
        .required()
        .messages({
            'string.empty': 'Please explain why you want to join',
            'string.min': 'Please provide a more detailed explanation (at least 20 characters)',
            'string.max': 'Response cannot exceed 500 characters',
            'any.required': 'Please explain why you want to join'
        })
});

// Status update validation schema
const statusUpdateSchema = Joi.object({
    status: Joi.string()
        .valid('pending', 'approved', 'rejected')
        .required()
        .messages({
            'any.only': 'Status must be one of: pending, approved, rejected',
            'any.required': 'Status is required'
        })
});

// Query parameters validation schema
const queryParamsSchema = Joi.object({
    page: Joi.number()
        .integer()
        .min(1)
        .default(1)
        .messages({
            'number.base': 'Page must be a number',
            'number.integer': 'Page must be an integer',
            'number.min': 'Page must be at least 1'
        }),

    limit: Joi.number()
        .integer()
        .min(1)
        .max(100)
        .default(10)
        .messages({
            'number.base': 'Limit must be a number',
            'number.integer': 'Limit must be an integer',
            'number.min': 'Limit must be at least 1',
            'number.max': 'Limit cannot exceed 100'
        }),

    status: Joi.string()
        .valid('pending', 'approved', 'rejected')
        .optional()
        .messages({
            'any.only': 'Status filter must be one of: pending, approved, rejected'
        }),

    search: Joi.string()
        .trim()
        .min(1)
        .max(100)
        .optional()
        .messages({
            'string.min': 'Search term must be at least 1 character',
            'string.max': 'Search term cannot exceed 100 characters'
        })
});

module.exports = {
    registrationSchema,
    statusUpdateSchema,
    queryParamsSchema
};
