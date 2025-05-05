
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI()

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify origins like ["http://localhost:3000"] in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MATERIALS = [
    {"name": "Concrete", "durability": 9, "cost": 500, "fire_resistance": 8, "eco_score": 5, "suitability": ["urban", "general"]},
    {"name": "Brick", "durability": 8, "cost": 300, "fire_resistance": 7, "eco_score": 6, "suitability": ["warm climate", "rural"]},
    {"name": "Wood", "durability": 6, "cost": 450, "fire_resistance": 4, "eco_score": 8, "suitability": ["cold climate", "rural"]},
    {"name": "Steel", "durability": 10, "cost": 1000, "fire_resistance": 10, "eco_score": 4, "suitability": ["urban", "high-rise buildings"]},
    {"name": "Bamboo", "durability": 5, "cost": 200, "fire_resistance": 3, "eco_score": 10, "suitability": ["eco-friendly", "low budget"]}
]

SUPPLIER_PRICES = {
    "Concrete": {"Supplier A": 500, "Supplier B": 550},
    "Brick": {"Supplier A": 300, "Supplier B": 280},
    "Wood": {"Supplier A": 450, "Supplier B": 420},
    "Steel": {"Supplier A": 1000, "Supplier B": 950},
    "Bamboo": {"Supplier A": 200, "Supplier B": 220}
}

class ProjectSpecs(BaseModel):
    environment: str
    budget: int
    type: str

@app.post("/recommend-material")
def recommend_material(specs: ProjectSpecs):
    filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]

    if not filtered_materials:
        raise HTTPException(status_code=404, detail="No suitable materials found for the given environment.")

    budget_materials = [
        m for m in filtered_materials if min(SUPPLIER_PRICES[m["name"]].values()) <= specs.budget
    ]

    if not budget_materials:
        raise HTTPException(status_code=400, detail="No materials found within the specified budget.")

    best_material = sorted(budget_materials, key=lambda x: (-x["durability"], x["cost"]))[0]
    best_supplier = min(SUPPLIER_PRICES[best_material["name"]], key=SUPPLIER_PRICES[best_material["name"]].get)
    best_price = SUPPLIER_PRICES[best_material["name"]][best_supplier]

    return {
        "recommended_material": best_material["name"],
        "cost": best_price,
        "durability": best_material["durability"],
        "fire_resistance": best_material["fire_resistance"],
        "eco_score": best_material["eco_score"],
        "suitability": ", ".join(best_material["suitability"]),
        "supplier": best_supplier
    }

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
