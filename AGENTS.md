<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions

- Android packaging uses Capacitor (`android/`, `capacitor.config.ts`) as a
  full-screen shell loading the published site via `server.url` — the app is
  server-rendered, so there is no static bundle to embed. Web behavior must
  never depend on native Capacitor APIs.
- Android builds run in GitHub Actions (`.github/workflows/android-build.yml`)
  because this workspace has no Java/Android SDK; signing secrets live in
  GitHub, never in the repo.
