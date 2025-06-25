// src/loaders/boxesLoader.js

export const boxesLoader = async () => {
    try {
      const response = await fetch("/api/boxes"); 
      if (!response.ok) {
        throw new Error("Failed to fetch subscription boxes");
      }
      return response.json();  
    } catch (error) {
      throw new Error(error.message); 
    }
  };
  