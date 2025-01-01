document.getElementById("analyze").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "extractMenu" }, (response) => {
      if (response) {
        fetch("http://localhost:5000/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ menu: response.menuItems })
        })
          .then(res => res.json())
          .then(data => {
            const output = document.getElementById("output");
            output.innerHTML = `<h2>Vegan Options:</h2><ul>${data.veganItems.map(item => `<li>${item}</li>`).join("")}</ul>`;
            output.innerHTML += `<h2>Suggestions:</h2><ul>${data.suggestions.map(s => `<li>${s}</li>`).join("")}</ul>`;
          });
      }
    });
  });
});
