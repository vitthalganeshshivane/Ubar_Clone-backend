# 🚖 Ubar Clone – Backend

This is the **backend server** for the Ubar Clone app, built using **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It handles user and captain authentication, real-time location updates, ride requests, and more.

---

## 📂 Project Structure

Ubar_Clone-backend/
├── db/
│ └── db.js # MongoDB connection
├── models/
│ ├── user.models.js
│ └── captain.model.js
├── routes/
│ ├── user.routes.js
│ ├── captain.routes.js
│ ├── maps.routes.js
│ └── ride.routes.js
├── socket/
│ └── socket.js # Socket.IO setup & event handlers
├── app.js # Express app config
├── index.js # Server entry point
├── .env # Environment variables (gitignored)
├── package.json
└── README.md

---

## ⚙️ Tech Stack

- **Node.js** & **Express** – RESTful API server
- **MongoDB** + **Mongoose** – Data persistence
- **Socket.IO** – Real-time communication
- **dotenv** – Environment config
- **cors**, **cookie-parser**, **axios** – Middleware and HTTP utilities

---

## 🔥 Core Features

- **User & Captain Authentication** – Register/login endpoints
- **Maps & Geolocation** – Real-time coordinate updates
- **Ride Management** – Create, confirm, cancel rides
- **Socket.IO Integration**
  - `join` – Register user/captain with their socket ID
  - `update-location-captains` – Push captain GPS coords to DB
  - `new-ride` – Notify captains of incoming ride requests

---

## 📝 API Endpoints

### 📙 User Routes (`/api/users`)

- `POST /register` – Create a new user
- `POST /login` – Authenticate user

### 🚕 Captain Routes (`/api/captains`)

- `POST /register` – Create a new captain
- `POST /login` – Authenticate captain

### 🗺️ Maps Routes (`/api/maps`)

- (Typically for geocoding/ETA; implement as needed)

### 🛺 Ride Routes (`/api/rides`)

- `POST /create` – User creates a ride request
- `POST /confirm` – Captain confirms a ride
- (Add cancel, status if implemented)

---

## 💬 Socket.IO Events

| Event Name                 | Payload Description                                        |
| -------------------------- | ---------------------------------------------------------- |
| `join`                     | `{ userId, userType }` → Saves socket ID to the DB         |
| `update-location-captains` | `{ userId, location }` → Updates captain’s geo-coordinates |
| `new-ride`                 | Emitted to captains when a user requests a ride            |
| `disconnect`               | Handles socket disconnection                               |

---

## 🛠️ Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/vitthalganeshshivane/Ubar_Clone-backend.git
   cd Ubar_Clone-backend

   ```

2. **Install dependencies**

```bash
npm install

```

3. **Create a .env file in the root**

```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string

```

4. **Start the server**

```bash
node index.js

```

5. **Server will log:**

```bash
Server is running on port 3000
```

```

```
