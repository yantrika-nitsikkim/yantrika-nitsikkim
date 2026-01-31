import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';
const API_URL = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL);


function RegistrationPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        email: '',
        contactNumber: '',
        skills: '',
        technicalKnowledge: '',
        problemSolvingSkills: '',
        practicalSkills: '',
        softSkills: '',
        whyJoin: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [flashMessage, setFlashMessage] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.rollNo.trim()) newErrors.rollNo = 'Roll number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
        if (!formData.skills.trim()) newErrors.skills = 'Skills field is required';
        if (!formData.technicalKnowledge.trim()) newErrors.technicalKnowledge = 'Technical knowledge is required';
        if (!formData.problemSolvingSkills.trim()) newErrors.problemSolvingSkills = 'Problem-solving skills are required';
        if (!formData.practicalSkills.trim()) newErrors.practicalSkills = 'Practical skills are required';
        if (!formData.softSkills.trim()) newErrors.softSkills = 'Soft skills are required';
        if (!formData.whyJoin.trim()) newErrors.whyJoin = 'Please explain why you want to join';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/api/registrations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            
            if (result.success) {
                setFlashMessage({ 
                    type: 'success', 
                    message: result.flashMessage || 'Registration submitted successfully!' 
                });
                
                // Clear form data
                setFormData({
                    name: '', rollNo: '', email: '', contactNumber: '', skills: '',
                    technicalKnowledge: '', problemSolvingSkills: '', practicalSkills: '',
                    softSkills: '', whyJoin: ''
                });
                
                // Navigate to home after 2 seconds
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setFlashMessage({ 
                    type: 'error', 
                    message: result.flashMessage || result.message || 'Error submitting form' 
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFlashMessage({ 
                type: 'error', 
                message: 'Network error. Please check your connection and try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleClearForm = () => {
        setFormData({
            name: '',
            rollNo: '',
            email: '',
            contactNumber: '',
            skills: '',
            technicalKnowledge: '',
            problemSolvingSkills: '',
            practicalSkills: '',
            softSkills: '',
            whyJoin: ''
        });
        setErrors({});
        setFlashMessage({ type: '', message: '' });
    };

    const dismissFlashMessage = () => {
        setFlashMessage({ type: '', message: '' });
    };

    return (
        <div className="registration-page">
            <div className="registration-container">
                <div className="registration-header">
                    <h1 className="registration-title">Registration Form 2025</h1>
                    <p className="registration-subtitle">
                        Join the departmental club of Mechanical Engineering, 
                        National Institute of Technology Sikkim
                    </p>
                </div>

                {/* Flash Message */}
                {flashMessage.message && (
                    <div className={`flash-message flash-${flashMessage.type}`}>
                        <div className="flash-content">
                            <span className="flash-text">{flashMessage.message}</span>
                            <button 
                                className="flash-close" 
                                onClick={dismissFlashMessage}
                                aria-label="Close message"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name" className="form-label">
                            Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            placeholder="Your answer"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="rollNo" className="form-label">
                            Roll no. <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="rollNo"
                            name="rollNo"
                            value={formData.rollNo}
                            onChange={handleChange}
                            className={`form-input ${errors.rollNo ? 'error' : ''}`}
                            placeholder="Your answer"
                        />
                        {errors.rollNo && <span className="error-message">{errors.rollNo}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email" className="form-label">
                            Email Id (College) <span className="required">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'error' : ''}`}
                            placeholder="Your answer"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="contactNumber" className="form-label">
                            Contact Number <span className="required">*</span>
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className={`form-input ${errors.contactNumber ? 'error' : ''}`}
                            placeholder="Your answer"
                        />
                        {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="skills" className="form-label">
                            Skill you have (Yes)? <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className={`form-input ${errors.skills ? 'error' : ''}`}
                            placeholder="Your answer"
                        />
                        {errors.skills && <span className="error-message">{errors.skills}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="technicalKnowledge" className="form-label">
                            Technical Knowledge (ex. Mechanical Drawing and CAD) <span className="required">*</span>
                        </label>
                        <textarea
                            id="technicalKnowledge"
                            name="technicalKnowledge"
                            value={formData.technicalKnowledge}
                            onChange={handleChange}
                            className={`form-textarea ${errors.technicalKnowledge ? 'error' : ''}`}
                            placeholder="Your answer"
                            rows="3"
                        />
                        {errors.technicalKnowledge && <span className="error-message">{errors.technicalKnowledge}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="problemSolvingSkills" className="form-label">
                            Problem-solving and Analytical Skills (ex. Critical Thinking, Simulations, and Data Analysis) <span className="required">*</span>
                        </label>
                        <textarea
                            id="problemSolvingSkills"
                            name="problemSolvingSkills"
                            value={formData.problemSolvingSkills}
                            onChange={handleChange}
                            className={`form-textarea ${errors.problemSolvingSkills ? 'error' : ''}`}
                            placeholder="Your answer"
                            rows="3"
                        />
                        {errors.problemSolvingSkills && <span className="error-message">{errors.problemSolvingSkills}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="practicalSkills" className="form-label">
                            Practical Skills (ex. Workshop skills, Basic Programming, Report Writing, and Documentation) <span className="required">*</span>
                        </label>
                        <textarea
                            id="practicalSkills"
                            name="practicalSkills"
                            value={formData.practicalSkills}
                            onChange={handleChange}
                            className={`form-textarea ${errors.practicalSkills ? 'error' : ''}`}
                            placeholder="Your answer"
                            rows="3"
                        />
                        {errors.practicalSkills && <span className="error-message">{errors.practicalSkills}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="softSkills" className="form-label">
                            Soft Skills (ex. Teamwork and Collaboration, Time Management and Communication) <span className="required">*</span>
                        </label>
                        <textarea
                            id="softSkills"
                            name="softSkills"
                            value={formData.softSkills}
                            onChange={handleChange}
                            className={`form-textarea ${errors.softSkills ? 'error' : ''}`}
                            placeholder="Your answer"
                            rows="3"
                        />
                        {errors.softSkills && <span className="error-message">{errors.softSkills}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="whyJoin" className="form-label">
                            Why you want to join Yantrika? <span className="required">*</span>
                        </label>
                        <textarea
                            id="whyJoin"
                            name="whyJoin"
                            value={formData.whyJoin}
                            onChange={handleChange}
                            className={`form-textarea ${errors.whyJoin ? 'error' : ''}`}
                            placeholder="Your answer"
                            rows="4"
                        />
                        {errors.whyJoin && <span className="error-message">{errors.whyJoin}</span>}
                    </div>

                    <div className="form-actions">
                        <button 
                            type="submit" 
                            className="form-submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        <button 
                            type="button" 
                            className="form-clear-btn" 
                            onClick={handleClearForm}
                        >
                            Clear form
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default RegistrationPage;
