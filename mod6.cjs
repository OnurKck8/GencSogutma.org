import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Update p-4 to p-4 md:p-6 md:rounded-2xl
content = content.replace(
  /className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between"/g,
  'className="w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between hover:shadow-sm"'
);

// Update icon margins/sizes (the w-10 h-10 container)
// It is inside the step 2 container so maybe I can be more specific, or just replace them globally (since only these 3 use this pattern in this context)
content = content.replace(
  /className="w-10 h-10 rounded-full bg-([a-z]+)-50 text-\1-500 flex items-center justify-center shrink-0"/g,
  'className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-$1-50 text-$1-500 flex items-center justify-center shrink-0"'
);

// Update icon sizes inside those circle containers
// We don't have to change them, but if we want to change w-5 h-5 to w-5 h-5 md:w-7 md:h-7:
content = content.replace(
  /<CheckCircle2 className="w-5 h-5"\/>/g,
  '<CheckCircle2 className="w-5 h-5 md:w-7 md:h-7"/>'
);
content = content.replace(
  /<Thermometer className="w-5 h-5" \/>/g,
  '<Thermometer className="w-5 h-5 md:w-7 md:h-7" />'
);
content = content.replace(
  /<ThermometerSnowflake className="w-5 h-5" \/>/g,
  '<ThermometerSnowflake className="w-5 h-5 md:w-7 md:h-7" />'
);

content = content.replace(
  /<div className="flex items-center gap-3">/g,
  '<div className="flex items-center gap-3 md:gap-5">'
);

content = content.replace(
  /<div className="font-bold text-slate-800 group-hover:text-brand-700">/g,
  '<div className="font-bold text-slate-800 md:text-lg lg:text-xl group-hover:text-brand-700">'
);
content = content.replace(
  /<div className="text-xs text-slate-500">/g,
  '<div className="text-xs md:text-sm text-slate-500 md:mt-1">'
);

// Update ArrowRight
content = content.replace(
  /<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-brand-500 shrink-0" \/>/g,
  '<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-brand-500 shrink-0" />'
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Done script 6');
