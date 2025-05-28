'use client';

import { useState } from 'react';

export default function MyForm() {
  // Step 1: Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  // Step 2: Error state
  const [errors, setErrors] = useState({});

  // Step 3: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 4: Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 1) {
      newErrors.age = 'Age must be a valid number';
    }

    return newErrors;
  };

  // Step 5: Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log('Form submitted successfully:', formData);
semiotics
    // You can now call your API here
    // fetch('/api/your-endpoint', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">
      <div>
        <label className="block font-bold">Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block font-bold">Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block font-bold">Age:</label>
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
