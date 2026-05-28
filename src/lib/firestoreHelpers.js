// Helper to add a document with a timeout fallback
export async function addDocWithTimeout(promise, timeoutMs = 10000) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => {
      const err = new Error("timeout");
      err.code = "timeout";
      reject(err);
    }, timeoutMs),
  );

  return Promise.race([promise, timeout]);
}

export function mapFirebaseErrorToMessage(err) {
  if (!err) return "Something went wrong.";
  if (err.code === "timeout" || (err.message && err.message === "timeout"))
    return "Request timed out. Check Firebase connection.";
  if (err.code === "permission-denied")
    return "Permission denied. Check Firestore rules.";
  if (err.message && err.message.includes("Missing required Firebase env"))
    return "Firebase configuration missing. Check environment variables.";

  // Fallback include code for debugging
  return `${err.code || "error"}: ${err.message || "An error occurred."}`;
}
