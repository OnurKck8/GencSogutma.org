const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// For Step 2 padding
content = content.replace(
  /className="w-full text-left p-4 md:p-6 lg:p-7 rounded-2xl/g,
  'className="w-full text-left p-4 sm:p-5 rounded-2xl'
);
content = content.replace(
  /className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full/g,
  'className="w-10 h-10 sm:w-12 sm:h-12 rounded-full'
);
content = content.replace(
  /className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"/g,
  'className="w-5 h-5 sm:w-6 sm:h-6"'
);
content = content.replace(
  /md:text-lg lg:text-xl group-hover:text-brand-700/g,
  'sm:text-lg group-hover:text-brand-700'
);
content = content.replace(
  /text-\[13px\] md:text-\[15px\] lg:text-base text-slate-500/g,
  'text-xs sm:text-sm text-slate-500'
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('updated step2');
