"use strict";

let questions = [
    new Question("Rozdělení EZ podle napětí mezi vodiči v uzemněné střídavé soustavě je:", ["mn do 50 V; nn do 1000 V; vn do 52 kV", "mn do 55 V; nn do 1500 V; vn do 73 kV", "pn do 50 V; dn do 1000 V; sn do 52 kV"], 0),
    new Question("Jmenovité napětí střídavých rozvodných sítí v ČR je:", ["230/400 V","300/450 V", "120/230 V" ], 0),
    new Question("Mez bezpečných jmenovitých napětí při předpokládaném dotyku neživých částí v prostorech normálních je:", ["50 V~ a 120 V=", "40 V~ a 115 V=", "100 V~ a 85 V="], 0),
    new Question("Dovolené meze trvalého dotykového napětí v prostorech normálních i nebezpečných pro EZ do 1000 V jsou:", ["25 V~ a 60 V=", "20 V~ a 67 V=", "50 V~ a 42 V="], 0),
    new Question("Odpor uzemnění uzlu zdroje nemá být větší než:", ["5 Ω, ve ztížených podmínkách nejvýše 15 Ω", "6 Ω, ve ztížených podmínkách nejvýše 18 Ω", "2 Ω, ve ztížených podmínkách nejvýše 8 Ω" ], 0),
    new Question("Plynové potrubí se jako náhodný ochranný vodič:", ["nesmí použít", "smí použít"], 0),
    new Question("Silnoproudá zařízení jsou zařízení:", ["u nichž mohou vzniknout proudy nebezpečné osobám, zvířatům a věcem", "u nichž mohou vzniknout proudy nebezpečné rostlinám", "u nichž nemusí vzniknout proudy nebezpečné osobám, zvířatům a věcem"], 0),
    new Question("Obecná charakteristika prostorů nebezpečných říká, že:", ["vlivem prostředí je zde stálé nebo přechodné nebezpečí úrazu elektrickým proudem", "vlivem lidských chyb je zde stálé nebo přechodné nebezpečí úrazu elektrickým proudem"], 0),
    new Question("Z hlediska možného zvýšení rizika úrazu elektrickým proudem působením vnějších vlivů se prostory člení na:", ["normální, nebezpečné a zvlášť nebezpečné", "bezpečné, normální a nebezpečné","bezpečné a nebezpečné" ], 0),
    new Question("Barva bezpečnostních tabulek výstrahy je:", ["žlutá", "červená", "zelená"], 0),
    new Question("Barva bezpečnostních tabulek zákazu je:", ["červená", "fialová", "žlutá"], 0),
    new Question("Bezpečnostní značka v provedení modrý kruh, bílý symbol je značka:", ["příkazu", "informační", "rozkazu"], 0),
    new Question("Bezpečnostní značky v provedení na zeleném podkladu jsou značky:", ["informační", "doporučovací", "příkazu"], 0),
    new Question("V označení stupně krytí IP udává první číslice:", ["stupeň ochrany osob před nebezpečným dotykem živých částí a stupeň ochrany zařízení před vniknutím cizích pevných těles", "stupeň ochrany osob před nebezpečným dotykem živých částí a stupeň ochrany zařízení před vniknutím cizích tekutých těles", "stupeň ochrany osob před nebezpečným dotykem neživých částí a stupeň ochrany zařízení před vniknutím cizích pevných těles"], 0),
    new Question("Prostředky základní ochrany (před přímým dotykem) EZ zajišťují ochranu:", ["jen při normálním provozu", "při normálním a speciálním provozu provozu",  "jen při speciálním provozu"], 0),
    new Question("Prostředky zvýšené ochrany (před přímým i nepřímým dotykem) EZ zajišťují ochranu:", ["základní i při poruše", "jen při normálním provozu", "jen při poruše"], 0),
    new Question("Při ochraně automatickým odpojením se pro střídavé rozvodné sítě do 1000 V dovoluje doba odpojení:", ["nepřesahující 5 s", "přesahující 5 s", "nepřesahující 3 s"], 0),
    new Question("Pro automatické odpojení od zdroje v síti TT 230 V AC, zajišťující ochranu před nepřímým dotykem koncového obvodu do 32 A, musí ochranný prvek vypnout v čase do:", ["0,2 s.", "0,4 s.", "0,6 s."], 0),
    new Question("Pro automatické odpojení od zdroje v síti TN 230 V AC, zajišťující ochranu před nepřímým dotykem koncového obvodu do 32 A, musí ochranný prvek vypnout v čase do:", ["0,4 s.", "0,2 s.", "0,6 s."], 0),
    new Question("Při základní ochraně krytím musí kryty:", ["být dostatečně odolné, vyhovující alespoň IPxxB (IP2X), horní vodorovné kryty pak IPxxD (IP4X), odstranitelné jen klíčem či nástrojem", "být dostatečně odolné", "být dostatečně odolné, vyhovující alespoň IPxxC (IP3X), horní vodorovné kryty pak IPxxG (IP6X),"], 0),
    new Question("Ochranu zábranou v prostorech volně přístupných laikům:", ["nelze použít", "lze použít"], 0),
    new Question("Napětí obvodů při ochranně elektrickým oddělením nesmí přesáhnout hodnotu:", ["500 V", "1000 V", "5000 V"], 0),
    new Question("Základní ochrana polohou spočívá:", ["v umístění živých částí mimo dosah", "v umístění neživých částí mimo dosah", "v umístění živých částí za neživé části"], 0),
    new Question("Doplňkovou ochranu proudovým chráničem lze realizovat:", ["chráničem se jmenovitým rozdílovým proudem nejvýše 30 mA", "chráničem se jmenovitým rozdílovým proudem nejvýše 60 mA", "chráničem se jmenovitým rozdílovým proudem nejvýše 15 mA"], 0),
    new Question("Proudové chrániče s rozdílovým proudem do 30 mA se musí požít na:", ["zásuvky se jmenovitým proudem do 32 A, které jsou používány laiky.", "zásuvky se jmenovitým proudem do 32 A, které jsou používány specialisty.", "zásuvky se jmenovitým proudem do 42 A, které jsou používány laiky."], 0),
    new Question("Pro ochranu omezením ustáleného dotykového proudu a energie nesmí proud tekoucí odporem 2000 Ohmů mezi částmi současně přístupnými dotyku překročit hodnoty:", ["3,5 mA~ nebo 10 mA=", "10 mA~ nebo 3,5 mA=", "4,5 mA~ nebo 12 mA="], 0),
    new Question("Pro ochranu omezením ustáleného proudu a energie nesmí náboj mezi částmi současně přístupnými dotyku překročit hodnotu:", ["50 μC", "80 μC", "100 μC"], 0),
    new Question("Proudovým chráničem musí procházet:", ["všechny pracovní vodiče", "nulový vodič", "zemění"], 0),
    new Question("Vidlice a zásuvky pro obvody SELV musí splňovat tyto požadavky:", ["nesmí být záměnné s vidlicemi a zásuvkami sítí jiných napětí a nesmí mít kontakt pro ochranný vodič", "nesmí být záměnné s vidlicemi a zásuvkami sítí jiných napětí a musí mít kontakt pro ochranný vodič"], 0),
    new Question("Živé části obvodů PELV s napětím nepřesahujícím 12V~ nebo 25V=:", ["nemusí mít základní ochranu", "musí mít základní ochranu", "musí mít zvýšenou ochranu"], 0),
    new Question("Jako zdroje pro ochranu malým napětím lze použít:", ["bezpečnostní ochranný transformátor, akumulátor", "bezpečnostní ochranný rezistor"], 0),
    new Question("Obvody SELV:", ["nesmí být spojeny se zemí", "jsou spojeny se zemí"], 0),
    new Question("Z označení PELV vyplývá, že jde o obvody:", ["uzemněné", "neuzemněné"], 0),
    new Question("Ochrana základní izolací znamená, že:", ["živé části musí být úplně pokryty izolací, kterou lze odstranit pouze jejím zničením", "živé části musí být úplně pokryty dvojitou izolací, kterou nelze odstranit"], 0),
    new Question("Zařízení mající dvojitou či zesílenou izolaci se označují jako:", ["EZ třídy ochrany II", "EZ třídy ochrany I", "EZ třídy ochrany III"], 0),
    new Question("Elektrické zařízení třídy ochrany II:", ["má dvojitou či zesílenou izolaci a nemá svorku pro připojení ochranného vodiče", "má dvojitou či zesílenou izolaci a má svorku pro připojení ochranného vodiče", "nemá dvojitou či zesílenou izolaci a nemá svorku pro připojení ochranného vodiče"], 0),
    new Question("Elektrické zařízení, u něhož je provedena jen pracovní izolace, se považuje z hlediska možného úrazu elektrickým proudem za zařízení:", ["bez ochrany", "se základní ochranou", "se zvýšenou ochranou"], 0),
    new Question("V sítích TT se neživé části EZ:", ["nesmějí připojit na nulový vodič", "musí připojit na nulový vodič"], 0),
    new Question("Elektrická zařízení třídy ochrany II musí mít připojovací vidlici:", ["bez ochranného vodiče", "s ochranným vodičem"], 0),
    new Question("Elektrická zařízení třídy ochrany 0:", ["nelze v ČR používat", "jsou zařízení s pracovní izolací"], 0),
    new Question("Izolace, která slouží k ochraně při poruše (před nepřímým dotykem) se nazývá:", ["přídavná", "dodatečná", "zvýšená"], 0),
    new Question("Pro připojení elektrických předmětů třídy ochrany I se dvouvodičový pohyblivý přívod s vidlicí bez ochranného kontaktu:", ["nesmí použít", "smí použít"], 0),
    new Question("Jednofázový pohyblivý prodlužovací přívod pro obecné použití se provede jako:", ["třížilový, přičemž ochranný vodič je veden samostatně a nesmí být spojen s nulovým vodičem", "dvoužilový, přičemž ochranný vodič je veden samostatně a nesmí být spojen s nulovým vodičem", "třížilový, přičemž ochranný vodič musí být spojen s nulovým vodičem"], 0),
    new Question("Barva izolovaných krajních (fázových) vodičů může být:", ["černá, hnědá nebo šedá", "černá, žlutá, zelená", "červená, zelená, černá"], 0),
    new Question("Fázové svorky elektrických předmětů a zařízení se ve střídavé rozvodné soustavě označují písmeny:", ["U, V, W", "X, Y, Z", "P, Q, R"], 0),
    new Question("Nulový (střední) vodič střídavé soustavy se označuje:", ["N", "S", "T"], 0),
    new Question("Svorka ochranného vodiče se na elektrickém předmětu značí:", ["PE", "PEN", "P"], 0),
    new Question("Vodič PEN je:", ["vodič slučující funkci ochranného vodiče a nulového vodiče", "ochraný vodič"], 0),
    new Question("Jištění vodičů PE a PEN:", ["je zakázáno", "je povinný"], 0),
    new Question("Obsluha je taková činnost na EZ, kdy:", ["pracovník nepoužívá nástrojů a nemůže přijít do styku s živými částmi", "pracovník používá nástrojů a nemůže přijít do styku s živými částmi", "pracovník nepoužívá nástrojů a může přijít do styku s živými částmi"], 0),
    new Question("Práce je taková činnost na EZ, kdy:", ["pracovník používá nástrojů a může přijít do styku s živými částmi", "pracovník nepoužívá nástrojů a nemůže přijít do styku s živými částmi", "pracovník používá nástrojů a nemůže přijít do styku s živými částmi"], 0),
    new Question("§4 Vyhlášky 50/1978 Sb. stanovuje požadavky pro kvalifikaci:", ["pracovníků poučených", "pracovníků znalých", "pracovníků studujících"], 0),
    new Question("§5 Vyhlášky 50/1978 Sb. stanovuje požadavky pro kvalifikaci:", ["pracovníků znalých", "pracovníků poučených", "pracovníků studujících"], 0),
    new Question("Pracovníci poučení mohou na EZ pracovat:", ["v blízkosti nekrytých částí EZ nn pod napětím ve vzdálenosti větší než 20 cm s dohledem", "v blízkosti nekrytých částí EZ nn pod napětím ve vzdálenosti větší než 30 cm s dohledem", "v blízkosti nekrytých částí EZ nn pod napětím ve vzdálenosti větší než 20 cm bez dohledu"], 0),
    new Question("Při práci pod dozorem odpovídá za dodržování bezpečnostních předpisů:", ["pracovník dozírající", "pracovník provádějící činnost"], 0),
    new Question("Při práci s dohledem odpovídá za dodržování bezpečnostních předpisů:", ["pracovník provádějící činnost", "pracovník dohlížející"], 0),
    new Question("Pro následky úrazu elektrickým proudem je rozhodující:", ["velikost proudu, který protéká tělem zasaženého", "velikost napětí, který protéká tělem zasaženého"], 0),
    new Question("Za současně přístupné dotyku se považují části navzájem vzdálené:", ["méně než 2,5 m", "méně než 3 m", "méně než 2 m"], 0),
    new Question("Pracovními pomůckami jsou například:", ["měřicí přístroje, zkoušečky napětí a další předměty potřebné k práci či obsluze EZ", "ochranné izolační rukavice, izolační koberce a plošiny, ochranné brýle apod."], 0),
    new Question("Ochrannými pomůckami jsou například:", ["ochranné izolační rukavice, izolační koberce a plošiny, ochranné brýle apod.", "měřicí přístroje, zkoušečky napětí a další předměty potřebné k práci či obsluze EZ"], 0),
    new Question("Před použitím ochranných pomůcek je pracovník povinen:", ["přesvědčit se o jejich řádném stavu", "vyčistit je", "otestovat je na zařízení pod proudem"], 0),
    new Question("Nepřímá srdeční masáž má být prováděna s frekvencí asi:", ["100 stlačení za minutu", "80 stlačení za minutu", "110 stlačení za minutu"], 0),
    new Question("Před započetím nepřímé srdeční masáže je potřeba:", ["uložit postiženého rovně na záda na rovnou a pevnou podložku", "uložit postiženého na postel", "uložit postiženého do stabilizované polohy"], 0),
    new Question("Při provádění nepřímé srdeční masáže musí mít zachránce:", ["obě ruce napnuté v loktech", "obě ruce pokrčené v loktech"], 0),
    new Question("Při provádění nepřímé srdeční masáže je nutno stlačovat hrudní kost u dospělého člověka:", ["do hloubky 4-5 cm", "do hloubky 5-6 cm", "do hloubky 3-4 cm"], 0),
    new Question("Poměr stlačení srdce a umělého dýchání při resuscitaci má být:", ["30 stlačení a 2 vdechy", "40 stlačení a 3 vdechy", "30 stlačení a 1 vdech" ], 0),
    new Question("Automatický externí defibrilátor použijeme v případě:", ["zástavy dechu postiženého", "zástavy srdce postiženého"], 0),
    new Question("Pokud postižený po úrazu elektrickým proudem dýchá a má hmatný tep, zůstává při vědomí a není viditelně zraněn:", ["je nutno přesto zavolat lékařskou pomoc", "je nutné mu podat vodu", "uložíme ho ke spánku"], 0),
    new Question("Záchrannou lékařskou službu je možné přivolat tísňovým telefonním číslem:", ["155", "158", "150"], 0),
    new Question("Jestliže postižený nabyl po resuscitaci vědomí:", ["musí být nadále sledován a musí zůstat vleže", "posadíme ho", "necháme ho usnout"], 0),
    new Question("Resuscitace se musí provádět:", ["dokud se neobnoví životní funkce nebo do předání postiženého do péče záchranářů", "dokud nás to baví"], 0)
];
