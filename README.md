# MOODTUNE: AI-Powered Mental Health Companion

**MOODTUNE** is a platform designed to help users track their moods and emotions, and improve mental well-being through personalized music therapy. By combining a conversational chatbot with text, voice, and face emotion detection, MOODTUNE provides users with tailored content to enhance their mental health.

---

## 🌟 Features

- **Conversational Chatbot**: Interacts with users, collects mood-related inputs, and guides them through the platform.
- **Emotion Detection**:
  - **Text**: Detects user mood from journal entries or chat messages.
  - **Face**: Detects emotions using webcam or uploaded images.
  - **Voice/Tone**: Analyzes tone and emotion from user speech.
- **Personalized Experience**:
  - Tracks user mood over time.
  - Adapts recommendations based on past interactions and preferences.
- **Music Therapy**:
  - Suggests playlists based on detected mood.
  - Supports preference-based customization (genres, instrumental/lyrical music, etc.).
- **Mental Health Tracking**:
  - Maintains a record of mood history.
  - Visualizes trends to help users understand their emotional patterns.

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Python (Flask)
- **Database**: MongoDB
- **AI/ML Libraries**:
  - Text: Hugging Face Transformers, VADER, TextBlob
  - Face: DeepFace, FER
  - Voice: SpeechBrain, pyAudioAnalysis
- **Music API**: Spotify Web API

---

## 🏗 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/moodtune.git

