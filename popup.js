let button = document.getElementById('toggle');

chrome.storage.local.get('blocked', (data) => {
  button.textContent = data.blocked ? 'Zapnuto' : 'Vypnuto';
});

button.onclick = () => {
  chrome.storage.local.get('blocked', (data) => {
    let newState = !data.blocked;
    chrome.storage.local.set({blocked: newState});
    button.textContent = newState ? 'Zapnuto' : 'Vypnuto';
  });
};
