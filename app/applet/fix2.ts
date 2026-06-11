import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// fix cols
content = content.replace(
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"',
  'className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"'
);

// fix flex-row to flex-col
content = content.replaceAll(
  'flex flex-row items-center justify-between w-full gap-2 transition-colors',
  'flex flex-col items-start w-full gap-1 transition-colors'
);


fs.writeFileSync('src/App.tsx', content, 'utf8');
