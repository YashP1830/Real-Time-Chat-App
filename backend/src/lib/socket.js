import http from "http";
import { Server } from "socket.io";
import { socketAuthMiddleware } from "../middleware/socketAuthMiddleware.js";

let io;

// ✅ MOVE THIS TO TOP-LEVEL SCOPE
const userSocketMap = {}; // { userId: socketId }

export const initSocket = (app) => {
  const server = http.createServer(app);

  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });

  // 🔐 Socket auth middleware
  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {
    console.log("🟢 Socket connected:", socket.id);
    console.log("🧑 User:", socket.user.fullName);

    const userId = socket.userId;
    userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("🔴 Socket disconnected:", socket.id);
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });

  return server;
};

// ✅ NOW THIS WORKS
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

export { io };
