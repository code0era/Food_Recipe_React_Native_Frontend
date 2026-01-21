// app/_layout.jsx
import { Slot } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "../cache"; // Ensure this imports your cache.js file
import SafeScreen from "../components/SafeScreen";

// Temporary fix to verify the app works
const publishableKey = "pk_test_cmVuZXdlZC1saW9uZmlzaC0wLmNsZXJrLmFjY291bnRzLmRldiQ";
if (!publishableKey) {
    throw new Error(
        "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
}

export default function RootLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
            <ClerkLoaded>
                <SafeScreen>
                    <Slot />
                </SafeScreen>
            </ClerkLoaded>
        </ClerkProvider>
    );
}