import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-black text-xl">S</span>
      </div>
      <span className="text-white font-black text-2xl tracking-wide" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
        Shavonne Styles
      </span>
    </div>
  );
};