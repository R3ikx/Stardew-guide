/* Geldimperium – eigene Grafiken (alle Motive selbst gezeichnet, 48x48 bzw. 64x64) */
const ART = {
  /* ---- Startinsel ---- */
  lemon:'<ellipse cx="24" cy="27" rx="16" ry="12" fill="#ffd93b"/><path d="M8 27q-3-3-1-6l3 2zM40 27q3-3 1-6l-3 2z" fill="#e8b800"/><ellipse cx="19" cy="23" rx="6" ry="3" fill="#fff" opacity=".35"/><path d="M25 15q5-7 13-5-2 8-13 5z" fill="#3ddc84"/>',
  market:'<rect x="8" y="22" width="32" height="20" rx="2" fill="#a86b3c"/><path d="M5 22l4-12h30l4 12z" fill="#fff"/><path d="M9 10h6l-2 12H5zM21 10h6l-1 12h-8zM33 10h6l4 12h-8z" fill="#ff5d5d"/><circle cx="18" cy="31" r="4" fill="#ff9f1c"/><circle cx="30" cy="32" r="4" fill="#7ed957"/>',
  croissant:'<path d="M5 30q2-14 19-16 17 2 19 16-4-4-8-3-3 5-11 5t-11-5q-4-1-8 3z" fill="#e8a33d"/><path d="M16 18l4 11M24 15v14M32 18l-4 11" stroke="#b87518" stroke-width="2.5" stroke-linecap="round"/>',
  car:'<path d="M5 30l3-9q1-3 4-3h24q3 0 4 3l3 9v6H5z" fill="#ff5d5d"/><path d="M13 20h22l3 8H10z" fill="#bfe6ff"/><path d="M24 20v8" stroke="#ff5d5d" stroke-width="2"/><circle cx="14" cy="36" r="5" fill="#222"/><circle cx="34" cy="36" r="5" fill="#222"/><circle cx="14" cy="36" r="2" fill="#aaa"/><circle cx="34" cy="36" r="2" fill="#aaa"/>',
  laptop:'<rect x="9" y="9" width="30" height="22" rx="3" fill="#3b4a63"/><rect x="12" y="12" width="24" height="16" rx="1" fill="#4cc9ff"/><path d="M15 24l5-6 4 3 6-7" stroke="#fff" stroke-width="2" fill="none"/><path d="M4 35h40l-3 5H7z" fill="#aab4c4"/>',
  bank:'<path d="M24 5l20 11H4z" fill="#ffc83d"/><rect x="7" y="18" width="34" height="4" fill="#e8d9b0"/><rect x="10" y="24" width="5" height="14" fill="#f4ead0"/><rect x="21.5" y="24" width="5" height="14" fill="#f4ead0"/><rect x="33" y="24" width="5" height="14" fill="#f4ead0"/><rect x="5" y="39" width="38" height="5" rx="1" fill="#c9a24a"/><circle cx="24" cy="13" r="2.5" fill="#fff6c9"/>',
  casino:'<rect x="6" y="6" width="26" height="26" rx="5" fill="#ff5d5d" transform="rotate(-8 19 19)"/><circle cx="13" cy="13" r="2.8" fill="#fff"/><circle cx="25" cy="25" r="2.8" fill="#fff"/><circle cx="19" cy="19" r="2.8" fill="#fff"/><rect x="22" y="20" width="22" height="22" rx="4" fill="#fff" transform="rotate(10 33 31)"/><circle cx="28" cy="26" r="2.6" fill="#222"/><circle cx="38" cy="36" r="2.6" fill="#222"/>',
  rocket:'<path d="M24 4q11 8 9 24H15Q13 12 24 4z" fill="#eef2f7"/><circle cx="24" cy="17" r="4.5" fill="#4cc9ff"/><path d="M15 22l-7 9 8-2zM33 22l7 9-8-2z" fill="#ff5d5d"/><path d="M19 30h10l-5 12z" fill="#ffb02e"/>',
  oil:'<rect x="9" y="12" width="30" height="30" rx="4" fill="#3b4a63"/><rect x="9" y="19" width="30" height="3" fill="#222"/><rect x="9" y="31" width="30" height="3" fill="#222"/><path d="M24 3q7 8 0 10-7-2 0-10z" fill="#ffb02e"/>',
  moon:'<path d="M30 6a18 18 0 1 0 12 26A15 15 0 0 1 30 6z" fill="#f4e9b8"/><circle cx="17" cy="26" r="3" fill="#d9cc94"/><circle cx="24" cy="36" r="2" fill="#d9cc94"/><circle cx="36" cy="10" r="1.6" fill="#fff"/><circle cx="41" cy="18" r="1.2" fill="#fff"/>',
  /* ---- Palmenstrand ---- */
  coconut:'<circle cx="24" cy="27" r="15" fill="#7a4a24"/><circle cx="24" cy="27" r="11" fill="#fff"/><circle cx="19" cy="23" r="2" fill="#7a4a24"/><circle cx="26" cy="22" r="2" fill="#7a4a24"/><path d="M20 31q4 3 8 0" stroke="#7a4a24" stroke-width="2" fill="none"/><path d="M28 8q10-3 15 6-9-1-15-6z" fill="#3ddc84"/>',
  surf:'<path d="M24 3q9 14 5 36-5 3-10 0Q15 17 24 3z" fill="#ffd93b"/><path d="M24 8v30" stroke="#ff5d5d" stroke-width="3"/><path d="M3 38q5-6 10 0t10 0t10 0t10 0v7H3z" fill="#4cc9ff"/>',
  hotel:'<rect x="9" y="8" width="30" height="34" rx="2" fill="#f4ead0"/><path d="M9 8h30v6H9z" fill="#ff5d5d"/><g fill="#4cc9ff"><rect x="13" y="18" width="6" height="6"/><rect x="21" y="18" width="6" height="6"/><rect x="29" y="18" width="6" height="6"/><rect x="13" y="28" width="6" height="6"/><rect x="29" y="28" width="6" height="6"/></g><rect x="21" y="32" width="6" height="10" fill="#a86b3c"/>',
  yacht:'<path d="M24 5v26H10z" fill="#fff"/><path d="M26 10v21h12z" fill="#ff5d5d"/><path d="M5 33h38l-6 9H11z" fill="#3b82f6"/><path d="M3 45q5-4 10 0t10 0t10 0t10 0" stroke="#4cc9ff" stroke-width="3" fill="none"/>',
  pearl:'<path d="M6 30q0-20 18-22 18 2 18 22-6 10-18 10T6 30z" fill="#ff9fb8"/><path d="M24 8v32M15 11l4 29M33 11l-4 29" stroke="#e86a90" stroke-width="2" fill="none"/><circle cx="24" cy="26" r="7" fill="#fff"/><circle cx="22" cy="24" r="2.2" fill="#dbe9ff"/>',
  park:'<circle cx="24" cy="21" r="15" fill="none" stroke="#ff5d5d" stroke-width="3"/><path d="M24 6v30M9 21h30M13 10l22 22M35 10L13 32" stroke="#ffc83d" stroke-width="2"/><g fill="#4cc9ff"><circle cx="24" cy="6" r="3"/><circle cx="39" cy="21" r="3"/><circle cx="9" cy="21" r="3"/><circle cx="24" cy="36" r="3"/></g><path d="M16 45l8-14 8 14z" fill="#a86b3c"/>',
  /* ---- Vulkaninsel ---- */
  obsidian:'<path d="M6 40l8-24 8 8 8-18 12 34z" fill="#4a4f66"/><path d="M14 16l4 24M30 6l-2 34" stroke="#7a82a3" stroke-width="2"/><path d="M30 6l6 12-6 4z" fill="#8a93b8"/>',
  lavaspa:'<path d="M6 26h36q0 14-18 14T6 26z" fill="#ff7a3d"/><path d="M12 27h24" stroke="#ffb02e" stroke-width="3"/><path d="M16 20q-4-5 0-9M24 20q-4-6 0-12M32 20q-4-5 0-9" stroke="#e8eef7" stroke-width="3" stroke-linecap="round" fill="none"/>',
  crystal:'<path d="M24 4l11 12-11 28L13 16z" fill="#4cc9ff"/><path d="M24 4l-4 12h8zM13 16h22" fill="#bfeaff" stroke="#2a9fd0" stroke-width="1.5"/><path d="M6 42l6-14 6 14zM30 42l5-10 5 10z" fill="#7b61ff"/>',
  dragon:'<path d="M8 38q0-24 16-28 8-6 18 0l-6 6q6 6 0 14-4 8-14 8z" fill="#3ddc84"/><circle cx="29" cy="17" r="3" fill="#ffd93b"/><circle cx="29.5" cy="17" r="1.2" fill="#222"/><path d="M14 12l3-8 4 7M24 7l4-5 2 6" fill="#ff5d5d"/><path d="M12 40q8 4 18-2" stroke="#1f9d57" stroke-width="3" fill="none"/>',
  power:'<path d="M26 3L10 26h10l-4 19 22-25H27z" fill="#ffd93b"/><path d="M10 26h10M26 20h11" stroke="#e8a300" stroke-width="2"/>',
  chest:'<rect x="6" y="20" width="36" height="22" rx="3" fill="#a86b3c"/><path d="M6 22q0-14 18-14t18 14z" fill="#c98a4a"/><rect x="6" y="24" width="36" height="4" fill="#ffc83d"/><rect x="20" y="22" width="8" height="10" rx="2" fill="#ffc83d"/><circle cx="24" cy="27" r="2" fill="#a86b3c"/><path d="M24 2l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#ffd93b"/>',
  /* ---- Eisinsel ---- */
  icecream:'<path d="M16 24h16L24 44z" fill="#e8a05a"/><circle cx="24" cy="18" r="10" fill="#ff9fb8"/><circle cx="17" cy="21" r="6" fill="#fff"/><circle cx="31" cy="21" r="6" fill="#9be8ff"/><circle cx="24" cy="8" r="3" fill="#ff5d5d"/>',
  penguin:'<ellipse cx="24" cy="27" rx="14" ry="17" fill="#2b3547"/><ellipse cx="24" cy="30" rx="9" ry="12" fill="#fff"/><circle cx="19" cy="19" r="2.4" fill="#fff"/><circle cx="29" cy="19" r="2.4" fill="#fff"/><circle cx="19" cy="19" r="1" fill="#000"/><circle cx="29" cy="19" r="1" fill="#000"/><path d="M21 23h6l-3 4z" fill="#ffb02e"/><path d="M15 44h7l-2-5zM26 44h7l-2-5z" fill="#ffb02e"/>',
  ski:'<path d="M3 42L19 12l10 16 6-8 10 22z" fill="#cfe3f5"/><path d="M19 12l-5 9 5-3 3 4z" fill="#fff"/><path d="M29 28l-5 5 5-2 3 4z" fill="#fff"/><path d="M19 12V4l8 3-8 2" fill="#ff5d5d"/>',
  lab:'<path d="M19 5h10v14l10 20q1 5-4 5H13q-5 0-4-5l10-20z" fill="#e8f4ff"/><path d="M14 33h20l4 8q1 3-3 3H13q-4 0-3-3z" fill="#4cc9ff"/><circle cx="21" cy="38" r="2" fill="#fff"/><circle cx="28" cy="35" r="1.5" fill="#fff"/><rect x="17" y="3" width="14" height="4" rx="2" fill="#aab4c4"/>',
  icebreaker:'<path d="M4 30h40l-6 10H10z" fill="#e63946"/><rect x="12" y="20" width="16" height="10" fill="#fff"/><rect x="26" y="12" width="9" height="18" fill="#cfe3f5"/><rect x="29" y="5" width="3" height="7" fill="#ffc83d"/><path d="M3 45l6-3 6 3 6-3 6 3 6-3 6 3 6-3" stroke="#9be8ff" stroke-width="3" fill="none"/>',
  aurora:'<rect x="3" y="4" width="42" height="40" rx="6" fill="#1b2c4a"/><path d="M6 30q10-24 18-14t18-8" stroke="#3ddc84" stroke-width="5" fill="none" opacity=".85"/><path d="M6 36q10-18 18-8t18-6" stroke="#b06bff" stroke-width="4" fill="none" opacity=".8"/><path d="M3 38h42v2q0 4-6 4H9q-6 0-6-4z" fill="#e8f4ff"/><circle cx="12" cy="10" r="1.2" fill="#fff"/><circle cx="34" cy="9" r="1.2" fill="#fff"/>',
  /* ---- Wolkenstadt ---- */
  cloudbread:'<path d="M12 38a8 8 0 0 1 0-16 10 10 0 0 1 19-3 9 9 0 0 1 5 19z" fill="#fff"/><path d="M14 38h22v3H14z" fill="#cfe3f5"/><path d="M15 31q9-9 18 0z" fill="#e8a33d"/><path d="M20 27l2 4M26 26l1 5" stroke="#b87518" stroke-width="2"/>',
  rainbow:'<path d="M5 38a19 19 0 0 1 38 0" stroke="#ff5d5d" stroke-width="4" fill="none"/><path d="M9 38a15 15 0 0 1 30 0" stroke="#ffd93b" stroke-width="4" fill="none"/><path d="M13 38a11 11 0 0 1 22 0" stroke="#3ddc84" stroke-width="4" fill="none"/><path d="M17 38a7 7 0 0 1 14 0" stroke="#4cc9ff" stroke-width="4" fill="none"/><ellipse cx="7" cy="40" rx="6" ry="4" fill="#fff"/><ellipse cx="41" cy="40" rx="6" ry="4" fill="#fff"/>',
  airship:'<ellipse cx="24" cy="18" rx="19" ry="11" fill="#ff7a3d"/><path d="M8 18q16-8 32 0" stroke="#ffc83d" stroke-width="3" fill="none"/><rect x="17" y="31" width="14" height="8" rx="2" fill="#a86b3c"/><path d="M20 29l-2 3M28 29l2 3" stroke="#555" stroke-width="2"/><path d="M5 14l-3-5 7 2zM5 22l-3 5 7-2z" fill="#ffc83d"/>',
  observatory:'<path d="M6 42h36V28q-18-24-36 0z" fill="#cfd8e8"/><path d="M20 12l10 6" stroke="#3b4a63" stroke-width="5" stroke-linecap="round"/><rect x="21" y="28" width="6" height="14" fill="#3b4a63"/><circle cx="38" cy="9" r="3" fill="#ffd93b"/><circle cx="10" cy="12" r="1.6" fill="#ffd93b"/>',
  skybank:'<path d="M10 34a8 8 0 0 1 0-15 10 10 0 0 1 19-3 9 9 0 0 1 6 18z" fill="#e8f4ff"/><circle cx="24" cy="30" r="10" fill="#ffc83d"/><circle cx="24" cy="30" r="7" fill="none" stroke="#e8a300" stroke-width="2"/><path d="M24 25v10M21 28h5a2 2 0 0 1 0 4h-5" stroke="#a87400" stroke-width="2" fill="none"/>',
  palace:'<path d="M6 42V22h8v-8l4-6 4 6v8h4V10l6-6 6 6v12h4v20z" fill="#f4ead0"/><path d="M18 8l2 6M34 4v8" stroke="#ffc83d" stroke-width="3"/><path d="M20 42V32a4 4 0 0 1 8 0v10z" fill="#a86b3c"/><rect x="10" y="26" width="4" height="6" fill="#4cc9ff"/><rect x="36" y="26" width="4" height="6" fill="#4cc9ff"/>',
  /* ---- Symbole ---- */
  cash:'<rect x="3" y="12" width="42" height="24" rx="4" fill="#3ddc84"/><circle cx="24" cy="24" r="7" fill="#1f9d57"/><path d="M24 19v10M21 22h5a2 2 0 0 1 0 4h-5" stroke="#d9ffe9" stroke-width="2" fill="none"/><circle cx="9" cy="24" r="2" fill="#1f9d57"/><circle cx="39" cy="24" r="2" fill="#1f9d57"/>',
  gem:'<path d="M12 6h24l9 11-21 27L3 17z" fill="#4cc9ff"/><path d="M3 17h42M12 6l6 11M36 6l-6 11M18 17l6 27 6-27" stroke="#1f8fc4" stroke-width="2" fill="none"/>',
  gold:'<circle cx="24" cy="24" r="20" fill="#ffc83d"/><circle cx="24" cy="24" r="14" fill="none" stroke="#c98a00" stroke-width="3"/><path d="M24 15l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1z" fill="#fff3b0"/>',
  worker:'<circle cx="24" cy="13" r="8" fill="#ffd0a6"/><path d="M9 44q0-16 15-16t15 16z" fill="#3b82f6"/><path d="M24 28l-4 6 4 10 4-10z" fill="#fff"/><path d="M24 31v10" stroke="#ff5d5d" stroke-width="3"/><path d="M16 11q8-9 16 0z" fill="#2b3547"/>',
  case:'<rect x="5" y="14" width="38" height="26" rx="4" fill="#a86b3c"/><path d="M17 14v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" stroke="#7a4a24" stroke-width="3" fill="none"/><rect x="5" y="24" width="38" height="3" fill="#7a4a24"/><rect x="21" y="22" width="6" height="8" rx="1" fill="#ffc83d"/>',
  wave:'<path d="M2 26q6-8 11 0t11 0t11 0t11 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>',
  fish:'<path d="M6 24q10-12 24-2l10-8v20l-10-8q-14 10-24-2z" fill="#ff9f1c"/><circle cx="14" cy="23" r="1.8" fill="#222"/>',
  /* ---- Navigation (Linien, Farbe vom Text) ---- */
  nStore:'<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M5 20l3-12h32l3 12zM8 20v20h32V20M19 40V28h10v12"/></g>',
  nMap:'<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M5 10l12-4 14 4 12-4v32l-12 4-14-4-12 4zM17 6v32M31 10v32"/></g>',
  nTasks:'<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><rect x="9" y="6" width="30" height="36" rx="4"/><path d="M16 18l3 3 6-7M16 31l3 3 6-7M29 20h5M29 33h5"/></g>',
  nCards:'<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="6" y="12" width="22" height="30" rx="4" transform="rotate(-10 17 27)"/><rect x="20" y="7" width="22" height="30" rx="4"/><circle cx="31" cy="20" r="4"/></g>',
  nShop:'<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M10 16h28l3 26H7zM17 16a7 7 0 0 1 14 0"/></g>',
  nGear:'<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="24" cy="24" r="7"/><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/></g>',
};

/* Sammelfiguren (64x64) – alle frei erfunden */
const FACE = (skin, hair, extra) =>
  `<circle cx="32" cy="36" r="20" fill="${skin}"/>${hair}<circle cx="25" cy="36" r="2.6" fill="#222"/><circle cx="39" cy="36" r="2.6" fill="#222"/>` +
  `<path d="M25 44q7 6 14 0" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="20" cy="42" r="3" fill="#ff9aa8" opacity=".5"/><circle cx="44" cy="42" r="3" fill="#ff9aa8" opacity=".5"/>${extra}`;
const GLASS = '<circle cx="25" cy="36" r="6" fill="none" stroke="#3b4a63" stroke-width="2"/><circle cx="39" cy="36" r="6" fill="none" stroke="#3b4a63" stroke-width="2"/><path d="M31 36h2" stroke="#3b4a63" stroke-width="2"/>';
const MASC = [
  {id:"muenzi",  n:"Münzi",          r:0, w:20, svg:FACE("#ffd0a6",'<path d="M13 34q0-20 19-20t19 20q-10-10-38 0z" fill="#8a5a2b"/>','<circle cx="32" cy="10" r="9" fill="#ffc83d"/><circle cx="32" cy="10" r="5.5" fill="none" stroke="#c98a00" stroke-width="2"/>')},
  {id:"scheck",  n:"Frau Scheck",    r:0, w:20, svg:FACE("#ffd0a6",'<path d="M12 40q-2-26 20-26t20 26q-4-14-20-14T12 40z" fill="#b5532a"/><circle cx="32" cy="9" r="6" fill="#b5532a"/>',GLASS)},
  {id:"dollar",  n:"Don Dollar",     r:0, w:18, svg:FACE("#e8b48a",'','<rect x="18" y="6" width="28" height="15" rx="2" fill="#222"/><rect x="12" y="19" width="40" height="5" rx="2" fill="#222"/><rect x="18" y="15" width="28" height="3" fill="#3ddc84"/><path d="M21 42q11-5 22 0-4 5-11 3-7 2-11-3z" fill="#5a3a1a"/>')},
  {id:"kurs",    n:"Käpt'n Kurs",    r:0, w:18, svg:FACE("#e8b48a",'','<path d="M13 28q0-16 19-16t19 16z" fill="#fff"/><rect x="11" y="26" width="42" height="5" rx="2" fill="#1b2c4a"/><circle cx="32" cy="19" r="4" fill="#ffc83d"/><path d="M14 46q0 14 18 14t18-14q-6 8-18 8T14 46z" fill="#d9dde6"/>')},
  {id:"profit",  n:"Prof. Profit",   r:1, w:9,  svg:FACE("#ffd0a6",'',GLASS+'<path d="M32 4l28 11-28 11L4 15z" fill="#222"/><path d="M17 22v8q15 8 30 0v-8l-15 6z" fill="#333"/><path d="M56 17v14" stroke="#ffc83d" stroke-width="2"/>')},
  {id:"lux",     n:"Lady Lux",       r:1, w:9,  svg:FACE("#ffd0a6",'<path d="M11 44q-5-32 21-30t21 30q-4-16-21-16T11 44z" fill="#222"/>','<path d="M19 18l4-9 5 6 4-9 4 9 5-6 4 9z" fill="#ffc83d"/><circle cx="32" cy="9" r="2.2" fill="#ff5d5d"/>')},
  {id:"robo",    n:"Robo Rendite",   r:2, w:3,  svg:FACE("#cfd8e8",'','<rect x="29" y="4" width="6" height="10" fill="#7c8aa3"/><circle cx="32" cy="4" r="3.5" fill="#ff5d5d"/><rect x="9" y="32" width="6" height="12" rx="2" fill="#7c8aa3"/><rect x="49" y="32" width="6" height="12" rx="2" fill="#7c8aa3"/><rect x="17" y="31" width="30" height="11" rx="5.5" fill="#4cc9ff" opacity=".65"/>')},
  {id:"gustav",  n:"Gold-Gustav",    r:2, w:3,  svg:FACE("#e8b48a",'','<path d="M12 31q0-21 20-21t20 21z" fill="#ffc83d"/><rect x="10" y="29" width="44" height="5" rx="2" fill="#e8a300"/><circle cx="32" cy="18" r="5" fill="#fff6c9"/><path d="M15 46q0 14 17 14t17-14q-6 8-17 8t-17-8z" fill="#3a2a1a"/>')},
];
const RARITY = [{n:"Gewöhnlich", per:0.03, col:"#8d99ab"},{n:"Selten", per:0.05, col:"#4cc9ff"},{n:"Episch", per:0.08, col:"#b06bff"}];

/* ico('lemon', 40) -> fertiges <svg> */
function ico(k, s){
  const sz = s ? `style="width:${s}px;height:${s}px"` : "";
  return `<svg class="ic" viewBox="0 0 48 48" ${sz} aria-hidden="true">${ART[k]||""}</svg>`;
}
function mascot(m, s){
  const sz = s ? `style="width:${s}px;height:${s}px"` : "";
  return `<svg class="ic" viewBox="0 0 64 64" ${sz} aria-hidden="true">${m.svg}</svg>`;
}
if (typeof module !== "undefined") module.exports = {ART, MASC, RARITY};
