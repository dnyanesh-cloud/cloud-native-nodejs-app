# 🚀 Scalable Node.js Application Deployment on AWS

This project demonstrates how to deploy a **Dockerized Node.js application** on AWS using a **high-availability and auto-scalable architecture**.

The application allows users to sign up through a web interface and stores data in **MongoDB Atlas**, a cloud-hosted database.

---

## 🏗 Architecture Overview

User Browser
→ Application Load Balancer
→ Auto Scaling EC2 Instances
→ Dockerized Node.js App
→ MongoDB Atlas (Cloud Database)

This design ensures high availability, scalability, and centralized data storage.

---

## 🚀 Key Features

* Containerized Node.js application using Docker
* Application Load Balancer for traffic distribution
* Auto Scaling Group for high availability & scaling
* MongoDB Atlas cloud database integration
* Health check enabled for load balancer monitoring
* Stateless architecture suitable for scaling

---

## 🧰 Tech Stack

**Backend:** Node.js, Express
**Database:** MongoDB Atlas
**Containerization:** Docker, Docker Compose
**Cloud:** AWS EC2, ALB, Auto Scaling
**Frontend:** HTML, CSS

---

## 📂 Project Structure

```
docker-nodeapp/
│
├── docker-compose.yml
└── nodeapp/
    ├── Dockerfile
    ├── server.js
    ├── package.json
    └── public/
        ├── index.html
        └── style.css
```

---

## 🐳 Running the Application (Docker)

### 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd docker-nodeapp
```

### 2️⃣ Start containers

```bash
docker-compose up -d --build
```

### 3️⃣ Verify containers

```bash
docker ps
```

---

## 🌐 Access the Application

### Signup Portal

```
http://EC2-IP:3000
```

### Health Check

```
http://EC2-IP:3000/
```

---

## ☁️ AWS Deployment Steps

1. Launch EC2 instance and deploy Docker app.
2. Create an AMI from the working instance.
3. Create a Launch Template using the AMI.
4. Create a Target Group (port 3000, health check `/`).
5. Create an Application Load Balancer (HTTP 80).
6. Create an Auto Scaling Group attached to the ALB.
7. Access the app using the ALB DNS.

<img src="screenshots/AMI.png" width="200"> <img src="screenshots/template.png" width="200">
<img src="screenshots/target.png" width="200"><img src="screenshots/ASG.png" width="200">
<img src="screenshots/LB.png" width="200">

---

## 🗄 MongoDB Atlas Setup

1. Create a free cluster (AWS Mumbai recommended).
2. Create database user and password.
3. Add IP access (0.0.0.0/0 for testing).
4. Obtain connection string.
5. Add connection string to docker-compose environment.

Example:

```
MONGO_URL=mongodb+srv://user:password@cluster.mongodb.net/mydb
```
<img src="screenshots/successed.png" width="400">

---

## 🧪 verifying using images

Create user:

<img src="screenshots/browser.png" width="500">

View users:

<img src="screenshots/mongodb.png" width="500">


Health check:

<img src="screenshots/target.png" width="500">
```

---

## 🎯 What This Project Demonstrates

* High availability architecture
* Load balancing and traffic routing
* Auto scaling cloud infrastructure
* Stateless application design
* Cloud database integration
* DevOps deployment workflow

---
