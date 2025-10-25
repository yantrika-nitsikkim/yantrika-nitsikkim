const Registration = require('../models/Registration');

// Get all registrations (admin use)
const getAllRegistrations = async (req, res) => {
    try {
        // Query parameters are already validated and sanitized by Joi middleware
        const { page, limit, status, search } = req.query;
        
        // Build query
        let query = {};
        
        if (status) {
            query.status = status;
        }
        
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { rollNo: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }
        
        // Calculate pagination
        const skip = (page - 1) * limit;
        
        const registrations = await Registration.find(query)
            .sort({ submittedAt: -1 })
            .skip(skip)
            .limit(limit)
            .select('-__v');
            
        const total = await Registration.countDocuments(query);
        
        res.json({
            success: true,
            data: registrations,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1
            }
        });
    } catch (error) {
        console.error('Error fetching registrations:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching registrations',
            error: error.message
        });
    }
};

// Get registration by ID
const getRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        
        if (!registration) {
            return res.status(404).json({
                success: false,
                message: 'Registration not found'
            });
        }

        res.json({
            success: true,
            data: registration
        });
    } catch (error) {
        console.error('Error fetching registration:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching registration',
            error: error.message
        });
    }
};

// Submit new registration
const submitRegistration = async (req, res) => {
    try {
        // Data is already validated and sanitized by Joi middleware
        const {
            name,
            rollNo,
            email,
            contactNumber,
            skills,
            technicalKnowledge,
            problemSolvingSkills,
            practicalSkills,
            softSkills,
            whyJoin
        } = req.body;

        // Check if email already exists
        const existingRegistration = await Registration.findOne({ email });
        if (existingRegistration) {
            return res.status(409).json({
                success: false,
                message: 'Email already registered',
                field: 'email'
            });
        }

        // Check if roll number already exists
        const existingRollNo = await Registration.findOne({ rollNo: rollNo.toUpperCase() });
        if (existingRollNo) {
            return res.status(409).json({
                success: false,
                message: 'Roll number already registered',
                field: 'rollNo'
            });
        }

        // Create new registration
        const registration = new Registration({
            name,
            rollNo: rollNo.toUpperCase(),
            email: email.toLowerCase(),
            contactNumber,
            skills,
            technicalKnowledge,
            problemSolvingSkills,
            practicalSkills,
            softSkills,
            whyJoin
        });

        await registration.save();

        // Set flash message for success
        req.flash('success_msg', 'Registration submitted successfully! Welcome to Yantrika Club.');

        res.status(201).json({
            success: true,
            message: 'Registration submitted successfully',
            data: registration.getPublicProfile(),
            flashMessage: req.flash('success_msg')
        });

    } catch (error) {
        console.error('Error submitting registration:', error);
        
        // Handle duplicate key errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            req.flash('error_msg', `${field} already exists. Please use a different ${field}.`);
            return res.status(409).json({
                success: false,
                message: `${field} already exists`,
                field,
                flashMessage: req.flash('error_msg')
            });
        }

        // Set flash message for server error
        req.flash('error_msg', 'An error occurred while submitting your registration. Please try again.');

        res.status(500).json({
            success: false,
            message: 'Error submitting registration',
            error: error.message,
            flashMessage: req.flash('error_msg')
        });
    }
};

// Update registration status (admin use)
const updateRegistrationStatus = async (req, res) => {
    try {
        // Status is already validated by Joi middleware
        const { status } = req.body;

        const registration = await Registration.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: 'Registration not found'
            });
        }

        res.json({
            success: true,
            message: 'Registration status updated successfully',
            data: registration
        });
    } catch (error) {
        console.error('Error updating registration status:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating registration status',
            error: error.message
        });
    }
};

// Delete registration (admin use)
const deleteRegistration = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndDelete(req.params.id);

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: 'Registration not found'
            });
        }

        res.json({
            success: true,
            message: 'Registration deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting registration:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting registration',
            error: error.message
        });
    }
};

// Get registration statistics (admin use)
const getRegistrationStats = async (req, res) => {
    try {
        const stats = await Registration.getStatistics();
        
        // Get recent registrations (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        const recentRegistrations = await Registration.countDocuments({
            submittedAt: { $gte: sevenDaysAgo }
        });
        
        stats.recentRegistrations = recentRegistrations;
        
        res.json({
            success: true,
            data: stats
        });
    } catch (error) {
        console.error('Error fetching registration statistics:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching registration statistics',
            error: error.message
        });
    }
};

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    submitRegistration,
    updateRegistrationStatus,
    deleteRegistration,
    getRegistrationStats
};
