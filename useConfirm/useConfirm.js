export const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const getConfirmStatus = () => {
    if (confirm(message)) {
      onConfirm();
    } else if (onCancel) {
      onCancel();
    }
  }

  return getConfirmStatus;
}
