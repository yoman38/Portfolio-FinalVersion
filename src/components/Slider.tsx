import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider = ({ value, onChange }: SliderProps) => {
  return (
    <div className="w-4/5 max-w-2xl mx-auto">
      <input
        type="range"
        min="1"
        max="40"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full appearance-none bg-transparent h-12 focus:outline-none relative
          before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 
          before:h-[1px] before:bg-gray-800 before:-translate-y-1/2
          
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 
          [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:cursor-pointer 
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:relative
          [&::-webkit-slider-thumb]:z-10
          [&::-webkit-slider-thumb]:hover:scale-125
          [&::-webkit-slider-thumb]:hover:shadow-lg
          [&::-webkit-slider-thumb]:transition-all
          [&::-webkit-slider-thumb]:duration-300
          
          [&::-moz-range-thumb]:w-4 
          [&::-moz-range-thumb]:h-4 
          [&::-moz-range-thumb]:bg-white 
          [&::-moz-range-thumb]:border-0 
          [&::-moz-range-thumb]:rounded-full 
          [&::-moz-range-thumb]:cursor-pointer
          [&::-moz-range-thumb]:shadow-md
          [&::-moz-range-thumb]:relative
          [&::-moz-range-thumb]:z-10
          [&::-moz-range-thumb]:hover:scale-125
          [&::-moz-range-thumb]:hover:shadow-lg
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:duration-300"
      />
    </div>
  );
};

export default Slider;