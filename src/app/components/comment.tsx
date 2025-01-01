'use client';
import { useState } from 'react';

const CommentSection = () => {
  const [comment, setComment] = useState(''); 
  const [submittedComments, setSubmittedComments] = useState<string[]>([]);
  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle comment submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Comment submitted successfully!');
        setSubmittedComments((prevComments) => [...prevComments, comment]);
        setComment('');
      } else {
        setResponseMessage(data.message);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      setResponseMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
      
      <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          rows={2}
          required
        />
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Submit Comment
        </button>
      </form>

      {responseMessage && (
        <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
      )}

      <div className="mt-4 space-y-4">
        {submittedComments.map((submittedComment, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Comment:</h3>
            <p className="text-gray-700">{submittedComment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
