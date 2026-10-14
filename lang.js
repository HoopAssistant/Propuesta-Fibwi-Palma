/* Hoop Assistant | ES/EN toggle for Propuesta-Fibwi-Palma
   Original page is Spanish. Switches visible text to English at runtime. */
(function () {
  var D = {
    "HOOP ASSISTANT": "HOOP ASSISTANT",
    "Scouting propio": "Own team scouting",
    "Rival · Ataque": "Opponent · Offense",
    "Rival · Defensa": "Opponent · Defense",
    "Jugadores": "Players",
    "Contacto": "Contact",
    "Propuesta de valor · Fibwi Palma · Primera FEB": "Value proposal · Fibwi Palma · Primera FEB",
    "Cada posesión,": "Every possession,",
    "etiquetada y medida.": "tagged and measured.",
    "Scouting de vuestro propio equipo, del rival en ataque, del rival en defensa y de sus jugadores. Todo construido sobre vídeo etiquetado posesión a posesión, y cada parte con su vídeo, su informe y sus datos.": "Scouting of your own team, of the opponent on offense, of the opponent on defense and of their players. All built on video tagged possession by possession, and every part comes with its video, its report and its data.",
    "Ejemplo real · Puntos por posesión del rival": "Real example · Opponent points per possession",
    "Contraataque": "Fast break",
    "Bloqueo directo": "Pick and roll",
    "Rebote ofens.": "Off. rebound",
    "Otras": "Other",
    "Hertener Löwen, 150 posesiones etiquetadas: 1,30 PPP en contraataque frente a 0,76 en sets.": "Hertener Löwen, 150 tagged possessions: 1.30 PPP in fast break against 0.76 in sets.",
    "Clips etiquetados de un equipo propio": "Tagged clips from an own team",
    "Partidos cruzados en un panel": "Games cross-referenced in one dashboard",
    "Posesiones rivales medidas por acción": "Opponent possessions measured by action",
    "Jugadores rivales con informe": "Opponent players with a report",
    "Lo que ofrecemos": "What we offer",
    "Cuatro bloques,": "Four blocks,",
    "cada uno con datos": "each one with data",
    "Los cuatro salen del mismo etiquetado del vídeo, por eso cada informe lleva sus números y los números llevan al clip.": "All four come from the same video tagging, so every report carries its numbers and the numbers lead to the clip.",
    "Vuestro equipo": "Your team",
    "Vuestros partidos etiquetados y cruzados por set, base en pista, cuarto y jornada.": "Your games tagged and cross-referenced by set, guard on court, quarter and round.",
    "Panel de datos": "Data dashboard",
    "Informe por partido": "Game report",
    "Clips": "Clips",
    "Ver ejemplo →": "See example →",
    "Rival": "Opponent",
    "Ataque + datos": "Offense + data",
    "Sets, bloqueo directo, transición y saques del rival, con los puntos por posesión de cada acción.": "The opponent's sets, pick and roll, transition and inbounds, with the points per possession of each action.",
    "Informe OER": "OER report",
    "Vídeo ofensivo": "Offensive video",
    "Defensa + datos": "Defense + data",
    "Coberturas del bloqueo directo, bloqueos indirectos, transición y defensa 1c1 del rival.": "The opponent's pick and roll coverages, off ball screens, transition and 1 on 1 defense.",
    "Datos por cobertura": "Data by coverage",
    "Informe defensivo": "Defensive report",
    "Vídeo defensivo": "Defensive video",
    "Scouting de jugadores": "Player scouting",
    "Ficha de cada jugador de la rotación con números de la temporada y sus claves.": "A profile of every rotation player with season numbers and keys to defend or attack him.",
    "Perfil numérico": "Numeric profile",
    "Informe de jugadores": "Player report",
    "Vídeo por jugador": "Video per player",
    "Bloque 1 · Scouting propio": "Block 1 · Own team scouting",
    "Vuestro equipo,": "Your team,",
    "jornada a jornada": "round by round",
    "Esto es lo que hacemos con nuestro propio equipo: cada posesión relevante etiquetada en vídeo, cruzada por set, base, jugador y cuarto, y lista para que el staff prepare el siguiente partido.": "This is what we do with our own team: every relevant possession tagged on video, cross-referenced by set, guard, player and quarter, and ready for the staff to prepare the next game.",
    "Etiquetamos": "We tag",
    "Cada clip entra con su categoría y sus descriptores: quién, desde dónde, cómo acabó y si estuvo bien o mal ejecutado.": "Every clip comes in with its category and descriptors: who, from where, how it ended and whether it was well or badly executed.",
    "Cruzamos": "We cross",
    "El panel cruza todas las dimensiones y señala qué sets rinden, cuáles se pierden y qué cambia con cada base.": "The dashboard crosses every dimension and shows which sets perform, which ones are lost and what changes with each guard.",
    "Preparamos": "We prepare",
    "Un informe por partido con los clips a revisar y la comparación contra el resto de la temporada.": "A report per game with the clips to review and the comparison against the rest of the season.",
    "Datos": "Data",
    "Panel de equipo propio": "Own team dashboard",
    "Datos reales de nuestro propio equipo: 18 jornadas y 1.595 clips. Elegid una dimensión y una métrica; pulsad una barra para ver sus clips con el minuto exacto del vídeo.": "Real data from our own team: 18 rounds and 1,595 clips. Choose a dimension and a metric; click a bar to see its clips with the exact minute of the video.",
    "Ver por": "View by",
    "Set": "Set",
    "Tipo de ataque": "Attack type",
    "Cuarto": "Quarter",
    "Base en pista": "Guard on court",
    "Jornada": "Round",
    "Métrica": "Metric",
    "PPP": "PPP",
    "Posesiones": "Possessions",
    "% bien ejecutado": "% well executed",
    "Mín. posesiones": "Min. possessions",
    "TRANSICIÓN": "TRANSITION",
    "CORTES": "CUTS",
    "CABEZA": "HEAD",
    "VUELTAS": "LAPS",
    "FONDO": "BASELINE",
    "FONDO 1": "BASELINE 1",
    "FONDO 2": "BASELINE 2",
    "CUERNOS": "HORNS",
    "BANDA": "SLOB",
    "ARRIBA": "TOP",
    "ABAJO": "BOTTOM",
    "LADO": "SIDE",
    "PULGAR": "THUMB",
    "Barra = PPP · número pequeño = posesiones": "Bar = PPP · small number = possessions",
    "Línea discontinua = media del equipo": "Dashed line = team average",
    "Toda la temporada": "Whole season",
    "Quitar selección": "Clear selection",
    "% bien (staff)": "% well (staff)",
    "Triple anotado": "Three made",
    "2P anotado": "2P made",
    "Tiros libres": "Free throws",
    "Triple fallado": "Three missed",
    "2P fallado": "2P missed",
    "Pérdida": "Turnover",
    "Falta recibida": "Foul drawn",
    "Min.": "Min.",
    "Base": "Guard",
    "Resultado": "Result",
    "Staff": "Staff",
    "BIEN": "GOOD",
    "MAL": "BAD",
    "SOB ESPECIAL": "SPECIAL SLOB",
    "Partido frente a temporada": "Game versus season",
    "Punto naranja: el partido. Círculo vacío: resto de la temporada. Sets más usados en ese partido.": "Orange dot: the game. Empty circle: rest of the season. Most used sets in that game.",
    "PPP · temporada": "PPP · season",
    "% bien · temporada": "% well · season",
    "Clips a revisar · valorados mal por el staff": "Clips to review · rated bad by the staff",
    "Los porcentajes y los PPP se calculan sobre los clips etiquetados, no sobre el acta oficial. Con cada club trabajamos bajo los datos que requiere su cuerpo técnico: las categorías, los descriptores y las métricas se definen con el staff.": "Percentages and PPP are calculated on the tagged clips, not on the official box score. With each club we work with the data its coaching staff requires: categories, descriptors and metrics are defined with the staff.",
    "Bloque 2 · Scouting rival · Ataque": "Block 2 · Opponent scouting · Offense",
    "Cómo ataca el rival,": "How the opponent attacks,",
    "y cuánto le rinde": "and how well it works",
    "Ejemplo completo: Hertener Löwen. Vídeo ofensivo montado por set e informe de eficiencia ofensiva (OER) con los puntos por posesión de cada acción.": "Full example: Hertener Löwen. Offensive video edited by set and an offensive efficiency report (OER) with the points per possession of each action.",
    "Vídeo": "Video",
    "Abrir en Drive ↗": "Open in Drive ↗",
    "PDF": "PDF",
    "Informe de eficiencia ofensiva": "Offensive efficiency report",
    "Eficiencia ofensiva del rival": "Opponent offensive efficiency",
    "Del informe OER: 150 posesiones de Hertener Löwen, clasificadas por tipo de ataque y por set.": "From the OER report: 150 Hertener Löwen possessions, classified by attack type and by set.",
    "Puntos por posesión por acción": "Points per possession by action",
    "La línea discontinua es su media ponderada (0,87). Las acciones con menos de 4 posesiones se muestran tenues.": "The dashed line is its weighted average (0.87). Actions with fewer than 4 possessions are shown faded.",
    "Sets y acciones": "Sets and actions",
    "Saque de banda (SLOB)": "Sideline out of bounds (SLOB)",
    "Rebote ofensivo": "Offensive rebound",
    "Saque de fondo (BLOB)": "Baseline out of bounds (BLOB)",
    "Llegada": "Early offense",
    "Transición": "Transition",
    "Por encima de la media": "Above average",
    "En la media": "At average",
    "Por debajo": "Below average",
    "PPP en contraataque": "PPP in fast break",
    "11 posesiones. En sets, 0,76.": "11 possessions. In sets, 0.76.",
    "De sus posesiones son sets": "Of their possessions are sets",
    "81 de 150 posesiones, a 0,76 PPP.": "81 of 150 possessions, at 0.76 PPP.",
    "Posesiones de “2 Side” Diamond Dallas": "“2 Side” Diamond Dallas possessions",
    "Su set más repetido, a 0,75 PPP.": "Their most repeated set, at 0.75 PPP.",
    "PPP tras saque de fondo": "PPP after baseline out of bounds",
    "Rip Staggered STS (curl), 6 posesiones.": "Rip Staggered STS (curl), 6 possessions.",
    "Frecuencia frente a eficiencia": "Frequency versus efficiency",
    "Cada punto es una acción del rival con al menos 2 posesiones. A la derecha, lo que más usan; arriba, lo que más puntos por posesión les da.": "Each dot is an opponent action with at least 2 possessions. To the right, what they use most; at the top, what gives them the most points per possession.",
    "Mucho uso · PPP alto": "High usage · High PPP",
    "Poco uso · PPP alto": "Low usage · High PPP",
    "Mucho uso · PPP bajo": "High usage · Low PPP",
    "Poco uso · PPP bajo": "Low usage · Low PPP",
    "Posesiones (frecuencia)": "Possessions (frequency)",
    "Puntos por posesión": "Points per possession",
    "De dónde salen estos números": "Where these numbers come from",
    "Proceso de análisis en Nacsport sobre los partidos de Hertener Löwen.": "Analysis process in Nacsport on Hertener Löwen games.",
    "Segmentación del vídeo": "Video segmentation",
    "El partido se etiqueta con una plantilla de botones propia.": "The game is tagged with our own button template.",
    "Ajuste de tiempos": "Timing adjustment",
    "Se ajusta el inicio y el final de cada registro.": "The start and end of each record are adjusted.",
    "Análisis del vídeo": "Video analysis",
    "Los registros se agrupan por set, con sus descriptores.": "Records are grouped by set, with their descriptors.",
    "Selección y creación de clips": "Clip selection and creation",
    "Se eligen los clips y se les añade una nota.": "Clips are chosen and a note is added to them.",
    "Bloque 3 · Scouting rival · Defensa": "Block 3 · Opponent scouting · Defense",
    "Cómo defiende el rival,": "How the opponent defends,",
    "y dónde atacarle": "and where to attack it",
    "Ejemplo completo: Hertener Löwen. Informe defensivo escrito y vídeo defensivo.": "Full example: Hertener Löwen. Written defensive report and defensive video.",
    "Defensa del bloqueo directo": "Pick and roll defense",
    "Del informe defensivo. Con los pívots alternan High Flat, Show, Drop y Under en el mismo partido según el jugador implicado. Con el 4 juegan Flat o cambian.": "From the defensive report. With the centers they alternate High Flat, Show, Drop and Under in the same game depending on the player involved. With the 4 they play Flat or switch.",
    "Lo que vimos": "What we saw",
    "Sufren, sobre todo con #20 Fiorentino como defensor del bloqueador: problemas laterales, sale demasiado alto y por delante del balón. Quieren evitar el bloqueo y perseguir al manejador. El último defensor suele estar listo para la continuación, pero el X-man no rota a tiempo a la esquina.": "They struggle, especially with #20 Fiorentino as the screener's defender: lateral problems, he comes out too high and ahead of the ball. They want to avoid the screen and chase the ball handler. The last defender is usually ready for the roll, but the X-man does not rotate to the corner in time.",
    "Dónde sufren": "Where they struggle",
    "Pase al short roll y rotación a la esquina.": "Pass to the short roll and rotation to the corner.",
    "En Side PnR colapsan mucho con el defensor del lado débil. Poca presión al balón y mucho espacio entre bloqueo y manejador. #20 Fiorentino llega tarde al show. Mismos problemas de rotación que en High Flat.": "In Side PnR they collapse a lot with the weak side defender. Little pressure on the ball and a lot of space between screen and ball handler. #20 Fiorentino is late to the show. Same rotation problems as in High Flat.",
    "Pase al short roll y tiro del lado débil si el defensor colapsa.": "Pass to the short roll and a weak side shot if the defender collapses.",
    "Drop (Over)": "Drop (Over)",
    "El defensor del bloqueador prioriza claramente el balón. A los rivales les ha costado porque no han bloqueado con eficacia.": "The screener's defender clearly prioritizes the ball. Opponents have struggled because they have not screened effectively.",
    "Buen espaciado y bloqueo efectivo.": "Good spacing and an effective screen.",
    "Solo contra jugadores concretos: lo usaron contra Marius Stoll (#9, Schwelm). En el re-bloqueo, Under o Show.": "Only against specific players: they used it against Marius Stoll (#9, Schwelm). On the re-screen, Under or Show.",
    "PnR con el 4": "PnR with the 4",
    "Flat (más bajo que con los pívots) o cambio. En Flat pueden sufrir en los closeouts tras el pop. Cuando cambian, no tienen problemas para defender los desajustes.": "Flat (lower than with the centers) or a switch. In Flat they can struggle on closeouts after the pop. When they switch, they have no problems defending the mismatches.",
    "Pop y closeout cuando juegan Flat.": "Pop and closeout when they play Flat.",
    "Bloqueos indirectos": "Off ball screens",
    "Los interiores tienen problemas en el ": "The bigs have problems on the ",
    ": unas veces salen demasiado altos y dejan el camino al aro, otras no salen.": ": sometimes they come out too high and leave the way to the rim, other times they do not come out.",
    "Sin regla clara de cuándo cambiar en ": "No clear rule on when to switch in ",
    "bloqueo al bloqueador": "screen the screener",
    "En ": "In ",
    "(pin down + mano a mano) se pasan con el primer bloqueo, lo que da mucha ventaja en el hand-off.": "(pin down + hand off) they go over the first screen, which gives a big advantage on the hand off.",
    "Poste bajo": "Low post",
    ": no suelen defenderlo; cuando lo hacen, 1c1. Si postea un no-pívot, pueden ayudar con el 5.": ": they rarely defend it; when they do, 1 on 1. If a non big posts up, they can help with the 5.",
    "Transición defensiva": "Defensive transition",
    "Problemas en transición,": "Problems in transition,",
    "sobre todo tras pérdida": "especially after a turnover",
    "Son agresivos buscando el robo: puede dar ventajas cerca del aro o triples liberados.": "They are aggressive going for the steal: it can give advantages near the rim or open threes.",
    "Les cuesta emparejar cuando el ataque fluye rápido.": "They struggle to match up when the offense flows fast.",
    "Zona 2-3": "2-3 Zone",
    "tras tiro libre ante Rostock, solo 2 posesiones.": "after a free throw against Rostock, only 2 possessions.",
    "Defensa 1c1": "1 on 1 defense",
    ": problemas laterales en 1c1, sobre todo en closeouts, y defendiendo de último contra pívots grandes.": ": lateral problems in 1 on 1, especially on closeouts, and defending last against big centers.",
    ": problemas sobre todo sin balón, en posicionamiento y rotaciones.": ": problems mainly off the ball, in positioning and rotations.",
    ": presiona fuerte el balón, pero sufre para contener a jugadores verticales. Atacar el aro y encararle.": ": pressures the ball hard, but struggles to contain vertical players. Attack the rim and face him up.",
    ": intenta robar por detrás, sobre todo en el bloqueo directo.": ": tries to steal from behind, especially in the pick and roll.",
    ": su mejor defensor 1c1. No es un desajuste para los bases.": ": their best 1 on 1 defender. Not a mismatch for the guards.",
    "Datos defensivos": "Defensive data",
    "Cada acción defensiva queda etiquetada en vídeo. Así se cuantifica qué cobertura usa el rival y qué rendimiento da atacarla.": "Every defensive action is tagged on video. This quantifies which coverage the opponent uses and how well attacking it works.",
    "Lo que etiquetamos en defensa": "What we tag on defense",
    "Botones de la plantilla de Nacsport usada en el scouting de Hertener Löwen.": "Buttons of the Nacsport template used in the Hertener Löwen scouting.",
    "Coberturas del bloqueo directo": "Pick and roll coverages",
    "Tipo de bloqueo directo": "Pick and roll type",
    "PnR llegada": "PnR early offense",
    "PnR exteriores": "Perimeter PnR",
    "Fondo PnR": "Baseline PnR",
    "Últimos segundos": "Last seconds",
    "Situaciones defensivas": "Defensive situations",
    "Balance": "Transition balance",
    "Zona press": "Zone press",
    "Zona": "Zone",
    "Otras def.": "Other def.",
    "Rebote defensivo": "Defensive rebound",
    "Ayudas": "Help",
    "Rendimiento contra cada cobertura": "Performance against each coverage",
    "Ejemplo con nuestro propio equipo: puntos por posesión de nuestros bloqueos directos según la cobertura del rival.": "Example with our own team: points per possession of our pick and rolls according to the opponent's coverage.",
    "Muestras pequeñas: las coberturas con pocas posesiones se muestran tenues y deben leerse como tendencia.": "Small samples: coverages with few possessions are shown faded and should be read as a trend.",
    "Bloque 4 · Scouting de jugadores": "Block 4 · Player scouting",
    "Cada jugador,": "Every player,",
    "en una ficha": "on one profile",
    "Números de la temporada y las claves de cada jugador, con lo más importante resaltado. Se acompaña de un vídeo de scouting de jugadores. Ejemplo: los 12 jugadores de Hertener Löwen.": "Season numbers and the keys of each player, with the most important highlighted. It comes with a player scouting video. Example: the 12 players of Hertener Löwen.",
    "Vídeo de jugadores": "Player video",
    "Escolta": "Shooting guard",
    "Alero": "Small forward",
    "Ala-pívot": "Power forward",
    "Pívot": "Center",
    "1c1": "1v1",
    "TL%": "FT%",
    "Pts": "Pts",
    "Reb": "Reb",
    "Ast": "Ast",
    "Val": "Eff",
    "Acción principal: manejador de bloqueo directo. Ataca con velocidad y usa las dos manos.": "Main action: pick and roll ball handler. Attacks with speed and uses both hands.",
    "Cuidado con el ": "Watch out for the ",
    ", sobre todo hacia su derecha.": ", especially to his right.",
    "En closeouts y en campo abierto ataca para ": "On closeouts and in the open floor he attacks to ",
    "finalizar en el aro": "finish at the rim",
    "Movimiento favorito: el slow step atacando closeouts.": "Favorite move: the slow step attacking closeouts.",
    "Puntos por partido frente a porcentaje de tiro verdadero (TS%), calculado con los números del informe. El tamaño del punto son los minutos. Pulsad un punto para abrir su ficha.": "Points per game versus true shooting percentage (TS%), calculated from the numbers in the report. Dot size is minutes. Click a dot to open its profile.",
    "Más puntos · más TS%": "More points · higher TS%",
    "Menos puntos · menos TS%": "Fewer points · lower TS%",
    "Puntos por partido": "Points per game",
    "Hablemos": "Let's talk",
    "Trabajamos con un solo club por liga, con comunicación directa con el analista y confidencialidad total. Si queréis ver este mismo análisis sobre vuestros partidos, escribidnos.": "We work with one club per league, with direct communication with the analyst and total confidentiality. If you want to see this same analysis on your games, write to us.",
    "Copiar correo": "Copy email",
    "Copiado": "Copied",
    "Hoop Assistant · Scouting y análisis de vídeo de baloncesto": "Hoop Assistant · Basketball scouting and video analysis",
    "Propuesta para Fibwi Palma": "Proposal for Fibwi Palma"
  };

  var POS = { "Base": "Point guard", "Escolta": "Shooting guard", "Alero": "Small forward", "Ala-pívot": "Power forward", "Pívot": "Center" };
  var ORD = { "1": "1st", "2": "2nd", "3": "3rd", "4": "4th", "5": "5th" };

  function nums(s) {
    return s.replace(/(\d)\.(\d{3})(?!\d)/g, "$1\u0001$2").replace(/(\d),(\d)/g, "$1.$2").replace(/\u0001/g, ",");
  }

  function rules(t) {
    var m;
    if ((m = t.match(/^(Triple anotado|2P anotado|Tiros libres|Triple fallado|2P fallado|Pérdida|Falta recibida) (\d+%)$/))) return D[m[1]] + " " + m[2];
    if ((m = t.match(/^(·\s*)?(\d+) pos$/))) return (m[1] || "") + m[2] + " poss";
    if ((m = t.match(/^· (\d+) pos$/))) return "· " + m[1] + " poss";
    if ((m = t.match(/^J(\d+) (.+) · (Visitante|Local)$/))) return "R" + m[1] + " " + m[2] + " · " + (m[3] === "Local" ? "Home" : "Away");
    if ((m = t.match(/^J(\d+) ([^·]+)$/))) return "R" + m[1] + " " + m[2];
    if ((m = t.match(/^(\d)º$/))) return ORD[m[1]] || m[1] + "th";
    if ((m = t.match(/^Ver más clips \((\d+) restantes\)$/))) return "See more clips (" + m[1] + " left)";
    if ((m = t.match(/^(PPP|% bien) · temporada (.+)$/))) return (m[1] === "PPP" ? "PPP" : "% well") + " · season " + nums(m[2]);
    if ((m = t.match(/^(Base|Escolta|Alero|Ala-pívot|Pívot) · (\d+) años · (.+)$/))) return POS[m[1]] + " · " + m[2] + " yrs · " + nums(m[3]);
    if ((m = t.match(/^(.+) def · (.+) of$/))) return nums(m[1]) + " def · " + nums(m[2]) + " off";
    if ((m = t.match(/^(.+) rob · (.+) pér$/))) return nums(m[1]) + " stl · " + nums(m[2]) + " tov";
    if ((m = t.match(/^(\d+) ARRIBA$/))) return m[1] + " TOP";
    if ((m = t.match(/^(\d+) ABAJO$/))) return m[1] + " BOTTOM";
    if ((m = t.match(/^(\d+) LADO$/))) return m[1] + " SIDE";
    return null;
  }

  var DT = {};
  Object.keys(D).forEach(function (k) { DT[k.trim()] = D[k].trim(); });

  function tr(raw) {
    var t = raw.trim();
    if (!t) return raw;
    var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    var out;
    if (Object.prototype.hasOwnProperty.call(DT, t)) out = DT[t];
    else {
      out = rules(t);
      if (out === null) out = /\d/.test(t) ? nums(t) : t;
    }
    return lead + out + trail;
  }

  function clean(v) {
    return v.replace(/\s*\(ProB alemana\)/g, "").replace(/,\s*ProB alemana\./g, ".");
  }

  var lang = "es", busy = false, orig = new WeakMap();

  function eachText(root, fn) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = w.nextNode())) {
      var p = n.parentNode;
      if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) continue;
      if (p.closest && p.closest("#ha-lang")) continue;
      if (!n.nodeValue.trim()) continue;
      list.push(n);
    }
    list.forEach(fn);
  }

  function apply(root) {
    busy = true;
    eachText(root || document.body, function (n) {
      if (!orig.has(n)) {
        var f = clean(n.nodeValue);
        if (f !== n.nodeValue) n.nodeValue = f;
        orig.set(n, f);
      }
      if (lang === "en") {
        var o = orig.get(n), v = tr(o);
        if (n.nodeValue !== v) n.nodeValue = v;
      } else if (orig.has(n)) {
        if (n.nodeValue !== orig.get(n)) n.nodeValue = orig.get(n);
      }
    });
    busy = false;
  }

  function setLang(l) {
    lang = l;
    apply(document.body);
    document.documentElement.lang = l;
    var b = document.querySelectorAll("#ha-lang button");
    for (var i = 0; i < b.length; i++) b[i].classList.toggle("on", b[i].getAttribute("data-l") === l);
    try { localStorage.setItem("ha_lang", l); } catch (e) {}
  }

  function build() {
    var css = document.createElement("style");
    css.textContent =
      "#ha-lang{display:inline-flex;margin-left:14px;vertical-align:middle;flex:none}" +
      "#ha-lang button{font-family:'Barlow Condensed','Bebas Neue',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;border:1.5px solid #E85D04;background:transparent;color:#fff;padding:5px 9px;cursor:pointer;line-height:1}" +
      "#ha-lang button+button{border-left:0}" +
      "#ha-lang button.on{background:#E85D04;color:#fff}" +
      "#ha-lang.fixed{position:fixed;top:10px;right:10px;z-index:9999;margin:0;background:#1b1b1b}";
    document.head.appendChild(css);
    var box = document.createElement("div");
    box.id = "ha-lang";
    box.innerHTML = '<button type="button" data-l="en">EN</button><button type="button" data-l="es" class="on">ES</button>';
    var host = document.querySelector("nav .wrap") || document.querySelector("nav");
    if (host) host.appendChild(box); else { box.className = "fixed"; document.body.appendChild(box); }
    box.addEventListener("click", function (e) {
      var l = e.target && e.target.getAttribute && e.target.getAttribute("data-l");
      if (l) setLang(l);
    });
  }

  function init() {
    build();
    new MutationObserver(function (ms) {
      if (busy) return;
      var again = false;
      ms.forEach(function (m) { if (m.type === "childList" || m.type === "characterData") again = true; });
      if (again) apply(document.body);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    var q = (location.search.match(/[?&]lang=(en|es)/) || [])[1], s = null;
    try { s = localStorage.getItem("ha_lang"); } catch (e) {}
    var l = q || s || "es";
    setLang(l);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
