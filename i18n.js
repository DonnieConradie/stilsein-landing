// i18n.js

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_what_we_offer: "What We Offer",
    nav_how_it_works: "How It Works",
    nav_monitoring: "Monitoring",
    nav_jakkals_ai: "Jakkals AI",
    nav_ecosystem: "Ecosystem",
    nav_contact: "Contact",

    // ARIA, Titles and Emails
    aria_menu_open: "Open menu",
    aria_menu_close: "Close menu",
    title_menu: "Menu",
    title_close: "Close",
    email_subject: "Enquiry: ",

    // Ticker
    ticker:[
      "Industrial Long-Range Monitoring Software",
      "Control Your Entire Farming Network on One Screen",
      "Your Eyes and Ears in the Field",
      "Generate Professional PDF and CSV Reports with One Click",
      "One Platform for Rain, Security, and Dam Levels",
      "Bridge Distances Without Eskom or Telkom",
      "The Operating System For The Modern African Farm",
      "Real-Time Farm Monitoring From The Palm Of Your Hand",
      "Early Warnings for Floods, Fires, and Theft"
    ],

    // Construction Modal
    modal_title: "STILSEIN IS IN DEVELOPMENT",
    modal_desc: "Welcome to the future of the field. We are currently finalizing the platform for commercial deployment.",
    modal_soon: "COMING SOON:",
    modal_li1: "Apple App Store & Google Play Launch",
    modal_li2: "WaterWolf (Dam Levels) & WagWolf (Security)",
    modal_li3: "Interactive Farm Builder (Get a Quote on a Map)",
    modal_li4: "Partner Portal for Installers",
    modal_btn: "I UNDERSTAND, LET ME IN",

    // Hero Section
    hero_badge: "THE OPERATING SYSTEM FOR THE AFRICAN FARM",
    hero_desc: "> Know exactly what is happening on the farm. Your eyes and ears in signal-dead zones, with real-time data directly in the palm of your hand.",
    hero_btn1: "DISCOVER THE SYSTEM",
    hero_btn2: "WHATSAPP US",

    // Tech Section
    tech_title: "The Future of Agriculture, Powered By World-Class Technology",
    tech_iot_title: "Smart IoT",
    tech_iot_desc: "The <strong>Internet of Things (IoT)</strong> means your farm becomes \"alive\". Physical assets like dams, pumps, and gates talk directly to the internet without human intervention.",
    tech_lora_title: "LoRaWAN® Radio",
    tech_lora_desc: "Long-range, low-power radio waves. This is the magic that sends data over 15km with a battery that lasts up to 10 years—completely independent of cellular networks.",
    tech_ttn_title: "The Things Network",
    tech_ttn_desc: "The world's most reliable routing system. Your data travels through encrypted cloud tunnels to ensure it lands safely, and lightning-fast, on your phone.",

    // Monitoring Grid (What We Offer)
    mon_title: "MONITOR YOUR FARM <br><span class=\"text-stilsein-blue\">ON THE STILSEIN PLATFORM</span>",
    mon_desc: "Farming in South Africa means managing vast distances and unpredictable elements. StilSein gives you absolute certainty by putting the heartbeat of your farm directly in your pocket. We transform raw data from your lands—like live rainfall and pipe pressure—into clear, actionable insights. With instant alerts, 5-year digital archives, and Jakkals AI keeping a 24/7 watch, you'll know exactly what's happening in your furthest camps, whether you're at the co-op or sitting on the stoep.",
    grid_rain: "LIVE RAINFALL",
    grid_rain_exp: "Industrial-grade tipping bucket sensors capture every millimeter. They feature a battery life of up to 10 years and beam data over a 15km LoRaWAN radio frequency directly to your homestead.",
    grid_pipe: "PIPE PRESSURE",
    grid_pipe_exp: "Heavy-duty pressure transducers tap directly into your mainlines. They read the exact 'bar' pressure and transmit it every few minutes so you know the water is flowing.",
    grid_forecast: "SMART FORECASTS",
    grid_forecast_exp: "We integrate with global satellite weather models. Instead of generic regional weather, the system pulls forecasts specifically for your farm's unique GPS coordinates.",
    grid_jakkals: "JAKKALS AI",
    grid_jakkals_exp: "An agriculture-specialized AI that fuses your live hardware telemetry, satellite weather, and historical database. He knows your livestock, pipelines, and flood thresholds, warning you proactively in plain farm language.",
    grid_maps: "INTERACTIVE MAPS",
    grid_maps_exp: "Every installed sensor is digitally pinned on your customized farm map. You instantly see a spatial layout of where issues are occurring without guessing.",
    grid_alerts: "INSTANT ALERTS",
    grid_alerts_exp: "You could be at Loftus. If pressure drops below 2 bar, or rainfall exceeds 50mm at the Noordgrens camp, the system instantly pushes a high-priority notification to your smartphone—before the next try is even scored.",
    grid_archive: "5-YEAR ARCHIVES",
    grid_archive_exp: "Every single data pulse is permanently stored in a secure time-series database. Nothing is ever deleted, building a comprehensive micro-climate history of your land.",
    grid_export: "PDF & CSV EXPORTS",
    grid_export_exp: "With one tap, our cloud servers compile your historical data into beautiful, branded PDF reports or raw CSV spreadsheets—perfect for insurance claims or agronomists.",

    // How it Works
    hw_title: "HOW DOES THE <span class=\"text-stilsein-blue\">STILSEIN NETWORK WORK?</span>",
    hw_desc: "Forget about poor cell reception. <strong>StilSein</strong>, together with our nationwide network of installers, builds a private long-range radio network right on your farm.",
    hw_toggle: "...if you already own a LoRaWAN Gateway? Click Here.",
    hw_toggle_active: "...wait, I need equipment. How does the setup work?",
    hw_step1_title: "1. THE SENSORS",
    hw_step1_desc: "These aren't massive industrial machines. Think of a compact rain gauge with tiny tipping buckets inside, or a small pressure sensor screwed onto your water pipe. They run on long-lasting batteries and silently beam data across the farm without needing Wi-Fi or cell reception.",
    hw_step2_title: "2. THE GATEWAY",
    hw_step2_desc: "This is simply a device that looks like your home internet router, mounted at the homestead with a small antenna outside. It acts as the 'receiver', catching radio signals from sensors up to 15km away. No SIM cards or monthly data contracts are required for the sensors to talk to it.",
    hw_opt_title: "ALREADY HAVE A GATEWAY?",
    hw_opt_desc: "If you already have a LoRaWAN gateway connected to The Things Network (TTN), you are halfway there. You don't need to buy new infrastructure. Just request a secure Webhook key from us, link it to your TTN console, and your existing sensors will pop up in the StilSein app.",
    hw_step3_title: "3. THE CLOUD",
    hw_step3_desc: "The gateway takes all those radio signals and passes them through your homestead's internet connection securely into our cloud servers. Here, Jakkals AI organizes the raw numbers, checks your thresholds, and stores everything in your 5-year archive.",
    hw_step4_title: "4. THE TAILORED APP",
    hw_step4_desc: "The final step is your phone. You don't download a generic app and spend hours trying to configure it. Our engineering team hardcodes your specific farm layout, camp names, and equipment directly into the software before we hand it over. You open the app, and your farm is already there.",

    // Real-Time Monitoring
    live_title: "WE MONITOR <br><span class=\"text-stilsein-blue\">AND KEEP WATCH.</span>",
    live_p1: "StilSein is not just an app you download and have to figure out yourself. We are a dedicated <strong>real-time monitoring service</strong>.",
    live_p2: "While Jakkals-AI analyzes your weather conditions, real people sit at StilSein HQ keeping a watchful eye over your hardware's health. If a soil moisture sensor's battery runs low, or a gateway's signal in the furthest camp drops, the red lights flash on our mainframe before you even know there is a fault. We immediately contact you or the installer.",
    live_badge: "StilSein HQ: 24/7 Infrastructure Watchtower",

    // Jakkals AI
    ai_badge: "THE BRAINS BEHIND THE OPERATION",
    ai_title: "MEET <span class=\"text-jakkals-orange\">JAKKALS AI.</span>",
    ai_p1: "While our headquarters guards the hardware, Jakkals analyzes your data.",
    ai_p2: "Jakkals is not a generic \"chatbot\". He is hardwired into your farm's nervous system. He simultaneously reads your <strong>live pipe pressure</strong>, <strong>current rainfall</strong>, and <strong>satellite feeds</strong>. Because he knows your exact farming type, camp distances, and unique thresholds, his advice is hyper-specific.",
    ai_li1: "<strong>Proactive Warnings:</strong> He scans Open-Meteo satellite data against your farm's specific thresholds to predict heatwaves, gale winds, or floods days in advance.",
    ai_li2: "<strong>Context-Aware:</strong> He knows whether 15mm of rain in February is a relief for your sheep, or if a sudden drop to 1.2 Bar in Pipeline 3 means a catastrophic leak.",
    ai_li3: "<strong>Your Personal Assistant:</strong> Ask him questions in the app, and instantly get a farming-specific answer based on <em>today's</em> exact telemetry and historical patterns.",
    ai_term_text: "\"Farmer, the heatwave hits 39°C this afternoon. Make sure the North Boundary herd has enough shade and water. I'll keep an eye on the wind.\"",

    // Ecosystem
    eco_title: "ONE APP. <span class=\"text-stilsein-blue\">YOUR ENTIRE FARM UNDER ONE ROOF.</span>",
    eco_desc: "Touch any screen below to see in-depth analysis.",
    eco_1_title: "STILSEIN CORE",
    eco_1_desc: "Your central command. Monitor all connected devices, check battery life and signal strength (RSSI), and configure bilingual notifications.",
    eco_2_title: "RAINFALL GAUGE",
    eco_2_desc: "Never drive 20km to check a rain gauge again. Know exactly which camps got water and which missed the storm, saving crucial fuel and time.",
    eco_3_title: "LIVE RAIN SPELLS",
    eco_3_desc: "Watch the storm unfold from your stoep. By monitoring live intensity, you can gauge immediate flood risks or soil absorption rates.",
    eco_4_title: "PRESSURE NETWORK",
    eco_4_desc: "Detect a burst pipe before the reservoir runs dry. Save thousands of liters of water and prevent pump burnouts with real-time pressure tracking.",
    eco_5_title: "INDIVIDUAL PIPES",
    eco_5_desc: "Zero in on the problem. Knowing the exact pressure behavior of a single pipeline helps you isolate blockages without digging up the whole farm.",
    eco_6_title: "SATELLITE FORECAST",
    eco_6_desc: "Plan your shearing, spraying, or planting with pinpoint accuracy. Stop relying on weather stations from the nearest town 50km away.",
    eco_7_title: "INTERACTIVE MAPS",
    eco_7_desc: "Direct your farm workers exactly to the right spot. 'Fix the pipe at North-Gate' is much easier when everyone sees the same map.",
    eco_8_title: "FARM ARCHIVE",
    eco_8_desc: "Data is the new gold. A 5-year proven logbook of your farm's micro-climate and rainfall can significantly increase your land's valuation and insurance leverage.",
    eco_9_title: "JAKKALS & EXPORT",
    eco_9_desc: "It's like having a digital farm manager who never sleeps. Exporting this tailored advice gives you professional records to share with partners.",
    eco_p1: "Setting up a system for just one rain gauge is pretty nice. But building a network that simultaneously monitors pipe pressure, gateways, and extreme weather? <strong class=\"text-jakkals-orange\">That changes the game.</strong>",
    eco_p2: "Every farm is different, so we don't do 'one-size-fits-all'. Your StilSein app is uniquely coded for you. Our team builds your exact farm topology into the backend before delivery. This bespoke engineering is why the system feels so intuitive, and why it seamlessly adapts whenever you add new sensors to your network.",
    eco_quote: "\"Monitor every nook and cranny of your farm. The wolf stays awake. Know when the first drops fall, or when the pipes are running and when the top camp's gate is open. Then store everything and keep a 10-year logbook of your farm's microclimate to increase your land value.\"",

    // Reports
    rep_title: "PROFESSIONAL REPORTS, WITH ONE CLICK.",
    rep_desc: "Your data is yours. Export real-time weather reports and raw data directly from your phone, ideal for insurance claims or archive management.",
    rep_pdf_title: "STILSEIN PDF",
    rep_pdf_desc: "Beautiful, company-branded PDF reports. Includes automatic meteorological summaries by Jakkals, as well as color-coded intensity graphs of your storms. Touch the document to see page 2.",
    rep_pdf_badge: "[ PDF PREVIEW HERE ]",
    rep_csv_title: "RAW DATA CSV",
    rep_csv_desc: "Get instant access to every data pulse sent by your sensors. Ideal for spreadsheets (Excel) and your own agricultural analyses. Touch the document to see page 2.",
    rep_csv_badge: "[ CSV PREVIEW HERE ]",

    // Contact & Footer
    contact_title: "CHAT WITH STILSEIN",
    contact_desc: "Send us a direct message or email us at info@stilsein.co.za.",
    contact_btn: "SEND MESSAGE",
    contact_name_placeholder: "Your Name / Farm Name",
    contact_msg_placeholder: "How can we help?",
    footer_title: "READY TO CONNECT YOUR FARM?",
    footer_btn: "CHAT WITH US",
    footer_copy: "&copy; 2026 StilSein Industrial (Pty) Ltd. | Designed in South Africa."
  },

  af: {
    // Navigasie
    nav_home: "Tuis",
    nav_what_we_offer: "Wat Ons Doen",
    nav_how_it_works: "Hoe Dit Werk",
    nav_monitoring: "Monitering",
    nav_jakkals_ai: "Jakkals AI",
    nav_ecosystem: "Ekosisteem",
    nav_contact: "Kontak",

    // ARIA, Titels en E-pos
    aria_menu_open: "Maak kieslys oop",
    aria_menu_close: "Maak toe",
    title_menu: "Kieslys",
    title_close: "Maak toe",
    email_subject: "Navraag: ",

    // Ticker (Bewegende teks)
    ticker:[
      "Industriële Langafstand Moniteringsagteware",
      "Beheer Jou Hele Boerderynetwerk op Een Skerm",
      "Jou Oë en Ore in die Veld",
      "Genereer Professionele PDF en CSV Verslae met Een Kliek",
      "Een Platform vir Reën, Sekuriteit, en Damvlakke",
      "Oorbrug Afstande Sonder Eskom of Telkom",
      "Die Bedryfstelsel Vir Die Moderne Afrika-Plaas",
      "Intydse Plaasmonitering Vanuit Die Palm Van Jou Hand",
      "Vroeë Waarskuwings vir Vloede, Brande en Diefstal"
    ],

    // Konstruksie Modal
    modal_title: "STILSEIN IS IN ONTWIKKELING",
    modal_desc: "Welkom by die toekoms van die veld. Ons is tans besig om die platform af te rond vir kommersiële ontplooiing.",
    modal_soon: "BINNEKORT BESKIKBAAR:",
    modal_li1: "Apple App Store & Google Play Bekendstelling",
    modal_li2: "WaterWolf (Damvlakke) & WagWolf (Sekuriteit)",
    modal_li3: "Interaktiewe Plaas-Bouer (Kry 'n Kwotasie op 'n Kaart)",
    modal_li4: "Vennote-portaal vir Installeerders",
    modal_btn: "EK VERSTAAN, LAAT MY IN",

    // Helde-Seksie
    hero_badge: "DIE BEDRYFSTELSEL VIR DIE AFRIKA-PLAAS",
    hero_desc: "> Weet presies wat aangaan op die plaas. Jou oë en ore in sein-dooie sones, met intydse data direk in die palm van jou hand.",
    hero_btn1: "ONTDEK DIE STELSEL",
    hero_btn2: "WHATSAPP ONS",

    // Tegnologie Seksie
    tech_title: "Die Toekoms van Landbou, Aangedryf Deur Wêreldklas Tegnologie",
    tech_iot_title: "Smart IoT",
    tech_iot_desc: "Die <strong>Internet van Dinge (IoT)</strong> beteken jou plaas word \"lewendig\". Fisieke bates soos damme, pompe en hekke praat direk met die internet sonder menslike ingryping.",
    tech_lora_title: "LoRaWAN® Radio",
    tech_lora_desc: "Langafstand, lae-krag radiogolwe. Dit is die towerkrag wat data oor 15km ver stuur met 'n battery wat tot 10 jaar hou—heeltemal onafhanklik van selfoonnetwerke.",
    tech_ttn_title: "The Things Network",
    tech_ttn_desc: "Die wêreld se mees betroubare roeteringstelsel. Jou data reis deur geënkripteerde wolk-tonnels om te verseker dit land veilig, en blitsvinnig, op jou foon.",

    // Monitering Grid (Wat Ons Doen)
    mon_title: "MONITOR JOU PLAAS <br><span class=\"text-stilsein-blue\">OP DIE STILSEIN PLATFORM</span>",
    mon_desc: "Boerdery in Suid-Afrika beteken jy bestuur groot afstande en onvoorspelbare elemente. StilSein gee jou absolute sekerheid deur die hartklop van jou plaas direk in jou sak te plaas. Ons omskep rou data uit die veld—soos lewendige reënval en pypdruk—in duidelike inligting. Met blitsige waarskuwings, 'n 5-jaar digitale argief, en Jakkals AI wat 24/7 waghou, weet jy presies wat in jou verste kampe aangaan, of jy nou by die koöperasie of op die stoep sit.",
    grid_rain: "LEWENDIGE REËNVAL",
    grid_rain_exp: "Industriële kantel-emmer sensors vang elke millimeter op. Die battery kan tot 10 jaar hou en stuur data oor 'n 15km LoRaWAN radiofrekwensie direk na die opstal.",
    grid_pipe: "PYPDRUK",
    grid_pipe_exp: "Swaardiens druksensors skakel direk in by jou hoofpyplyne. Hulle lees die presiese 'bar' druk en stuur dit elke paar minute sodat jy weet die water loop.",
    grid_forecast: "SLIM VOORSPELLINGS",
    grid_forecast_exp: "Ons integreer met wêreldwye satelliet weermodelle. In plaas van algemene streekweer, trek die stelsel voorspellings spesifiek vir jou plaas se unieke GPS koördinate.",
    grid_jakkals: "JAKKALS AI",
    grid_jakkals_exp: "'n Landbou-gespesialiseerde AI wat jou lewendige hardeware, weersatelliete en historiese databasis saamsmelt. Hy ken jou vee, pyplyne en vloeddrempels, en waarsku jou proaktief in ryk plaastaal.",
    grid_maps: "INTERAKTIEWE KAARTE",
    grid_maps_exp: "Elke geïnstalleerde sensor word digitaal vasgepen op jou pasgemaakte plaaskaart. Jy sien dadelik 'n ruimtelike uitleg van waar probleme opduik sonder om te raai.",
    grid_alerts: "BLITSIGE WAARSKUWINGS",
    grid_alerts_exp: "Jy kan op Loftus sit en rugby kyk. As die druk onder 2 bar val, of dit reën meer as 50mm in die Noordgrens-kamp, stuur die stelsel onmiddellik 'n hoë-prioriteit waarskuwing na jou foon—nog voor die volgende drie gedruk word.",
    grid_archive: "5-JAAR ARGIEWE",
    grid_archive_exp: "Elke liewe data-pols word permanent gestoor in 'n veilige databasis. Niks word ooit uitgevee nie, wat 'n omvattende mikroklimaat-geskiedenis van jou grond bou.",
    grid_export: "PDF & CSV UITVOER",
    grid_export_exp: "Met een kliek verwerk ons wolkbedieners jou data in pragtige PDF verslae of rou CSV sigblaaie—ideaal vir versekeringseise of jou landboukundige.",

    // Hoe dit Werk
    hw_title: "HOE WERK DIE <span class=\"text-stilsein-blue\">STILSEIN NETWERK?</span>",
    hw_desc: "Vergeet van swak selfoonopvangs. <strong>StilSein</strong>, tesame met ons landwye netwerk van installeerders, kom bou 'n private langafstand radionetwerk direk op jou plaas.",
    hw_toggle: "...indien jy reeds 'n LoRaWAN Gateway besit? Kliek Hier.",
    hw_toggle_active: "...wag, ek benodig toerusting. Hoe werk die opstelling?",
    hw_step1_title: "1. DIE SENSORS",
    hw_step1_desc: "Hierdie is nie massiewe industriële masjiene nie. Dink aan 'n kompakte reënmeter met klein bakkies wat binne kantel, of 'n klein druksensor wat op jou pyp vasgedraai is. Hulle werk op langdurige batterye en stuur data in stilte oor die plaas sonder om Wi-Fi of selfoonopvangs te kort.",
    hw_step2_title: "2. DIE BASISSTASIE",
    hw_step2_desc: "Dis eenvoudig 'n toestel wat soos jou huis se internet-modem lyk, gemonteer by die opstal met 'n klein antenna buite. Dit dien as die 'ontvanger' wat radioseine van sensors tot 15km ver opvang. Geen SIM-kaarte of maandelikse data-kontrakte word benodig vir die sensors om te kommunikeer nie.",
    hw_opt_title: "HET JY REEDS 'N GATEWAY?",
    hw_opt_desc: "As jy reeds 'n LoRaWAN basisstasie het wat aan The Things Network (TTN) gekoppel is, is jy halfpad daar. Jy hoef nie nuwe infrastruktuur te koop nie. Vra net vir 'n Webhook-sleutel by ons, koppel dit in jou TTN-konsole, en jou bestaande sensors sal in die StilSein app verskyn.",
    hw_step3_title: "3. DIE WOLK",
    hw_step3_desc: "Die basisstasie neem al daardie radioseine en stuur dit via jou opstal se internetverbinding veilig deur na ons wolkbedieners. Hier orden Jakkals AI die rou syfers, kontroleer jou drempels, en stoor alles in jou 5-jaar argief.",
    hw_step4_title: "4. DIE PASGEMAAKTE APP",
    hw_step4_desc: "Die laaste stap is jou foon. Jy laai nie 'n generiese app af en spandeer ure om dit op te stel nie. Ons ingenieurspan skryf jou spesifieke plaasuitleg, kampname en toerusting hardekode in die sagteware in voordat ons dit oorgee. Jy maak die app oop, en jou plaas is reeds daar.",

    // Intydse Monitering
    live_title: "ONS MONITOR <br><span class=\"text-stilsein-blue\">EN HOU WAG.</span>",
    live_p1: "StilSein is nie net 'n app wat jy aflaai en self moet uitsorteer nie. Ons is 'n toegewyde <strong>intydse moniteringsdiens</strong>.",
    live_p2: "Terwyl Jakkals-AI jou weersomstandighede ontleed, sit regte mense by StilSein HQ en hou wakker oog oor jou hardeware se gesondheid. As 'n grondvog-sensor se battery pap raak, of 'n gateway se sein in die verste kamp wegraak, flits die rooi ligte op ons hoofraam voor jy eers weet daar is 'n fout. Ons kontak dadelik vir jou of die installeerder.",
    live_badge: "StilSein HQ: 24/7 Infrastruktuur Wagtoring",

    // Jakkals AI
    ai_badge: "DIE BREIN AGTER DIE BEDRYF",
    ai_title: "ONTMOET <span class=\"text-jakkals-orange\">JAKKALS AI.</span>",
    ai_p1: "Terwyl ons hoofkwartier die hardeware oppas, ontleed Jakkals jou data.",
    ai_p2: "Jakkals is nie 'n generiese \"chatbot\" nie. Hy is bedraad in jou plaas se senuweestelsel. Hy lees gelyktydig jou <strong>lewendige pypdruk</strong>, <strong>huidige reënval</strong>, en <strong>satellietdata</strong>. Omdat hy jou presiese boerderytipe, kamp-afstande en unieke vloed- en hittedrempels ken, is sy raad hiper-spesifiek.",
    ai_li1: "<strong>Proaktiewe Waarskuwings:</strong> Hy skandeer Open-Meteo satellietdata teen jou plaas se spesifieke drempels om hittegolwe, stormwinde of vloede dae vooruit te voorspel.",
    ai_li2: "<strong>Konteks-Bewus:</strong> Hy weet of 15mm reën in Februarie goeie nuus is vir jou Dorpers, en of 'n skielike val na 1.2 Bar in Pyplyn 3 'n moontlike lek beteken.",
    ai_li3: "<strong>Jou Persoonlike Assistent:</strong> Vra hom vrae in die app, en kry dadelik 'n boerdery-spesifieke antwoord gebaseer op <em>vandag</em> se presiese syfers en historiese patrone.",
    ai_term_text: "\"Boer, die hittegolf slaan vanmiddag 39°C. Maak seker die Noordgrens-kudde het genoeg skaduwee en water. Ek hou die wind dop.\"",

    // Ekosisteem
    eco_title: "EEN APP. <span class=\"text-stilsein-blue\">JOU HELE PLAAS ONDER EEN DAK.</span>",
    eco_desc: "Raak aan enige skerm hieronder om diepte-analise te sien.",
    eco_1_title: "STILSEIN KERN",
    eco_1_desc: "Jou sentrale beheersentrum. Monitor alle gekoppelde toestelle, dop batterykrag en seinsterkte (RSSI), en stel jou kennisgewings op.",
    eco_2_title: "REËNVALMETER",
    eco_2_desc: "Moet nooit weer 20km ry om 'n reënmeter te gaan kyk nie. Weet presies watter kampe water gekry het en watter verbygegaan is, en bespaar brandstof en tyd.",
    eco_3_title: "LEWENDIGE REËNBUIE",
    eco_3_desc: "Kyk hoe die storm uitsak van jou stoep af. Deur lewendige intensiteit te monitor, kan jy onmiddellike vloedgevare of grondabsorpsie skat.",
    eco_4_title: "DRUKNETWERK",
    eco_4_desc: "Spoor 'n gebarste pyp op voor die dam leegloop. Bespaar duisende liters water en voorkom dat pompe uitbrand met intydse druk-monitering.",
    eco_5_title: "INDIVIDUELE PYPE",
    eco_5_desc: "Fokus presies op die probleem. Om die presiese drukgedrag van 'n enkele pyplyn te sien, help jou om blokkasies te isoleer sonder om die hele plaas oop te grawe.",
    eco_6_title: "SATELLIET VOORSPELLING",
    eco_6_desc: "Beplan jou skeer, spuit, of plant met absolute akkuraatheid. Hou op om staat te maak op weerstasies van die naaste dorp 50km ver.",
    eco_7_title: "INTERAKTIEWE KAARTE",
    eco_7_desc: "Stuur jou werkers presies na die regte plek. 'Maak die pyp heel by Noordhek' is baie makliker as almal na dieselfde kaart kyk.",
    eco_8_title: "PLAAS ARGIEF",
    eco_8_desc: "Data is die nuwe goud. 'n 5-jaar bewese logboek van jou plaas se mikroklimaat en reënval kan jou grondwaarde en versekeringsvoordele aansienlik verhoog.",
    eco_9_title: "JAKKALS & UITVOER",
    eco_9_desc: "Dis soos om 'n digitale plaasbestuurder te hê wat nooit slaap nie. Deur hierdie advies uit te voer kry jy professionele rekords om met vennote te deel.",
    eco_p1: "Om 'n stelsel op te stel vir net een reënmeter is nogal nice. Maar om 'n netwerk te bou wat pypdruk, basisstasies, en uiterste weer gelyktydig dophou? <strong class=\"text-jakkals-orange\">Dit verander die game.</strong>",
    eco_p2: "Elke plaas is anders, daarom glo ons nie in 'een-grootte-pas-almal' nie. Jou StilSein app word uniek vir jou geskryf. Ons span bou jou presiese plaas-topologie in die agterkant in voor aflewering. Hierdie pasgemaakte ingenieurswese is hoekom die stelsel so natuurlik voel, en hoekom dit naatloos aanpas wanneer jy later nuwe sensors byvoeg.",
    eco_quote: "\"Monitor elke hoek en draai van jou plaas. Die wolf slaap wakker. Weet wanneer die eerste druppels val, of wanneer die pype loop en wanneer die boonste kamp se hek oop is. Stoor dan alles en hou 'n 10-jaar logboek van jou plaas se mikroklimaat om jou grondwaarde te verhoog.\"",

    // Verslae
    rep_title: "PROFESSIONELE VERSLAE, MET EEN KLIEK.",
    rep_desc: "Jou data is joune. Voer intydse weerverslae en rou data uit direk vanaf jou foon, ideaal vir versekeringseise of argiefbestuur.",
    rep_pdf_title: "STILSEIN PDF",
    rep_pdf_desc: "Pragtige, maatskappy-gebrande PDF-verslae. Sluit outomatiese weerkundige opsommings deur Jakkals in, asook kleurgekodeerde intensiteitsgrafieke van jou storms. Raak aan die dokument om blad 2 te sien.",
    rep_pdf_badge: "[ PDF VOORBEELD HIER ]",
    rep_csv_title: "ROU DATA CSV",
    rep_csv_desc: "Kry onmiddellike toegang tot elke data pols wat deur jou sensors gestuur is. Ideaal vir sigblaaie (Excel) en jou eie landbou-analises. Raak aan die dokument om blad 2 te sien.",
    rep_csv_badge: "[ CSV VOORBEELD HIER ]",

    // Kontak & Footer
    contact_title: "GESELS MET STILSEIN",
    contact_desc: "Stuur vir ons 'n direkte boodskap of e-pos ons by info@stilsein.co.za.",
    contact_btn: "STUUR BOODSKAP",
    contact_name_placeholder: "Jou Naam / Plaas Naam",
    contact_msg_placeholder: "Hoe kan ons help?",
    footer_title: "GEREED OM JOU PLAAS TE KOPPEL?",
    footer_btn: "GESELS MET ONS",
    footer_copy: "&copy; 2026 StilSein Industrial (Pty) Ltd. | Ontwerp in Suid-Afrika."
  }
};

window.translations = translations;
window.currentLang = localStorage.getItem('stilsein_lang') || 'en';

window.toggleLanguage = function(e) {
  if (e) e.preventDefault();
  const current = window.currentLang || 'en';
  const newLang = current === 'en' ? 'af' : 'en';
  window.changeLanguage(newLang);
};

window.changeLanguage = function(lang) {
  if (!translations[lang]) {
    console.warn(`[StilSein i18n] Unsupported language requested: ${lang}`);
    return;
  }

  window.currentLang = lang;
  localStorage.setItem('stilsein_lang', lang);
  
  document.documentElement.lang = lang;
  document.documentElement.classList.remove('lang-switching');

  // Update text values
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    } else {
      console.warn(`[StilSein i18n] Missing translation for key: ${key} (${lang})`);
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
  });

  // Update meta/ARIA attributes
  const metaAttributes = ['aria-label', 'title', 'alt'];
  metaAttributes.forEach(attr => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
      const key = el.getAttribute(`data-i18n-${attr}`);
      if (translations[lang][key]) el.setAttribute(attr, translations[lang][key]);
    });
  });

  // Update the Ticker
  window.i18nPhrases = translations[lang].ticker;
  const tickerText = document.getElementById("ticker-text");
  if (tickerText && window.i18nPhrases.length > 0) {
    tickerText.innerText = window.i18nPhrases[0];
  }

  // FIX 2: Update the sleek toggle button text to show the *opposite* language option
  document.querySelectorAll('.lang-toggle-text').forEach(el => {
    el.innerText = lang === 'en' ? 'AF' : 'EN';
  });

  // Update Hardware toggle
  if (typeof window.updateHardwareToggleText === 'function') {
    window.updateHardwareToggleText();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.changeLanguage(window.currentLang);
});
