import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p><strong>{comment.author}</strong> ({comment.date}): {comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;
