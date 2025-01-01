from flask import Flask, request, jsonify
from scripts.vegan_helper import identify_vegan_items
from ollama_model.model_integration import analyze_menu

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    menu = data.get("menu", [])
    vegan_items, suggestions = identify_vegan_items(menu)
    return jsonify({"veganItems": vegan_items, "suggestions": suggestions})

if __name__ == "__main__":
    app.run(debug=True)
