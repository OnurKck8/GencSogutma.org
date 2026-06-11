import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /className="w-full text-left p-4 md:p-6 lg:p-7 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all hover:shadow-md group flex items-center justify-between"/g,
  'className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all hover:shadow-md group flex items-center justify-between"'
);

content = content.replace(
  /className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16/g,
  'className="w-10 h-10 sm:w-12 sm:h-12'
);

content = content.replace(
  /className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"/g,
  'className="w-5 h-5 sm:w-6 sm:h-6"'
);

content = content.replace(
  /md:text-lg lg:text-xl/g,
  'sm:text-lg'
);

content = content.replace(
  /text-\[13px\] md:text-\[15px\] lg:text-base/g,
  'text-[13px] sm:text-sm'
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('done step2');
