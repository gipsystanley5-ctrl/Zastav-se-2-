let blockerActive = false;

chrome.storage.onChanged.addListener((changes) => {
  if (changes.blocked !== undefined) {
    blockerActive = changes.blocked.newValue;
  }
});

chrome.storage.local.get("blocked", (data) => {
  blockerActive = data.blocked || false;
});

document.addEventListener('DOMContentLoaded', () => {
  if (blockerActive && window.location.href.includes('casino')) {
    document.body.innerHTML = '<h1 style="text-align:center;margin-top:100px;font-family:sans-serif;">🚫 Tento web je zablokován</h1>';
  }
});
