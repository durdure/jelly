import whisper
import sys

def transcribe(audio_file):
    model = whisper.load_model("base")
    result = model.transcribe(audio_file)
    return result["text"]

if __name__ == "__main__":
    audio_file = sys.argv[1]
    transcription = transcribe(audio_file)
    print(transcription)