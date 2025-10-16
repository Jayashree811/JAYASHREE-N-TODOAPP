import React from "react";
import Image from "next/image";

function About() {
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
        }}>About Electro Hub</h1>
        <p style={{ 
          fontSize: "1.1rem", 
          color: "#4a4a4a", 
          maxWidth: "700px", 
          margin: "0 auto",
          lineHeight: "1.5"
        }}>
          Your trusted destination for premium electronic products since 2010
        </p>
      </header>

      <div style={{ 
        display: "flex", 
        flexDirection: "column",
        gap: "40px"
      }}>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "30px",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ color: "#1a73e8", marginBottom: "15px" }}>Our Story</h2>
            <p style={{ color: "#4a4a4a", lineHeight: "1.6", marginBottom: "15px" }}>
              Founded in 2010, Jayashree Electronics has grown from a small local store to one of the region&apos;s most trusted electronics retailers. We pride ourselves on offering the latest technology, competitive prices, and exceptional customer service.
            </p>
            <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>
              Our mission is to make cutting-edge technology accessible to everyone while providing an unmatched shopping experience both online and in our stores.
            </p>
          </div>
          <div style={{ flex: "1 1 400px", textAlign: "center" }}>
            <Image
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Electronics Store"
              width={500}
              height={300}
              style={{ 
                width: "100%", 
                maxWidth: "500px", 
                borderRadius: "8px", 
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" 
              }}
            />
          </div>
        </div>

        <div style={{ 
          backgroundColor: "#f8f9fa", 
          padding: "30px", 
          borderRadius: "8px",
          marginTop: "20px"
        }}>
          <h2 style={{ color: "#1a73e8", marginBottom: "20px", textAlign: "center" }}>Why Choose Us</h2>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "20px",
            justifyContent: "center"
          }}>
            {[
              { title: "Quality Products", description: "We source directly from manufacturers to ensure authenticity and quality", icon: "⭐" },
              { title: "Expert Support", description: "Our knowledgeable team is always ready to help you make the right choice", icon: "👨‍💼" },
              { title: "Fast Delivery", description: "Enjoy quick and reliable shipping on all your purchases", icon: "🚚" },
              { title: "Warranty & Returns", description: "Hassle-free warranty service and easy return policy", icon: "🔄" }
            ].map((feature, index) => (
              <div key={index} style={{ 
                flex: "1 1 250px",
                padding: "20px", 
                backgroundColor: "#ffffff", 
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px", textAlign: "center" }}>{feature.icon}</div>
                <h3 style={{ color: "#1a73e8", marginBottom: "10px", textAlign: "center" }}>{feature.title}</h3>
                <p style={{ color: "#4a4a4a", textAlign: "center" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
