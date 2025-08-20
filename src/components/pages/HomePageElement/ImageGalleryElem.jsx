import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Eye, Heart } from "lucide-react";
import MilkImage from './Image/MilkImage.png'
import CoffeeImage from './Image/CoffeeImage.png'
import YogurtImage from './Image/YogurtImage.png'
import ButtermilkImage from './Image/ButtermilkImage.png'
import IcecreamImage from './Image/IcecreamImage.png'

export default function ImageGalleryElem() {
  const data = [
    {
      id: 1,
      imagelink: MilkImage,
      name: "Fresh Milk",
      description: "Pure and creamy fresh milk sourced from local dairy farms. Rich in calcium and essential nutrients for healthy bones and muscles.",
      category: "Dairy",
      price: "$3.99",
      rating: 4.8,
      nutritionFacts: "Protein: 8g, Calcium: 280mg, Vitamin D: 144IU"
    },
    {
      id: 2,
      imagelink: CoffeeImage,
      name: "Premium Coffee",
      description: "Aromatic premium coffee beans roasted to perfection. A perfect blend for your morning energy boost with rich flavor and aroma.",
      category: "Beverages",
      price: "$12.99",
      rating: 4.9,
      nutritionFacts: "Caffeine: 95mg, Antioxidants: High, Calories: 5"
    },
    {
      id: 3,
      imagelink: YogurtImage,
      name: "Greek Yogurt",
      description: "Thick and creamy Greek yogurt packed with probiotics. Perfect for breakfast or as a healthy snack any time of the day.",
      category: "Dairy",
      price: "$5.49",
      rating: 4.7,
      nutritionFacts: "Protein: 15g, Probiotics: Live cultures, Sugar: 12g"
    },
    {
      id: 4,
      imagelink: ButtermilkImage,
      name: "Traditional Buttermilk",
      description: "Refreshing traditional buttermilk with a tangy taste. Great for digestion and as a cooling drink during hot weather.",
      category: "Dairy",
      price: "$2.99",
      rating: 4.6,
      nutritionFacts: "Protein: 8g, Probiotics: Present, Fat: Low"
    },
    {
      id: 5,
      imagelink: IcecreamImage,
      name: "Artisan Ice Cream",
      description: "Handcrafted artisan ice cream made with premium ingredients. A delightful treat with rich flavors and smooth texture.",
      category: "Desserts",
      price: "$7.99",
      rating: 4.9,
      nutritionFacts: "Calories: 250, Sugar: 24g, Fat: 14g"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play active by default
  const [showDetails, setShowDetails] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-slideshow functionality
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  }, [data.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  }, [data.length]);

  // Auto-play slideshow (pauses when hovering)
  useEffect(() => {
    if (isPlaying && !isHovering) {
      const interval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying, isHovering, nextSlide]);

  const handleMainImageHover = (isHovering) => {
    setIsHovering(isHovering);
    setShowDetails(isHovering);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main Image Display */}
      <div className="relative mb-6">
        <div 
          className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer"
          onMouseEnter={() => handleMainImageHover(true)}
          onMouseLeave={() => handleMainImageHover(false)}
        >
          {/* Main Image with Darkening Effect */}
          <div className="relative">
            <img
              className={`h-auto w-full max-w-full rounded-xl object-cover object-center transition-all duration-500 md:h-[500px] ${
                showDetails ? 'brightness-50 scale-105' : 'brightness-100'
              }`}
              src={activeItem.imagelink}
              alt={activeItem.name}
            />
            
            {/* Darkening Overlay */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              showDetails ? 'opacity-40' : 'opacity-0'
            }`}></div>
          </div>
          
          {/* Image Overlay with Details */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
            showDetails ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}>
            <div className="text-white text-center p-6 max-w-lg backdrop-blur-sm bg-black bg-opacity-20 rounded-2xl border border-white border-opacity-20">
              <h2 className="text-4xl font-bold mb-2 text-shadow-lg">{activeItem.name}</h2>
              <p className="text-lg mb-4 leading-relaxed text-gray-100">{activeItem.description}</p>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <span className="bg-blue-500 bg-opacity-80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {activeItem.category}
                </span>
                <span className="bg-green-500 bg-opacity-80 backdrop-blur px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                  {activeItem.price}
                </span>
                <span className="flex items-center space-x-1 bg-yellow-500 bg-opacity-80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                  <span className="text-yellow-100 text-lg">⭐</span>
                  <span className="text-sm font-bold text-yellow-100">{activeItem.rating}</span>
                </span>
              </div>
              <p className="text-sm opacity-90 italic text-gray-200 bg-black bg-opacity-30 px-4 py-2 rounded-lg">
                {activeItem.nutritionFacts}
              </p>
              {isHovering && (
                <p className="text-xs mt-3 text-gray-300 opacity-75">
                  Slideshow paused • Hover away to resume
                </p>
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className={`absolute top-4 right-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 ${
              isHovering ? 'opacity-50' : 'opacity-100'
            }`}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Auto-play Status Indicator */}
          {isPlaying && (
            <div className="absolute top-4 left-4 bg-green-500 bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Auto-play</span>
            </div>
          )}

          {/* Slide Counter */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {activeIndex + 1} / {data.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="relative group"
          >
            <img
              onClick={() => goToSlide(index)}
              src={item.imagelink}
              className={`object-cover object-center h-20 w-full rounded-lg cursor-pointer transition-all duration-300 ${
                activeIndex === index 
                  ? 'ring-4 ring-blue-500 ring-opacity-60 shadow-lg transform scale-105' 
                  : 'hover:shadow-md hover:transform hover:scale-102'
              }`}
              alt={item.name}
            />
            
            {/* Active Indicator */}
            {activeIndex === index && (
              <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slide Progress Indicators */}
      <div className="flex justify-center space-x-2 mb-4">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
        <span className={`flex items-center space-x-1 ${isPlaying ? 'text-green-600' : 'text-gray-500'}`}>
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span>Auto-play: {isPlaying ? 'ON' : 'OFF'}</span>
        </span>
        <span>•</span>
        <span>Hover main image for details</span>
        <span>•</span>
        <span>Click thumbnails to navigate</span>
      </div>
    </div>
  );
}