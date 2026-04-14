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
    nav_partners: "Partners",
    nav_language: "Language",
    lang_en: "English",
    lang_af: "Afrikaans",

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
    tech_lora_desc: "Long-range, low-power radio waves. This is the magic that sends data over 15km with a battery that lasts up to 5 years—completely independent of cellular networks.",
    tech_ttn_title: "The Things Network",
    tech_ttn_desc: "The world's most reliable routing system. Your data travels through encrypted cloud tunnels to ensure it lands safely, and lightning-fast, on your phone.",

    // Monitoring Grid (What We Offer)
    mon_title: "MONITOR YOUR FARM <br><span class=\"text-stilsein-blue\">ON THE STILSEIN PLATFORM</span>",
    mon_desc: "Farming in South Africa means managing vast distances and unpredictable elements. StilSein gives you absolute certainty by putting the heartbeat of your farm directly in your pocket. We transform raw data from your lands—like live rainfall and pipe pressure—into clear, actionable insights. With instant alerts, 5-year digital archives, and Jakkals AI keeping a 24/7 watch, you'll know exactly what's happening in your furthest camps, whether you're at the co-op or sitting on the stoep.",
    grid_rain: "LIVE RAINFALL",
    grid_rain_exp: "Industrial-grade tipping bucket sensors capture every millimeter. They feature a battery life of up to 5 years and beam data over a 15km LoRaWAN radio frequency directly to your homestead.",
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

    // Ecosystem - Headers & Footers
    eco_main_title: "ONE APP. YOUR ENTIRE FARM UNDER ONE ROOF.",
    eco_main_desc: "Touch any screen below to explore the architecture of a StilSein deployment.",
    
    // The Ever-Evolving Farm Section
    eco_s7_title: "THE EVER-EVOLVING <span class=\"text-stilsein-blue\">FARM.</span>",
    eco_s7_sub: "START SMALL. SCALE ENDLESSLY.",
    eco_p1: "You don't need to digitize your entire operation overnight. Most of our clients start with a single Gateway and one Rain Gauge. As you see the value, you can seamlessly add Soil Moisture, Pipe Pressure, or Security nodes whenever you are ready. <strong class=\"text-jakkals-orange\">That is the power of a modular ecosystem.</strong>",
    eco_p2: "Because every farm is unique, we do not believe in 'one-size-fits-all' templates. Our engineering team hardcodes your specific farm topology, camp distances, and alert thresholds into the backend before delivery. This bespoke architecture is why the StilSein OS feels so incredibly intuitive, adapting flawlessly as your network grows.",
    
    eco_quote: "\"Monitor every nook and cranny of your farm. The wolf stays awake. Know when the first drops fall, or when the pipes are running and when the top camp's gate is open. Then store everything and keep a 10-year logbook of your farm's microclimate to increase your land value.\"",

    // 1. Omni-Dashboard & Maps
    eco_s1_title: "COMMAND CENTRAL.",
    eco_s1_sub: "A living, breathing overview of your entire operation.",
    eco_s1_body: "The StilSein Omni-Dashboard replaces scattered data with a unified 3x3 matrix. Instantly identify active storms, monitor hardware battery health, and watch tiles pulse aggressively if a hazard is detected anywhere on the farm. Tap the Gateway to open the Interactive Map, bringing your farm's layout to life with live GPS positioning and blurred, overlaid data widgets.",
    
    // 2. Rainfall Monitoring
    eco_s2_title: "PRECISION HYDROMETRY.",
    eco_s2_sub: "We don't just measure rain. We measure storms.",
    eco_s2_body: "Experience rainfall tracking like never before. During an active event, the system shifts into a high-resolution 5-minute Live Storm Engine. The interface dynamically calculates drop velocity to classify the rain—from a gentle drizzle to a heavy cloudburst. We also hardcode custom flood-thresholds based on your specific district's soil and topology.",

    // 3. Pipe Pressure
    eco_s3_title: "HYDRAULIC INTELLIGENCE.",
    eco_s3_sub: "Know the difference between a closed tap and a burst pipe.",
    eco_s3_body: "The Drukwolf engine assigns a specific 'Goldilocks Zone' to every individual pipe on your farm. The physics-based interface displays flowing water and analog dials. It is smart enough to stay completely silent when you turn a pump off, but will instantly trigger critical red alarms the second it detects a pressure loss or dangerous blockage.",

    // 4. Satellite Predictions
    eco_s4_title: "PROACTIVE FORECASTING.",
    eco_s4_sub: "Don't react to the weather. Prepare for it.",
    eco_s4_body: "By pinging satellite arrays using your farm's exact GPS coordinates, StilSein builds a hyper-local meteorological profile. Explore 24-hour thermal gradients that shift color based on your crop's heat thresholds. Our automated watchers scan the horizon, sending you preemptive alerts 48 hours before heatwaves, floods, or gale-force winds strike.",

    // 5. The Archivist & Jakkals AI
    eco_s5_title: "THE ULTIMATE LEDGER.",
    eco_s5_sub: "Your farm's history, analyzed by an Agricultural AI.",
    eco_s5_body: "Every storm, heatwave, and pump cycle is permanently logged. Need advice? Ask Jakkals, our embedded Agentic AI. He analyzes your live data matrix to provide instant, localized advice with actionable shortcuts to failing hardware. He also generates professional weekly PDF reports sent directly to your email.",
    
    // 6. The Architecture (Layman's Terms)
    eco_s6_title: "BANK-GRADE ARCHITECTURE.",
    eco_s6_sub: "Military precision, built for the African Veld.",
    eco_s6_body: "Under the hood, StilSein operates on a multi-tenant Edge-Cloud matrix. Your sensors send encrypted radio waves to a Gateway, which securely routes the data through Cloudflare directly into an isolated, private StilSein Vault dedicated solely to your farm. The mobile app then uses lightning-fast WebSockets and local 'Offline Caching' so it boots instantly—even when you are standing in a camp with zero cell reception.",

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
    contact_desc: "Send us a direct message or email us at admin@stilsein.co.za.",
    contact_btn: "SEND MESSAGE",
    contact_name_placeholder: "Your Name / Farm Name",
    contact_msg_placeholder: "How can we help?",
    footer_title: "READY TO CONNECT YOUR FARM?",
    footer_btn: "CHAT WITH US",
    footer_copy: "&copy; 2026 StilSein Industrial (Pty) Ltd. | Designed in South Africa.",
    // --- PARTNER PAGE (VENNOTE) ---
    nav_back: "Back to Main Site",
    nav_model: "The Model",
    nav_tech: "Technology",
    nav_process: "The Process",
    nav_apply: "Apply Now",
    
    p_hero_badge: "STILSEIN PARTNER NETWORK",
    p_hero_title: "BUILD THE AFRICAN FARM. <br><span class=\"text-jakkals-orange\">EARN RECURRING REVENUE.</span>",
    p_hero_desc: "Transition from once-off installation fees to building a passive annuity book. Partner with StilSein as a certified IoT installer and let our intelligence layer drive your monthly recurring revenue (MRR).",
    p_hero_btn: "APPLY TO PARTNER",
    
    p_fin_title: "THE FINANCIAL <span class=\"text-stilsein-blue\">MODEL</span>",
    p_fin_desc: "Frictionless and highly lucrative. We act as the invisible intelligence layer, while you own the physical execution and the client relationship.",
    p_fin_1_title: "100% LABOUR & INSTALLATION",
    p_fin_1_desc: "You quote the farmer for your time, travel, and physical labor. You keep 100% of your installation fees.",
    p_fin_2_title: "HARDWARE RETAIL MARKUP",
    p_fin_2_desc: "Purchase LoRaWAN gateways and nodes at wholesale prices. Sell them at retail. You keep 100% of the hardware profit margin.",
    p_fin_3_title: "20-30% LIFETIME SAAS COMMISSION",
    p_fin_3_desc: "The holy grail of business. Earn a continuous 20% to 30% commission on the monthly software subscription for the lifetime of the farm. (5-10% for leads we supply to you).",
    
    p_tech_badge: "ZERO INVENTORY RISK",
    p_tech_title: "HARDWARE <span class=\"text-jakkals-orange\">AGNOSTIC.</span>",
    p_tech_p1: "You don't need to buy proprietary StilSein hardware or hold expensive stock. We are an Independent Software Vendor (ISV).",
    p_tech_p2: "Prefer Dragino? Milesight? Sensedge? If it speaks the LoRaWAN standard, our platform translates it. Just point your gateway to The Things Network (TTN), set up our Cloudflare KV Webhook, and pass us the Device EUI.",
    p_tech_p3: "Our automated systems instantly spawn a dedicated StilSein Vault database and activate the farmer's app. You handle the hardware; we handle the complex cloud routing.",
    
    p_flow_title: "THE PARTNER <span class=\"text-stilsein-blue\">JOURNEY</span>",
    p_flow_1_title: "1. SECURE THE CLIENT",
    p_flow_1_desc: "Source a farmer in your region, or claim a localized lead generated by StilSein's quoting engine.",
    p_flow_2_title: "2. DEPLOY HARDWARE",
    p_flow_2_desc: "Mount the LoRaWAN gateway at the farmhouse and drop the battery-powered sensors in the field.",
    p_flow_3_title: "3. CLOUD ACTIVATION",
    p_flow_3_desc: "StilSein handles the complex routing, mobile app provisioning, Jakkals AI insights, and all monthly billing.",
    p_flow_4_title: "4. EARN MONTHLY",
    p_flow_4_desc: "Receive your automated commission payout every single month for as long as the farmer uses the app.",
    
    p_form_title: "APPLY TO BECOME A PARTNER",
    p_form_desc: "Join the network of installers bringing agricultural intelligence to signal-dead zones. Fill out the form below and our team will contact you.",
    p_form_fname: "First Name",
    p_form_lname: "Last Name",
    p_form_company: "Company Name",
    p_form_region: "Operating Region (Provinces / Towns)",
    p_form_exp: "Brief description of your IoT / Electrical experience",
    p_form_phone: "Phone Number",
    p_form_email: "Email Address",
    p_form_submit: "SUBMIT APPLICATION"
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
    nav_partners: "Vennote",
    nav_language: "Taal",
    lang_en: "Engels",
    lang_af: "Afrikaans",

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
    tech_lora_desc: "Langafstand, lae-krag radiogolwe. Dit is die towerkrag wat data oor 15km ver stuur met 'n battery wat tot 5 jaar hou—heeltemal onafhanklik van selfoonnetwerke.",
    tech_ttn_title: "The Things Network",
    tech_ttn_desc: "Die wêreld se mees betroubare roeteringstelsel. Jou data reis deur geënkripteerde wolk-tonnels om te verseker dit land veilig, en blitsvinnig, op jou foon.",

    // Monitering Grid (Wat Ons Doen)
    mon_title: "MONITOR JOU PLAAS <br><span class=\"text-stilsein-blue\">OP DIE STILSEIN PLATFORM</span>",
    mon_desc: "Boerdery in Suid-Afrika beteken jy bestuur groot afstande en onvoorspelbare elemente. StilSein gee jou absolute sekerheid deur die hartklop van jou plaas direk in jou sak te plaas. Ons omskep rou data uit die veld—soos lewendige reënval en pypdruk—in duidelike inligting. Met blitsige waarskuwings, 'n 5-jaar digitale argief, en Jakkals AI wat 24/7 waghou, weet jy presies wat in jou verste kampe aangaan, of jy nou by die koöperasie of op die stoep sit.",
    grid_rain: "LEWENDIGE REËNVAL",
    grid_rain_exp: "Industriële kantel-emmer sensors vang elke millimeter op. Die battery kan tot 5 jaar hou en stuur data oor 'n 15km LoRaWAN radiofrekwensie direk na die opstal.",
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

    // Ekosisteem - Headers & Footers
    eco_main_title: "EEN APP. JOU HELE PLAAS ONDER EEN DAK.",
    eco_main_desc: "Raak aan enige skerm hieronder om die argitektuur van 'n StilSein stelsel te verken.",
    
    // The Ever-Evolving Farm Section
    eco_s7_title: "DIE TOEKOMSGERIGTE <span class=\"text-stilsein-blue\">PLAAS.</span>",
    eco_s7_sub: "BEGIN KLEIN. BREI EINDELOOS UIT.",
    eco_p1: "Jy hoef nie jou hele boerdery oornag te digitaliseer nie. Die meeste van ons kliënte begin met 'n enkele Basisstasie en een Reënmeter. Soos jy die waarde sien, kan jy naatloos Grondvog, Pypdruk of Sekuriteit sensors byvoeg wanneer jy gereed is. <strong class=\"text-jakkals-orange\">Dit is die krag van 'n modulêre ekosisteem.</strong>",
    eco_p2: "Omdat elke plaas uniek is, glo ons nie in 'een-grootte-pas-almal' templates nie. Ons ingenieurspan skryf jou spesifieke plaas-topologie, kamp-afstande, en waarskuwings-drempels in die agterkant in voor aflewering. Hierdie pasgemaakte argitektuur is hoekom die StilSein stelsel so natuurlik voel en foutloos aanpas soos jou netwerk groei.",
    
    eco_quote: "\"Monitor elke hoek en draai van jou plaas. Die wolf slaap wakker. Weet wanneer die eerste druppels val, of wanneer die pype loop en wanneer die boonste kamp se hek oop is. Stoor dan alles en hou 'n 10-jaar logboek van jou plaas se mikroklimaat om jou grondwaarde te verhoog.\"",

    // 1. Omni-Dashboard & Maps
    eco_s1_title: "SENTRALE BEHEER.",
    eco_s1_sub: "'n Lewendige oorsig van jou hele boerdery.",
    eco_s1_body: "Die StilSein Omni-Dashboard vervang verspreide data met 'n verenigde 3x3 matriks. Sien dadelik aktiewe storms, monitor batterykrag, en kyk hoe teëls aggressief pols as 'n gevaar iewers op die plaas opgespoor word. Tik op die Basisstasie om die Interaktiewe Kaart oop te maak, wat jou plaasuitleg lewendig maak met GPS en pragtige oorvleuelende data-skerms.",
    
    // 2. Rainfall Monitoring
    eco_s2_title: "PRESIESIE HIDROMETRIE.",
    eco_s2_sub: "Ons meet nie net reën nie. Ons meet storms.",
    eco_s2_body: "Ervaar reënval-monitering soos nog nooit tevore nie. Tydens 'n storm skakel die stelsel oor na 'n hoë-resolusie 5-minute Lewendige Storm Enjin. Die koppelvlak bereken die val-snelheid om die reën te klassifiseer—van 'n ligte motreën tot 'n swaar wolkbreuk. Ons bou ook pasgemaakte vloed-drempels in gebaseer op jou streek se spesifieke grondtipe.",

    // 3. Pipe Pressure
    eco_s3_title: "HIDROULIESE INTELLIGENSIE.",
    eco_s3_sub: "Weet die verskil tussen 'n toe kraan en 'n gebarste pyp.",
    eco_s3_body: "Die Drukwolf-enjin ken 'n spesifieke 'Gouelokkies-Sone' toe aan elke individuele pyp op jou plaas. Die fisika-gebaseerde koppelvlak wys vloeiende water en analoog meters. Dit is slim genoeg om heeltemal stil te bly wanneer jy 'n pomp afsit, maar sal onmiddellik kritiese rooi alarms stuur die sekonde wat dit 'n drukdaling of gevaarlike blokkasie opspoor.",

    // 4. Satellite Predictions
    eco_s4_title: "PROAKTIEWE VOORSPELLINGS.",
    eco_s4_sub: "Moenie reageer op die weer nie. Berei voor daarvoor.",
    eco_s4_body: "Deur satellietnetwerke te ping met jou plaas se presiese GPS-koördinate, bou StilSein 'n hiper-lokale meteorologiese profiel. Verken 24-uur termiese grafieke wat van kleur verander gebaseer op jou gewas se hitte-drempels. Ons stelsel skandeer die horison en stuur proaktiewe waarskuwings 48 uur voordat hittegolwe, vloede of stormwinde uitslaan.",

    // 5. The Archivist & Jakkals AI
    eco_s5_title: "DIE UITIEMSTE REKORD.",
    eco_s5_sub: "Jou plaas se geskiedenis, ontleed deur 'n Landbou AI.",
    eco_s5_body: "Elke storm, hittegolf en pompsiklus word permanent gestoor. Kort jy raad? Vra Jakkals, ons ingeboude AI-Agent. Hy ontleed jou lewendige data om onmiddellike, plaaslike advies te gee met direkte kortpaaie na fouterende hardeware. Hy genereer ook professionele weeklikse PDF-verslae wat direk na jou e-pos gestuur word.",
    
    // 6. The Architecture (Layman's Terms)
    eco_s6_title: "BANK-GRAAD ARGITEKTUUR.",
    eco_s6_sub: "Militêre presisie, gebou vir die Afrika-Veld.",
    eco_s6_body: "Onder die enjinkap werk StilSein op 'n geïsoleerde wolk-matriks. Jou sensors stuur geënkripteerde radiogolwe na 'n Basisstasie, wat die data veilig deur Cloudflare stuur na 'n private StilSein Vault wat uitsluitlik aan jou plaas toegewy is. Die mobiele app gebruik blitsvinnige WebSockets en 'Vanlyn Kasgeheue' sodat dit onmiddellik oopmaak—selfs wanneer jy in 'n kamp staan met nul selfoonopvangs.",

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
    contact_desc: "Stuur vir ons 'n direkte boodskap of e-pos ons by admin@stilsein.co.za.",
    contact_btn: "STUUR BOODSKAP",
    contact_name_placeholder: "Jou Naam / Plaas Naam",
    contact_msg_placeholder: "Hoe kan ons help?",
    footer_title: "GEREED OM JOU PLAAS TE KOPPEL?",
    footer_btn: "GESELS MET ONS",
    footer_copy: "&copy; 2026 StilSein Industrial (Pty) Ltd. | Ontwerp in Suid-Afrika.",
    // --- PARTNER PAGE (VENNOTE) ---
    nav_back: "Terug na Hoofblad",
    nav_model: "Die Model",
    nav_tech: "Tegnologie",
    nav_process: "Die Proses",
    nav_apply: "Doen Aansoek",
    
    p_hero_badge: "STILSEIN VENNOTE NETWERK",
    p_hero_title: "BOU DIE AFRIKA-PLAAS. <br><span class=\"text-jakkals-orange\">VERDIEN HERHALENDE INKOMSTE.</span>",
    p_hero_desc: "Beweeg weg van eenmalige installasiefooie na 'n passiewe annuïteitsboek. Raak 'n vennoot van StilSein as 'n gesertifiseerde IoT installeerder en laat ons intelligensie-laag jou maandelikse herhalende inkomste (MRR) dryf.",
    p_hero_btn: "DOEN AANSOEK OM VENNOOTSKAP",
    
    p_fin_title: "DIE FINANSIËLE <span class=\"text-stilsein-blue\">MODEL</span>",
    p_fin_desc: "Wrywingloos en hoogs winsgewend. Ons tree op as die onsigbare intelligensie-laag, terwyl jy die fisiese uitvoering en die kliënteverhouding besit.",
    p_fin_1_title: "100% ARBEID & INSTALLASIE",
    p_fin_1_desc: "Jy kwoteer die boer vir jou tyd, reiskoste en fisiese arbeid. Jy behou 100% van jou installasiefooie.",
    p_fin_2_title: "HARDEWARE WINSGRENS",
    p_fin_2_desc: "Koop LoRaWAN basisstasies en sensors teen groothandelpryse. Verkoop dit teen kleinhandel. Jy behou 100% van die hardeware winsgrens.",
    p_fin_3_title: "20-30% LEWENSLANGE SAAS KOMMISSIE",
    p_fin_3_desc: "Die heilige graal van besigheid. Verdien 'n deurlopende 20% tot 30% kommissie op die maandelikse sagteware-intekening vir die leeftyd van die plaas. (5-10% vir leidrade wat ons aan jou verskaf).",
    
    p_tech_badge: "GEEN VOORRAAD RISIKO",
    p_tech_title: "HARDEWARE <span class=\"text-jakkals-orange\">AGNOSTIES.</span>",
    p_tech_p1: "Jy hoef nie eksklusiewe StilSein hardeware te koop of duur voorraad te hou nie. Ons is 'n Onafhanklike Sagtewareverkoper (ISV).",
    p_tech_p2: "Verkies jy Dragino? Milesight? Sensedge? As dit die LoRaWAN-standaard praat, vertaal ons platform dit. Wys net jou basisstasie na The Things Network (TTN), stel ons Cloudflare KV Webhook op, en stuur vir ons die Device EUI.",
    p_tech_p3: "Ons outomatiese stelsels skep onmiddellik 'n toegewyde StilSein Vault databasis en aktiveer die boer se app. Jy hanteer die hardeware; ons hanteer die komplekse wolk-roetering.",
    
    p_flow_title: "DIE VENNOOT <span class=\"text-stilsein-blue\">REIS</span>",
    p_flow_1_title: "1. KRY DIE KLIËNT",
    p_flow_1_desc: "Vind 'n boer in jou streek, of eis 'n gelokaliseerde leidraad wat deur StilSein se kwotasie-enjin gegenereer is.",
    p_flow_2_title: "2. INSTALLEER HARDEWARE",
    p_flow_2_desc: "Monteer die LoRaWAN basisstasie by die opstal en plaas die battery-aangedrewe sensors in die veld.",
    p_flow_3_title: "3. WOLK AKTIVERING",
    p_flow_3_desc: "StilSein hanteer die komplekse roetering, mobiele app-opstelling, Jakkals AI analise, en alle maandelikse fakturering.",
    p_flow_4_title: "4. VERDIEN MAANDELIKS",
    p_flow_4_desc: "Ontvang jou outomatiese kommissie-uitbetaling elke liewe maand vir solank die boer die app gebruik.",
    
    p_form_title: "AANSOEK VIR VENNOOTSKAP",
    p_form_desc: "Sluit aan by die netwerk van installeerders wat landbou-intelligensie na sein-dooie sones bring. Voltooi die vorm hieronder en ons span sal jou kontak.",
    p_form_fname: "Voornaam",
    p_form_lname: "Van",
    p_form_company: "Maatskappynaam",
    p_form_region: "Bedryfstreke (Provinsies / Dorpe)",
    p_form_exp: "Kort beskrywing van jou IoT / Elektriese ondervinding",
    p_form_phone: "Telefoonnommer",
    p_form_email: "E-posadres",
    p_form_submit: "STUUR AANSOEK"
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
