import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace grid container class
content = content.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">',
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">'
);

// Replace v0 button
content = content.replace(
  `<button onClick={() => handleVolume('v0')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col justify-between h-full">`,
  `<button onClick={() => handleVolume('v0')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center sm:flex-col sm:items-start justify-between h-full gap-3 sm:gap-0">`
);
content = content.replace(
  `<div className="font-bold text-slate-800 group-hover:text-brand-700 leading-tight mb-1">Panelvan - Küçük <br/><span className="text-sm font-medium text-slate-500">(0 - 7 m³)</span></div>`,
  `<div className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex justify-between items-center w-full sm:block"><span>Panelvan Küçük</span> <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none">(0 - 7 m³)</span></div>`
);

// Replace v2 button
content = content.replace(
  `<button onClick={() => handleVolume('v2')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col justify-between h-full">`,
  `<button onClick={() => handleVolume('v2')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center sm:flex-col sm:items-start justify-between h-full gap-3 sm:gap-0">`
);
content = content.replace(
  `<div className="font-bold text-slate-800 group-hover:text-brand-700 leading-tight mb-1">Panelvan - Orta <br/><span className="text-sm font-medium text-slate-500">(7 - 10 m³)</span></div>`,
  `<div className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex justify-between items-center w-full sm:block"><span>Panelvan Orta</span> <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none">(7 - 10 m³)</span></div>`
);

// Replace v3 button
content = content.replace(
  `<button onClick={() => handleVolume('v3')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col justify-between h-full">`,
  `<button onClick={() => handleVolume('v3')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center sm:flex-col sm:items-start justify-between h-full gap-3 sm:gap-0">`
);
content = content.replace(
  `<div className="font-bold text-slate-800 group-hover:text-brand-700 leading-tight mb-1">Panelvan - Büyük <br/><span className="text-sm font-medium text-slate-500">(10 - 17 m³)</span></div>`,
  `<div className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex justify-between items-center w-full sm:block"><span>Panelvan Büyük</span> <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none">(10 - 17 m³)</span></div>`
);

// Replace v4 button
content = content.replace(
  `<button onClick={() => handleVolume('v4')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col justify-between h-full">`,
  `<button onClick={() => handleVolume('v4')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center sm:flex-col sm:items-start justify-between h-full gap-3 sm:gap-0">`
);
content = content.replace(
  `<div className="font-bold text-slate-800 group-hover:text-brand-700 leading-tight mb-1">Panelvan <br/><span className="text-sm font-medium text-slate-500">(17 m³ ve Üzeri)</span></div>`,
  `<div className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex justify-between items-center w-full sm:block"><span>Panelvan <span className="sm:hidden text-xs">Ekstra</span></span> <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none">(17+ m³)</span></div>`
);

// Replace v5 button
content = content.replace(
  `<button onClick={() => handleVolume('v5')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col justify-between h-full">`,
  `<button onClick={() => handleVolume('v5')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center sm:flex-col sm:items-start justify-between h-full gap-3 sm:gap-0">`
);
content = content.replace(
  `<div className="font-bold text-slate-800 group-hover:text-brand-700 leading-tight mb-1">Kasalı Araç <br/><span className="text-sm font-medium text-slate-500">(20 m³'e kadar)</span></div>`,
  `<div className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex justify-between items-center w-full sm:block"><span>Kasalı Araç</span> <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none">(-20 m³)</span></div>`
);

// Replace v6 button
content = content.replace(
  `<button onClick={() => handleVolume('v6')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex flex-col justify-between h-full">`,
  `<button onClick={() => handleVolume('v6')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center sm:flex-col sm:items-start justify-between h-full gap-3 sm:gap-0">`
);
content = content.replace(
  `<div className="font-bold text-slate-800 group-hover:text-brand-700 leading-tight mb-1">Kasalı Araç <br/><span className="text-sm font-medium text-slate-500">(20 m³ ve Üzeri)</span></div>`,
  `<div className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-brand-700 leading-tight mb-1 flex justify-between items-center w-full sm:block"><span>Kasalı Kamyon</span> <span className="text-xs sm:text-sm font-medium text-slate-500 bg-slate-100 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none">(20+ m³)</span></div>`
);


// Replace descriptions
content = content.replace(
  /<div className="text-\[11px\] text-slate-500 leading-tight">/g,
  `<div className="text-[11px] text-slate-500 leading-tight hidden text-balance sm:block w-full text-left">`
);
// Replace arrow icons
content = content.replace(
  /<ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 self-end mt-2" \/>/g,
  `<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-brand-500 shrink-0 hidden sm:block self-end mt-2" />`
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Done!');
