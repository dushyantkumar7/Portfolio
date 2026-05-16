const API_BASE_URL = 'http://localhost:8080/api';

export const checkHealth = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/hello`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.text();
    } catch (error) {
        console.error('Health check failed:', error);
        throw error;
    }
};

export const submitContactForm = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Submission failed');
        }

        return await response.text();
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};
