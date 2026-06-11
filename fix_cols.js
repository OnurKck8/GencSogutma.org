const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"/g,
  'className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"'
);

// fix flex-row to flex-col xl:flex-row
content = content.replace(
  /flex flex-row items-center justify-between w-full gap-2/g,
  'flex flex-col xl:flex-row xl:items-center justify-between w-full items-start gap-1 a-x'
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
