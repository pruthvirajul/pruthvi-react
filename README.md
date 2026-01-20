# SignupFlowApp

This repository contains a minimal signup/login example with a Node/Express/MongoDB backend and a React Native frontend.

Backend
- Folder: `backend`
- Start:

```powershell
cd backend
npm install
node server.js
```

This starts the backend on http://localhost:5000

Frontend
- Folder: `frontend`
- Install dependencies:

```powershell
cd frontend
npm install
```

How to run the frontend depends on your chosen runtime:
- Expo: `expo start`
- React Native CLI (Android/iOS): `npx react-native run-android` or `npx react-native run-ios`
- Web (if you adapt to Vite/React): use your chosen web runner

Notes
- Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017/signupflow`.
- You can change the JWT secret in `backend/services/auth.service.js`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
