const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    rollNo: {
        type: String,
        required: [true, 'Roll number is required'],
        trim: true,
        uppercase: true,
        match: [/^[A-Z0-9]+$/, 'Roll number should contain only letters and numbers']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required'],
        trim: true,
        match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number']
    },
    skills: {
        type: String,
        required: [true, 'Skills field is required'],
        trim: true,
        minlength: [10, 'Please provide more details about your skills']
    },
    technicalKnowledge: {
        type: String,
        required: [true, 'Technical knowledge is required'],
        trim: true,
        minlength: [10, 'Please provide more details about your technical knowledge']
    },
    problemSolvingSkills: {
        type: String,
        required: [true, 'Problem-solving skills are required'],
        trim: true,
        minlength: [10, 'Please provide more details about your problem-solving skills']
    },
    practicalSkills: {
        type: String,
        required: [true, 'Practical skills are required'],
        trim: true,
        minlength: [10, 'Please provide more details about your practical skills']
    },
    softSkills: {
        type: String,
        required: [true, 'Soft skills are required'],
        trim: true,
        minlength: [10, 'Please provide more details about your soft skills']
    },
    whyJoin: {
        type: String,
        required: [true, 'Please explain why you want to join'],
        trim: true,
        minlength: [20, 'Please provide a more detailed explanation'],
        maxlength: [500, 'Response cannot exceed 500 characters']
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Index for better query performance
registrationSchema.index({ email: 1 });
registrationSchema.index({ rollNo: 1 });
registrationSchema.index({ status: 1 });
registrationSchema.index({ submittedAt: -1 });

// Virtual for formatted submission date
registrationSchema.virtual('formattedSubmittedAt').get(function() {
    return this.submittedAt.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
});

// Instance method to get public profile (without sensitive data)
registrationSchema.methods.getPublicProfile = function() {
    return {
        id: this._id,
        name: this.name,
        rollNo: this.rollNo,
        email: this.email,
        status: this.status,
        submittedAt: this.formattedSubmittedAt
    };
};

// Static method to get registration statistics
registrationSchema.statics.getStatistics = async function() {
    const stats = await this.aggregate([
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 }
            }
        }
    ]);
    
    const total = await this.countDocuments();
    
    return {
        total,
        byStatus: stats.reduce((acc, stat) => {
            acc[stat._id] = stat.count;
            return acc;
        }, {})
    };
};

module.exports = mongoose.model('Registration', registrationSchema);
