"use client";

import React from "react";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <header style={{ marginBottom: "40px" }}>
        <h1
          style={{
            color: "#1a73e8",
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Electro Hub
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#4a4a4a",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Your one-stop destination for premium electronic products
        </p>
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* Moderate-sized Image */}
        <img
          src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Electronics Banner"
          style={{
            width: "100%",
            maxWidth: "500px", // moderate size
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "800px",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {[
            {
              title: "Latest Gadgets",
              icon: "📱",
              description:
                "Explore our collection of cutting-edge smartphones, tablets, and wearables.",
            },
            {
              title: "Home Electronics",
              icon: "🖥️",
              description:
                "Upgrade your home with smart TVs, audio systems, and appliances.",
            },
            {
              title: "Accessories",
              icon: "🎧",
              description:
                "Enhance your devices with premium quality accessories and peripherals.",
            },
          ].map((product, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 250px",
                padding: "25px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                {product.icon}
              </div>
              <h3 style={{ color: "#1a73e8", marginBottom: "10px" }}>
                {product.title}
              </h3>
              <p style={{ color: "#4a4a4a" }}>{product.description}</p>
              <button
                onClick={() => (window.location.href = "/product")}
                style={{
                  backgroundColor: "#1a73e8",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  marginTop: "15px",
                  cursor: "pointer",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "15px auto 0",
                  gap: "5px",
                }}
              >
                Shop Now 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
