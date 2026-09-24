# PLAN-FITUR Fork MeAI — `diluviumm/9router`
Dibuat: 24 Sep 2026 · Codename `rantai-manis` · Status: **MENUNGGU APPROVAL Mael** sebelum implementasi

## 0. Baseline (terverifikasi)
- Fork: `github.com/diluviumm/9router` ← upstream `decolua/9router` (MIT, 29.7k★), branch **master**, HEAD `39e36d3d` = **v0.5.86** = versi terpasang.
- Clone lokal: `~/me/github/meai` (remotes origin+upstream siap; sync saat ini **0**).
- Stack: Next.js `src/` 4.3MB (app page/layout, `proxy.js`, `mitm/`, `lib/`, `i18n/`, `store/` zustand, `models/`) + `cli/` + `scripts/` (bundle `scripts/build-cli.js` → `cli.js`) + Docker stack + gitbook docs.
- Runtime: prefix `~/.local/node22`, unit **`meai.service` (`--skip-update`)**, port **20128**, ingress `router.ishmly.space`→20128 (named tunnel), data `~/.meai`.

## 1. LIST FITUR YANG DIHAPUS / DIMATIKAN
| # | Fitur | Bukti di kode | Aksi | Prioritas |
|---|---|---|---|---|
| H1 | **Cloud sync ke 9router.com** (phone-home) | `.env.example`: `CLOUD_URL=https://9router.com`, `NEXT_PUBLIC_CLOUD_URL`, `custom-server.js` PEER_TOKEN + background token refresh | Buang env default → `CLOUD_URL=""`; nonaktifkan modul background refresh (self-host only) | **P1** |
| H2 | **Self-updater agresif** | `src/lib/appUpdater.js` — mematikan proses (`taskkill`/`sudo kill`) + spawn updater | Hapus/pasang guard: updater OFF selalu (kita update via git fork flow) | **P1** |
| H3 | **Telemetri/observability** | `.env.example` `OBSERVABILITY_ENABLED=true` + pencocokan analytics di 8 file (`src/app/layout.js`, `src/mitm/config.js`, `src/mitm/dns/dnsConfig.js`, `src/mitm/manager.js`, `dashboard/skills/page.js`, `landing/Features.js`, `shared/Header.js`, `shared/skills.js`) | Set default `false`; audit tiap file → hilangkan endpoint kirim (matikan fetch outbound) | **P1** |
| H4 | Docker stack | `Dockerfile`, `docker-compose.yml`, `captain-definition`, `DOCKER.md`, `.dockerignore` | Pindahkan ke `attic/` (kita pakai systemd+prefix lokal; reversibel, bukan hilang) | P2 |
| H5 | Papan iklan README | `README.md` 80 baris pertama: embed YouTube, badge trendshift, 10 bahasa i18n | Ganti README ringkas: cara pakai + konfigurasi lokal + catatan fork Mael; i18n README tetap di `i18n/` | P3 |
| H6 | Web-search SearXNG bawaan | `.env.example` `SEARXNG_URL` (opsional feature) | Matikan default (tak dipakai di stack kita) | P3 |
| H7 | `gitbook/` docs | docs presentasi | **KEEP** (referensi, bukan dihapus) — jangan disentuh dulu | — |

## 2. LIST FITUR YANG DITAMBAHKAN
| # | Fitur | Rencana | Prioritas |
|---|---|---|---|
| A1 | **Preset auto-fallback utk model pilihan Mael** | `comboPresets.js`: preset "mael-default" → `mimo-v2.6-flash` sebagai model chat utama, fallback ke provider murah (sesuai preferensi "Nol-GPT: MOA→mimo") | P2 |
| A2 | **Endpoint health kustom utk portal** | `/api/healthz` ringkas (port+model aktif) supaya portal `/api/health` bisa polling router (opsional; bisa juga pakai probe TCP) | P3 |
| A3 | **Branding lokal** | `INSTANCE_NAME` + judul dashboard → "MeAI · mael stack" (tanpa mengubah fungsi) | P3 |
| A4 | **Dokumentasi koneksi Hermes/CLI** | README: contoh `ANTHROPIC_BASE_URL`/`OPENAI_BASE_URL` → `http://localhost:20128` utk tool-stack Mael | P2 |
| A5 | Log hygiene | pastikan `ENABLE_REQUEST_LOGS=false` default + logrotate utk `~/.meai` (kita sudah punya logrotate WAL) | P3 |

## 3. PLAYBOOK UPDATE SELEKTIF (inti fork ini)
```bash
cd ~/me/github/meai
git fetch upstream                    # pantau decolua/9router
git log --oneline HEAD..upstream/master   # lihat apa yang baru
# per-file selective (AMAN - file yang kita hapus jangan diambil):
git checkout upstream/master -- src/lib/proxy.js src/mitm/server.js   # contoh file core bugfix
# atau cherry-pick commit tertentu:
git cherry-pick <hash>
npm run build                         # bundle src/ -> cli.js (scripts/build-cli.js)
npm install -g ~/me/github/meai    # pasang ke prefix ~/.local/node22
systemctl --user restart meai.service
# verifikasi: port 20128 + dashboard + tunnel router.ishmly.space
```
- **PR kecil-kecil di fork:** setiap fitur = commit terpisah di branch `mael/fork` (hindari 1 commit raksasa).
- **Rollback:** `npm install -g meai@0.5.86` (paket resmi) + unit tetap `--skip-update`.

## 4. TAHAPAN EKSEKUSI (berurutan, tiap tahap = build + deploy + verify)
1. **Fase-1 (bersih privacy):** H1+H2+H3 → `npm run build` → install lokal → smoke test (dashboard 200, proxy jalan, no outbound ke 9router.com dari log) → commit.
2. **Fase-2 (fungsional Mael):** A1 preset mimo + A4 dokumentasi → build+deploy+verify → commit.
3. **Fase-3 (kebersihan):** H4 (attic) + H5 README + H3 audit sisa 8 file → build+verify → commit.
4. **Fase-4 (opsional):** A2+A3+A5.

## 5. KRITERIA SELESAI (definition of done)
- [x] Build `npm run build` tanpa error. (BUILD_EXIT=0 tiap fase; fase-4 = README-only, tanpa build ulang)
- [x] Unit `meai.service` active, port 20128 respons, `router.ishmly.space` via tunnel OK. (verifikasi rutin tiap ronde)
- [x] Pencocokan outbound: TAK ADA request ke `9router.com` / analytics. (audit fase-3: grep kode aktif = NOL; log startup bersih; sisa hanya file .bak untracked)
- [x] Updater & observability OFF (env default + kode). (route update/shutdown = 501; envFallback=false; ENABLE_REQUEST_LOGS verified OFF fase-4)
- [x] Preset mimo tersedia. (combo `mael-mimo` = opencode-go mimo-v2.6-flash → pro → pro-ultraspeed; "terpilih" = saat ini Mael route langsung opencode-go,meai di-diamkan per permintaan)
- [x] Setiap fase punya commit sendiri. (fase-1 `8c00041d`, fase-2 `73eb3fb1`, fase-3 `26a6faac`, fase-4 `a573ff14`)

## 6. CATATAN
- Seluruh perubahan = reversibel (commit per-fase + paket resmi npm sebagai fallback).
- Jangan `git push --force`; upstream sync utamakan `cherry-pick`/`checkout -- file` (bukan merge penuh) supaya fitur yang kita hapus tidak kembali.

## 7. STATUS-REALITA (25 Sep 2026 — fork-final)

| Fase | Isi | Commit | Status |
|---|---|---|---|
| Fase-1 (privacy) | H1 cloud-sync OFF · H2 updater 501 · H3 telemetri hard-OFF | `8c00041d` | ✅ DONE |
| Fase-2 (fungsional) | A1 combo `mael-mimo` · A2 `/api/healthz` publik · A3 branding Mael Stack + guard whitelist | `73eb3fb1` | ✅ DONE |
| Fase-3 (kebersihan) | H4 6 file Docker → `attic/` · H5 README ringkas (upstream di attic) · H6 SearXNG OFF · audit outbound NOL | `26a6faac` | ✅ DONE |
| Fase-4 (ops) | A4 doc integrasi ANTHROPIC/OPENAI_BASE_URL · A5 request-logs verified OFF · logrotate rclone (52MB→0) | `a573ff14` | ✅ DONE |
| DoD §5 | Semua 6 butir terpenuhi (lihat tanda [x] di atas) | — | ✅ ALL GREEN |

Catatan operasional: rollback = `npm i -g ~/me/forks/rollback/meai-0.5.86.tgz` (tarball resmi)
atau `git revert <fase>`; update upstream selektif = playbook §3 (checkout/cherry-pick, bukan merge penuh).
Sisa untracked = file `.bak-*` (disengaja utk rollback; tidak ikut commit).
