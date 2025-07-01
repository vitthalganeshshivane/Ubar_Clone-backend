const socketIO = require("socket.io");
const userModel = require("./models/user.models");
const captainModel = require("./models/captain.model");

let io;

function initializeSocket(server) {
  io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("join", async (data) => {
      const { userId, userType } = data;
      console.log(`User ${userId} joined as ${userType}`);

      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, {
          socketId: socket.id,
        });
      } else if (userType === "captain") {
        console.log("userId", userId, "userType:", userType);
        await captainModel.findByIdAndUpdate(userId, {
          socketId: socket.id,
        });
      }
    });

    socket.on("update-location-captains", async (data) => {
      const { userId, userType, location } = data;

      console.log(
        `User ${userId} updated location to ${location.ltd} ${location.lng}`
      );

      if (!location || !location.ltd || !location.lng) {
        return socket.emit("error", { message: "Invalid location Data" });
      }

      await captainModel.findByIdAndUpdate(userId, {
        locations: {
          type: "Point",
          coordinates: [location.lng, location.ltd],
        },
      });
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.io}`);
    });
  });
}

function sendMesssageToSocketId(socketId, messageObject) {
  console.log("📤 Sending event:", messageObject.event, "to socket:", socketId);

  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log("Socket.io not initialized");
  }
}

module.exports = { initializeSocket, sendMesssageToSocketId };
