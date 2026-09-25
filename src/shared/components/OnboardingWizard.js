"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "@/shared/components";

// ── OnboardingWizard ──────────────────────────────────────────────
// B6: onboarding wizard utk koneksi pertama. Muncul sekali per browser
// (flag di localStorage); tombol Lewati/Selesai selalu menutup permanen.

const FLAG = "meai-onboarding-done";
const BASE = "https://meai.ishmly.space/v1";

export default function OnboardingWizard({ isOpen, onClose }) {
  const [step, setStep] = useState(0);

  const finish = () => {
    try { localStorage.setItem(FLAG, "1"); } catch { /* private mode */ }
    onClose();
  };

  const stepBody = [
    (
      <div key="s1" className="space-y-2 text-sm text-text-muted">
        <p>
          <span className="font-medium text-text-main">Manage every LLM connection in one place.</span>{" "}
          The list below shows each connection for this provider: green rows are active,
          dimmed rows are disabled.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="text-text-main">Toggle</span> — enable or disable a single connection.</li>
          <li><span className="text-text-main">Checkbox</span> — select many, then run bulk Aktifkan/Nonaktifkan actions.</li>
          <li><span className="text-text-main">Priority arrows</span> — order connections for fallback routing.</li>
        </ul>
      </div>
    ),
    (
      <div key="s2" className="space-y-2 text-sm text-text-muted">
        <p>Point any OpenAI-compatible tool at your gateway:</p>
        <pre className="overflow-x-auto rounded-lg bg-black/5 dark:bg-white/5 p-3 text-xs text-text-main">
{`OPENAI_BASE_URL=${BASE}
OPENAI_API_KEY=<your API key>

curl $OPENAI_BASE_URL/chat/completions \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"<model>","messages":[{"role":"user","content":"hi"}]}'`}
        </pre>
        <p className="text-xs">Aliases: <code className="text-text-main">/responses</code> dan <code className="text-text-main">/codex</code> tersedia utk OpenAI Responses API.</p>
      </div>
    ),
    (
      <div key="s3" className="space-y-2 text-sm text-text-muted">
        <p><span className="font-medium text-text-main">You&apos;re set.</span> Koneksi aktif + endpoint siap dipakai.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Health cek koneksi berjalan otomatis tiap jam (banner status).</li>
          <li>API key selalu ditampilkan ter-mask; buka Edit utk reveal.</li>
          <li>Guide ini tak muncul lagi setelah Anda menekan Selesai/Lewati.</li>
        </ul>
      </div>
    ),
  ];

  return (
    <Modal isOpen={isOpen} onClose={finish} title={`Onboarding ${step + 1}/3`}>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">
          {["Welcome to MeAI", "Connect your tools", "You're set"][step]}
        </h3>
        {stepBody[step]}
        <div className="flex items-center justify-between pt-2">
          <Button size="sm" variant="ghost" onClick={finish}>Lewati</Button>
          <div className="flex gap-2">
            {step > 0 && (
              <Button size="sm" variant="secondary" onClick={() => setStep(step - 1)}>Kembali</Button>
            )}
            <Button size="sm" onClick={() => (step >= 2 ? finish() : setStep(step + 1))}>
              {step >= 2 ? "Selesai" : "Lanjut"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

OnboardingWizard.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
