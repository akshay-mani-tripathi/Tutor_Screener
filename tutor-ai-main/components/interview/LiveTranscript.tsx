"use client";
// LiveTranscript — shows conversation history in IBM Plex Mono
// New AI messages appear with a typewriter effect

import { useEffect, useRef, useState } from "react";
import { ConversationTurn } from "@/types";

interface LiveTranscriptProps {
  history: ConversationTurn[];
  currentAIMessage?: string;
  isTyping: boolean;
}

// Typewriter hook — reveals text character by character
function useTypewriter(text: string = "", enabled: boolean, speed = 18) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    // Handle empty safely
    if (!text) {
      setDisplayed("");
      return;
    }

    // If typing disabled → show full instantly
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, enabled, speed]);

  return displayed;
}

export function LiveTranscript({
  history,
  currentAIMessage,
  isTyping,
}: LiveTranscriptProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // ✅ Normalize value (fixes TypeScript error completely)
  const safeMessage = currentAIMessage ?? "";

  // Typewriter output
  const typedMessage = useTypewriter(safeMessage, isTyping);

  // Scroll to bottom on updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, typedMessage]);

  // Show all history except last assistant message
  const pastTurns = history.slice(0, -1);

  return (
    <div
      className="w-full max-w-2xl max-h-64 overflow-y-auto space-y-4 px-1"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {/* Past conversation */}
      {pastTurns.map((turn, i) => (
        <div key={i} className="space-y-1">
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{
              color:
                turn.role === "assistant"
                  ? "rgba(242,242,242,0.35)"
                  : "rgba(242,242,242,0.5)",
            }}
          >
            {turn.role === "assistant" ? "INTERVIEWER" : "YOU"}
          </span>

          <p className="text-sm text-white/60 leading-relaxed">
            {turn.content}
          </p>
        </div>
      ))}

      {/* Latest AI message (typewriter) */}
      {safeMessage.length > 0 && (
        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/35">
            INTERVIEWER
          </span>

          <p className="text-sm text-[#F2F2F2] leading-relaxed">
            {isTyping ? typedMessage : safeMessage}

            {isTyping && typedMessage.length < safeMessage.length && (
              <span className="animate-pulse">▌</span>
            )}
          </p>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
