const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an audio file!");
      return;
    }
  
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
      alert("An error occurred while transcribing the audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  