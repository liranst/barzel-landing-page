export function openPopup(url) {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url:url });
  } else {
    console.error('Calendly script not loaded yet.');
  }
}