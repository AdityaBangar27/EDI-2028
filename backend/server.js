const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

// Connect to Database
// connectDB(); // MongoDB is disabled to allow local running without setup

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins for dev
        methods: ['GET', 'POST']
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Basic Route
app.get('/', (req, res) => {
    res.send('BrainBridge API is running');
});

// Socket.io for Real-time communication
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', userId);

        socket.on('disconnect', () => {
            socket.to(roomId).emit('user-disconnected', userId);
        });
    });
    
    // Request Distribution System
    socket.on('create-doubt-request', (data) => {
        console.log('Received doubt request:', data);
        socket.broadcast.emit('receive-doubt-request', {
            ...data,
            requesterId: socket.id,
            timestamp: new Date()
        });
    });

    // Live Session Creation
    socket.on('accept-doubt-request', (data) => {
        const { roomId } = data;
        socket.join(roomId);
        console.log(`Student accepted doubt, joined room ${roomId}`);
        socket.broadcast.emit('request-accepted', { roomId, helperId: socket.id });
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
