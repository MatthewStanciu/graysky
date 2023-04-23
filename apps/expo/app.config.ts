import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "Graysky",
  slug: "graysky",
  scheme: "graysky",
  version: "0.0.1",
  owner: "mozzius",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "cover",
    backgroundColor: "#888888",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "dev.mozzius.graysky",
    buildNumber: "1",
  },
  android: {
    package: "dev.mozzius.graysky",
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#888888",
    },
  },
  extra: {
    eas: {
      projectId: "7e8ff69c-ba23-4bd8-98ce-7b61b05766c4",
    },
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
