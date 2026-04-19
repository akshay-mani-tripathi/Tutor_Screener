"use client";
// LiveTranscript — shows conversation history in IBM Plex Mono
// New AI messages appear with a typewriter effect

import { useEffect, useRef, useState } from "react";
import { ConversationTurn } from "@/types";

interface LiveTranscriptProps {
  history: ConversationTurn[];
  currentAIMessage?: string; // ✅ made optional
  isTyping: boolean;
}

// Typewriter hook — reveals text character by character
function useTypewriter(text: string = "", enabled: boolean, speed = 18) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    // ✅ Handle empty/undefined safely
    if (!text) {
      setDisplayed("");
      return;
    }

    // ✅ If typing disabled, show full text instantly
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    setDisplayed("");
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
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

  // ✅ Always pass safe string
  const typedMessage = useTypewriter(currentAIMessage || "", isTyping);

  // Scroll to bottom on new content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, typedMessage]);

  // Show all history except the last assistant turn (shown as typewriter)
  const pastTurns = history.slice(0, -1);

  return (
    <div
      className="w-full max-w-2xl max-h-64 overflow-y-auto space-y-4 px-1"
      style={{ fontFamily: "var(--font-mono)" }}
    >
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

      {/* Latest AI message with typewriter */}
      {currentAIMessage?.length > 0 && (
        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/35">
            INTERVIEWER
          </span>
          <p className="text-sm text-[#F2F2F2] leading-relaxed">
            {isTyping ? typedMessage : currentAIMessage}
            {isTyping &&
              typedMessage.length < (currentAIMessage?.length || 0) && (
                <span className="animate-pulse">▌</span>
              )}
          </p>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}