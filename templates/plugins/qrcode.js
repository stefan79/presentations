/**
 * Lightweight QR code plugin for reveal.js presentations.
 *
 * Usage:
 *   <div data-qr="https://example.com" data-qr-size="256"></div>
 *
 * Generates QR codes client-side using the goqr.me API (no npm deps).
 * Optional data-qr-size attribute (default: 300px).
 */
const RevealQRCode = {
  id: "qrcode",
  init: () => {
    document.querySelectorAll("[data-qr]").forEach((el) => {
      const url = el.getAttribute("data-qr");
      const size = el.getAttribute("data-qr-size") || 300;
      const img = document.createElement("img");
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
      img.alt = url;
      img.style.margin = "0 auto";
      img.style.display = "block";
      el.appendChild(img);
    });
  },
};
