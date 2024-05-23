# ChitChat - A Chat Application

Welcome to ChitChat, a powerful chat application built using Expo React Native and Firebase. ChitChat allows users to register, log in, and chat with their friends and family in real-time. The application is designed to be user-friendly and provides seamless connectivity for vibrant communication. While the core features are implemented, a status feature is planned for future development.

## Features
- User registration and login
- Real-time messaging
- User-friendly interface
- Future updates: Status feature
- Future updates: Group chats

## Table of Contents
1. Installation
2. Usage
3. Technologies Used
4. Future Updates

## Installation
### Prerequisites
Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have installed Expo CLI.
- You have an active Firebase account.
  
### Steps
1. Clone the repository
   ```sh
   git clone https://github.com/moinkhan07/ChitChat.git
   cd ChitChat

2. Install the dependencies
   ```sh
   npm install

3. Set up Firebase
- Go to the Firebase Console.
- Create a new project.
- Add a web app to your project.
- Copy the Firebase configuration object.

4. Configure Firebase in the project
- Create a firebaseConfig.js file in the root of your project and add your Firebase configuration object:
  ```sh
  // firebaseConfig.js
  export const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };

5. Run the application
   ```sh
   expo start

## Usage
1. Open the ChitChat app on your device.
2. Register a new account or log in with your existing credentials.
3. Start chatting with your friends and family by selecting a contact.

## Technologies Used
- React Native (Expo): For building the mobile application.
- Firebase Authentication: For user registration and login.
- Firebase Firestore: For storing chat messages and user data.

## Future Updates
- Status Feature: Allow users to post and view status updates similar to stories on other social media platforms.
- Group chat: Allow users to chat in group with the friend and family.
- Enhanced Notifications: Improve the push notification system for better user engagement.
- Media Sharing: Enable sharing of photos, videos, and other media within chats.
- Profile Customization: Allow users to customize their profiles with pictures and status messages.

<h2 style="text-align: center;">Thank you for using ChitChat!</h2>




