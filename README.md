# 9Router — fork Mael

Proxy & router LLM lokal (OpenAI/Anthropic-compatible) di `localhost:20128`.
Fork pribadi dari [decolua/9router](https://github.com/decolua/9router) — lisensi MIT.

## Cara pakai

```bash
# instal (dari fork ini)
npm install && npm run build && npm run cli:pack
npm i -g ./9router-<versi>.tgz
9router --no-browser            # atau lewat unit systemd
```

- Dashboard: `http://127.0.0.1:20128/dashboard` (login, password akun)
- API: `ANTHROPIC_BASE_URL=http://127.0.0.1:20128` utk klien Claude-compatible
  - contoh: `export ANTHROPIC_BASE_URL=http://127.0.0.1:20128` lalu jalankan Claude Code / klien Anthropic-compatible lain (auth: pakai API key akun Anda sendiri via dashboard9router → API Keys) — **A4-F4**
  - tes cepat: `curl -s http://127.0.0.1:20128/api/healthz` → `{"ok":true,...}` (healthz publik, fase-2)
  - klien OpenAI-compatible: `OPENAI_BASE_URL=http://127.0.0.1:20128/v1`
- Healthcheck publik: `GET /api/healthz` → `{ok, service, version, uptime_s}`

## Konfigurasi lokal (stack Mael)

- Runtime prefix: `~/.local/node22` · unit **`9router.service`** dengan `--skip-update`
- Combo aktif: **`mael-mimo`** → `opencode-go:mimo-v2.6-flash` (fallback pro → pro-ultraspeed)
- SearXNG (`SEARXNG_URL`) **dinonaktifkan** — tak dipakai di stack ini
- Docker stack **dipindah ke `attic/`** (tak dipakai; lihat `attic/README-upstream.md` utk doc asli)

## Catatan fork (branch `mael/fork`)

| Fase | Isi |
|---|---|
| 1 | Hapus phone-home `9router.com` (CLOUD_URL), self-updater → 501, observability OFF |
| 2 | Combo `mael-mimo`, `/api/healthz`, branding **9Router - Mael Stack** |
| 3 | Docker → `attic/`, README ringkas ini, SearXNG OFF |

Update selektif dari upstream: `git fetch upstream` → `git checkout upstream/master -- <file>` → build ulang → commit terpisah. Rollback penuh: `npm i -g 9router@<versi-resmi>`.
