function withTimeout(ms = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), ms);
  return { controller, timeoutId };
}

export async function saveLeadToBackend(payload) {
  const { controller, timeoutId } = withTimeout(5000);

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (!res.ok) {
      const message =
        data?.message ||
        (res.status === 400
          ? "Missing required fields."
          : res.status === 409
          ? "Duplicate email in the same company."
          : res.status === 500
          ? "Server error. Please retry."
          : "Unable to save lead.");
      throw new Error(message);
    }

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Network timeout. Draft saved locally.");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}