# 🚀 docker-nodeapp

This project demonstrates how to deploy a **Node.js application with MongoDB** using **Docker Compose** on a single server.

It includes:

✅ Node.js backend
✅ MongoDB database
✅ Mongo Express (DB Admin UI)
✅ Docker containerization
✅ Persistent storage
✅ Simple frontend form

---

## 📌 Architecture

Browser → Node.js App → MongoDB
          ↑
       Mongo Express UI

---

## 📂 Project Structure

```
docker-nodeapp/
│
├── docker-compose.yml
│
└── nodeapp/
    ├── Dockerfile
    ├── package.json
    ├── server.js
    └── public/
        ├── index.html
        └── style.css
```

---

## ⚙️ Requirements

* Docker
* Docker Compose
* Linux Server / EC2 Instance
* Open Ports: **3000**, **8081**

---

## 🐳 Setup & Run

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd docker-nodeapp
```

### 2️⃣ Start Containers

```bash
docker-compose up -d --build
```

### 3️⃣ Verify Running Containers

```bash
docker ps
```

---

## 🌐 Access Application

### ✅ Node Application

```
http://SERVER-IP:3000
```

### ✅ Mongo Express UI

```
http://SERVER-IP:8081
```

Login Credentials:

```
Username: admin
Password: qwerty
```

---

## 🗄 MongoDB Configuration

**Database:** `mydb`
**Collection:** `users`

MongoDB root credentials:

```
Username: admin
Password: qwerty
```

---

## 🧪 API Endpoints

### Save user data

```
POST /submit
```

### View saved users

```
GET /users
```

---

## 💾 Persistent Storage

MongoDB data is stored using Docker volume:

```
mongo-data
```

This ensures data remains safe even if containers restart.

---

## 🔄 Stop / Restart

Stop containers:

```bash
docker-compose down
```

Stop & remove volumes (⚠ deletes data):

```bash
docker-compose down -v
```

Restart:

```bash
docker-compose up -d
```

---

## 🔍 Troubleshooting

### Check logs

```bash
docker logs nodeapp
docker logs mongodb
```

### Check running containers

```bash
docker ps
```

### MongoDB connection issues?

Ensure:

* credentials match
* containers are running
* required ports are open

---

## 🔐 Security Notes (Production)

✔ Use strong passwords
✔ Restrict Mongo Express access
✔ Enable HTTPS
✔ Use firewall rules
✔ Avoid exposing DB publicly

---

## 📈 Future Improvements

* Nginx reverse proxy
* HTTPS with Let's Encrypt
* React frontend
* Authentication system
* CI/CD pipeline
* Kubernetes deployment

---

## 👨‍💻 Author

**Dnyaneshwar Bhandari**
DevOps & Cloud Enthusiast ☁️🚀

---

## ⭐ Learning Outcomes

✔ Docker containerization
✔ Service networking
✔ Database persistence
✔ Full-stack deployment
✔ DevOps fundamentals

---
