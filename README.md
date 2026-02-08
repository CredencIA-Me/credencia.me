# Credencia.me

Sistema de credenciamento construído com NodeJS, React (Vite), Material 3 Web e MongoDB.

## Estrutura

- `frontend`: interface web em React + Vite + Material 3 Web.
- `backend`: API em NodeJS com Express e MongoDB.

## Pré-requisitos

- NodeJS 20+
- MongoDB (local ou remoto)

## Como executar

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação web ficará disponível em `http://localhost:5173` e o backend em `http://localhost:3001/health`.
