# GreenBites
Suggests eco-friendly and plant-based eating.


# DoorDash Vegan Helper Extension

A Google Chrome extension that helps identify vegan items on a DoorDash restaurant page and provides suggestions for modifying items to be vegan.

## Features
- Automatically analyzes DoorDash restaurant pages.
- Identifies all vegan items on the menu.
- Provides 4-5 helpful suggestions for modifying non-vegan items.
- Uses Selenium to scrape menu data and the Ollama mini-LLM model for analysis.

## How It Works
1. Visit a DoorDash restaurant page.
2. Click the extension icon.
3. Get a list of vegan-friendly items and suggestions for modifications.

## Requirements
- Python 3.8+
- Flask (for the backend server)
- ChromeDriver (if using Selenium for scraping)
- Required Python libraries (listed in `requirements.txt`)

## Usage
1. Visit any DoorDash restaurant page in your Chrome browser.
2. Click the "Vegan Menu Helper" extension icon in the toolbar.
3. The extension will:
   - Extract the menu items from the page.
   - Analyze the items to find vegan options.
   - Provide suggestions for making non-vegan items vegan.
4. The results will display directly in the extension popup.

## Technologies
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **AI Model**: Ollama mini-LLM (for analyzing menu items)

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/GaurangJotwani/door-dash-vegan-helper.git
   ```
2. Install the required Python libraries:
   ```bash
   pip install -r requirements.txt
   ```
3. Open Chrome and navigate to chrome://extensions.
4. Enable "Developer mode" in the top-right corner.
5. Click "Load unpacked" and select the project folder.
6. Start the Flask Backend Server
   ```bash
   python app.py
   ```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


