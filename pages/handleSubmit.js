import { useState } from 'react';
import axios from 'axios';

export default function HandleSubmit() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select an audio file to upload.');
      return;
    }

    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('/api/transcribe', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setTranscription(response.data.transcription);
    } catch (err) {
      console.error('Error during transcription:', err);
      setError('An error occurred while processing the file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Voice Transcription App</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="mb-4 w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Transcribing...' : 'Transcribe'}
        </button>
      </form>
      {error && (
        <div className="mt-4 bg-red-100 text-red-700 p-4 rounded">
          <p>{error}</p>
        </div>
      )}
      {transcription && (
        <div className="mt-8 bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800">Transcription:</h2>
          <p className="mt-4 text-gray-700 whitespace-pre-wrap">{transcription}</p>
        </div>
      )}
    </div>
  );
}
