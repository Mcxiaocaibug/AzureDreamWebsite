<script>
  import { onDestroy } from "svelte";

  const ADDRESS = "miku.click:10669";

  let buttonText = $state("复制地址");
  let statusText = $state("");
  let isError = $state(false);
  let isCopied = $state(false);
  let resetTimer;

  onDestroy(() => {
    clearTimeout(resetTimer);
  });

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

  function setCopiedState() {
    buttonText = "已复制!";
    statusText = "服务器地址已复制到剪贴板。";
    isError = false;
    isCopied = true;

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      buttonText = "复制地址";
      isCopied = false;
    }, 2000);
  }

  function setErrorState() {
    clearTimeout(resetTimer);
    buttonText = "复制地址";
    isCopied = false;
    statusText = "复制失败，请手动复制地址。";
    isError = true;
  }

  async function handleCopy() {
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
  }
</script>

<button id="copy-btn" class="btn btn--ghost" class:is-copied={isCopied} type="button" onclick={handleCopy}>
  {buttonText}
</button>
<p class="copy-status" class:is-error={isError} aria-live="polite">
  {statusText}
</p>
