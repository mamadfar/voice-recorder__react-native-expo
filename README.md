# Sensor Data Application

This application is built using JavaScript, React, and React Native. It utilizes the npm package manager for dependency management.

## Features

1. **Sensor Data**: The application can display sensor data including accelerometer, gyroscope, magnetometer, barometer, pedometer, magnetometer uncalibrated, and light sensor data.

## How it Works

The application uses the `expo-sensors` package to access and display data from various sensors available on a mobile device. The main component, `SensorDisplay.js`, is responsible for subscribing to sensor data and displaying it on the screen.

Here's a brief overview of how `SensorDisplay.js` works:

1. **State Initialization**: At the beginning of the component, several pieces of state are initialized using the `useState` hook. These pieces of state will hold the data for each sensor.

2. **Sensor Subscriptions**: In the first `useEffect` hook, listeners are added for the Accelerometer, Gyroscope, Magnetometer, Barometer, Pedometer, and MagnetometerUncalibrated sensors. When these sensors produce new data, the corresponding state is updated with this data.

3. **Light Sensor Subscription**: In the second `useEffect` hook, a subscription is made to the LightSensor. This is done using a toggle function, which either subscribes or unsubscribes from the LightSensor depending on the current subscription status.

4. **Cleanup**: When the component is unmounted, all sensor listeners are removed to prevent memory leaks.

5. **Display**: The render method of the component displays the data from each sensor. It also includes a button to toggle the LightSensor subscription.

## Installation

To install the application, you need to install the dependencies first. You can do this by running the following command in your terminal:

```bash
npm install
```

## Running the Application

You can run the application in development mode using the following command:

```bash
npm start
```

## Dependencies

The application uses several dependencies, including:

- `react`: A JavaScript library for building user interfaces.
- `react-native`: A framework for building native apps using React.
- `expo-sensors`: An Expo library for accessing device sensor data.

## File Structure

- `README.md`: Contains basic information about the project and instructions for installation and running the application.
- `components/SensorDisplay.js`: Contains the React component for displaying sensor data.
- `package.json`: Lists the packages that your project depends on, specifies versions of a package that your project can use using semantic versioning rules.

## Note

This application is best experienced on a mobile device due to the sensor data functionality.
