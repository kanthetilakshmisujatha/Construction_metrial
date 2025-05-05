
const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all requests
app.use(cors());
app.use(express.json());

// Materials dataset
const MATERIALS = [
  { name: "Concrete", durability: 9, cost: 500, fire_resistance: 8, eco_score: 5, suitability: ["urban", "general"] },
  { name: "Brick", durability: 8, cost: 300, fire_resistance: 7, eco_score: 6, suitability: ["warm climate", "rural"] },
  { name: "Wood", durability: 6, cost: 450, fire_resistance: 4, eco_score: 8, suitability: ["cold climate", "rural"] },
  { name: "Steel", durability: 10, cost: 1000, fire_resistance: 10, eco_score: 4, suitability: ["urban", "high-rise buildings"] },
  { name: "Bamboo", durability: 5, cost: 200, fire_resistance: 3, eco_score: 10, suitability: ["eco-friendly", "low budget"] }
];

// Simulating multiple supplier prices
const SUPPLIER_PRICES = {
  "Concrete": { "Supplier A": 500, "Supplier B": 550 },
  "Brick": { "Supplier A": 300, "Supplier B": 280 },
  "Wood": { "Supplier A": 450, "Supplier B": 420 },
  "Steel": { "Supplier A": 1000, "Supplier B": 950 },
  "Bamboo": { "Supplier A": 200, "Supplier B": 220 }
};

app.post("/recommend-material", (req, res) => {
  const { environment, budget, type } = req.body;

  // Validate input
  if (!environment || !budget || !type) {
    return res.status(400).json({ message: "Missing required fields: environment, budget, or type." });
  }

  const parsedBudget = parseInt(budget);
  if (isNaN(parsedBudget) || parsedBudget <= 0) {
    return res.status(400).json({ message: "Invalid budget value." });
  }

  // Filter materials based on environment suitability
  let filteredMaterials = MATERIALS.filter(m => m.suitability.includes(environment) || m.suitability.includes("general"));

  if (filteredMaterials.length === 0) {
    return res.status(404).json({ message: "No suitable materials found for the given environment." });
  }

  // Filter by budget (considering cheapest supplier price)
  let budgetMaterials = filteredMaterials.filter(m =>
    SUPPLIER_PRICES[m.name] && Math.min(...Object.values(SUPPLIER_PRICES[m.name])) <= parsedBudget
  );

  if (budgetMaterials.length === 0) {
    return res.status(400).json({ message: "No materials found within the specified budget." });
  }

  // Sorting based on durability and then cost
  budgetMaterials.sort((a, b) => b.durability - a.durability || a.cost - b.cost);

  let bestMaterial = budgetMaterials[0];

  // Find the cheapest supplier price
  let bestPrice = Math.min(...Object.values(SUPPLIER_PRICES[bestMaterial.name]));

  res.json({
    recommended_material: bestMaterial.name,
    cost: bestPrice,
    durability: bestMaterial.durability,
    fire_resistance: bestMaterial.fire_resistance,
    eco_score: bestMaterial.eco_score,
    suitability: bestMaterial.suitability,  // ✅ Now suitability will be printed
    message: "Material recommendation based on environment and budget."
  });
});

app.listen(8000, () => {
  console.log("✅ Server running on port 8000");
});
