// Tiny vector pixels stay crisp at every display density. No downloaded assets.
const glyphs = {
  '0':['111','101','101','101','111'],'1':['010','110','010','010','111'],
  '2':['111','001','111','100','111'],'3':['111','001','111','001','111'],
  '4':['101','101','111','001','001'],'5':['111','100','111','001','111'],
  '6':['111','100','111','101','111'],'7':['111','001','010','010','010'],
  '8':['111','101','111','101','111'],'9':['111','101','111','001','111'],
  L:['100','100','100','100','111'],O:['111','101','101','101','111'],
  A:['010','101','111','101','101'],D:['110','101','101','101','110'],
  I:['111','010','010','010','111'],N:['1001','1101','1011','1001','1001'],
  G:['111','100','101','101','111']
};
export function pixelText(text) {
  let x=0, cells='';
  for(const char of text){const rows=glyphs[char];if(!rows)continue;
    rows.forEach((row,y)=>[...row].forEach((bit,col)=>{if(bit==='1')cells+=`<rect x="${x+col}" y="${y}" width="1" height="1"/>`;}));
    x+=rows[0].length+1;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.max(1,x-1)} 5" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true">${cells}</svg>`;
}
export const drink = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 55" shape-rendering="crispEdges" aria-hidden="true">
<path fill="#eeeae4" d="M8 51h24v2H8z"/>
<path fill="#37302a" d="M24 0h3v18h-3z"/><path fill="#65605b" d="M25 1h1v15h-1z"/>
<path fill="#39342e" d="M6 15h28v4h-2v28h-2v3H10v-3H8V19H6z"/>
<path fill="#fff6d1" d="M10 19h20v26h-2v3H12v-3h-2z"/>
<path fill="#f9cf4f" d="M10 24h20v21h-2v3H12v-3h-2z"/>
<path fill="#f2b939" d="M25 24h5v21h-2v3h-3zM12 44h13v4H12z"/>
<path fill="#ffe999" d="M12 25h2v12h-2zM15 22h5v4h-5zM23 20h5v5h-5z"/>
<path fill="#f5f3ed" d="M7 15h26v3H7z"/><path fill="#dedbd1" d="M8 18h24v2H8z"/>
<path fill="#513d2e" d="M12 41h3v3h-3zM18 43h3v3h-3zM24 40h3v3h-3zM15 38h3v3h-3zM23 45h3v2h-3z"/>
<path fill="#fffdf5" d="M16 28h10v10H16z"/>
<path fill="#38332d" d="M20 29h3v1h1v3h-1v1h-3v-1h-1v-3h1zM20 34h2v2h2v1h-6v-1h2zM24 32h2v1h-2z"/>
<text x="20" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="2.3" letter-spacing=".6" fill="#8c8170">HEYTEA</text>
</svg>`;
export const corgi = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 55" shape-rendering="crispEdges" aria-hidden="true">
<path fill="#eeebe7" d="M8 50h43v2H8z"/>
<g class="tail"><path fill="#9d612e" d="M43 35h6v-3h5v-5h3v10h-3v4H43z"/><path fill="#dfa056" d="M45 36h6v-3h4v-4h2v7h-4v3h-8z"/><path fill="#fff0d8" d="M54 27h3v7h-4v-3h1z"/></g>
<g class="dog-body">
<path fill="#925b32" d="M14 29h28v4h3v14h-3v3H11v-3H9V35h5z"/>
<path fill="#dca05f" d="M16 30h23v4h4v12h-4v3H13v-3h-2V36h5z"/>
<path fill="#fff0d8" d="M22 30h12v5h3v12H19V35h3z"/>
<path fill="#925b32" d="M14 3h5v3h4v6h11V6h4V3h5v20h3v9h-4v4H15v-3h-5V22h3V3z"/>
<path fill="#e2a563" d="M15 6h3v3h4v6h13V9h4V6h2v17h3v8h-4v3H16v-3h-4v-7h3z"/>
<path fill="#d49080" d="M16 9h2v4h3v5h-5zM38 11h2v7h-5v-4h3z"/>
<path fill="#fff3df" d="M26 14h5v7h3v3h6v7h-4v3H20v-3h-5v-6h7v-4h4z"/>
<path fill="#392c24" d="M18 21h4v2h-4zM35 21h4v2h-4z"/>
<path fill="#efb6a0" d="M15 25h5v2h-5zM37 25h5v2h-5z"/>
<path fill="#392c24" d="M26 25h6v3h-2v1h-2v-1h-2z"/>
<g class="rest-mouth"><path fill="#392c24" d="M23 29h2v2h8v-2h2v3H23z"/><path fill="#e99c95" d="M27 32h4v3h-4z"/></g>
<g class="bark-mouth"><path fill="#392c24" d="M25 29h8v5h-8z"/><path fill="#e99c95" d="M27 33h4v2h-4z"/></g>
<path fill="#925b32" d="M17 40h2v7h6v3H14v-3h3zM35 40h2v7h5v3H31v-3h4z"/>
<path fill="#fff0d8" d="M14 47h9v2h-9zM33 47h8v2h-8z"/>
</g>
<g class="bark-lines" fill="#9a7353"><path d="M48 19h5v2h-5zM47 13h2v3h-2zM48 26h3v2h-3z"/></g>
</svg>`;
