from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

app = Flask(__name__)

# Sample dataset
data = pd.DataFrame({
    "name": ["Concrete", "Steel", "Wood", "Bricks"],
    "durability": [9, 8, 6, 7],
    "cost": [7, 9, 4, 5],
    "suitability": ["High", "Medium", "Low", "Medium"]
})

X = data[["durability", "cost"]]
y = data["name"]
model = KNeighborsClassifier(n_neighbors=2)
model.fit(X, y)

@app.route("/predict", methods=["POST"])
def predict():
    req_data = request.json["projectDetails"]
    durability = req_data["durability"]
    cost = req_data["cost"]
    
    prediction = model.predict(np.array([[durability, cost]]))[0]
    return jsonify({"recommended_material": prediction})

if __name__ == "__main__":
    app.run(port=5002, debug=True)
