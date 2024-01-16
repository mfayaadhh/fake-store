import React, { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "https://source.unsplash.com/NfZiOJzZgcg",
    "https://source.unsplash.com/gz9njd0zYbQ",
    "https://source.unsplash.com/jlo7Bf4tUoY",
    "https://source.unsplash.com/GKbfUFna-9I",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover' }}
    >
      <div className="text-white text-center">
        <h1 className="text-6xl mb-4">Welcome to Fake Store</h1>
      </div>
    </div>
  );
}
