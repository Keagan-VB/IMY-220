import React, { useState } from 'react';

const AddComment = () => {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New comment added:", { author, comment });
    setComment(''); // clean the b word
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Comment:</label>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          required 
        />
      </div>

      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddComment;
