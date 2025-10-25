const express = require('express');
const router = express.Router();
const {
    getAllRegistrations,
    getRegistrationById,
    submitRegistration,
    updateRegistrationStatus,
    deleteRegistration,
    getRegistrationStats
} = require('../controllers/registrationController');
const { 
    validateRegistration, 
    validateStatusUpdate, 
    validateQueryParams 
} = require('../middleware/validation');

// Public routes
router.post('/', validateRegistration, submitRegistration);

// Admin routes (you can add authentication middleware here later)
router.get('/', validateQueryParams, getAllRegistrations);
router.get('/stats', getRegistrationStats);
router.get('/:id', getRegistrationById);
router.patch('/:id/status', validateStatusUpdate, updateRegistrationStatus);
router.delete('/:id', deleteRegistration);

module.exports = router;
