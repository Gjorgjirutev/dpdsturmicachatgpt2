export async function encrypt(message, key) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(message);
  const cipher = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded
  );
  return { iv: Array.from(iv), data: Array.from(new Uint8Array(cipher)) };
}

export async function decrypt(payload, key) {
  const buffer = new Uint8Array(payload.data);
  const iv = new Uint8Array(payload.iv);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    buffer
  );
  return new TextDecoder().decode(decrypted);
}