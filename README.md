# 🚀 Pipeline Builder

A full-stack pipeline builder application that allows users to create, connect, and validate node-based workflows using an interactive UI.

## 📌 Overview

This project enables users to visually construct pipelines using drag-and-drop nodes, connect them, and validate the structure using backend logic. It ensures the pipeline forms a **Directed Acyclic Graph (DAG)**.

## ✨ Features
- 🧩 Drag-and-drop node system
- 🔗 Connect nodes dynamically
- 🧠 Node abstraction for scalability
- 📝 Text node with dynamic variable parsing (`{{variables}}`)
- 📐 Auto-resizing text input node
- 🔍 DAG validation (cycle detection)
- 🔄 Backend integration with FastAPI
- 🎨 Clean and responsive UI

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Flow
- Zustand (state management)

### Backend
- FastAPI (Python)
- Uvicorn

## ⚙️ Installation & Setup

### 🔹 Frontend

```bash
cd frontend
npm install
npm run dev
###  🔹 Backend

pip install fastapi uvicorn
uvicorn main:app --reload
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload


