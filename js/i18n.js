/**
 * Scholar Notify v2.0 — Multi-Language Indian Localization Engine (i18n)
 * Provides comprehensive translation support for Indian languages:
 * Hindi (हिन्दी), Gujarati (ગુજરાતી), Marathi (मराठी), Tamil (தமிழ்),
 * Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Bengali (বাংলা),
 * Punjabi (ਪੰਜਾਬੀ), Odia (ଓଡ଼ିଆ), Urdu (اردو), and English.
 * 
 * Highly extensible: new languages can be added with `ScholarI18n.addLanguage()`.
 */

const ScholarI18n = (() => {
    // 1. REGISTRY OF SUPPORTED LANGUAGES
    const SUPPORTED_LANGUAGES = [
        { code: 'en', name: 'English', nativeName: 'English', flag: '🌐' },
        { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
        { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
        { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
        { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
        { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
        { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
        { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
        { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
        { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
        { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
        { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇮🇳', dir: 'rtl' }
    ];

    // 2. DICTIONARY OF TRANSLATIONS FOR CORE INSTITUTIONAL UI
    const TRANSLATIONS = {
        en: {
            header_subtitle: "Student Intervention Intelligence",
            logged_in_prefix: "Logged in: ",
            logout: "Logout",
            select_language: "Language",

            // Navigation Tabs
            nav_overview: "Overview",
            nav_action_center: "Action Center",
            nav_ews: "Early Warning",
            nav_multivector: "Multi-Vector",
            nav_cases: "Cases",
            nav_followups: "Follow-ups",
            nav_smart_intake: "Smart Intake",
            nav_schemes: "Schemes",
            nav_simulator: "Simulator",
            nav_sathi: "Sathi",
            nav_emergency: "Emergency",

            // Login Screen
            login_system_title: "STATE EDUCATION RETENTION SYSTEM",
            login_brand_sub: "Official Institutional Sign-In Portal",
            login_user_label: "Username / Official ID",
            login_user_placeholder: "Enter your assigned username...",
            login_pass_label: "Password",
            login_pass_placeholder: "Enter password...",
            login_submit: "Sign In To Portal",
            login_demo_title: "Pre-configured Demo Accounts:",
            login_teacher: "Teacher",
            login_deo: "DEO",
            login_notice: "🔒 Institutional Access Notice • Accounts provisioned by District Administrator.",

            // Overview Hero
            hero_badge: "EARLY WARNING & STUDENT INTERVENTION PLATFORM",
            hero_title: "Scholar Notify",
            hero_subtitle: "Early Warning & Student Intervention Platform",
            hero_tagline: "Identify risk early. Understand the cause. Coordinate the right intervention. Track what happens next.",
            hero_desc: "Scholar Notify helps educators identify students who may need support, understand the factors contributing to risk, coordinate targeted interventions, and monitor what changes over time.",
            hero_btn_action: "Open Action Center",
            hero_btn_risk: "Explore Student Risk",

            // Telemetry & Command Map
            cmd_map_title: "PLATFORM COMMAND MAP",
            cmd_surveillance: "Active Surveillance",
            cmd_roster_monitored: "Roster Monitored",
            cmd_active_cases: "Active Cases",
            cmd_methodology: "CORE METHODOLOGY",
            cmd_how_works: "How Scholar Notify Works",
            cmd_cycle_desc: "A continuous cycle from early detection to sustained student retention",

            // Workflow Steps
            step_monitor: "MONITOR",
            step_monitor_desc: "Track attendance, academic and student signals.",
            step_detect: "DETECT",
            step_detect_desc: "Identify students showing elevated risk.",
            step_understand: "UNDERSTAND",
            step_understand_desc: "Analyze root causes across 5 critical vectors.",
            step_intervene: "INTERVENE",
            step_intervene_desc: "Assign support, welfare schemes & peer mentoring.",
            step_followup: "FOLLOW UP",
            step_followup_desc: "Conduct structured check-ins & verify engagement.",
            step_measure: "MEASURE",
            step_measure_desc: "Track risk reduction & attendance recovery.",

            // Action Center & Filters
            ac_urgent_title: "Urgent Student Interventions Required",
            ac_urgent_desc: "Immediate educator attention recommended based on multi-vector risk telemetry.",
            filter_all: "All",
            filter_high: "High Priority",
            filter_moderate: "Moderate Priority",
            filter_routine: "Routine Priority",
            search_placeholder: "Search student by name, roll, village, or father...",

            // Common Actions & Badges
            btn_view_case: "View Case",
            btn_create_case: "Create Case",
            btn_export: "Export CSV",
            btn_close: "Close",
            btn_save: "Save",
            btn_submit: "Submit",
            btn_print: "Print",
            btn_cancel: "Cancel",
            risk_high: "High Risk",
            risk_moderate: "Moderate Risk",
            risk_low: "Low Risk",
            risk_safe: "Stable",
            lang_switched_toast: "Language Updated"
        },

        hi: {
            header_subtitle: "छात्र हस्तक्षेप बुद्धिमत्ता प्रणाली",
            logged_in_prefix: "लॉग इन: ",
            logout: "लॉग आउट",
            select_language: "भाषा",

            nav_overview: "अवलोकन",
            nav_action_center: "कार्रवाई केंद्र",
            nav_ews: "पूर्व चेतावनी",
            nav_multivector: "मल्टी-वेक्टर",
            nav_cases: "मामले",
            nav_followups: "फॉलो-अप्स",
            nav_smart_intake: "स्मार्ट इनटेक",
            nav_schemes: "कल्याण योजनाएं",
            nav_simulator: "सिम्युलेटर",
            nav_sathi: "साथी मेंटर",
            nav_emergency: "आपातकालीन",

            login_system_title: "राज्य शिक्षा छात्र प्रतिधारण प्रणाली",
            login_brand_sub: "आधिकारिक संस्थागत लॉगिन पोर्टल",
            login_user_label: "उपयोगकर्ता नाम / आधिकारिक आईडी",
            login_user_placeholder: "अपना आधिकारिक उपयोगकर्ता नाम दर्ज करें...",
            login_pass_label: "पासवर्ड",
            login_pass_placeholder: "पासवर्ड दर्ज करें...",
            login_submit: "पोर्टल में साइन इन करें",
            login_demo_title: "पूर्व-कॉन्फ़िगर किए गए डेमो खाते:",
            login_teacher: "शिक्षक",
            login_deo: "डीईओ (शिक्षा अधिकारी)",
            login_notice: "🔒 संस्थागत पहुंच सूचना • खाते केवल जिला शिक्षा प्रशासक द्वारा अधिकृत हैं।",

            hero_badge: "पूर्व चेतावनी एवं छात्र हस्तक्षेप मंच",
            hero_title: "Scholar Notify",
            hero_subtitle: "पूर्व चेतावनी एवं छात्र हस्तक्षेप मंच",
            hero_tagline: "जोखिम को जल्दी पहचानें। कारण समझें। सही हस्तक्षेप करें। प्रगति ट्रैक करें।",
            hero_desc: "स्कॉलर नोटिफ़ाई शिक्षकों को जोखिम वाले छात्रों की शीघ्र पहचान करने, बहु-आयामी कारणों को समझने, लक्षित हस्तक्षेप समन्वित करने और सुधार की निरंतर निगरानी करने में सक्षम बनाता है।",
            hero_btn_action: "कार्रवाई केंद्र खोलें",
            hero_btn_risk: "छात्र जोखिम देखें",

            cmd_map_title: "प्लेटफ़ॉर्म कमांड मैप",
            cmd_surveillance: "सक्रिय निगरानी",
            cmd_roster_monitored: "कुल निगरानी छात्र",
            cmd_active_cases: "सक्रिय मामले",
            cmd_methodology: "प्रमुख कार्यप्रणाली",
            cmd_how_works: "स्कॉलर नोटिफ़ाई कैसे काम करता है",
            cmd_cycle_desc: "प्रारंभिक पहचान से लेकर निरंतर छात्र प्रतिधारण तक का चक्र",

            step_monitor: "निगरानी",
            step_monitor_desc: "उपस्थिति, शैक्षणिक और व्यवहारिक संकेतों की ट्रैकिंग।",
            step_detect: "पहचान",
            step_detect_desc: "बढ़ते जोखिम वाले छात्रों की प्रारंभिक पहचान।",
            step_understand: "समझें",
            step_understand_desc: "5 प्रमुख क्षेत्रों में मूल कारणों का विश्लेषण।",
            step_intervene: "हस्तक्षेप",
            step_intervene_desc: "उपचारात्मक शिक्षण, सरकारी योजनाएं और सहपाठी सहायता।",
            step_followup: "फॉलो-अप",
            step_followup_desc: "नियमित संपर्क और अभिभावक परामर्श का प्रबंधन।",
            step_measure: "मापन",
            step_measure_desc: "जोखिम में कमी और उपस्थिति सुधार का मूल्यांकन।",

            ac_urgent_title: "तत्काल छात्र हस्तक्षेप अपेक्षित",
            ac_urgent_desc: "मल्टी-वेक्टर जोखिम संकेतों के आधार पर तत्काल शिक्षक ध्यान की आवश्यकता।",
            filter_all: "सभी",
            filter_high: "उच्च प्राथमिकता",
            filter_moderate: "मध्यम प्राथमिकता",
            filter_routine: "सामान्य प्राथमिकता",
            search_placeholder: "नाम, रोल नंबर, गांव या पिता के नाम से खोजें...",

            btn_view_case: "केस देखें",
            btn_create_case: "नया केस बनाएं",
            btn_export: "CSV निर्यात करें",
            btn_close: "बंद करें",
            btn_save: "सहेजें",
            btn_submit: "जमा करें",
            btn_print: "प्रिंट करें",
            btn_cancel: "रद्द करें",
            risk_high: "उच्च जोखिम",
            risk_moderate: "मध्यम जोखिम",
            risk_low: "कम जोखिम",
            risk_safe: "स्थिर",
            lang_switched_toast: "भाषा सफलतापूर्वक बदली गई"
        },

        gu: {
            header_subtitle: "વિદ્યાર્થી હસ્તક્ષેપ બુદ્ધિમત્તા પ્રણાલી",
            logged_in_prefix: "લૉગ ઇન: ",
            logout: "લૉગ આઉટ",
            select_language: "ભાષા",

            nav_overview: "ઝાંખી",
            nav_action_center: "એક્શન સેન્ટર",
            nav_ews: "પ્રારંભિક ચેતવણી",
            nav_multivector: "મલ્ટી-વેક્ટર",
            nav_cases: "કેસો",
            nav_followups: "ફોલો-અપ્સ",
            nav_smart_intake: "સ્માર્ટ ઇનટેક",
            nav_schemes: "કલ્યાણકારી યોજનાઓ",
            nav_simulator: "સિમ્યુલેટર",
            nav_sathi: "સાથી મેન્ટર",
            nav_emergency: "ઇમરજન્સી",

            login_system_title: "રાજ્ય શિક્ષણ વિદ્યાર્થી જાળવણી પ્રણાલી",
            login_brand_sub: "સત્તાવાર સંસ્થાકીય સાઇન-ઇન પોર્ટલ",
            login_user_label: "વપરાશકર્તા નામ / સત્તાવાર આઈડી",
            login_user_placeholder: "તમારું અધિકૃત વપરાશકર્તા નામ દાખલ કરો...",
            login_pass_label: "પાસવર્ડ",
            login_pass_placeholder: "પાસવર્ડ દાખલ કરો...",
            login_submit: "પોર્ટલમાં સાઇન ઇન કરો",
            login_demo_title: "પૂર્વ-રૂપરેખાંકિત ડેમો એકાઉન્ટ્સ:",
            login_teacher: "શિક્ષક",
            login_deo: "ડીઈઓ (જિલ્લા શિક્ષણ અધિકારી)",
            login_notice: "🔒 સંસ્થાકીય ઍક્સેસ સૂચના • ખાતાઓ ફક્ત જિલ્લા વહીવટકર્તા દ્વારા ફાળવવામાં આવે છે.",

            hero_badge: "પ્રારંભિક ચેતવણી અને વિદ્યાર્થી હસ્તક્ષેપ પ્લેટફોર્મ",
            hero_title: "Scholar Notify",
            hero_subtitle: "પ્રારંભિક ચેતવણી અને વિદ્યાર્થી હસ્તક્ષેપ પ્લેટફોર્મ",
            hero_tagline: "જોખમને વહેલા ઓળખો. કારણ સમજો. યોગ્ય હસ્તક્ષેપ કરો. પ્રગતિ ટ્રેક કરો.",
            hero_desc: "સ્કોલર નોટિફાઇ શિક્ષકોને જોખમ ધરાવતા વિદ્યાર્થીઓને વહેલી તકે ઓળખવામાં, મૂળ કારણો સમજવામાં, લક્ષ્યાંકિત સહાય પૂરી પાડવામાં અને પ્રગતિ પર નજર રાખવામાં મદદ કરે છે.",
            hero_btn_action: "એક્શન સેન્ટર ખોલો",
            hero_btn_risk: "વિદ્યાર્થી જોખમ તપાસો",

            cmd_map_title: "પ્લેટફોર્મ કમાન્ડ મેપ",
            cmd_surveillance: "સક્રિય દેખરેખ",
            cmd_roster_monitored: "કુલ વિદ્યાર્થીઓ",
            cmd_active_cases: "સક્રિય કેસો",
            cmd_methodology: "મુખ્ય કાર્યપદ્ધતિ",
            cmd_how_works: "સ્કોલર નોટિફાઇ કેવી રીતે કાર્ય કરે છે",
            cmd_cycle_desc: "પ્રારંભિક તપાસથી લઈને સતત વિદ્યાર્થી જાળવણી સુધીનું ચક્ર",

            step_monitor: "દેખરેખ",
            step_monitor_desc: "હાજરી, શૈક્ષણિક અને વર્તણૂક સંકેતોનું ટ્રેકિંગ.",
            step_detect: "ઓળખ",
            step_detect_desc: "જોખમ ધરાવતા વિદ્યાર્થીઓની તુરંત ઓળખ.",
            step_understand: "સમજૂતી",
            step_understand_desc: "5 મુખ્ય પરિમાણોમાં મૂળ કારણોનું વિશ્લેષણ.",
            step_intervene: "હસ્તક્ષેપ",
            step_intervene_desc: "સુધારાલક્ષી શિક્ષણ, સરકારી યોજનાઓ અને સાથી સહાય.",
            step_followup: "ફોલો-અપ",
            step_followup_desc: "નિયમિત મુલાકાતો અને વાલી પરામર્શનું આયોજન.",
            step_measure: "મૂલ્યાંકન",
            step_measure_desc: "જોખમમાં ઘટાડો અને હાજરી પુનઃપ્રાપ્તિની ચકાસણી.",

            ac_urgent_title: "ત્વરિત વિદ્યાર્થી હસ્તક્ષેપ જરૂરી",
            ac_urgent_desc: "મલ્ટી-વેક્ટર જોખમ સંકેતો અનુસાર તુરંત શિક્ષકનું ધ્યાન અપેક્ષિત છે.",
            filter_all: "બધા",
            filter_high: "ઉચ્ચ પ્રાથમિકતા",
            filter_moderate: "મધ્યમ પ્રાથમિકતા",
            filter_routine: "સામાન્ય પ્રાથમિકતા",
            search_placeholder: "નામ, રોલ નંબર, ગામ અથવા પિતાના નામથી શોધો...",

            btn_view_case: "કેસ જુઓ",
            btn_create_case: "નવો કેસ બનાવો",
            btn_export: "CSV ડાઉનલોડ કરો",
            btn_close: "બંધ કરો",
            btn_save: "સાચવો",
            btn_submit: "સબમિટ કરો",
            btn_print: "પ્રિન્ટ કરો",
            btn_cancel: "રદ કરો",
            risk_high: "ઉચ્ચ જોખમ",
            risk_moderate: "મધ્યમ જોખમ",
            risk_low: "ઓછું જોખમ",
            risk_safe: "સ્થિર",
            lang_switched_toast: "ભાષા સફળતાપૂર્વક બદલાઈ ગઈ છે"
        },

        mr: {
            header_subtitle: "विद्यार्थी हस्तक्षेप बुद्धिमत्ता प्रणाली",
            logged_in_prefix: "लॉग इन: ",
            logout: "लॉग आउट",
            select_language: "भाषा",

            nav_overview: "आढावा",
            nav_action_center: "कृती केंद्र",
            nav_ews: "पूर्वसूचना",
            nav_multivector: "मल्टी-व्हेक्टर",
            nav_cases: "प्रकरणे",
            nav_followups: "फॉलो-अप्स",
            nav_smart_intake: "स्मार्ट इनटेक",
            nav_schemes: "कल्याणकारी योजना",
            nav_simulator: "सिम्युलेटर",
            nav_sathi: "साथी मेंटर",
            nav_emergency: "आणीबाणी",

            login_system_title: "राज्य शिक्षण विद्यार्थी धारणा प्रणाली",
            login_brand_sub: "अधिकृत संस्थात्मक साइन-इन पोर्टल",
            login_user_label: "वापरकर्ता नाव / अधिकृत आयडी",
            login_user_placeholder: "आपले अधिकृत नाव प्रविष्ट करा...",
            login_pass_label: "पासवर्ड",
            login_pass_placeholder: "पासवर्ड प्रविष्ट करा...",
            login_submit: "पोर्टलवर साइन इन करा",
            login_demo_title: "पूर्व-कॉन्फिगर केलेले डेमो खाती:",
            login_teacher: "शिक्षक",
            login_deo: "शिक्षणाधिकारी (DEO)",
            login_notice: "🔒 संस्थात्मक प्रवेश सूचना • खाती केवळ जिल्हा प्रशासकाद्वारे दिली जातात.",

            hero_badge: "पूर्वसूचना व विद्यार्थी हस्तक्षेप मंच",
            hero_title: "Scholar Notify",
            hero_subtitle: "पूर्वसूचना व विद्यार्थी हस्तक्षेप मंच",
            hero_tagline: "धोका वेळेवर ओळखा. कारणे समजून घ्या. योग्य हस्तक्षेप करा. प्रगतीचा मागोवा घ्या.",
            hero_desc: "स्कॉलर नोटिफाय शिक्षकांना अडचणीतील विद्यार्थ्यांची वेळेवर ओळख पटवून, कारणे समजून, योग्य योजना राबवून प्रगती तपासण्यास मदत करते.",
            hero_btn_action: "कृती केंद्र उघडा",
            hero_btn_risk: "विद्यार्थी धोका तपासा",

            cmd_map_title: "प्लॅटफॉर्म कमांड मॅप",
            cmd_surveillance: "सक्रिय देखरेख",
            cmd_roster_monitored: "एकूण विद्यार्थी",
            cmd_active_cases: "सक्रिय प्रकरणे",
            cmd_methodology: "कार्यपद्धती",
            cmd_how_works: "स्कॉलर नोटिफाय कसे कार्य करते",
            cmd_cycle_desc: "लवकर शोध घेण्यापासून ते सतत विद्यार्थी टिकवून ठेवण्यापर्यंतचे चक्र",

            step_monitor: "निरीक्षण",
            step_monitor_desc: "उपस्थिती व शैक्षणिक प्रगतीचा मागोवा.",
            step_detect: "शोध",
            step_detect_desc: "धोक्यात असलेल्या विद्यार्थ्यांची जलद ओळख.",
            step_understand: "समजून घ्या",
            step_understand_desc: "५ प्रमुख घटकांमध्ये मूळ कारणांचे विश्लेषण.",
            step_intervene: "हस्तक्षेप",
            step_intervene_desc: "उपचारात्मक अध्यापन, योजना आणि मदत.",
            step_followup: "फॉलो-अप",
            step_followup_desc: "पालक संवाद आणि नियमित पाठपुरावा.",
            step_measure: "मापन",
            step_measure_desc: "धोका कमी होणे आणि उपस्थिती सुधारणा मोजणे.",

            ac_urgent_title: "तातडीने विद्यार्थी हस्तक्षेप आवश्यक",
            ac_urgent_desc: "मल्टी-व्हेक्टर माहितीनुसार त्वरित शिक्षकांचे लक्ष आवश्यक आहे.",
            filter_all: "सर्व",
            filter_high: "उच्च प्राधान्य",
            filter_moderate: "मध्यम प्राधान्य",
            filter_routine: "नेहमीचे प्राधान्य",
            search_placeholder: "नाव, हजेरी क्र., गाव किंवा वडिलांच्या नावाने शोधा...",

            btn_view_case: "प्रकरण पहा",
            btn_create_case: "नवीन केस तयार करा",
            btn_export: "CSV एक्सपोर्ट करा",
            btn_close: "बंद करा",
            btn_save: "जतन करा",
            btn_submit: "सबमिट करा",
            btn_print: "प्रिंट करा",
            btn_cancel: "रद्द करा",
            risk_high: "उच्च धोका",
            risk_moderate: "मध्यम धोका",
            risk_low: "कमी धोका",
            risk_safe: "स्थिर",
            lang_switched_toast: "भाषा यशस्वीरित्या बदलली आहे"
        },

        ta: {
            header_subtitle: "மாணவர் தலையீட்டு நுண்ணறிவு தளம்",
            logged_in_prefix: "உள்நுழைந்துள்ளார்: ",
            logout: "வெளியேறு",
            select_language: "மொழி",

            nav_overview: "கண்ணோட்டம்",
            nav_action_center: "செயல் மையம்",
            nav_ews: "முன்னெச்சரிக்கை",
            nav_multivector: "பல-திசையன்",
            nav_cases: "வழக்குகள்",
            nav_followups: "தொடர் நடவடிக்கைகள்",
            nav_smart_intake: "ஸ்மார்ட் உள்ளீடு",
            nav_schemes: "திட்டங்கள்",
            nav_simulator: "சிமுலேட்டர்",
            nav_sathi: "சாதி தோழர்",
            nav_emergency: "அவசரம்",

            login_system_title: "மாநில கல்வி மாணவர் தக்கவைப்பு அமைப்பு",
            login_brand_sub: "அதிகாரப்பூர்வ நிறுவன உள்நுழைவு தளம்",
            login_user_label: "பயனர்பெயர் / அடையாள எண்",
            login_user_placeholder: "உங்கள் பயனர்பெயரை உள்ளிடவும்...",
            login_pass_label: "கடவுச்சொல்",
            login_pass_placeholder: "கடவுச்சொல்லை உள்ளிடவும்...",
            login_submit: "உள்நுழையவும்",
            login_demo_title: "மாதிரி கணக்குகள்:",
            login_teacher: "ஆசிரியர்",
            login_deo: "மாவட்ட கல்வி அலுவலர்",
            login_notice: "🔒 மாவட்ட நிர்வாகத்தால் வழங்கப்பட்ட கணக்குகள் மட்டுமே செயல்படும்.",

            hero_badge: "முன்னெச்சரிக்கை மற்றும் மாணவர் தலையீட்டு தளம்",
            hero_title: "Scholar Notify",
            hero_subtitle: "முன்னெச்சரிக்கை மற்றும் மாணவர் தலையீட்டு தளம்",
            hero_tagline: "ஆபத்தை முன்கூட்டியே கண்டறியவும். காரணத்தை அறியவும். சரியான ஆதரவளிக்கவும்.",
            hero_desc: "ஆதரவு தேவைப்படும் மாணவர்களைக் கண்டறியவும், காரணங்களை ஆராயவும், தலையீடுகளை ஒருங்கிணைக்கவும் ஆசிரியர்களுக்கு ஸ்காலர் நோட்டிஃபை உதவுகிறது.",
            hero_btn_action: "செயல் மையம் திறக்க",
            hero_btn_risk: "மாணவர் ஆபத்தை ஆராய்க",

            cmd_map_title: "கட்டளை வரைபடம்",
            cmd_surveillance: "தீவிர கண்காணிப்பு",
            cmd_roster_monitored: "கண்காணிக்கப்படும் மாணவர்கள்",
            cmd_active_cases: "செயலில் உள்ள வழக்குகள்",
            cmd_methodology: "முக்கிய வழிமுறை",
            cmd_how_works: "ஸ்காலர் நோட்டிஃபை எவ்வாறு செயல்படுகிறது",
            cmd_cycle_desc: "முன்கூட்டியே கண்டறிதலிலிருந்து மாணவர் தக்கவைப்பு வரை தொடர்ச்சியான சுழற்சி",

            step_monitor: "கண்காணிப்பு",
            step_monitor_desc: "வருகை மற்றும் கல்வி முன்னேற்றத்தைக் கண்காணித்தல்.",
            step_detect: "கண்டறிதல்",
            step_detect_desc: "அதிக ஆபத்துள்ள மாணவர்களை அடையாளம் காணுதல்.",
            step_understand: "புரிந்துகொள்ளுதல்",
            step_understand_desc: "5 காரணிகளில் அடிப்படை சிக்கல்களை பகுப்பாய்வு செய்தல்.",
            step_intervene: "தலையீடு",
            step_intervene_desc: "சிறப்பு பயிற்சி, அரசு நலத்திட்டங்கள் மற்றும் வழிகாட்டுதல்.",
            step_followup: "தொடர் ஆய்வு",
            step_followup_desc: "பெற்றோர் ஆலோசனை மற்றும் வழக்கமான பின்தொடர்தல்.",
            step_measure: "அளவிடுதல்",
            step_measure_desc: "வருகை அதிகரிப்பு மற்றும் ஆபத்து குறைப்பை அளவிடுதல்.",

            ac_urgent_title: "உடனடி மாணவர் தலையீடு தேவை",
            ac_urgent_desc: "பல காரணிகளின் அடிப்படையில் உடனடியாக ஆசிரியரின் கவனம் தேவைப்படுகிறது.",
            filter_all: "அனைத்தும்",
            filter_high: "முக்கிய முன்னுரிமை",
            filter_moderate: "நடுத்தர முன்னுரிமை",
            filter_routine: "வழக்கமான முன்னுரிமை",
            search_placeholder: "பெயர், எண், கிராமம் அல்லது பெற்றோர் பெயர் கொண்டு தேடுக...",

            btn_view_case: "வழக்கை பார்க்க",
            btn_create_case: "புதிய வழக்கு",
            btn_export: "CSV பதிவிறக்கம்",
            btn_close: "மூடு",
            btn_save: "சேமி",
            btn_submit: "சமர்ப்பி",
            btn_print: "அச்சிடுக",
            btn_cancel: "ரத்து செய்",
            risk_high: "அதிக ஆபத்து",
            risk_moderate: "நடுத்தர ஆபத்து",
            risk_low: "குறைந்த ஆபத்து",
            risk_safe: "நிலையானது",
            lang_switched_toast: "மொழி வெற்றிகரமாக மாற்றப்பட்டது"
        },

        te: {
            header_subtitle: "విద్యార్థి జోక్య సమాచార వేదిక",
            logged_in_prefix: "లాగిన్ అయ్యారు: ",
            logout: "లాగ్ అవుట్",
            select_language: "భాష",

            nav_overview: "అవలోకనం",
            nav_action_center: "చర్య కేంద్రం",
            nav_ews: "ముందస్తు హెచ్చరిక",
            nav_multivector: "మల్టీ-వెక్టార్",
            nav_cases: "కేసులు",
            nav_followups: "ఫాలో-అప్‌లు",
            nav_smart_intake: "స్మార్ట్ ఇన్‌టేక్",
            nav_schemes: "సంక్షేమ పథకాలు",
            nav_simulator: "సిమ్యులేటర్",
            nav_sathi: "సాథీ మెంటర్",
            nav_emergency: "అత్యవసర",

            login_system_title: "రాష్ట్ర విద్యార్థి నమోదు & నిలుపుదల వ్యవస్థ",
            login_brand_sub: "అధికారిక సంస్థాగత సైన్-ఇన్ పోర్టల్",
            login_user_label: "యూజర్‌నేమ్ / అధికారిక ఐడీ",
            login_user_placeholder: "మీ అధికారిక యూజర్‌నేమ్ నమోదు చేయండి...",
            login_pass_label: "పాస్‌వర్డ్",
            login_pass_placeholder: "పాస్‌వర్డ్ నమోదు చేయండి...",
            login_submit: "పోర్టల్‌లోకి ప్రవేశించండి",
            login_demo_title: "డెమో ఖాతాలు:",
            login_teacher: "ఉపాధ్యాయుడు",
            login_deo: "డీఈవో (జిల్లా విద్యాశాఖాధికారి)",
            login_notice: "🔒 జిల్లా విద్యాశాఖ ద్వారా కేటాయించబడిన ఖాతాలు మాత్రమే అనుమతించబడతాయి.",

            hero_badge: "ముందస్తు హెచ్చరిక & విద్యార్థి జోక్య వేదిక",
            hero_title: "Scholar Notify",
            hero_subtitle: "ముందస్తు హెచ్చరిక & విద్యార్థి జోక్య వేదిక",
            hero_tagline: "రిస్క్‌ను ముందుగానే గుర్తించండి. కారణం అర్థం చేసుకోండి. సరైన జోక్యం చేసుకోండి.",
            hero_desc: "స్కాలర్ నోటిఫై ఉపాధ్యాయులకు అవసరమైన విద్యార్థులను గుర్తించడానికి, కారణాలు విశ్లేషించడానికి, సంక్షేమ పథకాలు అందించడానికి సహాయపడుతుంది.",
            hero_btn_action: "చర్య కేంద్రం తెరవండి",
            hero_btn_risk: "విద్యార్థి రిస్క్ పరిశీలించండి",

            cmd_map_title: "కమాండ్ మ్యాప్",
            cmd_surveillance: "చురుకైన పర్యవేక్షణ",
            cmd_roster_monitored: "పర్యవేక్షణలో విద్యార్థులు",
            cmd_active_cases: "యాక్టివ్ కేసులు",
            cmd_methodology: "కార్యాచరణ విధానం",
            cmd_how_works: "స్కాలర్ నోటిఫై ఎలా పనిచేస్తుంది",
            cmd_cycle_desc: "ముందస్తు గుర్తింపు నుండి విద్యార్థి నిలుపుదల వరకు నిరంతర ప్రక్రియ",

            step_monitor: "పర్యవేక్షణ",
            step_monitor_desc: "హాజరు, విద్యా ప్రతిభ మరియు సంకేతాల ట్రాకింగ్.",
            step_detect: "గుర్తింపు",
            step_detect_desc: "రిస్క్‌లో ఉన్న విద్యార్థుల సత్వర గుర్తింపు.",
            step_understand: "అర్థం చేసుకోండి",
            step_understand_desc: "5 కీలక రంగాల్లో మూల కారణాల విశ్లేషణ.",
            step_intervene: "జోక్యం",
            step_intervene_desc: "ప్రత్యేక బోధన, సంక్షేమ పథకాలు మరియు మద్దతు.",
            step_followup: "ఫాలో-అప్",
            step_followup_desc: "తల్లిదండ్రుల సంప్రదింపులు మరియు నిరంతర సమీక్ష.",
            step_measure: "కొలమానం",
            step_measure_desc: "హాజరు పెరుగుదల మరియు రిస్క్ తగ్గింపును అంచనా వేయడం.",

            ac_urgent_title: "తక్షణ విద్యార్థి జోక్యం అవసరం",
            ac_urgent_desc: "మల్టీ-వెక్టార్ సంకేతాల ఆధారంగా ఉపాధ్యాయుల తక్షణ శ్రద్ధ అవసరం.",
            filter_all: "అన్నీ",
            filter_high: "అధిక ప్రాధాన్యత",
            filter_moderate: "మధ్యస్థ ప్రాధాన్యత",
            filter_routine: "సాధారణ ప్రాధాన్యత",
            search_placeholder: "పేరు, రోల్ నెం., గ్రామం లేదా తండ్రి పేరుతో శోధించండి...",

            btn_view_case: "కేసు చూడండి",
            btn_create_case: "కొత్త కేసు",
            btn_export: "CSV ఎగుమతి",
            btn_close: "మూసివేయి",
            btn_save: "భద్రపరుచు",
            btn_submit: "సమర్పించు",
            btn_print: "ప్రింట్ చేయండి",
            btn_cancel: "రద్దు చేయండి",
            risk_high: "అధిక రిస్క్",
            risk_moderate: "మధ్యస్థ రిస్క్",
            risk_low: "తక్కువ రిస్క్",
            risk_safe: "స్థిరం",
            lang_switched_toast: "భాష విజయవంతంగా మార్చబడింది"
        },

        kn: {
            header_subtitle: "ವಿದ್ಯಾರ್ಥಿ ಮಧ್ಯಸ್ಥಿಕೆ ಬುದ್ಧಿಮತ್ತೆ ವೇದಿಕೆ",
            logged_in_prefix: "ಲಾಗಿನ್ ಆಗಿದೆ: ",
            logout: "ಲಾಗ್ ಔಟ್",
            select_language: "ಭಾಷೆ",

            nav_overview: "ಅವಲೋಕನ",
            nav_action_center: "ಕ್ರಿಯಾ ಕೇಂದ್ರ",
            nav_ews: "ಮುಂಚಿನ ಎಚ್ಚರಿಕೆ",
            nav_multivector: "ಮಲ್ಟಿ-ವೆಕ್ಟರ್",
            nav_cases: "ಪ್ರಕರಣಗಳು",
            nav_followups: "ಫಾಲೋ-ಅಪ್‌ಗಳು",
            nav_smart_intake: "ಸ್ಮಾರ್ಟ್ ಇನ್‌ಟೇಕ್",
            nav_schemes: "ಯೋಜನೆಗಳು",
            nav_simulator: "ಸಿಮ್ಯುಲೇಟರ್",
            nav_sathi: "ಸಾಥಿ ಸ್ನೇಹಿತ",
            nav_emergency: "ತುರ್ತು",

            login_system_title: "ರಾಜ್ಯ ಶಿಕ್ಷಣ ವಿದ್ಯಾರ್ಥಿ ಧಾರಣಾ ವ್ಯವಸ್ಥೆ",
            login_brand_sub: "ಅಧಿಕೃತ ಸಂಸ್ಥೆಯ ಸೈನ್-ಇನ್ ಪೋರ್ಟಲ್",
            login_user_label: "ಬಳಕೆದಾರ ಹೆಸರು / ಅಧಿಕೃತ ಐಡಿ",
            login_user_placeholder: "ನಿಮ್ಮ ಅಧಿಕೃತ ಬಳಕೆದಾರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ...",
            login_pass_label: "ಪಾಸ್‌ವರ್ಡ್",
            login_pass_placeholder: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ...",
            login_submit: "ಪೋರ್ಟಲ್‌ಗೆ ಪ್ರವೇಶಿಸಿ",
            login_demo_title: "ಡೆಮೊ ಖಾತೆಗಳು:",
            login_teacher: "ಶಿಕ್ಷಕ",
            login_deo: "ಡಿಡಿಪಿಐ / ಶಿಕ್ಷಣಾಧಿಕಾರಿ",
            login_notice: "🔒 ಜಿಲ್ಲಾಡಳಿತದಿಂದ ಅಧಿಕೃತಗೊಳಿಸಲಾದ ಖಾತೆಗಳಿಗೆ ಮಾತ್ರ ಪ್ರವೇಶವಿದೆ.",

            hero_badge: "ಮುಂಚಿನ ಎಚ್ಚರಿಕೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಮಧ್ಯಸ್ಥಿಕೆ ವೇದಿಕೆ",
            hero_title: "Scholar Notify",
            hero_subtitle: "ಮುಂಚಿನ ಎಚ್ಚರಿಕೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಮಧ್ಯಸ್ಥಿಕೆ ವೇದಿಕೆ",
            hero_tagline: "ಅಪಾಯವನ್ನು ಮೊದಲೇ ಗುರುತಿಸಿ. ಕಾರಣ ತಿಳಿಯಿರಿ. ಸೂಕ್ತ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ.",
            hero_desc: "ಸ್ಕಾಲರ್ ನೋಟಿಫೈ ಶಿಕ್ಷಕರಿಗೆ ಅಗತ್ಯವಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಗುರುತಿಸಲು, ಕಾರಣಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಪ್ರಗತಿ ಪರಿಶೀಲಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
            hero_btn_action: "ಕ್ರಿಯಾ ಕೇಂದ್ರ ತೆರೆಯಿರಿ",
            hero_btn_risk: "ವಿದ್ಯಾರ್ಥಿ ರಿಸ್ಕ್ ನೋಡಿ",

            cmd_map_title: "ಕಮಾಂಡ್ ಮ್ಯಾಪ್",
            cmd_surveillance: "ಸಕ್ರಿಯ ಕಣ್ಗಾವಲು",
            cmd_roster_monitored: "ವೀಕ್ಷಿಸಲಾದ ವಿದ್ಯಾರ್ಥಿಗಳು",
            cmd_active_cases: "ಸಕ್ರಿಯ ಪ್ರಕರಣಗಳು",
            cmd_methodology: "ಕಾರ್ಯವಿಧಾನ",
            cmd_how_works: "ಸ್ಕಾಲರ್ ನೋಟಿಫೈ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
            cmd_cycle_desc: "ಆರಂಭಿಕ ಪತ್ತೆಯಿಂದ ವಿದ್ಯಾರ್ಥಿ ಧಾರಣೆಯವರೆಗಿನ ನಿರಂತರ ಚಕ್ರ",

            step_monitor: "ಮೇಲ್ವಿಚಾರಣೆ",
            step_monitor_desc: "ಹಾಜರಾತಿ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿಯ ಟ್ರ್ಯಾಕಿಂಗ್.",
            step_detect: "ಪತ್ತೆಹಚ್ಚುವಿಕೆ",
            step_detect_desc: "ಹೆಚ್ಚಿನ ಅಪಾಯದಲ್ಲಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳ ಗುರುತಿಸುವಿಕೆ.",
            step_understand: "ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
            step_understand_desc: "5 ಮುಖ್ಯ ಅಂಶಗಳಲ್ಲಿ ಮೂಲ ಕಾರಣಗಳ ವಿಶ್ಲೇಷಣೆ.",
            step_intervene: "ಕ್ರಮ ಕೈಗೊಳ್ಳಿ",
            step_intervene_desc: "ಪರಿಹಾರ ಬೋಧನೆ, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ.",
            step_followup: "ಫಾಲೋ-ಅಪ್",
            step_followup_desc: "ಪೋಷಕರ ಸಮಾಲೋಚನೆ ಮತ್ತು ನಿಯಮಿತ ಪರಿಶೀಲನೆ.",
            step_measure: "ಅಳತೆ",
            step_measure_desc: "ಹಾಜರಾತಿ ಸುಧಾರಣೆ ಮತ್ತು ಅಪಾಯದ ಕಡಿತದ ಮೌಲ್ಯಮಾಪನ.",

            ac_urgent_title: "ತುರ್ತು ವಿದ್ಯಾರ್ಥಿ ಮಧ್ಯಸ್ಥಿಕೆ ಅಗತ್ಯವಿದೆ",
            ac_urgent_desc: "ಮಲ್ಟಿ-ವೆಕ್ಟರ್ ಸಂಕೇತಗಳ ಆಧಾರದ ಮೇಲೆ ತಕ್ಷಣದ ಶಿಕ್ಷಕರ ಗಮನ ಅಗತ್ಯವಿದೆ.",
            filter_all: "ಎಲ್ಲಾ",
            filter_high: "ಹೆಚ್ಚಿನ ಆದ್ಯತೆ",
            filter_moderate: "ಮಧ್ಯಮ ಆದ್ಯತೆ",
            filter_routine: "ಸಾಮಾನ್ಯ ಆದ್ಯತೆ",
            search_placeholder: "ಹೆಸರು, ರೋಲ್ ನಂ, ಊರು ಅಥವಾ ತಂದೆಯ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ...",

            btn_view_case: "ಕೇಸ್ ವೀಕ್ಷಿಸಿ",
            btn_create_case: "ಹೊಸ ಕೇಸ್",
            btn_export: "CSV ರಫ್ತು ಮಾಡಿ",
            btn_close: "ಮುಚ್ಚಿ",
            btn_save: "ಉಳಿಸಿ",
            btn_submit: "ಸಲ್ಲಿಸಿ",
            btn_print: "ಮುದ್ರಿಸಿ",
            btn_cancel: "ರದ್ದುಮಾಡಿ",
            risk_high: "ಹೆಚ್ಚಿನ ಅಪಾಯ",
            risk_moderate: "ಮಧ್ಯಮ ಅಪಾಯ",
            risk_low: "ಕಡಿಮೆ ಅಪಾಯ",
            risk_safe: "ಸ್ಥಿರ",
            lang_switched_toast: "ಭಾಷೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಬದಲಾಯಿಸಲಾಗಿದೆ"
        },

        ml: {
            header_subtitle: "വിദ്യാർത്ഥി ഇടപെടൽ ബുദ്ധിശക്തി പ്ലാറ്റ്ഫോം",
            logged_in_prefix: "ലോഗിൻ ചെയ്തു: ",
            logout: "ലോഗ് ഔട്ട്",
            select_language: "ഭാഷ",

            nav_overview: "അവലോകനം",
            nav_action_center: "ആക്ഷൻ സെന്റർ",
            nav_ews: "മുൻകൂർ മുന്നറിയിപ്പ്",
            nav_multivector: "മൾട്ടി-വെക്റ്റർ",
            nav_cases: "കേസുകൾ",
            nav_followups: "തുടർനടപടികൾ",
            nav_smart_intake: "സ്മാർട്ട് ഇൻടേക്ക്",
            nav_schemes: "പദ്ധതികൾ",
            nav_simulator: "സിമുലേറ്റർ",
            nav_sathi: "സാഥി മെന്റർ",
            nav_emergency: "അടിയന്തിരം",

            login_system_title: "സംസ്ഥാന വിദ്യാഭ്യാസ വിദ്യാർത്ഥി നിലനിർത്തൽ സംവിധാനം",
            login_brand_sub: "ഔദ്യോഗിക സ്ഥാപന സൈൻ-ഇൻ പോർട്ടൽ",
            login_user_label: "ഉപയോക്തൃനാമം / ഔദ്യോഗിക ഐഡി",
            login_user_placeholder: "നിങ്ങളുടെ ഔദ്യോഗിക ഐഡി നൽകുക...",
            login_pass_label: "പാസ്‌വേഡ്",
            login_pass_placeholder: "പാസ്‌വേഡ് നൽകുക...",
            login_submit: "പോർട്ടലിലേക്ക് പ്രവേശിക്കുക",
            login_demo_title: "ഡെമോ അക്കൗണ്ടുകൾ:",
            login_teacher: "അധ്യാപകൻ",
            login_deo: "ഡി.ഇ.ഒ (വിദ്യാഭ്യാസ ഓഫീസർ)",
            login_notice: "🔒 ജില്ലാ വിദ്യാഭ്യാസ അഡ്മിനിസ്ട്രേറ്റർ അനുവദിച്ച അക്കൗണ്ടുകൾക്ക് മാത്രം പ്രവേശനം.",

            hero_badge: "മുൻകൂർ മുന്നറിയിപ്പും വിദ്യാർത്ഥി ഇടപെടൽ പ്ലാറ്റ്ഫോമും",
            hero_title: "Scholar Notify",
            hero_subtitle: "മുൻകൂർ മുന്നറിയിപ്പും വിദ്യാർത്ഥി ഇടപെടൽ പ്ലാറ്റ്ഫോമും",
            hero_tagline: "റിസ്ക് നേരത്തെ തിരിച്ചറിയുക. കാരണം മനസ്സിലാക്കുക. ശരിയായ ഇടപെടൽ നടത്തുക.",
            hero_desc: "സഹായം ആവശ്യമുള്ള വിദ്യാർത്ഥികളെ കണ്ടെത്താനും, കാരണങ്ങൾ മനസ്സിലാക്കാനും, പിന്തുണ ഉറപ്പാക്കാനും അധ്യാപകരെ സ്കോളർ നോട്ടിഫൈ സഹായിക്കുന്നു.",
            hero_btn_action: "ആക്ഷൻ സെന്റർ തുറക്കുക",
            hero_btn_risk: "വിദ്യാർത്ഥി റിസ്ക് പരിശോധിക്കുക",

            cmd_map_title: "കമാൻഡ് മാപ്പ്",
            cmd_surveillance: "സജീവ നിരീക്ഷണം",
            cmd_roster_monitored: "നിരീക്ഷിക്കുന്ന വിദ്യാർത്ഥികൾ",
            cmd_active_cases: "സജീവ കേസുകൾ",
            cmd_methodology: "പ്രധാന പ്രവർത്തനരീതി",
            cmd_how_works: "സ്കോളർ നോട്ടിഫൈ എങ്ങനെ പ്രവർത്തിക്കുന്നു",
            cmd_cycle_desc: "നേരത്തെ കണ്ടെത്തൽ മുതൽ വിദ്യാർത്ഥി നിലനിർത്തൽ വരെയുള്ള തുടർച്ചയായ പ്രക്രിയ",

            step_monitor: "നിരീക്ഷണം",
            step_monitor_desc: "ഹാജരും പഠന പുരോഗതിയും ട്രാക്ക് ചെയ്യുക.",
            step_detect: "കണ്ടെത്തൽ",
            step_detect_desc: "അപകടസാധ്യതയുള്ള വിദ്യാർത്ഥികളെ വേഗത്തിൽ കണ്ടെത്തുക.",
            step_understand: "മനസ്സിലാക്കുക",
            step_understand_desc: "5 മേഖലകളിലെ അടിസ്ഥാന കാരണങ്ങൾ വിശകലനം ചെയ്യുക.",
            step_intervene: "ഇടപെടൽ",
            step_intervene_desc: "പ്രത്യേക പരിശീലനം, സർക്കാർ പദ്ധതികൾ, സഹായം.",
            step_followup: "തുടർനടപടി",
            step_followup_desc: "രക്ഷിതാക്കളുമായുള്ള ആശയവിനിമയവും അവലോകനവും.",
            step_measure: "വിലയിരുത്തൽ",
            step_measure_desc: "ഹാജർ നില മെച്ചപ്പെടലും റിസ്ക് കുറയലും അളക്കുക.",

            ac_urgent_title: "ഉടൻ വിദ്യാർത്ഥി ഇടപെടൽ ആവശ്യമാണ്",
            ac_urgent_desc: "വിവിധ ഘടകങ്ങളുടെ അടിസ്ഥാനത്തിൽ അധ്യാപകന്റെ അടിയന്തിര ശ്രദ്ധ ആവശ്യമാണ്.",
            filter_all: "എല്ലാം",
            filter_high: "ഉയർന്ന മുൻഗണന",
            filter_moderate: "ഇടത്തരം മുൻഗണന",
            filter_routine: "സാധാരണ മുൻഗണന",
            search_placeholder: "പേര്, റോൾ നമ്പർ, സ്ഥലം അല്ലെങ്കിൽ പിതാവിന്റെ പേര് നൽകി തിരയുക...",

            btn_view_case: "കേസ് കാണുക",
            btn_create_case: "പുതിയ കേസ്",
            btn_export: "CSV ഡൗൺലോഡ്",
            btn_close: "അടയ്ക്കുക",
            btn_save: "സേവ് ചെയ്യുക",
            btn_submit: "സമർപ്പിക്കുക",
            btn_print: "പ്രിന്റ് ചെയ്യുക",
            btn_cancel: "റദ്ദാക്കുക",
            risk_high: "ഉയർന്ന റിസ്ക്",
            risk_moderate: "ഇടത്തരം റിസ്ക്",
            risk_low: "കുറഞ്ഞ റിസ്ക്",
            risk_safe: "സുരക്ഷിതം",
            lang_switched_toast: "ഭാഷ വിജയകരമായി മാറ്റി"
        },

        bn: {
            header_subtitle: "শিক্ষার্থী হস্তক্ষেপ গোয়েন্দা ব্যবস্থা",
            logged_in_prefix: "লগ ইন আছেন: ",
            logout: "লগ আউট",
            select_language: "ভাষা",

            nav_overview: "সংক্ষিপ্ত বিবরণ",
            nav_action_center: "অ্যাকশন সেন্টার",
            nav_ews: "আগাম সতর্কতা",
            nav_multivector: "মাল্টি-ভেক্টর",
            nav_cases: "মামলা",
            nav_followups: "অনুসরণ",
            nav_smart_intake: "স্মার্ট ইনটেক",
            nav_schemes: "সরকারি প্রকল্প",
            nav_simulator: "সিমুলেটর",
            nav_sathi: "সাথী মেন্টর",
            nav_emergency: "জরুরী",

            login_system_title: "রাজ্য শিক্ষা শিক্ষার্থী ধরে রাখার ব্যবস্থা",
            login_brand_sub: "প্রাতিষ্ঠানিক সাইন-ইন পোর্টাল",
            login_user_label: "ব্যবহারকারী নাম / অফিসিয়াল আইডি",
            login_user_placeholder: "আপনার ব্যবহারকারী নাম লিখুন...",
            login_pass_label: "পাসওয়ার্ড",
            login_pass_placeholder: "পাসওয়ার্ড লিখুন...",
            login_submit: "পোর্টালে সাইন ইন করুন",
            login_demo_title: "ডেমো অ্যাকাউন্ট:",
            login_teacher: "শিক্ষক",
            login_deo: "জেলা শিক্ষা কর্মকর্তা",
            login_notice: "🔒 জেলা শিক্ষা প্রশাসকের অনুমোদিত অ্যাকাউন্ট দ্বারা প্রবেশযোগ্য।",

            hero_badge: "আগাম সতর্কতা ও শিক্ষার্থী হস্তক্ষেপ প্ল্যাটফর্ম",
            hero_title: "Scholar Notify",
            hero_subtitle: "আগাম সতর্কতা ও শিক্ষার্থী হস্তক্ষেপ প্ল্যাটফর্ম",
            hero_tagline: "ঝুঁকি আগে শনাক্ত করুন। কারণ বুঝুন। সঠিক পদক্ষেপ নিন। অগ্রগতি পর্যবেক্ষণ করুন।",
            hero_desc: "স্কলার নোটিফাই শিক্ষকদের ঝুঁকির সম্মুখীন শিক্ষার্থীদের দ্রুত চিহ্নিত করতে, কারণ বিশ্লেষণ করতে এবং কার্যকর সহায়তা নিশ্চিত করতে সাহায্য করে।",
            hero_btn_action: "অ্যাকশন সেন্টার খুলুন",
            hero_btn_risk: "শিক্ষার্থী ঝুঁকি দেখুন",

            cmd_map_title: "কমান্ড ম্যাপ",
            cmd_surveillance: "সক্রিয় নজরদারি",
            cmd_roster_monitored: "নজরদারিতে শিক্ষার্থী",
            cmd_active_cases: "সক্রিয় মামলা",
            cmd_methodology: "মূল কর্মপদ্ধতি",
            cmd_how_works: "স্কলার নোটিফাই যেভাবে কাজ করে",
            cmd_cycle_desc: "আগাম শনাক্তকরণ থেকে স্থায়ী শিক্ষার্থী ধরে রাখা পর্যন্ত চক্র",

            step_monitor: "পর্যবেক্ষণ",
            step_monitor_desc: "উপস্থিতি ও শিক্ষাগত অগ্রগতির নিয়মিত ট্র্যাকিং।",
            step_detect: "শনাক্তকরণ",
            step_detect_desc: "ঝুঁকিপূর্ণ শিক্ষার্থীদের দ্রুত চিহ্নিত করা।",
            step_understand: "বিশ্লেষণ",
            step_understand_desc: "৫টি মূল ক্ষেত্রে সমস্যার মূল কারণ বোঝা।",
            step_intervene: "হস্তক্ষেপ",
            step_intervene_desc: "বিশেষ পাঠদান, কল্যাণমূলক প্রকল্প ও সহায়তা।",
            step_followup: "অনুসরণ",
            step_followup_desc: "অভিভাবকের সাথে যোগাযোগ ও নিয়মিত ফলো-আপ।",
            step_measure: "পরিমাপ",
            step_measure_desc: "উপস্থিতি বৃদ্ধি ও ঝুঁকি হ্রাস মূল্যায়ন।",

            ac_urgent_title: "জরুরী শিক্ষার্থী হস্তক্ষেপ প্রয়োজন",
            ac_urgent_desc: "মাল্টি-ভেক্টর তথ্যের ভিত্তিতে শিক্ষকের অবিলম্বে মনোযোগ আবশ্যক।",
            filter_all: "সকল",
            filter_high: "উচ্চ অগ্রাধিকার",
            filter_moderate: "মাঝারি অগ্রাধিকার",
            filter_routine: "স্বাভাবিক অগ্রাধিকার",
            search_placeholder: "নাম, রোল, গ্রাম বা পিতার নাম দিয়ে খুঁজুন...",

            btn_view_case: "কেস দেখুন",
            btn_create_case: "নতুন কেস",
            btn_export: "CSV ডাউনলোড",
            btn_close: "বন্ধ করুন",
            btn_save: "সংরক্ষণ করুন",
            btn_submit: "জমা দিন",
            btn_print: "প্রিন্ট করুন",
            btn_cancel: "বাতিল করুন",
            risk_high: "উচ্চ ঝুঁকি",
            risk_moderate: "মাঝারি ঝুঁকি",
            risk_low: "কম ঝুঁকি",
            risk_safe: "স্থিতিশীল",
            lang_switched_toast: "ভাষা সফলভাবে পরিবর্তিত হয়েছে"
        },

        pa: {
            header_subtitle: "ਵਿਦਿਆਰਥੀ ਦਖਲਅੰਦਾਜ਼ੀ ਇੰਟੈਲੀਜੈਂਸ ਪ੍ਰਣਾਲੀ",
            logged_in_prefix: "ਲੌਗ ਇਨ: ",
            logout: "ਲੌਗ ਆਉਟ",
            select_language: "ਭਾਸ਼ਾ",

            nav_overview: "ਸੰਖੇਪ ਜਾਣਕਾਰੀ",
            nav_action_center: "ਐਕਸ਼ਨ ਸੈਂਟਰ",
            nav_ews: "ਮੁੱਢਲੀ ਚੇਤਾਵਨੀ",
            nav_multivector: "ਮਲਟੀ-ਵੈਕਟਰ",
            nav_cases: "ਕੇਸ",
            nav_followups: "ਫਾਲੋ-ਅੱਪ",
            nav_smart_intake: "ਸਮਾਰਟ ਇਨਟੇਕ",
            nav_schemes: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ",
            nav_simulator: "ਸਿਮੂਲੇਟਰ",
            nav_sathi: "ਸਾਥੀ ਮੈਂਟਰ",
            nav_emergency: "ਐਮਰਜੈਂਸੀ",

            login_system_title: "ਰਾਜ ਸਿੱਖਿਆ ਵਿਦਿਆਰਥੀ ਰੋਕਥਾਮ ਪ੍ਰਣਾਲੀ",
            login_brand_sub: "ਅਧਿਕਾਰਤ ਸੰਸਥਾਗਤ ਸਾਈਨ-ਇਨ ਪੋਰਟਲ",
            login_user_label: "ਉਪਭੋਗਤਾ ਨਾਮ / ਅਧਿਕਾਰਤ ਆਈਡੀ",
            login_user_placeholder: "ਆਪਣਾ ਉਪਭੋਗਤਾ ਨਾਮ ਦਰਜ ਕਰੋ...",
            login_pass_label: "ਪਾਸਵਰਡ",
            login_pass_placeholder: "ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ...",
            login_submit: "ਪੋਰਟਲ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ",
            login_demo_title: "ਡੈਮੋ ਖਾਤੇ:",
            login_teacher: "ਅਧਿਆਪਕ",
            login_deo: "ਜ਼ਿਲ੍ਹਾ ਸਿੱਖਿਆ ਅਫ਼ਸਰ (DEO)",
            login_notice: "🔒 ਜ਼ਿਲ੍ਹਾ ਪ੍ਰਸ਼ਾਸਕ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਕੀਤੇ ਖਾਤਿਆਂ ਲਈ ਹੀ ਪਹੁੰਚਯੋਗ।",

            hero_badge: "ਮੁੱਢਲੀ ਚੇਤਾਵਨੀ ਅਤੇ ਵਿਦਿਆਰਥੀ ਸਹਾਇਤਾ ਮੰਚ",
            hero_title: "Scholar Notify",
            hero_subtitle: "ਮੁੱਢਲੀ ਚੇਤਾਵਨੀ ਅਤੇ ਵਿਦਿਆਰਥੀ ਸਹਾਇਤਾ ਮੰਚ",
            hero_tagline: "ਜੋਖਮ ਨੂੰ ਜਲਦੀ ਪਛਾਣੋ। ਕਾਰਨ ਸਮਝੋ। ਸਹੀ ਕਾਰਵਾਈ ਕਰੋ। ਤਰੱਕੀ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ।",
            hero_desc: "ਸਕਾਲਰ ਨੋਟੀਫਾਈ ਅਧਿਆਪਕਾਂ ਨੂੰ ਜੋਖਮ ਵਾਲੇ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਪਛਾਣ ਕਰਨ, ਕਾਰਨਾਂ ਨੂੰ ਸਮਝਣ ਅਤੇ ਲੋੜੀਂਦੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
            hero_btn_action: "ਐਕਸ਼ਨ ਸੈਂਟਰ ਖੋਲ੍ਹੋ",
            hero_btn_risk: "ਵਿਦਿਆਰਥੀ ਜੋਖਮ ਦੇਖੋ",

            cmd_map_title: "ਕਮਾਂਡ ਨਕਸ਼ਾ",
            cmd_surveillance: "ਸਰਗਰਮ ਨਿਗਰਾਨੀ",
            cmd_roster_monitored: "ਕੁੱਲ ਵਿਦਿਆਰਥੀ",
            cmd_active_cases: "ਸਰਗਰਮ ਕੇਸ",
            cmd_methodology: "ਮੁੱਖ ਕਾਰਜਪ੍ਰਣਾਲੀ",
            cmd_how_works: "ਸਕਾਲਰ ਨੋਟੀਫਾਈ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
            cmd_cycle_desc: "ਸ਼ੁਰੂਆਤੀ ਪਛਾਣ ਤੋਂ ਲੈ ਕੇ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਕੂਲ ਵਿੱਚ ਬਣਾਈ ਰੱਖਣ ਤੱਕ ਦਾ ਚੱਕਰ",

            step_monitor: "ਨਿਗਰਾਨੀ",
            step_monitor_desc: "ਹਾਜ਼ਰੀ ਅਤੇ ਪੜ੍ਹਾਈ ਦੀ ਨਿਯਮਤ ਨਿਗਰਾਨੀ।",
            step_detect: "ਪਛਾਣ",
            step_detect_desc: "ਵੱਧ ਜੋਖਮ ਵਾਲੇ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਤੁਰੰਤ ਪਛਾਣ।",
            step_understand: "ਸਮਝੋ",
            step_understand_desc: "5 ਮੁੱਖ ਖੇਤਰਾਂ ਵਿੱਚ ਮੂਲ ਕਾਰਨਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ।",
            step_intervene: "ਕਾਰਵਾਈ",
            step_intervene_desc: "ਵਧੇਰੇ ਪੜ੍ਹਾਈ, ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਅਤੇ ਸਹਾਇਤਾ।",
            step_followup: "ਫਾਲੋ-ਅੱਪ",
            step_followup_desc: "ਮਾਪਿਆਂ ਨਾਲ ਗੱਲਬਾਤ ਅਤੇ ਨਿਯਮਤ ਸਮੀਖਿਆ।",
            step_measure: "ਮੁਲਾਂਕਣ",
            step_measure_desc: "ਹਾਜ਼ਰੀ ਵਿੱਚ ਸੁਧਾਰ ਅਤੇ ਜੋਖਮ ਵਿੱਚ ਕਮੀ ਦੀ ਜਾਂਚ।",

            ac_urgent_title: "ਤੁਰੰਤ ਵਿਦਿਆਰਥੀ ਸਹਾਇਤਾ ਲੋੜੀਂਦੀ",
            ac_urgent_desc: "ਮਲਟੀ-ਵੈਕਟਰ ਸੰਕੇਤਾਂ ਦੇ ਅਧਾਰ 'ਤੇ ਤੁਰੰਤ ਅਧਿਆਪਕ ਦੇ ਧਿਆਨ ਦੀ ਲੋੜ ਹੈ।",
            filter_all: "ਸਾਰੇ",
            filter_high: "ਉੱਚ ਤਰਜੀਹ",
            filter_moderate: "ਦਰਮਿਆਨੀ ਤਰਜੀਹ",
            filter_routine: "ਆਮ ਤਰਜੀਹ",
            search_placeholder: "ਨਾਮ, ਰੋਲ ਨੰਬਰ, ਪਿੰਡ ਜਾਂ ਪਿਤਾ ਦੇ ਨਾਮ ਨਾਲ ਖੋਜੋ...",

            btn_view_case: "ਕੇਸ ਦੇਖੋ",
            btn_create_case: "ਨਵਾਂ ਕੇਸ",
            btn_export: "CSV ਡਾਊਨਲੋਡ ਕਰੋ",
            btn_close: "ਬੰਦ ਕਰੋ",
            btn_save: "ਸੰਭਾਲੋ",
            btn_submit: "ਜਮ੍ਹਾ ਕਰੋ",
            btn_print: "ਪ੍ਰਿੰਟ ਕਰੋ",
            btn_cancel: "ਰੱਦ ਕਰੋ",
            risk_high: "ਉੱਚ ਜੋਖਮ",
            risk_moderate: "ਦਰਮਿਆਨਾ ਜੋਖਮ",
            risk_low: "ਘੱਟ ਜੋਖਮ",
            risk_safe: "ਸਥਿਰ",
            lang_switched_toast: "ਭਾਸ਼ਾ ਸਫਲਤਾਪੂਰਵਕ ਬਦਲੀ ਗਈ"
        },

        or: {
            header_subtitle: "ଛାତ୍ର ହସ୍ତକ୍ଷେପ ବୁଦ୍ଧିମତ୍ତା ପ୍ରଣାଳୀ",
            logged_in_prefix: "ଲଗ୍ ଇନ୍ ଅଛନ୍ତି: ",
            logout: "ଲଗ୍ ଆଉଟ୍",
            select_language: "ଭାଷା",

            nav_overview: "ସମୀକ୍ଷା",
            nav_action_center: "କାର୍ଯ୍ୟ କେନ୍ଦ୍ର",
            nav_ews: "ପୂର୍ବ ଚେତାବନୀ",
            nav_multivector: "ମଲ୍ଟି-ଭେକ୍ଟର",
            nav_cases: "ମାମଲା",
            nav_followups: "ଫଲୋ-ଅପ୍",
            nav_smart_intake: "ସ୍ମାର୍ଟ ଇନଟେକ୍",
            nav_schemes: "କଲ୍ୟାଣକାରୀ ଯୋଜନା",
            nav_simulator: "ସିମୁଲେଟର",
            nav_sathi: "ସାଥି ମେଣ୍ଟର",
            nav_emergency: "ଜରୁରୀକାଳୀନ",

            login_system_title: "ରାଜ୍ୟ ଶିକ୍ଷା ଛାତ୍ର ଧାରଣ ପ୍ରଣାଳୀ",
            login_brand_sub: "ସରକାରୀ ସଂସ୍ଥାଗତ ସାଇନ୍-ଇନ୍ ପୋର୍ଟାଲ୍",
            login_user_label: "ବ୍ୟବହାରକାରୀ ନାମ / ଅଫିସିଆଲ୍ ଆଇଡି",
            login_user_placeholder: "ଆପଣଙ୍କ ଅଫିସିଆଲ୍ ନାମ ପ୍ରବେଶ କରନ୍ତୁ...",
            login_pass_label: "ପାସୱାର୍ଡ",
            login_pass_placeholder: "ପାସୱାର୍ଡ ପ୍ରବେଶ କରନ୍ତୁ...",
            login_submit: "ପୋର୍ଟାଲରେ ପ୍ରବେଶ କରନ୍ତୁ",
            login_demo_title: "ଡେମୋ ଆକାଉଣ୍ଟ୍:",
            login_teacher: "ଶିକ୍ଷକ",
            login_deo: "ଜିଲ୍ଲା ଶିକ୍ଷା ଅଧିକାରୀ",
            login_notice: "🔒 ଜିଲ୍ଲା ପ୍ରଶାସନ ଦ୍ୱାରା ଅନୁମୋଦିତ ଆକାଉଣ୍ଟ୍ ପାଇଁ ଉଦ୍ଦିଷ୍ଟ।",

            hero_badge: "ପୂର୍ବ ଚେତାବନୀ ଓ ଛାତ୍ର ହସ୍ତକ୍ଷେପ ପ୍ଲାଟଫର୍ମ",
            hero_title: "Scholar Notify",
            hero_subtitle: "ପୂର୍ବ ଚେତାବନୀ ଓ ଛାତ୍ର ହସ୍ତକ୍ଷେପ ପ୍ଲାଟଫର୍ମ",
            hero_tagline: "ବିପଦକୁ ଶୀଘ୍ର ଚିହ୍ନଟ କରନ୍ତୁ। କାରଣ ବୁଝନ୍ତୁ। ସଠିକ୍ ପଦକ୍ଷେପ ନିଅନ୍ତୁ।",
            hero_desc: "ସ୍କଲାର୍ ନୋଟିଫାଇ ଶିକ୍ଷକମାନଙ୍କୁ ବିପଦରେ ଥିବା ଛାତ୍ରମାନଙ୍କୁ ଚିହ୍ନଟ କରିବା, କାରଣ ବୁଝିବା ଏବଂ ଉପଯୁକ୍ତ ସହାୟତା ପ୍ରଦାନ କରିବାରେ ସାହାଯ୍ୟ କରେ।",
            hero_btn_action: "କାର୍ଯ୍ୟ କେନ୍ଦ୍ର ଖୋଲନ୍ତୁ",
            hero_btn_risk: "ଛାତ୍ର ବିପଦ ଯାଞ୍ଚ କରନ୍ତୁ",

            cmd_map_title: "କମାଣ୍ଡ ମ୍ୟାପ୍",
            cmd_surveillance: "ସକ୍ରିୟ ନଜର",
            cmd_roster_monitored: "ନଜରରେ ଥିବା ଛାତ୍ର",
            cmd_active_cases: "ସକ୍ରିୟ ମାମଲା",
            cmd_methodology: "ମୂଳ କାର୍ଯ୍ୟପଦ୍ଧତି",
            cmd_how_works: "ସ୍କଲାର୍ ନୋଟିଫାଇ କିପରି କାର୍ଯ୍ୟ କରେ",
            cmd_cycle_desc: "ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟରୁ ସ୍ଥାୟୀ ଛାତ୍ର ଧାରଣ ପର୍ଯ୍ୟନ୍ତ ଚକ୍ର",

            step_monitor: "ନିରୀକ୍ଷଣ",
            step_monitor_desc: "ଉପସ୍ଥିତି ଏବଂ ଶିକ୍ଷାଗତ ଅଗ୍ରଗତି ଟ୍ରାକ୍ କରନ୍ତୁ।",
            step_detect: "ଚିହ୍ନଟ",
            step_detect_desc: "ଅଧିକ ବିପଦରେ ଥିବା ଛାତ୍ରଙ୍କ ତ୍ୱରିତ ଚିହ୍ନଟ।",
            step_understand: "ବୁଝନ୍ତୁ",
            step_understand_desc: "୫ଟି ପ୍ରମୁଖ କ୍ଷେତ୍ରରେ ମୂଳ କାରଣ ବିଶ୍ଳେଷଣ।",
            step_intervene: "ହସ୍ତକ୍ଷେପ",
            step_intervene_desc: "ଉପଚାରମୂଳକ ଶିକ୍ଷା, ସରକାରୀ ଯୋଜନା ଓ ସହାୟତା।",
            step_followup: "ଫଲୋ-ଅପ୍",
            step_followup_desc: "ଅଭିଭାବକଙ୍କ ସହ ଆଲୋଚନା ଓ ନିୟମିତ ସମୀକ୍ଷା।",
            step_measure: "ମାପଚୁପ",
            step_measure_desc: "ଉପସ୍ଥିତି ବୃଦ୍ଧି ଓ ବିପଦ ହ୍ରାସର ମୂଲ୍ୟାୟନ।",

            ac_urgent_title: "ତୁରନ୍ତ ଛାତ୍ର ହସ୍ତକ୍ଷେପ ଆବଶ୍ୟକ",
            ac_urgent_desc: "ବିଭିନ୍ନ ସଙ୍କେତ ଆଧାରରେ ଶିକ୍ଷକଙ୍କ ତୁରନ୍ତ ଧ୍ୟାନ ଆବଶ୍ୟକ।",
            filter_all: "ସମସ୍ତ",
            filter_high: "ଉଚ୍ଚ ପ୍ରାଥମିକତା",
            filter_moderate: "ମଧ୍ୟମ ପ୍ରାଥମିକତା",
            filter_routine: "ସାଧାରଣ ପ୍ରାଥମିକତା",
            search_placeholder: "ନାମ, ରୋଲ୍ ନମ୍ବର, ଗ୍ରାମ କିମ୍ବା ପିତାଙ୍କ ନାମରେ ଖୋଜନ୍ତୁ...",

            btn_view_case: "ମାମଲା ଦେଖନ୍ତୁ",
            btn_create_case: "ନୂଆ ମାମଲା",
            btn_export: "CSV ଡାଉନଲୋଡ୍",
            btn_close: "ବନ୍ଦ କରନ୍ତୁ",
            btn_save: "ସଂରକ୍ଷଣ କରନ୍ତୁ",
            btn_submit: "ଦାଖଲ କରନ୍ତୁ",
            btn_print: "ପ୍ରିଣ୍ଟ୍ କରନ୍ତୁ",
            btn_cancel: "ବାତିଲ୍ କରନ୍ତୁ",
            risk_high: "ଉଚ୍ଚ ବିପଦ",
            risk_moderate: "ମଧ୍ୟମ ବିପଦ",
            risk_low: "କମ୍ ବିପଦ",
            risk_safe: "ସ୍ଥିର",
            lang_switched_toast: "ଭାଷା ସଫଳତାର ସହ ପରିବର୍ତ୍ତିତ ହୋଇଛି"
        },

        ur: {
            header_subtitle: "طلباء کی بروقت مداخلت کا انٹیلی جنس نظام",
            logged_in_prefix: "لاگ ان ہیں: ",
            logout: "لاگ آوٹ",
            select_language: "زبان",

            nav_overview: "جائزہ",
            nav_action_center: "ایکشن سینٹر",
            nav_ews: "ابتدائی انتباہ",
            nav_multivector: "ملٹی ویکٹر",
            nav_cases: "کیسز",
            nav_followups: "فالو اپ",
            nav_smart_intake: "اسمارٹ انٹیک",
            nav_schemes: "فلاحی اسکیمیں",
            nav_simulator: "سیمولیٹر",
            nav_sathi: "ساتھی مینٹور",
            nav_emergency: "ہنگامی صورتحال",

            login_system_title: "ریاستی تعلیمی نظام برائے بقائے طلباء",
            login_brand_sub: "سرکاری ادارہ جاتی سائن ان پورٹل",
            login_user_label: "صارف نام / آفیشل شناختی نمبر",
            login_user_placeholder: "اپنا صارف نام درج کریں...",
            login_pass_label: "پاس ورڈ",
            login_pass_placeholder: "پاس ورڈ درج کریں...",
            login_submit: "پورٹل میں لاگ ان کریں",
            login_demo_title: "ڈیمو اکاؤنٹس:",
            login_teacher: "استاد",
            login_deo: "ڈسٹرکٹ ایجوکیشن آفیسر",
            login_notice: "🔒 صرف ضلعی انتظامیہ کے مجاز اکاؤنٹس کے لیے قابل رسائی۔",

            hero_badge: "ابتدائی انتباہ اور تعلیمی مداخلت کا نظام",
            hero_title: "Scholar Notify",
            hero_subtitle: "ابتدائی انتباہ اور تعلیمی مداخلت کا نظام",
            hero_tagline: "خطرے کو جلد پہچانیں۔ وجوہات سمجھیں۔ درست مداخلت کریں۔ مسلسل پیش رفت دیکھیں۔",
            hero_desc: "اسکالر نوٹیفائی اساتذہ کو ضرورت مند طلباء کی شناخت، وجوہات کے تجزیے اور فلاحی اسکیموں کی فراہمی میں مدد کرتا ہے۔",
            hero_btn_action: "ایکشن سینٹر کھولیں",
            hero_btn_risk: "طلباء کا خطرہ دیکھیں",

            cmd_map_title: "کمانڈ میپ",
            cmd_surveillance: "فعال نگرانی",
            cmd_roster_monitored: "زیر نگرانی طلباء",
            cmd_active_cases: "فعال کیسز",
            cmd_methodology: "طریقہ کار",
            cmd_how_works: "اسکالر نوٹیفائی کیسے کام کرتا ہے",
            cmd_cycle_desc: "ابتدائی شناخت سے لے کر اسکول میں برقرار رکھنے تک کا مسلسل عمل",

            step_monitor: "نگرانی",
            step_monitor_desc: "حاضری اور تعلیمی کارکردگی کی باقاعدہ جانچ۔",
            step_detect: "شناخت",
            step_detect_desc: "خطرہ لاحق طلباء کی فوری نشاندہی۔",
            step_understand: "سمجھیں",
            step_understand_desc: "۵ اہم شعبوں میں بنیادی وجوہات کا تجزیہ۔",
            step_intervene: "مداخلت",
            step_intervene_desc: "اضافی تدریس، سرکاری اسکیمیں اور ہم جماعت کی مدد۔",
            step_followup: "فالو اپ",
            step_followup_desc: "والدین سے رابطہ اور مستقل نگرانی۔",
            step_measure: "پیمائش",
            step_measure_desc: "حاضری میں بہتری اور خطرے میں کمی کی پیمائش۔",

            ac_urgent_title: "فوری تعلیمی مداخلت درکار ہے",
            ac_urgent_desc: "مختلف اشاریوں کی بنیاد پر اساتذہ کی فوری توجہ ضروری ہے۔",
            filter_all: "تمام",
            filter_high: "اعلیٰ ترجیح",
            filter_moderate: "درمیانی ترجیح",
            filter_routine: "معمول کی ترجیح",
            search_placeholder: "نام، رول نمبر، گاؤں یا والد کے نام سے تلاش کریں...",

            btn_view_case: "کیس دیکھیں",
            btn_create_case: "نیا کیس بنائیں",
            btn_export: "CSV ڈاؤن لوڈ کریں",
            btn_close: "بند کریں",
            btn_save: "محفوظ کریں",
            btn_submit: "جمع کریں",
            btn_print: "پرنٹ کریں",
            btn_cancel: "منسوخ کریں",
            risk_high: "زیادہ خطرہ",
            risk_moderate: "درمیانہ خطرہ",
            risk_low: "کم خطرہ",
            risk_safe: "مستحکم",
            lang_switched_toast: "زبان کامیابی سے تبدیل کر دی گئی"
        }
    };

    // State
    let currentLang = 'en';
    const STORAGE_KEY = 'scholar_notify_language';

    // 3. CORE TRANSLATION LOOKUP
    function t(key, fallback = '') {
        const langData = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
        if (langData && langData[key] !== undefined) {
            return langData[key];
        }
        if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key] !== undefined) {
            return TRANSLATIONS['en'][key];
        }
        return fallback || key;
    }

    // 4. GET ALL REGISTERED LANGUAGES
    function getLanguages() {
        return [...SUPPORTED_LANGUAGES];
    }

    // 5. EXTENSIBILITY: REGISTER A NEW INDIAN LANGUAGE OR DIALECT
    function addLanguage(langConfig, translationsDict = {}) {
        if (!langConfig || !langConfig.code) {
            console.error("Invalid language config provided to addLanguage.");
            return false;
        }
        const exists = SUPPORTED_LANGUAGES.find(l => l.code === langConfig.code);
        if (!exists) {
            SUPPORTED_LANGUAGES.push({
                code: langConfig.code,
                name: langConfig.name || langConfig.code,
                nativeName: langConfig.nativeName || langConfig.name || langConfig.code,
                flag: langConfig.flag || '🇮🇳',
                dir: langConfig.dir || 'ltr'
            });
        }
        if (translationsDict && typeof translationsDict === 'object') {
            TRANSLATIONS[langConfig.code] = {
                ...(TRANSLATIONS[langConfig.code] || {}),
                ...translationsDict
            };
        }
        // Re-render select elements
        populateLanguageSelectors();
        return true;
    }

    // 6. POPULATE ALL SELECT DROPDOWNS ON PAGE
    function populateLanguageSelectors() {
        if (typeof document === 'undefined') return;
        const selectIds = ['headerLanguageSelect', 'loginLanguageSelect', 'mobileHeaderLanguageSelect'];
        selectIds.forEach(id => {
            const selectEl = document.getElementById(id);
            if (!selectEl) return;

            const existingVal = selectEl.value || currentLang;
            selectEl.innerHTML = '';

            SUPPORTED_LANGUAGES.forEach(lang => {
                const opt = document.createElement('option');
                opt.value = lang.code;
                opt.textContent = `${lang.nativeName} (${lang.name})`;
                if (lang.code === currentLang) {
                    opt.selected = true;
                }
                opt.className = "bg-[#111B18] text-[#F5F7F5] py-1";
                selectEl.appendChild(opt);
            });

            selectEl.value = currentLang;
        });
    }

    // 7. APPLY TRANSLATIONS TO DOM ELEMENTS
    function applyTranslations() {
        if (typeof document === 'undefined') return;
        // Update document lang & dir
        const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang);
        if (document.documentElement) {
            document.documentElement.lang = currentLang;
            document.documentElement.dir = (activeLangObj && activeLangObj.dir) ? activeLangObj.dir : 'ltr';
        }

        // 1. Text elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = t(key);
            if (translation) {
                // Check if element has child icons that should be preserved
                const icon = el.querySelector('i');
                if (icon) {
                    const textSpan = el.querySelector('span[data-i18n-text]') || el.querySelector('span');
                    if (textSpan) {
                        textSpan.textContent = translation;
                    } else {
                        // Keep the icon intact
                        el.innerHTML = `${icon.outerHTML} <span>${translation}</span>`;
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });

        // 2. Placeholders with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = t(key);
            if (translation) {
                el.setAttribute('placeholder', translation);
            }
        });

        // 3. Tooltips/Titles with data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = t(key);
            if (translation) {
                el.setAttribute('title', translation);
            }
        });

        // 4. Update User Profile Badge if present
        if (typeof currentUser !== 'undefined' && currentUser) {
            const badge = document.getElementById('userProfileBadge');
            if (badge) {
                const prefix = t('logged_in_prefix', 'Logged in: ');
                badge.innerText = `${prefix}${currentUser.name}`;
            }
        }

        // 5. Sync with Parent Communication drafter language if present
        const parentLangSelect = document.getElementById('contactParentLangSelect');
        if (parentLangSelect) {
            // Check if current language exists in parent drafter
            const exists = Array.from(parentLangSelect.options).some(opt => opt.value === currentLang);
            if (exists && parentLangSelect.value !== currentLang) {
                parentLangSelect.value = currentLang;
                if (typeof regenerateParentDraft === 'function') {
                    regenerateParentDraft();
                }
            }
        }

        // 6. Deep Google Translate synchronization (if Google Translate widget is loaded)
        syncGoogleTranslate(currentLang);
    }

    // 8. GOOGLE TRANSLATE SYNC BRIDGE
    function syncGoogleTranslate(langCode) {
        try {
            // Set translation cookie for Google Translate
            const cookieDomain = window.location.hostname === 'localhost' ? '' : `;domain=${window.location.hostname}`;
            if (langCode === 'en') {
                document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${cookieDomain}`;
                document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            } else {
                document.cookie = `googtrans=/en/${langCode}; path=/${cookieDomain}`;
                document.cookie = `googtrans=/en/${langCode}; path=/`;
            }

            // If Google Translate select box is present, trigger change
            const gtSelect = document.querySelector('.goog-te-combo');
            if (gtSelect) {
                gtSelect.value = langCode;
                gtSelect.dispatchEvent(new Event('change'));
            }
        } catch (e) {
            // Ignore if cookies or external scripts are constrained
        }
    }

    // 9. SWITCH LANGUAGE
    function setLanguage(langCode, notifyUser = true) {
        if (!langCode) return;
        const targetLang = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
        if (!targetLang) {
            console.warn(`Language code '${langCode}' not registered.`);
            return;
        }

        currentLang = langCode;
        try {
            localStorage.setItem(STORAGE_KEY, langCode);
        } catch (e) {
            // Storage access issues handled safely
        }

        populateLanguageSelectors();
        applyTranslations();

        // Dispatch custom event for other components/charts
        if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
            window.dispatchEvent(new CustomEvent('scholar:languageChanged', {
                detail: {
                    language: langCode,
                    name: targetLang.name,
                    nativeName: targetLang.nativeName
                }
            }));
        }

        if (notifyUser && typeof showToast === 'function') {
            const msg = `${targetLang.nativeName} (${targetLang.name})`;
            showToast(t('lang_switched_toast', 'Language Updated'), msg, 'info');
        }
    }

    // 10. INITIALIZATION
    function init() {
        let savedLang = 'en';
        try {
            savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
        } catch (e) {
            savedLang = 'en';
        }

        const validLang = SUPPORTED_LANGUAGES.some(l => l.code === savedLang) ? savedLang : 'en';
        currentLang = validLang;

        populateLanguageSelectors();
        applyTranslations();
    }

    // Auto-init on DOMContentLoaded or immediate if already loaded
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

    // Public API
    return {
        t,
        getLanguages,
        addLanguage,
        setLanguage,
        getCurrentLanguage: () => currentLang,
        init
    };
})();

// Global convenience function for inline onchange handlers
function changeLanguage(langCode) {
    ScholarI18n.setLanguage(langCode, true);
}
