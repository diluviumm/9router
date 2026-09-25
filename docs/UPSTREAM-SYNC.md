# Upstream Sync — Panduan Update Selective dari decolua/9router

> Fork ini (`diluviumm/meai`) menjaga **identitas MeAI** (rebrand, token savers, tema Noctalia,
> keep-list provider) di atas basis upstream `decolua/9router`.
> Update harus **selective** — bukan merge besar-besaran — supaya identitas fork tidak tertimpa
> dan konflik bisa dihitung.

## 1. Mekanisme yang sudah berjalan otomatis

| Komponen | Kapan | Fungsi |
|---|---|---|
| `meai-daily.timer` | tiap 03:25 WITA | menjalankan `meai-daily.sh` (backup DB + **upstream check** + catalog) |
| `~/.hermes/scripts/meai-upstream.sh` | dipanggil daily | **CHECK-ONLY**: `git merge-base` + GitHub API `compare` → menyimpan `behind`/`status` ke `~/.hermes/state/meai-upstream.json` |
| `~/.hermes/scripts/meai-upstream-apply.sh` | saat diminta (`--apply`) | **SELECTIVE APPLY**: cherry-pick commit upstream yang aman (lihat §3) |

Check harian **tidak pernah mengubah repo** — hanya melapor. Apply selalu terpisah dan terkontrol.

## 2. Kenapa selective (bukan `git pull upstream master`)

1. Fork sudah mengubah banyak file (rebrand `9router→MeAI`, `globals.css` tema Noctalia,
   `ConnectionsCard`, availability API, provider keep-list, `README`, dll).
2. `git pull` upstream = merge penuh → konflik di file-file identitas → risiko identitas fork tertimpa.
3. Selective = **perubahan upstream diambil satu-satu**, dan kita TAHU setiap file apa yang masuk.

## 3. Cara kerja `meai-upstream-apply.sh` (selective, aman)

```
bash ~/.hermes/scripts/meai-upstream-apply.sh           # DRY-RUN: rencana saja, tanpa menyentuh repo
bash ~/.hermes/scripts/meai-upstream-apply.sh --apply   # eksekusi cherry-pick yang aman
```

Algoritma:

1. `git fetch upstream` (decode DPI bila perlu — lihat playbook hermes: pakai API/patch bila HTTPS fetch diblokir).
2. `BASE=$(git merge-base HEAD upstream/master)` → titik gabung terakhir.
3. **Daftar file yang sudah dimodifikasi fork**: `git diff --name-only $BASE..HEAD`.
4. **Daftar commit baru upstream**: `git log $BASE..upstream/master --oneline`.
5. Untuk tiap commit upstream:
   - Ambil daftar file yang disentuh commit (`git show --name-only`).
   - **SKIP (auto-safe)** bila TIDAK ada satu pun file-nya menyentuh file yang dimodifikasi fork.
   - **SKIP (butuh review manual)** bila ada irisan → dicatat dalam daftar "perlu cherry-pick tangan".
   - Yang aman → `git cherry-pick <sha>` (berhenti + `--abort` bila konflik tak terduga).
6. Setelah apply: `npm run build` (wajib hijau) → kalau lolos, `git push origin mael/fork`.
7. Commit upstream yang di-skip dicatat di `~/.hermes/state/meai-upstream-apply.log` —
   jalankan ulang `--dry-run` setelah tiap sync untuk melihat sisa.

## 4. Kalau commit yang di-skip MAU diambil (review manual)

```bash
git fetch upstream
git cherry-pick <sha>            # kalau konflict:
git status                        # lihat file bentrok
#  ...selesaikan manual...
git add <file> && git cherry-pick --continue
# atau batalkan: git cherry-pick --abort
```

Setelah konflik selesai: **periksa ulang identitas MeAI** — `grep -ri "9router" <file>` hanya
boleh menemui URL resmi (`github.com/decolua/9router`, `9router.com`) — selain itu = kembali tertimpa.

## 5. Checklist pasca-update (wajib)

- [ ] `npm run build` hijau (Next.js compile).
- [ ] `curl -s localhost:20128/api/healthz` → `service: meai-mael-stack`.
- [ ] Rebrand: `grep -rn "9router" src --include="*.js" | grep -v "github.com/decolua\|9router.com\|// " ` → 0 non-URL.
- [ ] Keep-list provider utuh: settings `codebuddy-cn:true · opencode-go:false`.
- [ ] Token savers tetap ON: `rtk · caveman(lite) · ponytail(lite) · headroom`.
- [ ] Tema Noctalia: `.dark` vars di `globals.css` (`#141318` / `#c8bfff`).
- [ ] Push `origin mael/fork` + gitleaks.

## 6. Conflict resolution policy (fork)

- **Identitas fork menang** untuk: nama (MeAI), tema (Noctalia), keep-list, token-saver config,
  keamanan (masking key), rate-limit/IP handling.
- **Upstream menang** untuk: perbaikan bug routing/translator, provider registry baru,
  perbaikan performa — asalkan tidak menyentuh identitas.
- Selalu backup: `git stash list` / `git branch backup/pre-sync-<tanggal>`.
