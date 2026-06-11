import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace t0 button
content = content.replace(
  `<button onClick={() => handleTemp('t0')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0"><CheckCircle2 className="w-5 h-5"/></div>`,
  `<button onClick={() => handleTemp('t0')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5"/></div>`
);

// Replace t1 button
content = content.replace(
  `<button onClick={() => handleTemp('t1')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><ThermometerSnowflake className="w-5 h-5"/></div>`,
  `<button onClick={() => handleTemp('t1')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><ThermometerSnowflake className="w-4 h-4 sm:w-5 sm:h-5"/></div>`
);

// Replace t2 button
content = content.replace(
  `<button onClick={() => handleTemp('t2')} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0"><ThermometerSnowflake className="w-5 h-5"/></div>`,
  `<button onClick={() => handleTemp('t2')} className="w-full text-left p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors group flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0"><ThermometerSnowflake className="w-4 h-4 sm:w-5 sm:h-5"/></div>`
);

// ArrowRight sizes in step 2
content = content.replace(
  /<ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 shrink-0" \/>/g,
  `<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-brand-500 shrink-0" />`
);


fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Done!');
