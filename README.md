# 🌐 Code2Cloud Portfolio

A personal developer portfolio built with **React** and deployed on **Azure Container Apps** using **Docker**, **Terraform**, and **GitHub Actions**.

> 🔴 Live at: [www.architsagar.me](https://www.architsagar.me)

---

## 🚀 Features

- ✨ React-based interactive portfolio
- 🐳 Dockerized for containerized deployment
- ☁️ Hosted on Azure via Container Apps
- 🔁 CI/CD pipeline using GitHub Actions
- 🌍 Custom domain with HTTPS (`www.architsagar.me`)

---

## ⚙️ Tech Stack

- **Frontend:** React
- **CI/CD:** GitHub Actions
- **Infrastructure:** Terraform
- **Hosting:** Azure Container Apps
- **Containerization:** Docker

---

## 🔧 Deployment Overview

Every push to the `main` branch triggers:

1. Code linting and testing
2. Docker image build & push to Docker Hub
3. Terraform applies infrastructure
4. Domain is auto-bound if not already

---

## 🛠 Local Development

```bash
cd src
npm install
npm start
