const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const oldClass = 'font-bold text-base md:text-lg lg:text-xl text-slate-800 group-hover:text-brand-700 leading-tight mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 border-b border-transparent group-hover:border-brand-100 pb-2 transition-colors';
const newClass = 'font-bold text-base md:text-lg lg:text-xl text-slate-800 group-hover:text-brand-700 leading-tight mb-2 sm:mb-3 flex items-center justify-between w-full gap-2 border-b border-transparent group-hover:border-brand-100 pb-2 transition-colors';

content = content.replaceAll(oldClass, newClass);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
