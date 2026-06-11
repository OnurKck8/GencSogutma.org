import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  '<div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">',
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">'
);

const volumes = [
  ['v0', 'Panelvan Küçük', '(0 - 7 m³)', 'Sanal market araçları, minivan tarzı ticari araçlar.'],
  ['v2', 'Panelvan Orta', '(7 - 10 m³)', 'Orta şasi frigorifik panelvanlar veya ticari araçlar.'],
  ['v3', 'Panelvan Büyük', '(10 - 17 m³)', 'Geniş hacimli panelvanlar.'],
  ['v4', 'Panelvan (17+ m³)', '', 'En büyük hacimli panelvan araçlar.'],
  ['v5', 'Kasalı Araç', '(-20 m³)', 'Frigorifik kasalı kamyonet tarzı araçlar.'],
  ['v6', 'Kasalı Kamyon', '(20+ m³)', 'Büyük hacimli kasalı araçlar ve kamyonlar.']
];

volumes.forEach(vol => {
  const matchStr = new RegExp(`<button onClick={\\(\\) => handleVolume\\('${vol[0]}'\\)}[\\s\\S]*?<\\/button>`);
  
  const replacement = `<button onClick={() => handleVolume('${vol[0]}')} className="w-full text-left p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-md transition-all group flex flex-col justify-between h-full bg-white relative">
                         <div className="mb-4">
                           <div className="font-bold text-base md:text-lg lg:text-xl text-slate-800 group-hover:text-brand-700 leading-tight mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 border-b border-transparent group-hover:border-brand-100 pb-2 transition-colors">
                             <span className="shrink-0">${vol[1]}</span>
                             ${vol[2] ? `<span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">${vol[2]}</span>` : ''}
                           </div>
                           <div className="text-[13px] sm:text-sm md:text-[15px] text-slate-500 leading-relaxed text-balance w-full text-left">${vol[3]}</div>
                         </div>
                         <div className="flex justify-end w-full mt-2">
                           <div className="w-8 h-8 rounded-full bg-brand-100 group-hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 sm:right-6 lg:right-7 bottom-4 sm:bottom-6 lg:bottom-7">
                             <ArrowRight className="w-4 h-4 text-brand-600" />
                           </div>
                           <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-transparent shrink-0 transition-colors" />
                         </div>
                       </button>`;
  
  content = content.replace(matchStr, replacement);
});

// Update placeholders
content = content.replace('placeholder="Halil"', 'placeholder="Onur"');
content = content.replace('placeholder="Genç"', 'placeholder="Küçük"');

// Fix step 2 grid as well to make it bigger
content = content.replace(/<div className="font-bold text-slate-800 group-hover:text-brand-700">/g, '<div className="font-bold text-slate-800 group-hover:text-brand-700 md:text-lg lg:text-xl">');
content = content.replace(/<div className="text-xs text-slate-500">/g, '<div className="text-xs sm:text-sm md:text-base text-slate-500 mt-1.5 md:mt-2">');
content = content.replace(/className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between"/g, 'className="w-full text-left p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-md transition-all group flex items-center justify-between bg-white relative"');

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Done modifying fifth attempt');
