interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
