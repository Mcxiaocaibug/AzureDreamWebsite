"use client";

import { useEffect, useRef, useState } from "react";

const ADDRESS = "miku.click:10669";

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export default function CopyAddressButton() {
  const timeoutRef = useRef(null);
  const [buttonText, setButtonText] = useState("复制地址");
  const [statusText, setStatusText] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setCopiedState = () => {
    setButtonText("已复制!");
    setStatusText("服务器地址已复制到剪贴板。");
    setIsError(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setButtonText("复制地址");
    }, 2000);
  };

  const setErrorState = () => {
    setStatusText("复制失败，请手动复制地址。");
    setIsError(true);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(ADDRESS);
        setCopiedState();
        return;
      }
      const copied = fallbackCopyText(ADDRESS);
      if (copied) {
        setCopiedState();
        return;
      }
      setErrorState();
    } catch {
      const copied = fallbackCopyText(ADDRESS);
      if (copied) {
        setCopiedState();
        return;
      }
      setErrorState();
    }
  };

  return (
    <>
      <button id="copy-btn" className="btn btn--ghost" type="button" onClick={handleCopy}>
        {buttonText}
      </button>
      <p className={`copy-status${isError ? " is-error" : ""}`} aria-live="polite">
        {statusText}
      </p>
    </>
  );
}
