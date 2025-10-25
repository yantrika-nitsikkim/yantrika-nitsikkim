const express = require('express');
const registrationRoutes = require('./registrationRoutes');

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Yantrika Club API is running',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// API Routes
router.use('/registrations', registrationRoutes);

// 404 handler for API routes
router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        availableEndpoints: [
            'GET /api/health',
            'POST /api/registrations',
            'GET /api/registrations',
            'GET /api/registrations/stats',
            'GET /api/registrations/:id',
            'PATCH /api/registrations/:id/status',
            'DELETE /api/registrations/:id'
        ]
    });
});

module.exports = router;
