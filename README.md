# 🎯 Tutor Screener (Next.js + Voice + AI)

An advanced **AI-powered interview screening platform** built using **Next.js**, designed to simulate real interview scenarios with voice interaction, real-time transcription, and intelligent evaluation.

---

# 🚀 Overview

This project is a **full-stack AI interview system** where users can:

* 🎤 Answer questions using **voice**
* 🤖 Interact with an **AI interviewer**
* 🧠 Get **automated evaluation and feedback**
* 📊 Experience a structured **interview flow**

The system mimics real-world technical interviews by combining:

* Conversational AI
* Speech-to-text processing
* State-driven interaction logic

---

# 🧠 Core Idea & Theory

## 🔹 Problem Statement

Traditional interview preparation lacks:

* Real-time feedback
* Realistic simulation
* Voice-based interaction

This project solves that by creating an **AI-driven interview environment** that behaves like a real interviewer.

---

## 🔹 System Architecture

```
Frontend (Next.js)
   ↓
AI Conversation Engine (State Machine)
   ↓
Speech APIs (Transcription)
   ↓
Evaluation API (AI scoring)
```

---

## 🔹 Key Concepts Used

### 1. 🧩 State Machine (Interview Flow)

The interview follows a strict state-driven flow:

```
not-started → mic-check → in-progress → completed
```

This ensures:

* No repeated questions
* Controlled progression
* Predictable behavior

---

### 2. 🤖 AI Conversation Logic

The system maintains:

* `history` → full conversation
* `currentAIMessage` → active question
* `phase` → current stage

This allows:

* Context-aware questioning
* Sequential interview flow
* Smart evaluation

---

### 3. 🎤 Voice Processing Pipeline

```
User Speech → Audio Capture → API → Text → AI Processing
```

Steps:

1. Record user voice
2. Send to `/api/transcribe`
3. Convert speech → text
4. Feed into AI

---

### 4. ✍️ Typewriter Effect (UX Enhancement)

AI responses are rendered using a **typewriter animation**:

* Improves realism
* Mimics human typing
* Enhances engagement

---

### 5. 📊 Evaluation Engine

After interview completion:

* Responses are sent to `/api/evaluate`
* AI analyzes:

  * Clarity
  * Technical depth
  * Relevance

Returns:

* ✅ Pass
* ⚠️ Review
* ❌ Fail

---

# 🛠️ Tech Stack

## Frontend

* Next.js (App Router)
* React Hooks
* Tailwind CSS

## Backend (API Layer)

* Node.js / Express (or Next API routes)
* AI APIs ( GEMINI )

## Features

* Speech Recognition
* AI Chat Engine
* Real-time UI updates
* State Management

---

# 📁 Project Structure

```
/app
  /interview
    page.jsx
/components
  LiveTranscript.jsx
  Interview.jsx
/hooks
  useConversation.js
/types
  index.ts
/api
  transcribe
  evaluate
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-interview-screener.git
cd ai-interview-screener
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_backend_url
GEMINI_API_KEY=your_key
```

---

## 4️⃣ Run Locally

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 🚀 Deployment

### 🔹 Recommended: Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

---

# 🔥 Key Features

* 🎤 Voice-based answering
* 🤖 AI-generated interview questions
* ⏱️ Real-time transcript display
* ✨ Typewriter animation
* 📊 AI-based evaluation system
* 🔄 Controlled conversation flow

---

# ⚠️ Challenges & Solutions

### ❌ Issue: Repeated Questions

✔ Fixed using state machine logic

---

### ❌ Issue: Hydration Errors

✔ Avoided dynamic mismatches (`Date`, `Math.random`)

---

### ❌ Issue: Undefined Errors

✔ Handled using safe defaults:

```js
const safeMessage = currentAIMessage ?? "";
```

---

# 📈 Future Improvements

* 🎯 Personalized interview difficulty
* 📹 Video interview support
* 📊 Detailed analytics dashboard
* 🧠 ML-based scoring model
* 🌍 Multi-language support

---

# 🤝 Contribution

Contributions are welcome!

Steps:

1. Fork repo
2. Create branch
3. Make changes
4. Submit PR

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Akshay Mani Tripathi**

---

# ⭐ Final Note

This project is not just a UI demo — it's a **complete AI-driven system** combining:

* Real-time interaction
* Intelligent decision-making
* Human-like communication

It demonstrates strong concepts in:

* Full-stack development
* AI integration
* System design
* User experience engineering

---

⭐ If you found this useful, consider giving it a star!
