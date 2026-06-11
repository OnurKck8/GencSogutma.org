import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">',
  '<div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">'
);

const volumes = [
  ['v0', 'Panelvan Küçük', '(0 - 7 m³)', 'Sanal market araçları, minivan tarzı ticari araçlar.'],
  ['v2', 'Panelvan Orta', '(7 - 10 m³)', 'Orta şasi frigorifik panelvanlar veya ticari araçlar.'],
  ['v3', 'Panelvan Büyük', '(10 - 17 m³)', 'Geniş hacimli panelvanlar.'],
  ['v4', 'Panelvan <span className="sm:hidden text-[10px] block mt-0.5">Ekstra</span>', '(17+ m³)', 'En büyük hacimli panelvan araçlar.'],
  ['v5', 'Kasalı Araç', '(-20 m³)', 'Frigorifik kasalı kamyonet tarzı araçlar.'],
  ['v6', 'Kasalı Kamyon', '(20+ m³)', 'Büyük hacimli kasalı araçlar ve kamyonlar.']
];

volumes.forEach(vol => {
  const matchStr = new RegExp(`<button onClick={\\(\\) => handleVolume\\('${vol[0]}'\\)}[\\s\\S]*?<\\/button>`);
  
  const replacement = `<button onClick={() => handleVolume('${vol[0]}')} className="w-full text-center sm:text-left p-1.5 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col items-center sm:items-start justify-center sm:justify-between h-full gap-1 sm:gap-0 aspect-[4/3] sm:aspect-auto bg-white sm:bg-transparent shadow-sm sm:shadow-none">
                         <div className="mb-0 sm:mb-2 flex flex-col items-center sm:block w-full">
                           <div className="font-bold text-[10px] xs:text-[11px] sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight sm:mb-1 flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full gap-0.5 sm:gap-0 mt-1 sm:mt-0">
                             <span className="text-center text-balance">${vol[1]}</span> 
                             <span className="text-[9px] sm:text-sm font-semibold sm:font-medium text-slate-500 mt-0.5 sm:mt-0 px-1 py-0.5 sm:px-0 sm:py-0 border sm:border-0 rounded-md sm:rounded-none border-slate-100 bg-slate-50 sm:bg-transparent tracking-tighter w-max">${vol[2]}</span>
                           </div>
                           <div className="text-[11px] text-slate-500 leading-tight hidden text-balance sm:block w-full text-left mt-1">${vol[3]}</div>
                         </div>
                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-brand-500 shrink-0 hidden sm:block self-end mt-2" />
                       </button>`;
  
  content = content.replace(matchStr, replacement);
});

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Modified cards to grid-cols-3 for mobile');
