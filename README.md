# Voice Recorder & Sensor Data Application

This application is built using TypeScript, JavaScript, and React. It utilizes the npm package manager for dependency management.

## Features

1. **Voice Recording**: The application allows users to record their voice. The recordings can be played back and removed as needed.

2. **Sensor Data**: On mobile devices, the application can display sensor data including acceleration (including gravity), and orientation.

## Installation

To install the application, you need to install the dependencies first. You can do this by running one of the following commands in your terminal:

```bash
npm install
# OR
yarn
# OR
pnpm install
```

## Running the Application

You can run the application in development mode using the following command:

```bash
npm run dev
```

## Building the Application

To build the application for production, you can use the following command:

```bash
npm run build
```

## Linting

The application uses ESLint for linting. You can run the linter using the following command:

```bash
npm run lint
```

## Previewing the Application

After building the application, you can preview the built application using the following command:

```bash
npm run preview
```

## Dependencies

The application uses several dependencies, including:

- `react`: A JavaScript library for building user interfaces.
- `react-device-detect`: A simple library to detect devices in React.
- `react-mic`: A library to record audio input in React.
- `react-router-dom`: A library for routing in React applications.
- `sass`: A preprocessor scripting language that is interpreted or compiled into CSS.

## Development Dependencies

The application also uses several development dependencies, including:

- `@types/react`, `@types/react-dom`, `@types/react-mic`: TypeScript definitions for React, ReactDOM, and ReactMic respectively.
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`: ESLint plugin and parser for TypeScript.
- `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: ESLint and its plugins for enforcing code style.
- `typescript`: A language for application-scale JavaScript development.
- `vite`: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## File Structure

- `README.md`: Contains basic information about the project and instructions for installation, running, building, and previewing the application.
- `src/pages/Sensors.tsx`: Contains the React component for displaying sensor data.
- `src/pages/Recorder.tsx`: Contains the React component for recording audio.
- `package.json`: Lists the packages that your project depends on, specifies versions of a package that your project can use using semantic versioning rules.

## Note

This application is best experienced on a mobile device due to the sensor data functionality.
