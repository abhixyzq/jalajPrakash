/**
 * Security & Sanitization Utilities
 */

// Validate and sanitize URLs to prevent javascript: and data: pseudo-protocols in anchor tags
export function sanitizeUrl(url, fallback = '#') {
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  // Allow safe protocols
  if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) {
    return trimmed;
  }
  // Allow relative paths for local images
  if (trimmed.startsWith('/') || trimmed.startsWith('./')) {
    return trimmed;
  }
  // If it's a domain without protocol, prepend https://
  if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return fallback;
}

// Safely sanitize string inputs
export function sanitizeText(text, maxLength = 1000) {
  if (typeof text !== 'string') return '';
  return text.trim().slice(0, maxLength);
}
