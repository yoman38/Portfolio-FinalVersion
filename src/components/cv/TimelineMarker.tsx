import React from 'react';

const TimelineMarker: React.FC = () => (
  <div className="absolute left-0 top-2 flex items-center justify-center">
    <div className="w-3 h-3 bg-black border-2 border-white rounded-full group-hover:scale-110 transition-transform" />
    <div className="absolute left-6 w-[1px] h-full bg-gray-800" />
  </div>
);

export default TimelineMarker;