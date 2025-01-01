chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractMenu") {
    const menuItems = Array.from(document.querySelectorAll(".MenuItem")).map(item => item.textContent.trim());
    sendResponse({ menuItems });
  }
});
