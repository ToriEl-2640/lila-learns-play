# Lila — Android app

Lila is packaged as a native Android app with [Capacitor](https://capacitorjs.com/):
a full-screen native shell with Lila's own icon and launch screen that loads the
published app (https://lila-learns-play.lovable.app). The web app keeps working
in browsers exactly as before — nothing about the website changed.

## What's already set up

- `capacitor.config.ts` — app id `app.lovable.lilalearns`, name "Lila", lavender
  launch screen (#EDE9FE), loads the published site.
- `android/` — the complete native Android project, with Lila's icon and launch
  screen generated in every required size (from `resources/`).
- `.github/workflows/android-build.yml` — builds the Play Store file in the cloud.

## One-time setup: your signing key

Google Play requires every app to be signed with a private key you keep forever.
Create it once on any computer (or ask someone to run this for you):

```bash
keytool -genkey -v -keystore lila.keystore -alias lila -keyalg RSA -keysize 2048 -validity 10000
base64 -w0 lila.keystore > lila.keystore.base64
```

Then in your GitHub repo → **Settings → Secrets and variables → Actions**, add:

| Secret name             | Value                                  |
| ----------------------- | -------------------------------------- |
| `ANDROID_KEYSTORE_BASE64` | contents of `lila.keystore.base64`   |
| `KEYSTORE_PASSWORD`     | the password you chose                 |
| `KEY_ALIAS`             | `lila`                                 |
| `KEY_PASSWORD`          | the key password you chose             |

Keep `lila.keystore` somewhere safe and private — never commit it.

## Building the Play Store file

1. Push this project to GitHub (Lovable's GitHub integration does this).
2. On GitHub: **Actions → Build Android app → Run workflow**.
3. When it finishes, download the `lila-release` artifact — inside is
   `app-release.aab`, the file Google Play wants.

## Publishing on Google Play

1. Create a Google Play Developer account ($25 one-time).
2. Create a new app, upload the `.aab` under **Production → Create release**.
3. Fill in the store listing, content rating, and the **Families policy**
   declarations (Lila is a children's app — no ads, no purchases, no tracking;
   say so in every applicable question).
4. Add a privacy policy URL before submitting for review.

## Building on a computer instead (optional)

With Android Studio installed:

```bash
bun install
mkdir -p dist/client && bunx cap sync android
cd android && ./gradlew bundleRelease   # or open android/ in Android Studio
```

## Notes

- The app needs internet on first open (it loads the published site). A fully
  offline native build is possible later by bundling a static export.
- After changing the website, publish it on Lovable — the Android app shows the
  update automatically, no new build needed. Only icon/launch-screen changes
  require a new Android build.
