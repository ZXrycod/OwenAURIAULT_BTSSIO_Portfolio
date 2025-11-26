import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import { Download, Copy } from 'lucide-react';
import { AudioService } from '../../utils/audioService';

export default function QRGenerator() {
  const [qrValue, setQrValue] = useState('https://owen-portfolio.dev');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrValue(e.target.value);
    AudioService.playHover();
  };

  const downloadQR = () => {
    AudioService.playClick();
    const qrElement = document.querySelector('#qrcode');
    if (qrElement instanceof HTMLCanvasElement) {
      const link = document.createElement('a');
      link.href = qrElement.toDataURL('image/png');
      link.download = 'qrcode.png';
      link.click();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrValue);
    setCopied(true);
    AudioService.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
    >
      <h3 className="text-xl font-bold text-white mb-6">Générateur QR Code</h3>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            URL ou Texte
          </label>
          <input
            type="text"
            value={qrValue}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0099ff] transition-colors mb-4"
            placeholder="https://exemple.com"
          />
          <div className="flex gap-2">
            <button
              onClick={downloadQR}
              className="flex items-center gap-2 px-4 py-2 bg-[#0099ff] hover:bg-[#0088ee] text-white rounded-lg font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 border border-[#0099ff] text-[#0099ff] hover:bg-[#0099ff]/10 rounded-lg font-medium transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copié!' : 'Copier URL'}
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-white p-4 rounded-lg">
            <QRCode
              id="qrcode"
              value={qrValue}
              size={200}
              level="H"
              includeMargin={true}
              fgColor="#0099ff"
              bgColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
