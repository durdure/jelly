import { useState } from 'react';
import axios from 'axios';
import Header from '@/Components/Header/Header';


export default function HomePage() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('/api/transcribe', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setTranscription(response.data.transcription);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        background: `url(https://media.istockphoto.com/id/1483272802/photo/see-through-ai-chatbot.jpg?s=2048x2048&w=is&k=20&c=QBMEE6psGzPFssI6OGwyXHgwth7-JdbIq4VI9ykueUc=) no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}
    >
      <Header/>
      <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center m-4">
        Voice Transcription App
      </h1>
      <div className="flex w-full max-w-4xl bg-white rounded shadow-md overflow-hidden space-x-4">
        {/* Left Side: Input Section */}
        <div className="w-1/2 p-6 border-r border-gray-300 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upload Your Audio File</h2>
            <p className="mb-4 text-gray-700">
              Choose an audio file to upload for transcription. Supported formats include MP3, WAV, and OGG.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="mb-4 w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading ? 'Transcribing...' : 'Transcribe'}
              </button>
            </form>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Ensure the audio file is clear for better transcription accuracy.
          </p>
        </div>
        
        {/* Right Side: Output Section */}
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Transcription Output</h2>
            <p className="mb-4 text-gray-700">
              Once the transcription is complete, the text will appear here. You can review and use the transcribed text as needed.
            </p>
            {transcription && (
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Result:</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{transcription}</p>
              </div>
            )}
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            If no transcription appears, please ensure the file format is supported and try again.
          </p>
        </div>
      </div>
     
    </div>
  );
}
