import type { CapacitorConfig } from "@capacitor/cli";

// Lila is a server-rendered web app, so the Android shell loads the published
// site inside a full-screen native WebView. The native project adds the app
// icon, launch (splash) screen, and Play Store packaging.
const config: CapacitorConfig = {
  appId: "app.lovable.lilalearns",
  appName: "Lila",
  webDir: "dist/client",
  server: {
    url: "https://lila-learns-play.lovable.app",
    cleartext: false,
  },
  backgroundColor: "#EDE9FE",
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      launchAutoHide: true,
      backgroundColor: "#EDE9FE",
      androidSplashResourceName: "splash",
      showSpinner: false,
    },
  },
};

export default config;
