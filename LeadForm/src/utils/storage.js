import { DRAFT_KEY } from "./constants";

export function saveDraft(data) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}

export function loadDraft() {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}