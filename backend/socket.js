import { Server } from "socket.io";

export default function (server) {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", socket => {
    socket.on("chat", data => {
      // ЕНКРИПТИРАНА ПOРАКА – серверот НЕ ја чита
      socket.broadcast.emit("chat", data);
    });
  });
}