import { execFile } from 'child_process';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/uploads');
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const audioFilePath = files.audio.filepath;
    const pythonScriptPath = path.join(process.cwd(), 'scripts', 'transcribe.py');

    execFile('python3', [pythonScriptPath, audioFilePath], (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing script:', error);
        return res.status(500).json({ error: 'Error transcribing audio' });
      }

      res.status(200).json({ transcription: stdout });
    });
  });
}
