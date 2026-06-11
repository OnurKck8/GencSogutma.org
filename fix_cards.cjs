const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const volumes = [
  ['v0', 'Panelvan Küçük', '(0 - 7 m³)', 'Sanal market araçları, minivan tarzı ticari araçlar.'],
  ['v2', 'Panelvan Orta', '(7 - 10 m³)', 'Orta şasi frigorifik panelvanlar veya ticari araçlar.'],
  ['v3', 'Panelvan Büyük', '(10 - 17 m³)', 'Geniş hacimli panelvanlar.'],
  ['v4', 'Panelvan Ekstra', '(17+ m³)', 'En büyük hacimli panelvan araçlar.'],
  ['v5', 'Kasalı Araç', '(-20 m³)', 'Frigorifik kasalı kamyonet tarzı araçlar.'],
  ['v6', 'Kasalı Kamyon', '(20+ m³)', 'Büyük hacimli kasalı araçlar ve kamyonlar.']
];

volumes.forEach(vol => {
  const matchStr = new RegExp(`<button onClick={\\(\\) => handleVolume\\('${vol[0]}'\\)}[\\s\\S]*?</button>`);
  
  const replacement = `<button onClick={() => handleVolume('${vol[0]}')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex flex-row items-center justify-between w-full gap-2 transition-colors">
                            <span className="shrink-0">\${vol[1]}</span>
                            \${vol[2] ? \`<span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">\${vol[2]}</span>\` : ''}
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">\${vol[3]}</div>
                        </button>`;
  
  content = content.replace(matchStr, replacement);
});

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('updated buttons');
