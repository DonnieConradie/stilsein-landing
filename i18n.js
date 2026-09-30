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
    hero_desc: "Know exactly what is happening on the farm. Your eyes and ears in signal-dead zones, with real-time data directly in the palm of your hand.",
    hero_btn1: "DISCOVER THE SYSTEM",
    hero_btn2: "WHATSAPP US",

    // Tech Section
    tech_title: "The Future of Agriculture, Powered By World-Class Technology",
    tech_iot_title: "Smart IoT",
    tech_iot_desc: "The <strong>Internet of Things (IoT)</strong> means your farm becomes \"alive\". Physical assets like dams, pumps, and gates talk directly to the internet without human intervention.",
    tech_lora_title: "LoRaWAN® Radio",
    tech_lora_desc: "Long-range, low-power radio waves. This is the magic that sends data over 15km with a battery that lasts up to 5 years completely independent of cellular networks.",
    tech_ttn_title: "The Things Network",
    tech_ttn_desc: "The world's most reliable routing system. Your data travels through encrypted cloud tunnels to ensure it lands safely, and lightning-fast, on your phone.",

    // Monitoring Grid (What We Offer)
    mon_title: "MONITOR YOUR FARM <br><span class=\"text-stilsein-blue\">ON THE STILSEIN PLATFORM</span>",
    mon_desc: "Farming in South Africa means managing vast distances and unpredictable elements. StilSein gives you absolute certainty by putting the heartbeat of your farm directly in your pocket. We transform raw data from your lands like live rainfall and pipe pressure into clear, actionable insights. With instant alerts, 5-year digital archives, and Jakkals AI keeping a 24/7 watch, you'll know exactly what's happening in your furthest camps, whether you're at the co-op or sitting on the stoep.",
    grid_rain: "LIVE RAINFALL",
    grid_rain_exp: "Industrial-grade tipping bucket sensors capture every millimeter. They feature a battery life of up to 5 years and beam data over a 15km LoRaWAN radio frequency directly to your homestead.",
    grid_pipe: "PIPE PRESSURE",
    grid_pipe_exp: "Heavy-duty pressure transducers tap directly into your mainlines. They read the exact 'bar' pressure and transmit it every few minutes so you know the water is flowing.",
    grid_dam: "DAM LEVELS",
    grid_dam_exp: "Sonic or submersible sensors measure reservoir depth. The Waterwolf AI converts this into Liters and Percentages, calculating your 'Water Runway'. Critical alarms are sent instantly if the dam overflows or drains unexplainably fast.",
    grid_link: "Read more below...",
    grid_forecast: "SMART FORECASTS",
    grid_forecast_exp: "We integrate with global satellite weather models. Instead of generic regional weather, the system pulls forecasts specifically for your farm's unique GPS coordinates.",
    grid_jakkals: "JAKKALS AI",
    grid_jakkals_exp: "An agriculture-specialized AI that fuses your live hardware telemetry, satellite weather, and historical database. He knows your livestock, pipelines, and flood thresholds, warning you proactively in plain farm language.",
    grid_maps: "INTERACTIVE MAPS",
    grid_maps_exp: "Every installed sensor is digitally pinned on your customized farm map. You instantly see a spatial layout of where issues are occurring without guessing.",
    grid_alerts: "INSTANT ALERTS",
    grid_alerts_exp: "You could be at Loftus. If pressure drops below 2 bar, or rainfall exceeds 50mm at the Noordgrens camp, the system instantly pushes a high-priority notification to your smartphone before the next try is even scored.",
    grid_archive: "5-YEAR ARCHIVES",
    grid_archive_exp: "Every single data pulse is permanently stored in a secure time-series database. Nothing is ever deleted, building a comprehensive micro-climate history of your land.",
    grid_export: "PDF & CSV EXPORTS",
    grid_export_exp: "With one tap, our cloud servers compile your historical data into beautiful, branded PDF reports or raw CSV spreadsheets perfect for insurance claims or agronomists.",

    // How it Works
    hw_title: "HOW DOES THE <span class=\"text-stilsein-blue\">STILSEIN NETWORK WORK?</span>",
    hw_desc: "Forget about poor cell reception. <strong>StilSein</strong>, together with our nationwide network of installers, builds a private long-range radio network right on your farm.",
    hw_toggle: "...if you already own a LoRaWAN Gateway? Click Here.",
    hw_toggle_active: "...wait, I need equipment. How does the setup work?",
    hw_step1_title: "1. THE SENSORS",
    hw_step1_desc: "These aren't massive industrial machines. Think of a compact rain gauge, or a small pressure sensor screwed onto a pipe. We are hardware-agnostic, supporting world-class brands like Dragino, Milesight, SenseCAP, and Netvox. They run on long-lasting batteries without needing Wi-Fi or cell reception.",
    hw_step2_title: "2. THE GATEWAY",
    hw_step2_desc: "This is simply a device that looks like your home internet router, mounted at the homestead with a small antenna outside. It acts as the 'receiver', catching radio signals from sensors up to 15km away. No SIM cards or monthly data contracts are required for the sensors to talk to it.",
    hw_opt_title: "ALREADY HAVE A GATEWAY?",
    hw_opt_desc: "If you already have LoRaWAN hardware on The Things Network (TTN), you are halfway there! Simply download the free StilSein app, drop your virtual sensors on the map, and submit your blueprint. Our engineers will configure your bespoke farm matrix within 48 hours and send you a secure Farm Key to log in.",
    hw_step3_title: "3. THE CLOUD",
    hw_step3_desc: "The gateway takes all those radio signals and passes them through your homestead's internet connection securely into our cloud servers. Here, Jakkals AI organizes the raw numbers, checks your thresholds, and stores everything in your 5-year archive.",
    hw_step4_title: "4. THE APP",
    hw_step4_desc: "The final step is your phone. The processed data lands instantly on your StilSein dashboard. You get beautifully designed charts, immediate WhatsApp-style notifications, and a complete overview of your farm, accessible from anywhere in the world.",
    
    // NEW: Software Pitch
    hw_soft_title: "SO HOW DOES THE <span class=\"text-stilsein-blue\">SOFTWARE</span> ACTUALLY WORK?",
    hw_soft_desc: "You download the app for free. There are no massive upfront software development fees. You submit your farm details, our engineering team hardcodes your specific farm topology and thresholds, and you simply pay a small monthly SaaS (Software as a Service) fee to keep the intelligence engine running.",
    hw_soft_1_title: "YOUR DIGITAL TWIN",
    hw_soft_1_desc: "We build a digital replica of your farm. If Pump A feeds Dam B, the software knows it. If pressure drops, the app doesn't just show a generic error—it shows you exactly which pipeline is failing on your customized radar map.",
    hw_soft_2_title: "JUMPING THE GAP",
    hw_soft_2_desc: "Zero cell reception in the field? No problem. The app uses advanced 'Offline Caching'. It boots instantly using the last known data, meaning you can still analyze historical charts while standing in a signal-dead zone.",
    hw_soft_3_title: "NOTIFICATIONS THAT MATTER",
    hw_soft_3_desc: "We don't spam you. The system is designed to stay completely silent when things are operating normally. You only get a push notification when a pump drops below your specific minimum Bar, or when a dam drains unexplainably fast.",

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
    
    // --- NEW ECOSYSTEM ARCHITECTURE ---
    // 1. COMMAND CENTRAL
    eco_s1_sub: "WHERE IT ALL COMES TOGETHER",
    eco_s1_title: "COMMAND <span class=\"text-stilsein-blue\">CENTRAL.</span>",
    eco_s1_body: "The StilSein Omni-Dashboard replaces scattered data with a unified 3x3 matrix. Instantly identify active storms, monitor hardware battery health, and watch tiles pulse aggressively if a hazard is detected anywhere on the farm. Tap an empty tile at any time to request a quote and expand your sensor network seamlessly.",
    eco_1_title: "STILSEIN CORE",
    eco_1_desc: "Monitor all connected devices, check battery life, signal strength, and access your 3x3 grid overview.",
    eco_1_title_b: "WOLF CAVE",
    eco_1_desc_b: "Your IT Dashboard. Configure push notifications, mute alarms, and view deep 24-hour diagnostic health charts.",

    // 2. RADAR MAPS
    eco_s_map_sub: "GEOSPATIAL REALITY",
    eco_s_map_title: "RADAR <span class=\"text-green-400\">MAPS.</span>",
    eco_s_map_body: "Every installed sensor is digitally pinned on your customized farm map. You instantly see a spatial layout of where issues are occurring without guessing. Track live signal paths, identify rainfall severity bubbles over specific camps, and view your exact physical distance to the gateway.",
    eco_map_1_title: "FARM RADAR",
    eco_map_1_desc: "A bird's-eye view of your entire operation with real-time status indicators and active radio links.",
    eco_map_2_title: "THE FLOATING STAGE",
    eco_map_2_desc: "Tap any node on the map to blur the background and instantly interact with its data cockpit.",

    // 3. PRECISION HYDROMETRY
    eco_s2_sub: "WE DON'T JUST MEASURE RAIN",
    eco_s2_title: "PRECISION <span class=\"text-stilsein-blue\">HYDROMETRY.</span>",
    eco_s2_body: "Experience rainfall tracking like never before. During an active event, the system shifts into a high-resolution Live Storm Engine. Watch animated drops intensify based on real-time downpours, while the backend dynamically calculates drop velocity to classify the severity from a gentle drizzle to a heavy cloudburst.",
    eco_2_title: "RAINFALL NETWORK",
    eco_2_desc: "Compare accumulation across multiple camps simultaneously with dynamic, animated bar charts.",
    eco_3_title: "RAINFALL GAUGE",
    eco_3_desc: "Watch your digital cylinder fill up dynamically during a storm. Dive into the historical chart to track long-term water metrics.",

    // 4. DAM LEVELS
    eco_s_dam_sub: "VOLUMETRIC OVERSIGHT",
    eco_s_dam_title: "DAM <span class=\"text-[#7D6B5D]\">LEVELS.</span>",
    eco_s_dam_body: "The Waterwolf module converts raw depth metrics into exact Liters (kL) and Percentages (%). It uses advanced analytics to calculate your 'Water Runway' (days until empty) based on recent usage, and sends critical push notifications if it detects rapid, unexplainable drainage or overflowing reservoirs.",
    eco_dam_1_title: "RESERVOIR NETWORK",
    eco_dam_1_desc: "Monitor all your dams at a glance. Easily compare current fill levels to historical averages.",
    eco_dam_2_title: "INDIVIDUAL DAMS",
    eco_dam_2_desc: "Beautifully animated sloshing water physics react to live fill percentages, with dedicated rapid-drain warnings.",

    // 5. PIPE PRESSURE
    eco_s3_sub: "KNOW THE DIFFERENCE",
    eco_s3_title: "HYDRAULIC <span class=\"text-cyan-400\">INTELLIGENCE.</span>",
    eco_s3_body: "The Drukwolf engine assigns a specific 'Goldilocks Zone' to every individual pipe on your farm. The physics-based interface displays flowing water and analog dials. It is smart enough to stay completely silent when you turn a pump off, but will instantly trigger critical red alarms the second it detects a pressure loss or dangerous blockage.",
    eco_4_title: "PRESSURE NETWORK",
    eco_4_desc: "A bird's-eye view of your entire irrigation system. Calculates live systemic load (%) across all active pumps.",
    eco_5_title: "INDIVIDUAL PIPES",
    eco_5_desc: "See the animated water pressure rise and drop. Analyze daily pump duty cycles and operational uptime.",

    // 6. PROACTIVE FORECASTING
    eco_s4_sub: "PREPARE FOR THE WEATHER",
    eco_s4_title: "PROACTIVE <span class=\"text-jakkals-orange\">FORECASTING.</span>",
    eco_s4_body: "By pinging satellite arrays using your farm's exact GPS coordinates, StilSein builds a hyper-local meteorological profile. Explore 24-hour thermal gradients that shift color based on your crop's heat thresholds. Our automated watchers scan the horizon, sending you preemptive alerts 48 hours before heatwaves, floods, or gale-force winds strike.",
    eco_6_title: "SATELLITE OVERVIEW",
    eco_6_desc: "Quickly scan the 7-day outlook. Days with expected rainfall or extreme weather are clearly highlighted.",
    eco_6_title_b: "THERMAL PROFILING",
    eco_6_desc_b: "Dive into the triple-chart view to analyze exact hour-by-hour temperature, precipitation, and wind speeds.",

    // 7. THE ULTIMATE LEDGER
    eco_s5_sub: "YOUR FARM'S HISTORY",
    eco_s5_title: "THE ULTIMATE <span class=\"text-[#A396D1]\">LEDGER.</span>",
    eco_s5_body: "Every single data pulse is permanently stored in a secure time-series database. Every storm, heatwave, and pump cycle is permanently logged. Nothing is ever deleted, building a comprehensive micro-climate history of your land that drastically increases your farm's operational value.",
    eco_8_title: "THE ARCHIVIST",
    eco_8_desc: "A ticker-tape inbox of every critical event. Unread incidents pulse in orange so you never miss a beat.",
    eco_8_title_b: "DEEP INVESTIGATIONS",
    eco_8_desc_b: "Tap any event in the archive to open a high-resolution, isolated fullscreen chart to analyze the exact minute a pipe burst.",

    // 8. JAKKALS AI
    eco_s_jak_sub: "AGRICULTURAL INTELLIGENCE",
    eco_s_jak_title: "JAKKALS <span class=\"text-jakkals-orange\">AI.</span>",
    eco_s_jak_body: "An agriculture-specialized AI that fuses your live hardware telemetry, satellite weather, and historical database. Ask him questions in the app, and instantly get a farming-specific answer based on today's exact telemetry and historical patterns. He provides localized advice with actionable shortcuts to failing hardware.",
    eco_jak_1_title: "DEEP ANALYSIS",
    eco_jak_1_desc: "Select any node or timeframe and Jakkals will write a professional, highly technical summary of the data.",
    eco_jak_2_title: "CONVERSATIONAL AI",
    eco_jak_2_desc: "Chat with Jakkals natively. Ask him about the weather, battery levels, or how to fix a specific sensor.",

    // Architecture
    eco_s6_sub: "MILITARY PRECISION",
    eco_s6_title: "BANK-GRADE <span class=\"text-stilsein-blue\">ARCHITECTURE.</span>",
    eco_s6_body: "Under the hood, StilSein operates on a multi-tenant Edge-Cloud matrix. Your sensors send encrypted radio waves to a Gateway, which securely routes the data through Cloudflare directly into an isolated, private Google Vault dedicated solely to your farm. The mobile app then uses lightning-fast WebSockets and local 'Offline Caching' so it boots instantly—even when you are standing in a camp with zero cell reception.",
    
    // 9. IN-APP FARM BUILDER
    eco_s_bld_sub: "START SMALL. SCALE ENDLESSLY.",
    eco_s_bld_title: "IN-APP <span class=\"text-jakkals-orange\">NETWORK BUILDER.</span>",
    eco_s_bld_body: "You don't need to digitize your entire operation overnight. Our integrated Farm Builder allows you to drop virtual sensors on your customized farm map, configure exact thresholds, and instantly calculate the live SaaS MRR impact, adding new nodes whenever you are ready. <strong class=\"text-jakkals-orange\">Already own hardware?</strong> Simply plug it into the network. <strong class=\"text-jakkals-orange\">Want to DIY?</strong> Order hardware through us and install it yourself. <strong class=\"text-jakkals-orange\">Need an expert?</strong> Our automated match-maker connects you with certified local installers.",
    eco_bld_1_title: "BESPOKE BLUEPRINTS",
    eco_bld_1_desc: "Every farm is unique. Build complex hydraulic topologies visually before spending a cent. Our engineers hardcode your exact layout into the backend.",
    eco_bld_2_title: "LIVE QUOTING & INSTALLERS",
    eco_bld_2_desc: "See exactly how much your monthly software subscription will change, and instantly forward the blueprint to local partners.",
    
    // 10. EXPORTS
    eco_s_exp_sub: "YOUR DATA IS YOURS",
    eco_s_exp_title: "DATA <span class=\"text-teal-400\">EXPORTS.</span>",
    eco_s_exp_body: "With one tap, our cloud servers compile your historical data into beautiful, branded PDF reports or raw CSV spreadsheets. Every Sunday night at midnight, Jakkals automatically compiles your entire week's telemetry and emails it to you perfect for insurance claims, agronomists, and peace of mind for Monday morning.",
    eco_exp_1_title: "STILSEIN PDF",
    eco_exp_1_desc: "Beautiful, company-branded PDF reports. Includes automatic meteorological summaries and color-coded graphs.",
    eco_exp_2_title: "RAW DATA CSV",
    eco_exp_2_desc: "Get instant access to every data pulse sent by your sensors. Ideal for spreadsheets (Excel).",

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
    // Partner Radius Integration
    p_form_region: "Base Region",
    p_form_radius: "Coverage Area",
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
    p_form_submit: "SUBMIT APPLICATION",
    hero_btn_build: "BUILD YOUR FARM",
    pb_instruction: "TAP THE MAP TO DROP YOUR GATEWAY",
    pb_step1: "1. ADD SENSORS",
    pb_hint: "Hardware pricing is calculated dynamically by your local installer to ensure best rates for panels, brackets, and labor.",
    pb_step2: "2. LIVE ESTIMATE",
    pb_empty_receipt: "Add sensors to see estimate...",
    pb_step3: "3. LOCAL INSTALLERS",
    pb_waiting_gw: "Waiting for Gateway location..."
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
    hero_desc: "Weet presies wat aangaan op die plaas. Jou oë en ore in sein-dooie sones, met intydse data direk in die palm van jou hand.",
    hero_btn1: "ONTDEK DIE STELSEL",
    hero_btn2: "WHATSAPP ONS",

    // Tegnologie Seksie
    tech_title: "Die Toekoms van Landbou, Aangedryf Deur Wêreldklas Tegnologie",
    tech_iot_title: "Smart IoT",
    tech_iot_desc: "Die <strong>Internet van Dinge (IoT)</strong> beteken jou plaas word \"lewendig\". Fisieke bates soos damme, pompe en hekke praat direk met die internet sonder menslike ingryping.",
    tech_lora_title: "LoRaWAN® Radio",
    tech_lora_desc: "Langafstand, lae-krag radiogolwe. Dit is die towerkrag wat data oor 15km ver stuur met 'n battery wat tot 5 jaar hou heeltemal onafhanklik van selfoonnetwerke.",
    tech_ttn_title: "The Things Network",
    tech_ttn_desc: "Die wêreld se mees betroubare roeteringstelsel. Jou data reis deur geënkripteerde wolk-tonnels om te verseker dit land veilig, en blitsvinnig, op jou foon.",

    // Monitering Grid (Wat Ons Doen)
    mon_title: "MONITOR JOU PLAAS <br><span class=\"text-stilsein-blue\">OP DIE STILSEIN PLATFORM</span>",
    mon_desc: "Boerdery in Suid-Afrika beteken jy bestuur groot afstande en onvoorspelbare elemente. StilSein gee jou absolute sekerheid deur die hartklop van jou plaas direk in jou sak te plaas. Ons omskep rou data uit die veld soos lewendige reënval en pypdruk in duidelike inligting. Met blitsige waarskuwings, 'n 5-jaar digitale argief, en Jakkals AI wat 24/7 waghou, weet jy presies wat in jou verste kampe aangaan, of jy nou by die koöperasie of op die stoep sit.",
    grid_rain: "LEWENDIGE REËNVAL",
    grid_rain_exp: "Industriële kantel-emmer sensors vang elke millimeter op. Die battery kan tot 5 jaar hou en stuur data oor 'n 15km LoRaWAN radiofrekwensie direk na die opstal.",
    grid_pipe: "PYPDRUK",
    grid_pipe_exp: "Swaardiens druksensors skakel direk in by jou hoofpyplyne. Hulle lees die presiese 'bar' druk en stuur dit elke paar minute sodat jy weet die water loop.",
    grid_dam: "DAM VLAKKE",
    grid_dam_exp: "Soniese of dompelpompsensors meet reservoir-diepte. Die Waterwolf AI omskep dit in Liters en Persentasies. Kritiese alarms word dadelik gestuur as die dam oorloop of onverklaarbaar vinnig leegloop.",
    grid_link: "Lees meer hieronder...",
    grid_forecast: "SLIM VOORSPELLINGS",
    grid_forecast_exp: "Ons integreer met wêreldwye satelliet weermodelle. In plaas van algemene streekweer, trek die stelsel voorspellings spesifiek vir jou plaas se unieke GPS koördinate.",
    grid_jakkals: "JAKKALS AI",
    grid_jakkals_exp: "'n Landbou-gespesialiseerde AI wat jou lewendige hardeware, weersatelliete en historiese databasis saamsmelt. Hy ken jou vee, pyplyne en vloeddrempels, en waarsku jou proaktief in ryk plaastaal.",
    grid_maps: "INTERAKTIEWE KAARTE",
    grid_maps_exp: "Elke geïnstalleerde sensor word digitaal vasgepen op jou pasgemaakte plaaskaart. Jy sien dadelik 'n ruimtelike uitleg van waar probleme opduik sonder om te raai.",
    grid_alerts: "BLITSIGE WAARSKUWINGS",
    grid_alerts_exp: "Jy kan op Loftus sit en rugby kyk. As die druk onder 2 bar val, of dit reën meer as 50mm in die Noordgrens-kamp, stuur die stelsel onmiddellik 'n hoë-prioriteit waarskuwing na jou foon nog voor die volgende drie gedruk word.",
    grid_archive: "5-JAAR ARGIEWE",
    grid_archive_exp: "Elke liewe data-pols word permanent gestoor in 'n veilige databasis. Niks word ooit uitgevee nie, wat 'n omvattende mikroklimaat-geskiedenis van jou grond bou.",
    grid_export: "PDF & CSV UITVOER",
    grid_export_exp: "Met een kliek verwerk ons wolkbedieners jou data in pragtige PDF verslae of rou CSV sigblaaie ideaal vir versekeringseise of jou landboukundige.",

    // Hoe dit Werk
    hw_title: "HOE WERK DIE <span class=\"text-stilsein-blue\">STILSEIN NETWERK?</span>",
    hw_desc: "Vergeet van swak selfoonopvangs. <strong>StilSein</strong>, tesame met ons landwye netwerk van installeerders, kom bou 'n private langafstand radionetwerk direk op jou plaas.",
    hw_toggle: "...indien jy reeds 'n LoRaWAN Gateway besit? Kliek Hier.",
    hw_toggle_active: "...wag, ek benodig toerusting. Hoe werk die opstelling?",
    hw_step1_title: "1. DIE SENSORS",
    hw_step1_desc: "Dink aan 'n kompakte reënmeter, of 'n klein druksensor wat op jou pyp vasgedraai is. Ons is hardeware-agnosties en ondersteun wêreldklas handelsmerke soos Dragino, Milesight, SenseCAP en Netvox. Hulle werk op langdurige batterye sonder om Wi-Fi of selfoonopvangs te kort.",
    hw_step2_title: "2. DIE BASISSTASIE",
    hw_step2_desc: "Dis eenvoudig 'n toestel wat soos jou huis se internet-modem lyk, gemonteer by die opstal met 'n klein antenna buite. Dit dien as die 'ontvanger' wat radioseine van sensors tot 15km ver opvang. Geen SIM-kaarte of maandelikse data-kontrakte word benodig vir die sensors om te kommunikeer nie.",
    hw_opt_title: "HET JY REEDS 'N GATEWAY?",
    hw_opt_desc: "As jy reeds LoRaWAN hardeware op The Things Network (TTN) het, is jy halfpad daar! Laai net die gratis StilSein app af, plaas jou virtuele sensors op die kaart, en dien jou uitleg in. Ons ingenieurs bou jou stelsel binne 48 uur en stuur jou 'n veilige Plaas-Sleutel om in te teken.",    hw_step3_title: "3. DIE WOLK",
    hw_step3_desc: "Die basisstasie neem al daardie radioseine en stuur dit via jou opstal se internetverbinding veilig deur na ons wolkbedieners. Hier orden Jakkals AI die rou syfers, kontroleer jou drempels, en stoor alles in jou 5-jaar argief.",
    hw_step4_title: "4. DIE APP",
    hw_step4_desc: "Die laaste stap is jou foon. Die verwerkte data land onmiddellik op jou StilSein dashboard. Jy kry pragtige grafieke, blitsige WhatsApp-styl waarskuwings, en 'n volledige oorsig van jou plaas, oral in die wêreld.",

    // NEW: Software Pitch
    hw_soft_title: "HOE WERK DIE <span class=\"text-stilsein-blue\">SAGTEWARE</span> EINTLIK?",
    hw_soft_desc: "Jy laai die app gratis af. Daar is geen massiewe eenmalige sagteware-ontwikkelingsfooie nie. Jy dien jou plaasbesonderhede in, ons ingenieurspan skryf jou spesifieke plaas-topologie en drempels in die stelsel in, en jy betaal bloot 'n klein maandelikse SaaS (Software as a Service) fooi om die intelligensie-enjin aan die gang te hou.",
    hw_soft_1_title: "JOU DIGITALE TWEELING",
    hw_soft_1_desc: "Ons bou 'n digitale replika van jou plaas. As Pomp A vir Dam B voer, weet die sagteware dit. As druk val, wys die app nie net 'n generiese fout nie—dit wys presies watter pyplyn faal op jou pasgemaakte radar kaart.",
    hw_soft_2_title: "OORBRUG DIE GAPING",
    hw_soft_2_desc: "Geen selfoonopvangs in die kamp nie? Geen probleem. Die app gebruik 'Vanlyn Kasgeheue'. Dit maak onmiddellik oop met die laaste bekende data, sodat jy steeds historiese grafieke kan ontleed terwyl jy in 'n sein-dooie sone staan.",
    hw_soft_3_title: "WAARSKUWINGS WAT TEL",
    hw_soft_3_desc: "Ons stuur nie onnodige gemorspos nie. Die stelsel bly heeltemal stil wanneer dinge normaal verloop. Jy kry slegs 'n waarskuwing op jou foon wanneer 'n pomp onder jou spesifieke minimum Bar val, of as 'n dam onverklaarbaar vinnig leegloop.",

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

    // --- NEW ECOSYSTEM ARCHITECTURE ---
    // 1. COMMAND CENTRAL
    eco_s1_sub: "WAAR ALLES BYMEKAARKOM",
    eco_s1_title: "SENTRALE <span class=\"text-stilsein-blue\">BEHEER.</span>",
    eco_s1_body: "Die StilSein Omni-Dashboard vervang verspreide data met 'n verenigde 3x3 matriks. Sien dadelik aktiewe storms, monitor batterykrag, en kyk hoe teëls aggressief pols as 'n gevaar iewers opgespoor word. Tik enige tyd op 'n leë teël om 'n kwotasie aan te vra en jou sensornetwerk naatloos uit te brei.",
    eco_1_title: "STILSEIN KERN",
    eco_1_desc: "Monitor alle gekoppelde toestelle, kyk na batterykrag, seinsterkte, en kry toegang tot jou 3x3 rooster oorsig.",
    eco_1_title_b: "WOLF-GROT",
    eco_1_desc_b: "Jou IT Skerm. Bestuur waarskuwings, demp alarms, en kyk na diep 24-uur diagnostiese gesondheidsgrafieke.",

    // 2. RADAR MAPS
    eco_s_map_sub: "GEOSPATIALE REALITEIT",
    eco_s_map_title: "RADAR <span class=\"text-green-400\">KAARTE.</span>",
    eco_s_map_body: "Elke geïnstalleerde sensor word digitaal vasgepen op jou pasgemaakte plaaskaart. Sien 'n ruimtelike uitleg van waar probleme opduik sonder om te raai. Volg lewendige seinpaaie, identifiseer reënval-intensiteit oor spesifieke kampe, en sien jou presiese fisiese afstand na die basisstasie.",
    eco_map_1_title: "PLAAS RADAR",
    eco_map_1_desc: "'n Voëlvlugoorsig van jou hele operasie met intydse status aanwysers en aktiewe radiogolwe.",
    eco_map_2_title: "DIE SWEWENDE SKERM",
    eco_map_2_desc: "Tik enige node op die kaart om die agtergrond te verdof en dadelik met sy eie spesifieke datakajuit te werk.",

    // 3. PRECISION HYDROMETRY
    eco_s2_sub: "ONS MEET NIE NET REËN NIE",
    eco_s2_title: "PRESIESIE <span class=\"text-stilsein-blue\">HIDROMETRIE.</span>",
    eco_s2_body: "Ervaar reënval-monitering soos nog nooit tevore nie. Tydens 'n aktiewe bui skakel die stelsel oor na 'n hoë-resolusie Lewendige Storm Enjin. Kyk hoe geanimeerde druppels versnel gebaseer op die werklike neerslag, terwyl die backend dinamies die valsnelheid bereken om die graad te klassifiseer van 'n ligte motreën tot 'n swaar wolkbreuk.",
    eco_2_title: "REËNVAL NETWERK",
    eco_2_desc: "Vergelyk akkumulasie oor verskeie kampe gelyktydig met dinamiese, geanimeerde staafgrafieke.",
    eco_3_title: "REËNVAL METER",
    eco_3_desc: "Kyk hoe jou digitale silinder dinamies opvul tydens 'n storm. Duik in die historiese grafiek vir langtermyn waterstatistiek.",

    // 4. DAM LEVELS
    eco_s_dam_sub: "VOLUMETRIESE OORSIG",
    eco_s_dam_title: "DAM <span class=\"text-[#7D6B5D]\">VLAKKE.</span>",
    eco_s_dam_body: "Die Waterwolf module omskep rou diepte data in presiese Liters (kL) en Persentasies (%). Dit gebruik gevorderde analise om jou 'Water Aanloopbaan' (dae tot leeg) te bereken, en stuur kritiese waarskuwings as dit vinnige, onverklaarbare leegloop of oorlopende damme opspoor.",
    eco_dam_1_title: "DAM NETWERK",
    eco_dam_1_desc: "Monitor al jou damme in 'n oogopslag. Vergelyk huidige vlakke maklik met historiese gemiddeldes.",
    eco_dam_2_title: "INDIVIDUELE DAMME",
    eco_dam_2_desc: "Pragtig geanimeerde kabbelende water wat op lewendige persentasies reageer, met toegewyde waarskuwings vir 'n vinnige leegloop.",

    // 5. PIPE PRESSURE
    eco_s3_sub: "WEET DIE VERSKIL",
    eco_s3_title: "HIDROULIESE <span class=\"text-cyan-400\">INTELLIGENSIE.</span>",
    eco_s3_body: "Die Drukwolf-enjin ken 'n spesifieke 'Gouelokkies-Sone' toe aan elke individuele pyp op jou plaas. Die fisika-gebaseerde koppelvlak wys vloeiende water en analoog meters. Dit is slim genoeg om heeltemal stil te bly wanneer jy 'n pomp afsit, maar sal onmiddellik kritiese rooi alarms stuur die sekonde wat dit 'n drukdaling of gevaarlike blokkasie opspoor.",
    eco_4_title: "DRUK NETWERK",
    eco_4_desc: "'n Voëlvlugoorsig van jou hele besproeiingstelsel. Bereken lewendige stelsellading (%) oor alle aktiewe pompe.",
    eco_5_title: "INDIVIDUELE PYPE",
    eco_5_desc: "Sien die geanimeerde waterdruk styg en daal. Ontleed daaglikse pompsiklusse en operasionele looptyd.",

    // 6. PROACTIVE FORECASTING
    eco_s4_sub: "BEREI VOOR VIR DIE WEER",
    eco_s4_title: "PROAKTIEWE <span class=\"text-jakkals-orange\">VOORSPELLINGS.</span>",
    eco_s4_body: "Deur satellietnetwerke te ping met jou plaas se presiese GPS-koördinate, bou StilSein 'n hiper-lokale meteorologiese profiel. Verken 24-uur termiese grafieke wat van kleur verander gebaseer op jou gewas se hitte-drempels. Ons stelsel skandeer die horison en stuur proaktiewe waarskuwings 48 uur voordat hittegolwe, vloede of stormwinde uitslaan.",
    eco_6_title: "SATELLIET OORSIG",
    eco_6_desc: "Skandeer vinnig die 7-dae vooruitsig. Dae met verwagte reënval of uiterste weer word duidelik uitgelig.",
    eco_6_title_b: "TERMIESE PROFILERING",
    eco_6_desc_b: "Duik in die drie-grafiek aansig om presiese uur-tot-uur temperatuur, neerslag en windsnelhede te ontleed.",

    // 7. THE ULTIMATE LEDGER
    eco_s5_sub: "JOU PLAAS SE GESKIEDENIS",
    eco_s5_title: "DIE UITIEMSTE <span class=\"text-[#A396D1]\">REKORD.</span>",
    eco_s5_body: "Elke liewe data-pols word permanent gestoor in 'n veilige databasis. Elke storm, hittegolf en pompsiklus word behou. Niks word ooit uitgevee nie, wat 'n omvattende mikroklimaat-geskiedenis van jou grond bou wat jou plaas se operasionele waarde drasties verhoog.",
    eco_8_title: "DIE ARGIVARIS",
    eco_8_desc: "'n Nuuslyn inboks van elke kritiese gebeurtenis. Ongelese insidente pols in oranje sodat jy niks mis nie.",
    eco_8_title_b: "DIEP ONDERSOEKE",
    eco_8_desc_b: "Tik enige gebeurtenis in die argief om 'n hoë-resolusie, geïsoleerde volskerm grafiek oop te maak.",

    // 8. JAKKALS AI
    eco_s_jak_sub: "LANDBOU INTELLIGENSIE",
    eco_s_jak_title: "JAKKALS <span class=\"text-jakkals-orange\">AI.</span>",
    eco_s_jak_body: "'n Landbou-gespesialiseerde AI wat jou lewendige hardeware telemetrie, satellietweer, en historiese databasis saamsmelt. Vra hom vrae in die app, en kry dadelik 'n boerdery-spesifieke antwoord gebaseer op vandag se presiese data. Hy gee plaaslike advies met direkte kortpaaie na fouterende hardeware.",
    eco_jak_1_title: "DIEP ANALISE",
    eco_jak_1_desc: "Kies enige node of tydperk en Jakkals sal 'n professionele, hoogs tegniese opsomming van die data skryf.",
    eco_jak_2_title: "GESELS MET JAKKALS",
    eco_jak_2_desc: "Praat natuurlik met Jakkals. Vra hom oor die weer, batteryvlakke, of hoe om 'n spesifieke sensor reg te maak.",

    // Architecture
    eco_s6_sub: "MILITÊRE PRESISIE",
    eco_s6_title: "BANK-GRAAD <span class=\"text-stilsein-blue\">ARGITEKTUUR.</span>",
    eco_s6_body: "Onder die enjinkap werk StilSein op 'n geïsoleerde wolk-matriks. Jou sensors stuur geënkripteerde radiogolwe na 'n Basisstasie, wat die data veilig deur Cloudflare stuur na 'n private Google Vault wat uitsluitlik aan jou plaas toegewy is. Die mobiele app gebruik blitsvinnige WebSockets en 'Vanlyn Kasgeheue' sodat dit onmiddellik oopmaak selfs in 'n kamp met nul selfoonopvangs.",

    // 9. IN-APP FARM BUILDER
    eco_s_bld_sub: "BEGIN KLEIN. BREI EINDELOOS UIT.",
    eco_s_bld_title: "IN-APP <span class=\"text-jakkals-orange\">PLAAS-BOUER.</span>",
    eco_s_bld_body: "Jy hoef nie jou hele boerdery oornag te digitaliseer nie. Ons geïntegreerde Plaas-Bouer laat jou toe om virtuele sensors op jou pasgemaakte plaaskaart te plaas, presiese drempels op te stel, en dadelik die nuwe SaaS MRR impak te sien, sodat jy kan byvoeg wanneer jy gereed is. <strong class=\"text-jakkals-orange\">Besit jy reeds hardeware?</strong> Koppel dit net in. <strong class=\"text-jakkals-orange\">Wil jy self installeer (DIY)?</strong> Bestel hardeware deur ons. <strong class=\"text-jakkals-orange\">Kort jy 'n kenner?</strong> Ons stelsel koppel jou outomaties aan gesertifiseerde plaaslike installeerders.",    eco_bld_1_title: "PASGEMAAKTE UITLEGTE",
    eco_bld_1_desc: "Elke plaas is uniek. Bou komplekse hidrouliese netwerke visueel voordat jy 'n sent spandeer. Ons ingenieurs skryf jou presiese uitleg in die stelsel in.",
    eco_bld_2_title: "LEWENDIGE KWOTASIES",
    eco_bld_2_desc: "Sien presies hoe jou maandelikse sagteware-intekening sal verander, en stuur die uitleg direk na plaaslike vennote.",

    // 10. EXPORTS
    eco_s_exp_sub: "JOU DATA IS JOUNE",
    eco_s_exp_title: "DATA <span class=\"text-teal-400\">UITVOERE.</span>",
    eco_s_exp_body: "Met een tik verwerk ons wolkbedieners jou historiese data in pragtige PDF verslae of rou CSV sigblaaie. Elke Sondagaand om middernag sit Jakkals outomaties jou hele week se telemetrie saam en e-pos dit na jou perfek vir versekeringseise, landboukundiges, en gemoedsrus vir Maandagoggend.",
    eco_exp_1_title: "STILSEIN PDF",
    eco_exp_1_desc: "Pragtige, maatskappy-gebrande PDF-verslae. Sluit outomatiese weerkundige opsommings en kleurgekodeerde grafieke in.",
    eco_exp_2_title: "ROU DATA CSV",
    eco_exp_2_desc: "Kry onmiddellike toegang tot elke data pols wat deur jou sensors gestuur is. Ideaal vir sigblaaie (Excel).",
    
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
    // Partner Radius Integration
    p_form_region: "Basis Streek",
    p_form_radius: "Dekking (Radius)",
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
    p_form_submit: "STUUR AANSOEK",
    hero_btn_build: "BOU JOU PLAAS",
    pb_instruction: "TIK DIE KAART OM JOU GATEWAY TE PLAAS",
    pb_step1: "1. VOEG SENSORS BY",
    pb_hint: "Hardeware pryse word dinamies deur jou plaaslike installeerder bereken om die beste tariewe vir panele en arbeid te verseker.",
    pb_step2: "2. LEWENDIGE KWOTASIE",
    pb_empty_receipt: "Voeg sensors by om kwotasie te sien...",
    pb_step3: "3. PLAASLIKE INSTALLEERDERS",
    pb_waiting_gw: "Wag vir Gateway ligging..."
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
