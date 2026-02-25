import { useState } from 'react';
import { Download, RefreshCw, ExternalLink } from 'lucide-react';

const PUB_ID = '2PACX-1vR1GXh-2K_ssoFnnk1IXPVIXirfMSTbNu8IclrsdrJQCvFgssLG6LhZ6AQgzmdfjQ';

const EMBED_URL = `https://docs.google.com/spreadsheets/d/e/${PUB_ID}/pubhtml`;
const DOWNLOAD_URL = `https://docs.google.com/spreadsheets/d/e/${PUB_ID}/pub?output=xlsx`;
const OPEN_URL = `https://docs.google.com/spreadsheets/d/e/${PUB_ID}/pubhtml`;

export default function Competences() {
    const [iframeKey, setIframeKey] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleRefresh = () => {
        setLoading(true);
        setIframeKey((k) => k + 1);
    };

    return (
        <section id="competences" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Compétences
                    </h2>
                    <div className="h-1 w-24 bg-[#0099ff] mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Tableau de synthèse de mes compétences techniques
                    </p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-end gap-3 mb-4">
                    <button
                        onClick={handleRefresh}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:border-[#0099ff] hover:text-white transition-all duration-200 text-sm"
                        title="Rafraîchir"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Rafraîchir
                    </button>

                    <a
                        href={OPEN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:border-[#0099ff] hover:text-white transition-all duration-200 text-sm"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Ouvrir
                    </a>

                    <a
                        href={DOWNLOAD_URL}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-[#0099ff] text-white rounded-lg hover:bg-[#007acc] transition-all duration-200 text-sm font-medium"
                    >
                        <Download className="w-4 h-4" />
                        Télécharger (.xlsx)
                    </a>
                </div>

                {/* Sheet embed */}
                <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-900">
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-10 h-10 border-4 border-gray-700 border-t-[#0099ff] rounded-full animate-spin"></div>
                                <p className="text-gray-400 text-sm">Chargement du tableau…</p>
                            </div>
                        </div>
                    )}
                    <iframe
                        key={iframeKey}
                        src={EMBED_URL}
                        onLoad={() => setLoading(false)}
                        className="w-full"
                        style={{ height: '600px', border: 'none' }}
                        title="Tableau de compétences"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                </div>

                <p className="text-center text-gray-600 text-xs mt-4">
                    Source : Google Sheets — mis à jour en temps réel
                </p>
            </div>
        </section>
    );
}
