import openai

def analyze_menu(menu):
    prompt = f"Analyze the following menu and list vegan items. Also suggest how to make non-vegan items vegan: {menu}"
    response = openai.ChatCompletion.create(
        model="ollama-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]
