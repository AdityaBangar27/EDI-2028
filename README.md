# BrainBridge 🧠

**AI-Powered Study Platform: Students Helping Students**

BrainBridge is a full-stack educational collaboration platform where students can solve academic doubts through AI-powered peer matching and live video communication.

## 🌟 Features

- **AI-Powered Doubt Matching** — Ask a question, AI finds the best peer to help you instantly
- **Live Video Sessions** — WebRTC-powered 1-on-1 and group video calls with screen sharing & whiteboard
- **Real-Time Request Distribution** — Socket.IO live request popups with 1-minute timer
- **Content Platform** — YouTube-style video feed, Shorts, Live Sessions, Playlists
- **Rating & Reward System** — Rate peers after sessions, earn badges and mentor upgrades
- **Content Creation** — Upload shorts, long videos, educational posts, notes
- **Beautiful Dark UI** — Premium glassmorphism design with purple/indigo theme

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 18, TypeScript, Tailwind CSS |
| Animations | Framer Motion |
| Backend | Node.js, Express.js |
| Real-Time | Socket.IO, WebRTC |
| Database | MongoDB (Mongoose) |
| Auth | JWT (JSON Web Tokens) |
| Icons | Lucide React |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (optional — app works with in-memory store by default)

### Installation

**Clone the repo:**
```bash
git clone https://github.com/AdityaBangar27/EDI-2028.git
cd EDI-2028
```

**Install Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Install Backend:**
```bash
cd backend
npm install
npm start
```

### Environment Variables

Create `backend/.env`:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Login with JWT auth |
| `/register` | Sign up |
| `/dashboard` | Main feed with hero, recommended videos, live sessions, subjects |
| `/dashboard/doubt` | AI doubt submission with socket matching |
| `/dashboard/explore` | Browse subjects |
| `/dashboard/live` | Live sessions |
| `/dashboard/shorts` | Vertical short videos |
| `/dashboard/room/[id]` | WebRTC video call room with rating |
| `/profile` | User profile with stats & badges |
| `/settings` | App settings |

## 🎨 Architecture

The application implements the full flow from the architecture diagram:
- **AI Processing Module** → OCR, Speech-to-Text, NLP, Topic Classification
- **Student Matching Engine** → Socket.IO broadcast to matched peers
- **Request Distribution System** → Live popup with 1-minute timer
- **Live Session Flow** → WebRTC via Socket.IO signaling
- **Rating & Reward System** → Post-call star rating, badge upgrades
- **Content Creation Flow** → Multi-type upload (shorts, videos, live, posts, notes)

## 👤 Author

**Aditya Bangar**  
CS Student | Full-Stack Developer  
[GitHub](https://github.com/AdityaBangar27)

---

*Built for EDI 2028 — Educational Innovation Challenge*
