import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { AudioService } from '../utils/audioService';

export default function AudioToggle() {
  const [isEnabled, setIsEnabled] = useState(true);

  const handleToggle = () => {
    AudioService.playClick();
    const newState = AudioService.toggleAudio();
    setIsEnabled(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-24 z-40 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-[#0099ff] rounded-full flex items-center justify-center text-gray-300 hover:text-[#0099ff] transition-all duration-300 group"
      title={isEnabled ? 'Mute' : 'Unmute'}
    >
      {isEnabled ? (
        <Volume2 className="w-6 h-6" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
        {isEnabled ? 'Mute' : 'Unmute'}
      </div>
    </button>
  );
}
