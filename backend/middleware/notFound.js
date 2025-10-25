// 404 Not Found middleware
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
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
};

module.exports = notFound;
