// src/components/LoadingPage.jsx

import React from 'react';

// A single, reusable skeleton card component
const SkeletonCard = () => (
  <div className="border border-gray-200 rounded-lg p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex flex-col space-y-4">
      {/* Image Placeholder */}
      <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      <div className="flex-1 space-y-6 py-1">
        {/* Title Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        {/* Text Lines Placeholders */}
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-3 bg-gray-300 rounded col-span-2"></div>
            <div className="h-3 bg-gray-300 rounded col-span-1"></div>
          </div>
          <div className="h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

// The full loading page component
const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="animate-pulse mb-12 flex items-center justify-between">
          <div className="h-10 w-48 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Grid of Skeleton Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;