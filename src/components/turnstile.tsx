"use client";

import { useEffect, useRef } from "react";

// Cloudflare injects this global once the Turnstile script loads.
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/**
 * Renders a Cloudflare Turnstile widget. On success it injects a hidden
 * `cf-turnstile-response` input into the surrounding <form>, which the server
 * action verifies. `resetKey` lets the parent force a fresh challenge (e.g.
 * after a failed submit, since a token is single-use).
 */
export function Turnstile({
  siteKey,
  resetKey,
}: {
  siteKey: string;
  resetKey?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    function render() {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      if (widgetId.current) return; // guard against double render
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        "refresh-expired": "auto",
      });
    }

    if (window.turnstile) {
      render();
    } else {
      let script = document.querySelector<HTMLScriptElement>(
        "script[data-turnstile]"
      );
      if (!script) {
        script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.dataset.turnstile = "true";
        document.head.appendChild(script);
      }
      script.addEventListener("load", render);
    }

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          // widget already gone — nothing to clean up
        }
        widgetId.current = null;
      }
    };
  }, [siteKey]);

  // Force a fresh token when the parent bumps resetKey.
  useEffect(() => {
    if (widgetId.current && window.turnstile) {
      window.turnstile.reset(widgetId.current);
    }
  }, [resetKey]);

  return <div ref={containerRef} className="mt-5" />;
}
