"use client";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
}

export default function TypingAnimation({
  text,
  duration = 200,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i,text]);

  return (
    <>
      {displayedText ? displayedText : text}
    </>
  );
}
