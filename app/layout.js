import "./globals.css";
import Link from "next/link";
import { Providers } from "./Provider"; // Fixed import path

export const metadata = {
  title: "Electro Hub",
  description: "Your one-stop electronics purchasing destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers> {/* ✅ Wrap entire app inside Providers */}
          <nav style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "15px 30px",
            backgroundColor: "#f8f9fa",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            <div style={{ 
              fontSize: "24px", 
              fontWeight: "bold",
              color: "#0070f3"
            }}>
              ⚡ Electro Hub
            </div>
            <div style={{
              display: "flex",
              gap: "20px"
            }}>
              <Link href="/" style={{ 
                padding: "8px 12px", 
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                ":hover": { backgroundColor: "#e9ecef" }
              }}>🏠 Home</Link>
              <Link href="/about" style={{ 
                padding: "8px 12px", 
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500"
              }}>ℹ️ About</Link>
              <Link href="/product" style={{ 
                padding: "8px 12px", 
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500"
              }}>🛒 Product</Link>
              <Link href="/service" style={{ 
                padding: "8px 12px", 
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500"
              }}>🔧 Service</Link>
              <Link href="/user" style={{ 
                padding: "8px 12px", 
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500"
              }}>👤 User</Link>
              <Link href="/todolist" style={{ 
                padding: "8px 12px", 
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#333",
                fontWeight: "500"
              }}>📝 TodoList</Link>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
