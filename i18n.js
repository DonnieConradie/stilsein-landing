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
    mon_desc: "At its core, StilSein is a smart app and a dedicated 24/7 monitoring service. Our app neatly pulls together all those different sensors on your farm onto one screen. Our partner network can do the installations for you, but the true power lies in the app's versatility. You are not locked into just one type of hardware—if it speaks LoRaWAN, we connect it to Jakkals AI.",
    grid_rain: "RAINFALL",
    grid_dam: "DAM LEVELS",
    grid_sec: "SECURITY",
    grid_pipe: "PIPE PRESSURE",
    grid_live: "LIVESTOCK TRACKING",
    grid_soil: "SOIL MOISTURE",
    grid_fire: "FIRES",
    grid_wea: "WEATHER STATIONS",

    // How it Works
    hw_title: "HOW DOES THE <span class=\"text-stilsein-blue\">STILSEIN NETWORK WORK?</span>",
    hw_desc: "Forget about poor cell reception. <strong>StilSein</strong>, together with our nationwide network of installers, builds a private long-range radio network right on your farm.",
    hw_toggle: "...if you already own a LoRaWAN Gateway? Click Here.",
    hw_toggle_active: "...wait, I need equipment. How does the setup work?",
    hw_step1_title: "1. The Sensors",
    hw_step1_desc: "We place battery-powered sensors (rain gauges, gates, dams) in the field. The battery lasts up to 10 years.",
    hw_step2_title: "2. The Gateway",
    hw_step2_desc: "One central base station at the homestead captures radio signals from miles away. No SIM cards required.",
    hw_opt_title: "Connect Directly",
    hw_opt_desc: "Do you already have The Things Network (TTN) hardware? Fantastic. You don't need any new equipment. Contact us for your unique Farm Key, set up our Webhook in your TTN console, and download the App.",
    hw_step3_title: "3. The Cloud",
    hw_step3_desc: "Your data streams securely through our servers to your isolated database where Jakkals-AI analyzes it.",
    hw_step4_title: "4. The App",
    hw_step4_desc: "Everything displays instantly and neatly organized on your phone. You get warnings even before a crisis hits.",

    // Real-Time Monitoring
    live_title: "WE MONITOR <br><span class=\"text-stilsein-blue\">AND KEEP WATCH.</span>",
    live_p1: "StilSein is not just an app you download and have to figure out yourself. We are a dedicated <strong>real-time monitoring service</strong>.",
    live_p2: "While Jakkals-AI analyzes your weather conditions, real people sit at StilSein HQ keeping a watchful eye over your hardware's health. If a soil moisture sensor's battery runs low, or a gateway's signal in the furthest camp drops, the red lights flash on our mainframe before you even know there is a fault. We immediately contact you or the installer.",
    live_badge: "StilSein HQ: 24/7 Infrastructure Watchtower",

    // Jakkals AI
    ai_badge: "THE BRAINS BEHIND THE OPERATION",
    ai_title: "MEET <span class=\"text-jakkals-orange\">JAKKALS AI.</span>",
    ai_p1: "While our headquarters guards the hardware, Jakkals analyzes your data.",
    ai_p2: "Jakkals is not a generic \"chatbot\". At installation, he is calibrated for your specific farm. He knows your exact <strong>farming type</strong>, <strong>specific rainfall region</strong>, <strong>distances between your camps</strong>, the <strong>nearest town</strong>, and your farm's <strong>unique flood thresholds</strong>.",
    ai_li1: "<strong>Proactive Warnings:</strong> Analyzes Open-Meteo satellite data against your farm's thresholds to predict heatwaves or storms days in advance.",
    ai_li2: "<strong>Context-Aware:</strong> He knows whether 15mm of rain is a relief for your sheep, or if it poses a flood risk for crops.",
    ai_li3: "<strong>Your Personal Assistant:</strong> Ask him questions in the app, and instantly get a farming-specific answer based on today's numbers.",
    ai_term_text: "\"Farmer, the heatwave hits 39°C this afternoon. Make sure the North Boundary herd has enough shade and water. I'll keep an eye on the wind.\"",

    // Ecosystem
    eco_title: "ONE APP. <span class=\"text-stilsein-blue\">YOUR ENTIRE FARM UNDER ONE ROOF.</span>",
    eco_desc: "Touch any screen below to see in-depth analysis.",
    eco_rain: "WEERWOLF RAINFALL",
    eco_sat: "SATELLITE FORECAST",
    eco_sec: "WAGWOLF SECURITY",
    eco_dam: "WATERWOLF DAM LEVELS",
    eco_core: "STILSEIN CORE",
    eco_pipe: "DRUKWOLF PIPE PRESSURE",
    eco_track: "SPOORWOLF TRACKING",
    eco_soil: "GRONDWOLF SOIL MOISTURE",
    eco_fire: "VELDWOLF FIRES",
    eco_p1: "Setting up a system for just one rain gauge is pretty nice. But building a network that simultaneously monitors pipe pressure, farm gates, dam levels, and extreme weather? <strong class=\"text-jakkals-orange\">That changes the game.</strong>",
    eco_p2: "StilSein is modular. Invest in the core infrastructure today, and add new sensors on your own time—whether that's tomorrow or in two years. Your app automatically adapts as your farm grows.",
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
    mon_desc: "In sy kern is StilSein 'n slim app en 'n toegewyde 24/7 moniteringsdiens. Ons app vat al daai verskillende sensors op jou plaas en trek hulle netjies saam op een skerm. Ons netwerk van vennote kan die installasies vir jou doen, maar die ware krag lê in die app se veelsydigheid. Jy is nie vasgevang met net een tipe hardeware nie—as dit LoRaWAN praat, koppel ons dit aan Jakkals AI.",
    grid_rain: "REËNVAL",
    grid_dam: "DAMVLAKKE",
    grid_sec: "SEKURITEIT",
    grid_pipe: "PYPDRUK",
    grid_live: "VEE-OPSPORING",
    grid_soil: "GRONDVOG",
    grid_fire: "BRANDE",
    grid_wea: "WEERSTASIES",

    // Hoe dit Werk
    hw_title: "HOE WERK DIE <span class=\"text-stilsein-blue\">STILSEIN NETWERK?</span>",
    hw_desc: "Vergeet van swak selfoonopvangs. <strong>StilSein</strong>, tesame met ons landwye netwerk van installeerders, kom bou 'n private langafstand radionetwerk direk op jou plaas.",
    hw_toggle: "...indien jy reeds 'n LoRaWAN Gateway besit? Kliek Hier.",
    hw_toggle_active: "...wag, ek benodig toerusting. Hoe werk die opstelling?",
    hw_step1_title: "1. Die Sensors",
    hw_step1_desc: "Ons plaas battery-aangedrewe sensors (reënmeters, hekke, damme) in die veld. Die battery hou tot 10 jaar.",
    hw_step2_title: "2. Die Gateway",
    hw_step2_desc: "Een sentrale basisstasie by die opstal vang radioseine van kilometers ver op. Geen SIM-kaarte benodig nie.",
    hw_opt_title: "Skakel Direk In",
    hw_opt_desc: "Het jy reeds The Things Network (TTN) hardeware? Fantasties. Jy benodig geen nuwe toerusting nie. Kontak ons vir jou unieke Plaas-Sleutel, stel ons Webhook op in jou TTN-konsole, en laai die App af.",
    hw_step3_title: "3. Die Wolk",
    hw_step3_desc: "Jou data stroom veilig deur ons bedieners na jou ge-isoleerde databasis waar Jakkals-AI dit ontleed.",
    hw_step4_title: "4. Die App",
    hw_step4_desc: "Alles vertoon onmiddellik en mooi georganiseerd op jou foon. Jy kry waarskuwings nog voor 'n krisis tref.",

    // Intydse Monitering
    live_title: "ONS MONITOR <br><span class=\"text-stilsein-blue\">EN HOU WAG.</span>",
    live_p1: "StilSein is nie net 'n app wat jy aflaai en self moet uitsorteer nie. Ons is 'n toegewyde <strong>intydse moniteringsdiens</strong>.",
    live_p2: "Terwyl Jakkals-AI jou weersomstandighede ontleed, sit regte mense by StilSein HQ en hou wakker oog oor jou hardeware se gesondheid. As 'n grondvog-sensor se battery pap raak, of 'n gateway se sein in die verste kamp wegraak, flits die rooi ligte op ons hoofraam voor jy eers weet daar is 'n fout. Ons kontak dadelik vir jou of die installeerder.",
    live_badge: "StilSein HQ: 24/7 Infrastruktuur Wagtoring",

    // Jakkals AI
    ai_badge: "DIE BREIN AGTER DIE BEDRYF",
    ai_title: "ONTMOET <span class=\"text-jakkals-orange\">JAKKALS AI.</span>",
    ai_p1: "Terwyl ons hoofkwartier die hardeware oppas, ontleed Jakkals jou data.",
    ai_p2: "Jakkals is nie 'n generiese \"chatbot\". By installasie word hy gekalibreer vir jou spesifieke plaas. Hy ken jou presiese <strong>boerderytipe</strong>, <strong>spesifieke reënval streek</strong>, <strong>afstande tussen jou kampe</strong>, die <strong>naaste dorp</strong>, en jou plaas se <strong>unieke vloeddrempels</strong>.",
    ai_li1: "<strong>Proaktiewe Waarskuwings:</strong> Ontleed Open-Meteo satellietdata teen jou plaas se drempels om hittegolwe of storms dae vooruit te voorspel.",
    ai_li2: "<strong>Konteks-Bewus:</strong> Hy weet of 15mm reën 'n verligting vir jou skape is, en of dit 'n vloedgevaar vir landerye inhou.",
    ai_li3: "<strong>Jou Persoonlike Assistent:</strong> Vra hom vrae in die app, en kry dadelik 'n boerdery-spesifieke antwoord gebaseer op vandag se syfers.",
    ai_term_text: "\"Boer, die hittegolf slaan vanmiddag 39°C. Maak seker die Noordgrens-kudde het genoeg skaduwee en water. Ek hou die wind dop.\"",

    // Ekosisteem
    eco_title: "EEN APP. <span class=\"text-stilsein-blue\">JOU HELE PLAAS ONDER EEN DAK.</span>",
    eco_desc: "Raak aan enige skerm hieronder om diepte-analise te sien.",
    eco_rain: "WEERWOLF REËNVAL",
    eco_sat: "SATELLIET VOORSPELLING",
    eco_sec: "WAGWOLF SEKURITEIT",
    eco_dam: "WATERWOLF DAMVLAKKE",
    eco_core: "STILSEIN KERN",
    eco_pipe: "DRUKWOLF PYPDRUK",
    eco_track: "SPOORWOLF OPSPORING",
    eco_soil: "GRONDWOLF GRONDVOG",
    eco_fire: "VELDWOLF BRANDE",
    eco_p1: "Om 'n stelsel op te stel vir net een reënmeter is nogal nice. Maar om 'n netwerk te bou wat pypdruk, plaashekke, damvlakke en uiterste weer gelyktydig dophou? <strong class=\"text-jakkals-orange\">Dit verander die game.</strong>",
    eco_p2: "StilSein is modulêr. Belê in die hoofinfrastruktuur vandag, en voeg nuwe sensors by op jou eie tyd—of dit nou môre of oor twee jaar is. Jou app pas outomaties aan namate jou plaas groei.",
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
