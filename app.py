# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# from typing import List
# import uvicorn

# app = FastAPI()

# # Sample materials dataset with durability, cost, and suitability
# MATERIALS = [
#     {"name": "Concrete", "durability": 9, "cost": 500, "suitability": ["general", "urban"]},
#     {"name": "Brick", "durability": 8, "cost": 300, "suitability": ["warm climate", "rural"]},
#     {"name": "Wood", "durability": 6, "cost": 450, "suitability": ["cold climate", "rural"]},
#     {"name": "Steel", "durability": 10, "cost": 1000, "suitability": ["high-rise buildings", "urban"]},
#     {"name": "Bamboo", "durability": 5, "cost": 200, "suitability": ["eco-friendly", "low budget"]}
# ]

# # Supplier pricing database (simulated)
# SUPPLIER_PRICES = {
#     "Concrete": 500,
#     "Brick": 300,
#     "Wood": 450,
#     "Steel": 1000,
#     "Bamboo": 200
# }

# class ProjectSpecs(BaseModel):
#     environment: str  # e.g., "cold climate", "urban"
#     budget: int  # Maximum budget user can afford
#     type: str  # e.g., "house", "skyscraper"

# @app.post("/recommend-material")
# def recommend_material(specs: ProjectSpecs):
#     # Filter materials based on environment suitability
#     filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]
    
#     if not filtered_materials:
#         raise HTTPException(status_code=404, detail="No suitable materials found for the environment.")
    
#     # Further filter materials within the budget
#     suitable_materials = [m for m in filtered_materials if SUPPLIER_PRICES[m["name"]] <= specs.budget]
    
#     if not suitable_materials:
#         raise HTTPException(status_code=400, detail="No materials found within budget.")
    
#     # Sort materials based on durability (descending) and cost (ascending)
#     best_material = sorted(suitable_materials, key=lambda x: (-x["durability"], x["cost"]))[0]
    
#     return {
#         "recommended_material": best_material["name"],
#         "cost": SUPPLIER_PRICES[best_material["name"]],
#         "durability": best_material["durability"]
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import uvicorn

# app = FastAPI()

# # Sample materials dataset
# MATERIALS = [
#     {"name": "Concrete", "durability": 9, "cost": 500, "suitability": ["urban", "general"]},
#     {"name": "Brick", "durability": 8, "cost": 300, "suitability": ["warm climate", "rural"]},
#     {"name": "Wood", "durability": 6, "cost": 450, "suitability": ["cold climate", "rural"]},
#     {"name": "Steel", "durability": 10, "cost": 1000, "suitability": ["urban", "high-rise buildings"]},
#     {"name": "Bamboo", "durability": 5, "cost": 200, "suitability": ["eco-friendly", "low budget"]}
# ]

# # Supplier pricing database (simulated)
# SUPPLIER_PRICES = {m["name"]: m["cost"] for m in MATERIALS}

# class ProjectSpecs(BaseModel):
#     environment: str  # e.g., "cold climate", "urban"
#     budget: int  # Maximum budget user can afford
#     type: str  # e.g., "house", "skyscraper"

# @app.post("/recommend-material")
# def recommend_material(specs: ProjectSpecs):
#     # Filter materials based on environment suitability
#     filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]
    
#     if not filtered_materials:
#         raise HTTPException(status_code=404, detail="No suitable materials found for the given environment.")
    
#     # Further filter materials within the budget
#     suitable_materials = [m for m in filtered_materials if SUPPLIER_PRICES[m["name"]] <= specs.budget]
    
#     if not suitable_materials:
#         raise HTTPException(status_code=400, detail="No materials found within the specified budget.")
    
#     # Sort by highest durability first, then by lowest cost
#     best_material = sorted(suitable_materials, key=lambda x: (-x["durability"], x["cost"]))[0]
    
#     return {
#         "recommended_material": best_material["name"],
#         "cost": SUPPLIER_PRICES[best_material["name"]],
#         "durability": best_material["durability"]
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import uvicorn

# app = FastAPI()

# # Enhanced materials dataset with more properties
# MATERIALS = [
#     {"name": "Concrete", "durability": 9, "cost": 500, "fire_resistance": 8, "eco_score": 5, "suitability": ["urban", "general"]},
#     {"name": "Brick", "durability": 8, "cost": 300, "fire_resistance": 7, "eco_score": 6, "suitability": ["warm climate", "rural"]},
#     {"name": "Wood", "durability": 6, "cost": 450, "fire_resistance": 4, "eco_score": 8, "suitability": ["cold climate", "rural"]},
#     {"name": "Steel", "durability": 10, "cost": 1000, "fire_resistance": 10, "eco_score": 4, "suitability": ["urban", "high-rise buildings"]},
#     {"name": "Bamboo", "durability": 5, "cost": 200, "fire_resistance": 3, "eco_score": 10, "suitability": ["eco-friendly", "low budget"]}
# ]

# # Simulating multiple supplier prices
# SUPPLIER_PRICES = {
#     "Concrete": {"Supplier A": 500, "Supplier B": 550},
#     "Brick": {"Supplier A": 300, "Supplier B": 280},
#     "Wood": {"Supplier A": 450, "Supplier B": 420},
#     "Steel": {"Supplier A": 1000, "Supplier B": 950},
#     "Bamboo": {"Supplier A": 200, "Supplier B": 220}
# }

# class ProjectSpecs(BaseModel):
#     environment: str  # e.g., "cold climate", "urban"
#     budget: int  # Max budget
#     type: str  # e.g., "house", "skyscraper"
#     priority: str = "durability"  # User preference (durability, cost, eco-friendly, fire_resistance)

# @app.post("/recommend-material")
# def recommend_material(specs: ProjectSpecs):
#     # Filter by environment suitability
#     filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]

#     if not filtered_materials:
#         raise HTTPException(status_code=404, detail="No suitable materials found for the given environment.")

#     # Filter by budget (considering cheapest supplier)
#     budget_materials = [
#         m for m in filtered_materials if min(SUPPLIER_PRICES[m["name"]].values()) <= specs.budget
#     ]

#     if not budget_materials:
#         raise HTTPException(status_code=400, detail="No materials found within the specified budget.")

#     # Sort based on user priority
#     priority_map = {
#         "durability": lambda x: (-x["durability"], x["cost"]),
#         "cost": lambda x: (x["cost"], -x["durability"]),
#         "eco-friendly": lambda x: (-x["eco_score"], x["cost"]),
#         "fire_resistance": lambda x: (-x["fire_resistance"], x["cost"])
#     }

#     best_material = sorted(budget_materials, key=priority_map.get(specs.priority, priority_map["durability"]))[0]

#     # Get the cheapest supplier
#     best_supplier = min(SUPPLIER_PRICES[best_material["name"]], key=SUPPLIER_PRICES[best_material["name"]].get)
#     best_price = SUPPLIER_PRICES[best_material["name"]][best_supplier]

#     return {
#         "recommended_material": best_material["name"],
#         "cost": best_price,
#         "durability": best_material["durability"],
#         "fire_resistance": best_material["fire_resistance"],
#         "eco_score": best_material["eco_score"],
#         "supplier": best_supplier
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import uvicorn

# app = FastAPI()

# # Enhanced materials dataset with more properties
# MATERIALS = [
#     {"name": "Concrete", "durability": 9, "cost": 500, "fire_resistance": 8, "eco_score": 5, "suitability": ["urban", "general"]},
#     {"name": "Brick", "durability": 8, "cost": 300, "fire_resistance": 7, "eco_score": 6, "suitability": ["warm climate", "rural"]},
#     {"name": "Wood", "durability": 6, "cost": 450, "fire_resistance": 4, "eco_score": 8, "suitability": ["cold climate", "rural"]},
#     {"name": "Steel", "durability": 10, "cost": 1000, "fire_resistance": 10, "eco_score": 4, "suitability": ["urban", "high-rise buildings"]},
#     {"name": "Bamboo", "durability": 5, "cost": 200, "fire_resistance": 3, "eco_score": 10, "suitability": ["eco-friendly", "low budget"]}
# ]

# # Simulating multiple supplier prices
# SUPPLIER_PRICES = {
#     "Concrete": {"Supplier A": 500, "Supplier B": 550},
#     "Brick": {"Supplier A": 300, "Supplier B": 280},
#     "Wood": {"Supplier A": 450, "Supplier B": 420},
#     "Steel": {"Supplier A": 1000, "Supplier B": 950},
#     "Bamboo": {"Supplier A": 200, "Supplier B": 220}
# }

# class ProjectSpecs(BaseModel):
#     environment: str  # e.g., "cold climate", "urban"
#     budget: int  # Max budget
#     type: str  # e.g., "house", "skyscraper"
#     priority: str = "durability"  # User preference (durability, cost, eco-friendly, fire_resistance)

# @app.post("/recommend-material")
# def recommend_material(specs: ProjectSpecs):
#     # Filter by environment suitability
#     filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]

#     if not filtered_materials:
#         raise HTTPException(status_code=404, detail="No suitable materials found for the given environment.")

#     # Filter by budget (considering cheapest supplier)
#     budget_materials = [
#         m for m in filtered_materials if min(SUPPLIER_PRICES[m["name"]].values()) <= specs.budget
#     ]

#     if not budget_materials:
#         raise HTTPException(status_code=400, detail="No materials found within the specified budget.")

#     # Sort based on user priority
#     priority_map = {
#         "durability": lambda x: (-x["durability"], x["cost"]),
#         "cost": lambda x: (x["cost"], -x["durability"]),
#         "eco-friendly": lambda x: (-x["eco_score"], x["cost"]),
#         "fire_resistance": lambda x: (-x["fire_resistance"], x["cost"])
#     }

#     best_material = sorted(budget_materials, key=priority_map.get(specs.priority, priority_map["durability"]))[0]

#     # Get the cheapest supplier
#     best_supplier = min(SUPPLIER_PRICES[best_material["name"]], key=SUPPLIER_PRICES[best_material["name"]].get)
#     best_price = SUPPLIER_PRICES[best_material["name"]][best_supplier]

#     return {
#         "recommended_material": best_material["name"],
#         "cost": best_price,
#         "durability": best_material["durability"],
#         "fire_resistance": best_material["fire_resistance"],
#         "eco_score": best_material["eco_score"],
#         "supplier": best_supplier
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import uvicorn

# app = FastAPI()

# # Enhanced materials dataset
# MATERIALS = [
#     {"name": "Concrete", "durability": 9, "cost": 500, "fire_resistance": 8, "eco_score": 5, "suitability": ["urban", "general"]},
#     {"name": "Brick", "durability": 8, "cost": 300, "fire_resistance": 7, "eco_score": 6, "suitability": ["warm climate", "rural"]},
#     {"name": "Wood", "durability": 6, "cost": 450, "fire_resistance": 4, "eco_score": 8, "suitability": ["cold climate", "rural"]},
#     {"name": "Steel", "durability": 10, "cost": 1000, "fire_resistance": 10, "eco_score": 4, "suitability": ["urban", "high-rise buildings"]},
#     {"name": "Bamboo", "durability": 5, "cost": 200, "fire_resistance": 3, "eco_score": 10, "suitability": ["eco-friendly", "low budget"]},
#     {"name": "Stone", "durability": 9, "cost": 750, "fire_resistance": 9, "eco_score": 7, "suitability": ["rural", "eco-friendly"]},
#     {"name": "Glass", "durability": 7, "cost": 900, "fire_resistance": 6, "eco_score": 5, "suitability": ["urban", "high-rise buildings"]}
# ]

# # Simulated supplier prices
# SUPPLIER_PRICES = {
#     "Concrete": {"Supplier A": 500, "Supplier B": 550},
#     "Brick": {"Supplier A": 300, "Supplier B": 280},
#     "Wood": {"Supplier A": 450, "Supplier B": 420},
#     "Steel": {"Supplier A": 1000, "Supplier B": 950},
#     "Bamboo": {"Supplier A": 200, "Supplier B": 220},
#     "Stone": {"Supplier A": 750, "Supplier B": 770},
#     "Glass": {"Supplier A": 900, "Supplier B": 880}
# }

# class ProjectSpecs(BaseModel):
#     environment: str  
#     budget: int  
#     type: str  
#     priority: str = "durability"  

# @app.post("/recommend-material")
# def recommend_material(specs: ProjectSpecs):
#     # Filter by environment suitability
#     filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]

#     if not filtered_materials:
#         raise HTTPException(status_code=404, detail="No suitable materials found for the given environment.")

#     # Find materials within the budget
#     budget_materials = [
#         m for m in filtered_materials if min(SUPPLIER_PRICES[m["name"]].values()) <= specs.budget
#     ]

#     if budget_materials:
#         # Sort by user priority and pick the best
#         priority_map = {
#             "durability": lambda x: (-x["durability"], x["cost"]),
#             "cost": lambda x: (x["cost"], -x["durability"]),
#             "eco-friendly": lambda x: (-x["eco_score"], x["cost"]),
#             "fire_resistance": lambda x: (-x["fire_resistance"], x["cost"])
#         }
#         best_material = sorted(budget_materials, key=priority_map.get(specs.priority, priority_map["durability"]))[0]
#     else:
#         # If no material fits the budget, pick the one with **highest fire resistance**
#         best_material = sorted(filtered_materials, key=lambda x: (-x["fire_resistance"], x["cost"]))[0]

#     # Get cheapest supplier
#     best_supplier = min(SUPPLIER_PRICES[best_material["name"]], key=SUPPLIER_PRICES[best_material["name"]].get)
#     best_price = SUPPLIER_PRICES[best_material["name"]][best_supplier]

#     return {
#         "recommended_material": best_material["name"],
#         "cost": best_price,
#         "durability": best_material["durability"],
#         "fire_resistance": best_material["fire_resistance"],
#         "eco_score": best_material["eco_score"],
#         "supplier": best_supplier
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import uvicorn

# app = FastAPI()

# MATERIALS = [
#     {"name": "Concrete", "durability": 9, "cost": 500, "fire_resistance": 8, "eco_score": 5, "suitability": ["urban", "general"]},
#     {"name": "Brick", "durability": 8, "cost": 300, "fire_resistance": 7, "eco_score": 6, "suitability": ["warm climate", "rural"]},
#     {"name": "Wood", "durability": 6, "cost": 450, "fire_resistance": 4, "eco_score": 8, "suitability": ["cold climate", "rural"]},
#     {"name": "Steel", "durability": 10, "cost": 1000, "fire_resistance": 10, "eco_score": 4, "suitability": ["urban", "high-rise buildings"]},
#     {"name": "Bamboo", "durability": 5, "cost": 200, "fire_resistance": 3, "eco_score": 10, "suitability": ["eco-friendly", "low budget"]}
# ]

# SUPPLIER_PRICES = {
#     "Concrete": {"Supplier A": 500, "Supplier B": 550},
#     "Brick": {"Supplier A": 300, "Supplier B": 280},
#     "Wood": {"Supplier A": 450, "Supplier B": 420},
#     "Steel": {"Supplier A": 1000, "Supplier B": 950},
#     "Bamboo": {"Supplier A": 200, "Supplier B": 220}
# }

# class ProjectSpecs(BaseModel):
#     environment: str
#     budget: int
#     type: str

# @app.post("/recommend-material")
# def recommend_material(specs: ProjectSpecs):
#     filtered_materials = [m for m in MATERIALS if specs.environment in m["suitability"] or "general" in m["suitability"]]

#     if not filtered_materials:
#         raise HTTPException(status_code=404, detail="No suitable materials found for the given environment.")

#     budget_materials = [
#         m for m in filtered_materials if min(SUPPLIER_PRICES[m["name"]].values()) <= specs.budget
#     ]

#     if not budget_materials:
#         raise HTTPException(status_code=400, detail="No materials found within the specified budget.")

#     best_material = sorted(budget_materials, key=lambda x: (-x["durability"], x["cost"]))[0]

#     best_supplier = min(SUPPLIER_PRICES[best_material["name"]], key=SUPPLIER_PRICES[best_material["name"]].get)
#     best_price = SUPPLIER_PRICES[best_material["name"]][best_supplier]

#     return {
#         "recommended_material": best_material["name"],
#         "cost": best_price,
#         "durability": best_material["durability"],
#         "fire_resistance": best_material["fire_resistance"],
#         "eco_score": best_material["eco_score"],
#         "suitability": ", ".join(best_material.get("suitability", ["N/A"])),  # 🔥 FIXED
#         "supplier": best_supplier
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

app = FastAPI()

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
