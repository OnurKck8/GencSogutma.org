import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace grid container class
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
  
  const replacement = `<button onClick={() => handleVolume('${vol[0]}')} className="w-full text-left p-4 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col justify-between h-full bg-white relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-brand-100 transition-colors pointer-events-none"></div>
                         <div className="mb-4 relative z-10">
                           <div className="font-bold text-base md:text-lg lg:text-xl text-slate-800 group-hover:text-brand-700 leading-tight mb-2 sm:mb-3 flex flex-col items-start w-full gap-1">
                             <span className="shrink-0">${vol[1]}</span>
                             ${vol[2] ? `<span className="text-sm font-semibold text-slate-500 whitespace-nowrap">${vol[2]}</span>` : ''}
                           </div>
                           <div className="text-xs sm:text-sm text-slate-500 leading-relaxed text-balance w-full text-left mt-2">${vol[3]}</div>
                         </div>
                         <div className="flex items-center justify-between w-full relative z-10">
                           <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <ArrowRight className="w-4 h-4 text-brand-600" />
                           </div>
                           <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-transparent shrink-0 self-end transition-colors" />
                         </div>
                       </button>`;
  
  content = content.replace(matchStr, replacement);
});

// Update placeholders
content = content.replace('placeholder="Halil"', 'placeholder="Onur"');
content = content.replace('placeholder="Genç"', 'placeholder="Küçük"');

// Fix step 2 grid as well to make it bigger?
// "pc için olan kısımıda bir tık büyütebiiriz"
content = content.replace(/<div className="font-bold text-slate-800 group-hover:text-brand-700">/g, '<div className="font-bold text-slate-800 group-hover:text-brand-700 md:text-lg">');
content = content.replace(/<div className="text-xs text-slate-500">/g, '<div className="text-xs md:text-sm text-slate-500 mt-1">');
content = content.replace(/className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between"/g, 'className="w-full text-left p-4 md:p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-md hover:-translate-y-1 transition-all group flex items-center justify-between bg-white overflow-hidden relative"');


fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Reverted to row cards and increased sizes for PC');
