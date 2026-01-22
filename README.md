

# 🍳 Food Recipe App (Mobile)

A cross-platform mobile application for discovering, sharing, and cooking delicious recipes. Built with **React Native (Expo)**, secured with **Clerk Authentication**, and powered by a custom **Node.js/Express** backend.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

---

## 📸 Screenshots

<table>
<tr>
  <td align="center"><img src="https://github.com/user-attachments/assets/697f22b7-7059-4f17-9d16-20c5185c009b" width="250"/><br/>Login</td>
  <td align="center"><img src="https://github.com/user-attachments/assets/c68d363a-6ae1-4c2a-862b-575c043211e0" width="250"/><br/>Home</td>
  <td align="center"><img src="https://github.com/user-attachments/assets/4c9b0c96-b172-47a1-98c9-d1318644cc4f" width="250"/><br/>Recipe Details</td>
</tr>
<tr>
  <td align="center"><img src="https://github.com/user-attachments/assets/3faa6722-5dc9-484d-a9f8-4b31b152a7f9" width="250"/><br/>Search</td>
  <td align="center"><img src="https://github.com/user-attachments/assets/93f99b78-5ac0-45f3-a562-8ac0245d7079" width="250"/><br/>Favorites</td>
  <td align="center"><img src="https://github.com/user-attachments/assets/0b7abf11-db73-4bc6-b5c0-46f4792a758d" width="250"/><br/>Profile</td>
</tr>
<tr>
  <td align="center"><img src="https://github.com/user-attachments/assets/3365d2b3-01c0-4ded-be69-478b9176097f" width="250"/><br/>Settings</td>
</tr>
</table>

---


## ✨ Features

- 🔐 **Secure Authentication**  
  Sign-up and sign-in using [Clerk](https://clerk.com/) (Email/Password & Social Providers)

- 🍛 **Discover Recipes**  
  Browse a beautiful collection of recipes with modern UI cards

- 🔍 **Smart Search**  
  Filter recipes by category, ingredients, or popularity

- 📝 **Recipe Details**  
  View ingredients, step-by-step instructions, and nutritional information

- 📱 **Cross-Platform**  
  Works on both Android and iOS using Expo

---

## 🛠 Tech Stack

### 📱 Mobile App (Frontend)
- **Framework:** React Native (Expo SDK 53)
- **Language:** JavaScript / TypeScript
- **Routing:** Expo Router
- **Styling:** NativeWind / Tailwind CSS / StyleSheet
- **Build Tool:** EAS (Expo Application Services)

### 🌐 Backend (API)
- **Server:** Node.js & Express
- **Hosting:** Render
- **Base API URL:**  


[https://food-recipe-react-native.onrender.com/api](https://food-recipe-react-native.onrender.com/api)



---

## 🚀 Getting Started

Follow these steps to run the project locally.

---

## 📦 Prerequisites

Make sure you have:
- Node.js v18 or higher
- npm or yarn
- Expo Go app installed on your phone
- Git installed

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/food-recipe-app.git
cd food-recipe-app
````

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder and add:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_CLERK_KEY_HERE
EXPO_PUBLIC_API_URL=https://food-recipe-react-native.onrender.com/api
```

---

## 4️⃣ Run the App

Start the development server:

```bash
npx expo start
```

### Options:

* Press **a** → Run on Android Emulator
* Press **i** → Run on iOS Simulator
* Scan QR Code → Run on physical device using Expo Go

---

## 📱 Build APK (Android)

This project uses **EAS Build**.

### Install EAS CLI

```bash
npm install -g eas-cli
```

### Login to Expo

```bash
eas login
```

### Build APK

```bash
eas build -p android --profile preview
```

Once finished, Expo will provide a **download link for the APK**.
Transfer it to your phone and install it.

---

## 📂 Project Structure

```
├── app/                  # Expo Router screens
│   ├── (auth)/          # Authentication screens
│   ├── (tabs)/          # Main app tabs (Home, Search, Profile)
│   └── _layout.tsx     # Root layout config
├── assets/             # Images, fonts, icons
├── components/         # Reusable UI components
├── constants/          # Colors, fonts, app constants
├── hooks/              # Custom React hooks
├── services/           # API calls
├── app.json           # Expo configuration
├── eas.json           # EAS build config
└── package.json       # Dependencies
```

---

## 🤝 Contributing

Contributions are welcome!

### Steps:

1. Fork the repository
2. Create a branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit changes

   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to GitHub

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for details.

---

## 🎥 UI Reference

Want to improve your UI or animations?

Check out this tutorial:
**Food Recipe App UI | Expo | React Native**
[https://www.youtube.com/watch?v=JJR60QtgdsM](https://www.youtube.com/watch?v=JJR60QtgdsM)

---

## ⭐ Support

If you like this project, don’t forget to **star the repository** — it helps a lot! 🚀

```

