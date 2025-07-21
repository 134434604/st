import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Lion's Mane Capsules",
    price: "$49.99",
    originalPrice: "$59.99",
    rating: 4.8,
    reviews: 124,
    image: "https://images.pexels.com/photos/7262796/pexels-photo-7262796.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7262796/pexels-photo-7262796.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6207378/pexels-photo-6207378.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7163939/pexels-photo-7163939.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "supplements",
    description: "Premium Lion's Mane mushroom capsules for cognitive enhancement and brain health support.",
    longDescription: "Our Premium Lion's Mane Capsules are carefully crafted from organic Lion's Mane mushrooms (Hericium erinaceus) to support cognitive function, memory, and overall brain health.",
    benefits: [
      "Supports cognitive function and mental clarity",
      "May enhance memory and focus",
      "Promotes nerve growth factor (NGF) production",
      "Supports overall brain health"
    ],
    ingredients: [
      "Organic Lion's Mane Mushroom Extract (500mg)",
      "Vegetarian Capsule (Hypromellose)",
      "Rice Flour (Anti-caking agent)"
    ],
    dosage: "Take 1-2 capsules daily with food, or as directed by your healthcare practitioner.",
    warnings: [
      "Consult your healthcare provider before use if pregnant or nursing",
      "Keep out of reach of children",
      "Store in a cool, dry place"
    ],
    affiliateUrl: "https://example.com/affiliate-link",
    brand: "NeuroShroom",
    size: "60 capsules",
    servings: "30-60 servings",
    inStock: true,
    featured: true,
    tags: ["cognitive", "brain-health", "organic", "vegan"],
    nutritionFacts: {
      servingSize: "1 capsule",
      calories: "5",
      totalCarbohydrates: "1g",
      protein: "0g"
    }
  },
  {
    id: "2",
    name: "Reishi Mushroom Powder",
    price: "$34.99",
    rating: 4.9,
    reviews: 89,
    image: "https://images.pexels.com/photos/6207378/pexels-photo-6207378.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "supplements",
    description: "Pure Reishi mushroom powder for stress relief and immune support.",
    longDescription: "Our premium Reishi Mushroom Powder is made from 100% organic Reishi mushrooms (Ganoderma lucidum), known as the 'King of Mushrooms' for their powerful adaptogenic properties.",
    benefits: [
      "Supports stress management and relaxation",
      "Promotes healthy sleep patterns",
      "Boosts immune system function",
      "May help balance cortisol levels"
    ],
    ingredients: ["100% Organic Reishi Mushroom Powder"],
    dosage: "Mix 1 teaspoon (3g) into smoothies, tea, or food once daily.",
    affiliateUrl: "https://example.com/affiliate-link-2",
    brand: "Pure Mushrooms",
    size: "100g powder",
    servings: "33 servings",
    inStock: true,
    tags: ["stress-relief", "sleep", "immune", "organic", "powder"]
  },
  {
    id: "3",
    name: "Mushroom Growing Kit",
    price: "$24.99",
    rating: 4.6,
    reviews: 67,
    image: "https://images.pexels.com/photos/7163942/pexels-photo-7163942.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "kits",
    description: "Complete mushroom growing kit for home cultivation of oyster mushrooms.",
    affiliateUrl: "https://example.com/affiliate-link-3",
    brand: "HomeFarm",
    size: "Complete kit",
    servings: "Multiple harvests",
    inStock: true,
    tags: ["growing", "education", "sustainable"]
  }
];
