"use client";
import React, { useState } from "react";

function Service() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: ""
  });

  const services = [
    { 
      name: "Web Development", 
      description: "Custom websites tailored to your business needs",
      icon: "💻"
    },
    { 
      name: "Mobile Applications", 
      description: "Native and cross-platform mobile solutions",
      icon: "📱"
    },
    { 
      name: "Cloud Solutions", 
      description: "Scalable and secure cloud infrastructure",
      icon: "☁️"
    }
  ];

  return (
    <div style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "40px 20px",
      backgroundColor: "#ffffff"
    }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ 
          color: "#1a73e8", 
          fontSize: "2.2rem", 
          fontWeight: "600",
          marginBottom: "15px"
        }}>Our Professional Services</h1>
        <p style={{ 
          fontSize: "1.1rem", 
          color: "#4a4a4a", 
          maxWidth: "700px", 
          margin: "0 auto",
          lineHeight: "1.5"
        }}>
          We deliver high-quality solutions to help your business grow
        </p>
      </header>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginBottom: "60px"
      }}>
        {services.map((service) => (
          <div key={service.name} style={{ 
            flex: "1 1 300px",
            padding: "30px", 
            backgroundColor: "#f8f9fa", 
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
            <h3 style={{ 
              color: "#1a73e8", 
              marginBottom: "15px",
              fontSize: "1.5rem"
            }}>{service.name}</h3>
            <p style={{ color: "#4a4a4a" }}>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <div style={{ 
        maxWidth: "600px", 
        margin: "0 auto", 
        padding: "30px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
      }}>
        <h2 style={{ 
          color: "#1a73e8", 
          marginBottom: "20px",
          textAlign: "center"
        }}>We Value Your Feedback</h2>
        
        {showSuccess ? (
          <div style={{
            backgroundColor: "#e6f7e6",
            border: "1px solid #4caf50",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>✅</div>
            <h3 style={{ color: "#4caf50", marginBottom: "10px" }}>Submitted Successfully!</h3>
            <p style={{ marginBottom: "15px" }}>Thank you for your valuable feedback.</p>
            <button 
              onClick={() => {
                setShowSuccess(false);
                setFormData({ name: "", email: "", suggestion: "" });
              }}
              style={{ 
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "500"
              }}
            >
              Submit Another Feedback
            </button>
          </div>
        ) : (
          <form style={{ width: "100%" }} onSubmit={(e) => {
            e.preventDefault();
            setShowSuccess(true);
          }}>
            <div style={{ marginBottom: "20px" }}>
              <label 
                htmlFor="name" 
                style={{ 
                  display: "block", 
                  marginBottom: "8px",
                  color: "#4a4a4a",
                  fontWeight: "500"
                }}
              >
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
                style={{ 
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #e0e0e0"
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: "20px" }}>
              <label 
                htmlFor="email" 
                style={{ 
                  display: "block", 
                  marginBottom: "8px",
                  color: "#4a4a4a",
                  fontWeight: "500"
                }}
              >
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Your email address"
                style={{ 
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #e0e0e0"
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: "20px" }}>
              <label 
                htmlFor="suggestion" 
                style={{ 
                  display: "block", 
                  marginBottom: "8px",
                  color: "#4a4a4a",
                  fontWeight: "500"
                }}
              >
                Suggestion
              </label>
              <textarea 
                id="suggestion" 
                name="suggestion" 
                rows="5" 
                value={formData.suggestion}
                onChange={(e) => setFormData({...formData, suggestion: e.target.value})}
                placeholder="Your feedback or suggestion"
                style={{ 
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #e0e0e0",
                  resize: "vertical"
                }}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              style={{ 
                backgroundColor: "#1a73e8",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "1rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span>Submit Feedback</span> 📨
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Service;
