import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = "Email should contain '@'.";
    if (password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid', { email, password });
      // siri, how do I add the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
      {errors.email && <div>{errors.email}</div>}
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
      {errors.password && <div>{errors.password}</div>}
      <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
      {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
