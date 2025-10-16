"use client";
import { useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([
    { name: "⌚ Smart Watch", image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "📺 4K Smart TV", image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "🎧 Wireless Headphones", image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "📷 Digital Camera", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "📱 Smartphone", image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "💻 Laptop", image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "🎮 Gaming Console", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
    { name: "🔊 Bluetooth Speaker", image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", countArr: [] },
  ]);

  const handleAdd = (index) => {
    const newProducts = [...products];
    newProducts[index].countArr.push(1);
    setProducts(newProducts);
  };

  const handleRemove = (index) => {
    const newProducts = [...products];
    newProducts[index].countArr.pop();
    setProducts(newProducts);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ 
        color: "#1a73e8", 
        fontSize: "2.2rem", 
        marginBottom: "20px",
        background: "linear-gradient(45deg, #1a73e8, #6c5ce7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        padding: "10px",
        borderBottom: "2px solid #e0e0e0"
      }}>
        🛍️ Explore Our Amazing Products ✨
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
        marginTop: "30px"
      }}>
        {products.map((p, i) => (
          <div 
            key={i} 
            style={{
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#f8f9fa"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.12)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" }} />
            <h4 style={{ color: "#1a73e8", fontSize: "1.2rem", marginBottom: "10px" }}>{p.name}</h4>
            <p style={{ fontWeight: "500", marginBottom: "15px" }}>🛒 Quantity: {p.countArr.length}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <button 
                onClick={() => handleAdd(i)} 
                style={{ 
                  backgroundColor: "#1a73e8", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px", 
                  padding: "8px 16px", 
                  cursor: "pointer",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                <span>Add</span> ➕
              </button>
              <button
                onClick={() => handleRemove(i)}
                disabled={p.countArr.length === 0}
                style={{ 
                  backgroundColor: p.countArr.length === 0 ? "#cccccc" : "#ff5252", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px", 
                  padding: "8px 16px", 
                  cursor: p.countArr.length === 0 ? "not-allowed" : "pointer",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                <span>Remove</span> ➖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
