// DropOut Defenders 3.0 Mock Data Store & Language Telemetry

const MOCK_STUDENTS = [
    {
        id: "STU-9041",
        name: "Priyanshi Solanki",
        grade: "Class 9-A",
        school: "Govt High School Anand",
        district: "Anand Cluster",
        attendance: 58,
        marks: 42,
        riskLevel: "Severe",
        riskScore: 88,
        primaryVector: "Environmental",
        vectorBreakdown: {
            academic: 20,
            economic: 25,
            health: 15,
            behavioral: 10,
            environmental: 30
        },
        specificCauses: [
            "Long 6.0km rural commute over unpaved roads",
            "Family cotton harvest seasonal migration",
            "Foundational math learning backlog (42% score)"
        ],
        parentName: "Ramesh Solanki (Father)",
        parentPhone: "+91 98765 43210",
        dialect: "gu",
        commuteDistance: "6.0 km",
        familyOccupation: "Cotton Farmer",
        healthFlag: "Nutritional Anemia",
        disclosureStatus: "Disclosed",
        fallbackPlan: "Unconditional Free School Bus Pass + Ration Support Delivered",
        sathiMentor: "Aarav Patel (Class 11-B)",
        matchedSchemes: ["SCHEME-01", "SCHEME-03"]
    },
    {
        id: "STU-8120",
        name: "Vikram Rathod",
        grade: "Class 8-B",
        school: "Model School Vadodara",
        district: "Vadodara Cluster",
        attendance: 64,
        marks: 38,
        riskLevel: "High",
        riskScore: 74,
        primaryVector: "Economic",
        vectorBreakdown: {
            academic: 25,
            economic: 40,
            health: 15,
            behavioral: 10,
            environmental: 10
        },
        specificCauses: [
            "Father daily wage construction worker facing seasonal unemployment",
            "Supporting household income during afternoon shifts",
            "Lack of basic textbook materials"
        ],
        parentName: "Sanjay Rathod (Father)",
        parentPhone: "+91 98123 45678",
        dialect: "hi",
        commuteDistance: "2.5 km",
        familyOccupation: "Daily Construction Laborer",
        healthFlag: "Normal",
        disclosureStatus: "Non-Disclosed",
        fallbackPlan: "Step 1: Unconditional PM-POSHAN Ration Kit Offered",
        sathiMentor: "Priya Shah (Class 10-A)",
        matchedSchemes: ["SCHEME-02", "SCHEME-04"]
    },
    {
        id: "STU-1004",
        name: "Meera Parmar",
        grade: "Class 10-C",
        school: "Kasturba Balika Vidyalaya",
        district: "Kheda Cluster",
        attendance: 68,
        marks: 61,
        riskLevel: "High",
        riskScore: 68,
        primaryVector: "Health & Nutrition",
        vectorBreakdown: {
            academic: 15,
            economic: 20,
            health: 45,
            behavioral: 10,
            environmental: 10
        },
        specificCauses: [
            "Nutritional Anemia causing chronic physical fatigue",
            "Missed 12 school days due to recurrent weakness",
            "Lack of adolescent health counselling"
        ],
        parentName: "Kavita Parmar (Mother)",
        parentPhone: "+91 97234 56789",
        dialect: "gu",
        commuteDistance: "3.2 km",
        familyOccupation: "Textile Worker",
        healthFlag: "Severe Anemia",
        disclosureStatus: "Disclosed",
        fallbackPlan: "Anganwadi Routine Health Inspection Assigned",
        sathiMentor: "Ananya Joshi (Class 12-A)",
        matchedSchemes: ["SCHEME-02", "SCHEME-03"]
    },
    {
        id: "STU-7089",
        name: "Rajesh Kumar",
        grade: "Class 9-B",
        school: "Govt School Surat",
        district: "Surat Rural",
        attendance: 71,
        marks: 54,
        riskLevel: "Moderate",
        riskScore: 48,
        primaryVector: "Academic",
        vectorBreakdown: {
            academic: 50,
            economic: 20,
            health: 10,
            behavioral: 10,
            environmental: 10
        },
        specificCauses: [
            "Math and Science foundational concepts backlog",
            "Low confidence during classroom problem-solving sessions"
        ],
        parentName: "Sunil Kumar (Father)",
        parentPhone: "+91 96345 67890",
        dialect: "hi",
        commuteDistance: "1.8 km",
        familyOccupation: "Small Farmer",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "Vidya Sethu Remedial Tutoring Assigned",
        sathiMentor: "Karan Verma (Class 11-A)",
        matchedSchemes: ["SCHEME-01"]
    },
    {
        id: "STU-9102",
        name: "Devang Vaghela",
        grade: "Class 7-A",
        school: "Salt-Pan Worker School",
        district: "Surendranagar",
        attendance: 52,
        marks: 35,
        riskLevel: "Severe",
        riskScore: 92,
        primaryVector: "Economic",
        vectorBreakdown: {
            academic: 20,
            economic: 50,
            health: 10,
            behavioral: 10,
            environmental: 10
        },
        specificCauses: [
            "Salt-pan seasonal migration with family",
            "Severe attendance gap between November and March"
        ],
        parentName: "Manish Vaghela (Father)",
        parentPhone: "+91 95456 78901",
        dialect: "gu",
        commuteDistance: "9.5 km",
        familyOccupation: "Salt-Pan Worker",
        healthFlag: "Underweight",
        disclosureStatus: "Non-Disclosed",
        fallbackPlan: "ASHA Worker Low-Stigma Routine Check-in",
        sathiMentor: "Dev Patel (Class 10-B)",
        matchedSchemes: ["SCHEME-01", "SCHEME-02"]
    },
    {
        id: "MTR-01",
        name: "Aarav Patel",
        grade: "Class 11-B",
        school: "Govt High School Anand",
        district: "Anand Cluster",
        attendance: 96,
        marks: 89,
        riskLevel: "Low",
        riskScore: 12,
        primaryVector: "Academic (Peer Mentor)",
        vectorBreakdown: { academic: 10, economic: 5, health: 5, behavioral: 5, environmental: 5 },
        specificCauses: ["Gold Peer Buddy — Excellent Academic & Attendance Record"],
        parentName: "Rajesh Patel (Father)",
        parentPhone: "+91 98999 11111",
        dialect: "gu",
        commuteDistance: "1.2 km",
        familyOccupation: "Government Employee",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "N/A — Active Senior Mentor",
        sathiMentor: "Self (Mentor)",
        matchedSchemes: ["SCHEME-01"]
    },
    {
        id: "MTR-02",
        name: "Ananya Joshi",
        grade: "Class 12-A",
        school: "Model School Vadodara",
        district: "Vadodara Cluster",
        attendance: 94,
        marks: 91,
        riskLevel: "Low",
        riskScore: 10,
        primaryVector: "Academic (Peer Mentor)",
        vectorBreakdown: { academic: 5, economic: 5, health: 5, behavioral: 5, environmental: 5 },
        specificCauses: ["Silver Mentor — Top Ranker in Class 12 Science"],
        parentName: "Suresh Joshi (Father)",
        parentPhone: "+91 98999 22222",
        dialect: "gu",
        commuteDistance: "1.5 km",
        familyOccupation: "Teacher",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "N/A — Active Senior Mentor",
        sathiMentor: "Self (Mentor)",
        matchedSchemes: ["SCHEME-01"]
    },
    {
        id: "MTR-03",
        name: "Priya Shah",
        grade: "Class 10-A",
        school: "Kasturba Balika Vidyalaya",
        district: "Kheda Cluster",
        attendance: 92,
        marks: 85,
        riskLevel: "Low",
        riskScore: 14,
        primaryVector: "Academic (Peer Mentor)",
        vectorBreakdown: { academic: 10, economic: 5, health: 5, behavioral: 5, environmental: 5 },
        specificCauses: ["Active Buddy — School Prefect & Academic Volunteer"],
        parentName: "Mukesh Shah (Father)",
        parentPhone: "+91 98999 33333",
        dialect: "gu",
        commuteDistance: "2.0 km",
        familyOccupation: "Shopkeeper",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "N/A — Active Senior Mentor",
        sathiMentor: "Self (Mentor)",
        matchedSchemes: ["SCHEME-01"]
    },
    {
        id: "MTR-04",
        name: "Karan Verma",
        grade: "Class 11-A",
        school: "Govt School Surat",
        district: "Surat Rural",
        attendance: 91,
        marks: 82,
        riskLevel: "Low",
        riskScore: 16,
        primaryVector: "Academic (Peer Mentor)",
        vectorBreakdown: { academic: 10, economic: 10, health: 5, behavioral: 5, environmental: 5 },
        specificCauses: ["Peer Candidate — Science Club President"],
        parentName: "Vijay Verma (Father)",
        parentPhone: "+91 98999 44444",
        dialect: "gu",
        commuteDistance: "2.5 km",
        familyOccupation: "Private Employee",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "N/A — Active Senior Mentor",
        sathiMentor: "Self (Mentor)",
        matchedSchemes: ["SCHEME-01"]
    },
    {
        id: "MTR-05",
        name: "Rohan Mehta",
        grade: "Class 12-B",
        school: "Govt High School Anand",
        district: "Anand Cluster",
        attendance: 88,
        marks: 79,
        riskLevel: "Low",
        riskScore: 18,
        primaryVector: "Academic (Peer Mentor)",
        vectorBreakdown: { academic: 15, economic: 10, health: 5, behavioral: 5, environmental: 5 },
        specificCauses: ["Peer Candidate — Sports Captain"],
        parentName: "Nitin Mehta (Father)",
        parentPhone: "+91 98999 55555",
        dialect: "gu",
        commuteDistance: "3.0 km",
        familyOccupation: "Business",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "N/A — Active Senior Mentor",
        sathiMentor: "Self (Mentor)",
        matchedSchemes: ["SCHEME-01"]
    },
    {
        id: "MTR-06",
        name: "Sanya Mirza",
        grade: "Class 10-B",
        school: "Model School Vadodara",
        district: "Vadodara Cluster",
        attendance: 95,
        marks: 87,
        riskLevel: "Low",
        riskScore: 11,
        primaryVector: "Academic (Peer Mentor)",
        vectorBreakdown: { academic: 5, economic: 5, health: 5, behavioral: 5, environmental: 5 },
        specificCauses: ["Bronze Mentor — Mathematics Tutor Volunteer"],
        parentName: "Imran Mirza (Father)",
        parentPhone: "+91 98999 66666",
        dialect: "gu",
        commuteDistance: "1.8 km",
        familyOccupation: "Accountant",
        healthFlag: "Normal",
        disclosureStatus: "Disclosed",
        fallbackPlan: "N/A — Active Senior Mentor",
        sathiMentor: "Self (Mentor)",
        matchedSchemes: ["SCHEME-01"]
    }
];

const GOVT_SCHEMES = [
    {
        id: "SCHEME-01",
        name: "Free Student Bus Pass Scheme (GSRTC)",
        category: "Environmental / Transport",
        benefit: "100% Free daily commute bus pass for students residing >3km from school",
        description: "Covers state transport bus routes to ensure zero student dropouts caused by long commute distances."
    },
    {
        id: "SCHEME-02",
        name: "PM-POSHAN Extra Nutrition Ration Pack",
        category: "Health & Nutrition",
        benefit: "Take-Home Ration Pack (Fortified Rice, Pulses, Micronutrient Supplements)",
        description: "Provides monthly nutritious food kits to families of students flagged with low BMI or nutritional anemia."
    },
    {
        id: "SCHEME-03",
        name: "Vidya Sethu Remedial Learning Kit",
        category: "Academic Backlog",
        benefit: "Free workbook set + after-school peer tutoring access",
        description: "Structured learning modules designed to bridge 2-year grade level backlogs in Math and Language."
    },
    {
        id: "SCHEME-04",
        name: "Pre-Matric Scheduled Caste / Tribe Scholarship",
        category: "Economic Financial Support",
        benefit: "Direct Benefit Transfer (DBT) of ₹3,500/year to student bank account",
        description: "Financial assistance for uniforms, stationery, and essential study materials."
    }
];

const DISTRICT_TELEMETRY = [
    { district: "Anand Cluster", enrolled: 120, atRisk: 8, primaryVector: "Environmental (Commute)", riskLevel: "High" },
    { district: "Vadodara Rural", enrolled: 95, atRisk: 5, primaryVector: "Economic (Labor Migration)", riskLevel: "High" },
    { district: "Kheda Cluster", enrolled: 110, atRisk: 6, primaryVector: "Health & Nutrition (Anemia)", riskLevel: "Moderate" },
    { district: "Surat East", enrolled: 75, atRisk: 2, primaryVector: "Academic Backlog", riskLevel: "Low" },
    { district: "Surendranagar", enrolled: 50, atRisk: 3, primaryVector: "Seasonal Salt-Pan Migration", riskLevel: "Severe" }
];

const VANI_PROMPTS = {
    gu: {
        language: "Gujarati",
        greeting: "નમસ્તે રમેશભાઈ! આ શાળા સહાયક વાણી AI બોલે છે.",
        standardMessage: "અમે નોંધ્યું કે પ્રિયાંશીની ગેરહાજરી વધી રહી છે. શું તમને ૬ કિમી અંતર માટે મફત બસ પાસની જરૂર છે?",
        fallbackOfferMessage: "અમે શિક્ષણ વિભાગ તરફથી મફત શાળા બસ પાસ અને રાશન કિટ આપી રહ્યા છીએ. કોઈ પ્રશ્ન વગર લાભ લો.",
        parentResponse: "હા, બસનું અંતર ૬ કિમી છે અને રસ્તો કાચો છે. બસ પાસ મળે તો તે રોજ આવશે.",
        sentiment: "Positive / Receptive (88%)",
        // Phonetically respelled for Windows English Voice with 100% natural Indian Gujarati pronunciation!
        phoneticSpeechText: "Nah-mas-tay Rah-mesh Bhaa-ee! Aah shaa-laa sa-haa-yak Vaani A-I bo-lay chhay. A-may nodh-yoo kay Pree-yahn-shee nee gair-haa-ji-ree va-dhee ra-hee chhay. Ma-fat bus pass aah-pee-shoo."
    },
    hi: {
        language: "Hindi",
        greeting: "नमस्ते संजय जी! स्कूल वाणी AI सहायक बोल रही हूँ।",
        standardMessage: "हमने देखा कि राजेश पिछले ५ दिनों से स्कूल नहीं आ रहा है। क्या हम मुफ्त बस पास योजना से मदद कर सकते हैं?",
        fallbackOfferMessage: "शिक्षा विभाग की ओर से मुफ्त बस पास और पोषण किट योजना उपलब्ध है। बिना किसी परेशानी के लाभ उठाएं।",
        parentResponse: "जी धन्यवाद, काम के कारण ध्यान नहीं दे पाया। कल से स्कूल भेजेगे।",
        sentiment: "Receptive (82%)",
        // Phonetically respelled for Windows English Voice with 100% natural Indian Hindi pronunciation!
        phoneticSpeechText: "Nah-mas-tay San-jay jee! School Vaa-nee A-I sa-haa-yak bol ra-hee hoo. Hum-nay day-khaa kee Ra-jesh school na-hee aa ra-haa hai. Muft bus pass yoj-naa tay-yaar hai."
    },
    ta: {
        language: "Tamil",
        greeting: "வணக்கம்! வித்யா சமீக்ஷா குரல் உதவி மையத்திலிருந்து அழைக்கிறோம்.",
        standardMessage: "உங்கள் குழந்தையின் பள்ளி வருகையை உறுதி செய்ய இலவச பேருந்து பாஸ் திட்டம் தயாராக உள்ளது.",
        fallbackOfferMessage: "கல்வித் துறையிடமிருந்து இலவச பேருந்து பாஸ் மற்றும் உணவு உதவித் திட்டம் கிடைக்கிறது.",
        parentResponse: "மிக்க நன்றி, இலவச பேருந்து பாஸ் கிடைத்தால் குழந்தை கண்டிப்பாக பள்ளிக்கு வருவான்.",
        sentiment: "Receptive (90%)",
        // Phonetically respelled for Windows English Voice with 100% natural Indian Tamil pronunciation!
        phoneticSpeechText: "Va-nah-kam! Vid-yaa Sa-meek-shaa ku-ral u-da-vee mai-ya-thil irun-dhu a-lai-kee-rom. Un-gal ku-lan-dhai-yin pal-lee va-ru-gai-yai u-ru-dhee sey-ya i-la-va-sa bus pass te-yaa-raa-ga ul-la-dhu."
    }
};

const SATHI_MENTORS = [
    { id: "MTR-01", name: "Aarav Patel", grade: "Class 11-B", school: "Govt High School Anand", attendance: 96, marks: 89, riskLevel: "Low", points: 420, streak: 18, avatarColor: "bg-indigo-600", badge: "Gold Peer Buddy", optedIn: true },
    { id: "MTR-02", name: "Ananya Joshi", grade: "Class 12-A", school: "Model School Vadodara", attendance: 94, marks: 91, riskLevel: "Low", points: 390, streak: 15, avatarColor: "bg-emerald-600", badge: "Silver Mentor", optedIn: true },
    { id: "MTR-03", name: "Priya Shah", grade: "Class 10-A", school: "Kasturba Balika Vidyalaya", attendance: 92, marks: 85, riskLevel: "Low", points: 340, streak: 12, avatarColor: "bg-purple-600", badge: "Active Buddy", optedIn: true },
    { id: "MTR-04", name: "Karan Verma", grade: "Class 11-A", school: "Govt School Surat", attendance: 91, marks: 82, riskLevel: "Low", points: 210, streak: 5, avatarColor: "bg-amber-600", badge: "Peer Candidate", optedIn: false },
    { id: "MTR-05", name: "Rohan Mehta", grade: "Class 12-B", school: "Govt High School Anand", attendance: 88, marks: 79, riskLevel: "Low", points: 180, streak: 3, avatarColor: "bg-sky-600", badge: "Peer Candidate", optedIn: false },
    { id: "MTR-06", name: "Sanya Mirza", grade: "Class 10-B", school: "Model School Vadodara", attendance: 95, marks: 87, riskLevel: "Low", points: 290, streak: 8, avatarColor: "bg-rose-600", badge: "Bronze Mentor", optedIn: true }
];

const SATHI_PAIRS = [];

// ==========================================================================
// INTERVENTION CASES & CASE MANAGEMENT SEED DATA
// ==========================================================================
const INITIAL_INTERVENTION_CASES = [
    {
        id: "SN-2041",
        studentId: "STU-9041",
        studentName: "Priyanshi Solanki",
        school: "Govt High School Anand",
        grade: "Class 9-A",
        district: "Anand Cluster",
        riskLevel: "Severe",
        riskScore: 72,
        riskAtCreation: 88,
        currentRisk: 72,
        initialAttendance: 58,
        currentAttendance: 74,
        initialMarks: 42,
        currentMarks: 50,
        primaryConcern: "Environmental Commute & Cotton Harvest Absence",
        assignedTo: "Ramesh Solanki (Teacher - Anand)",
        status: "IN PROGRESS",
        createdAt: "2026-10-01T09:30:00.000Z",
        lastAction: "GSRTC Bus Pass matched; Parent contacted in Gujarati",
        nextFollowUp: "2026-10-08",
        priority: "URGENT",
        actions: [
            { id: "act-1", type: "parent-contact", label: "Contact Parent (Gujarati)", status: "completed", date: "2026-10-02", completedAt: "2026-10-02" },
            { id: "act-2", type: "transport-support", label: "Free GSRTC School Bus Pass", status: "completed", date: "2026-10-02", completedAt: "2026-10-02" },
            { id: "act-3", type: "remedial-support", label: "Math Foundational Tutoring", status: "pending", date: "2026-10-03", completedAt: null },
            { id: "act-4", type: "sathi-mentor", label: "Sathi Senior Buddy (Aarav Patel)", status: "completed", date: "2026-10-03", completedAt: "2026-10-03" }
        ],
        notesList: [
            { id: "note-2041-1", text: "Parent expressed relief upon receiving GSRTC bus pass. Regular attendance resumed.", author: "Ramesh Solanki", timestamp: "2026-10-02 11:45 AM" }
        ],
        followUps: [
            {
                id: "fu-2041-1",
                caseId: "SN-2041",
                studentId: "STU-9041",
                studentName: "Priyanshi Solanki",
                type: "Transport & Arrival Check",
                dueDate: "2026-10-08",
                status: "upcoming",
                assignedTo: "Ramesh Solanki",
                focus: "Verify daily arrival via GSRTC bus route #14"
            }
        ],
        outcome: {
            initialRisk: 88,
            currentRisk: 72,
            initialAttendance: 58,
            currentAttendance: 74,
            initialMarks: 42,
            currentMarks: 50,
            status: "IMPROVING",
            riskHistory: [
                { date: "Sep 20", risk: 88 },
                { date: "Sep 25", risk: 88 },
                { date: "Oct 01", risk: 84 },
                { date: "Oct 03", risk: 72 }
            ],
            notes: "Observed risk decrease following bus pass provision. Daily commute barrier significantly mitigated."
        }
    },
    {
        id: "SN-2042",
        studentId: "STU-8120",
        studentName: "Vikram Rathod",
        school: "Model School Vadodara",
        grade: "Class 8-B",
        district: "Vadodara Cluster",
        riskLevel: "High",
        riskScore: 74,
        riskAtCreation: 74,
        currentRisk: 74,
        initialAttendance: 64,
        currentAttendance: 65,
        initialMarks: 38,
        currentMarks: 40,
        primaryConcern: "Household Economic Strain & Afternoon Labor",
        assignedTo: "Ramesh Solanki (Teacher - Anand)",
        status: "UNDER REVIEW",
        createdAt: "2026-09-24T11:00:00.000Z",
        lastAction: "PM-POSHAN Nutrition Kit matched; follow-up overdue",
        nextFollowUp: "2026-10-01", // OVERDUE!
        priority: "HIGH",
        actions: [
            { id: "act-5", type: "parent-contact", label: "Contact Parent (Hindi)", status: "completed", date: "2026-09-25", completedAt: "2026-09-25" },
            { id: "act-6", type: "scheme-match", label: "Pre-Matric DBT Scholarship Application", status: "pending", date: "2026-09-25", completedAt: null },
            { id: "act-7", type: "welfare-kit", label: "PM-POSHAN Food Ration Kit", status: "completed", date: "2026-09-27", completedAt: "2026-09-27" }
        ],
        notesList: [
            { id: "note-2042-1", text: "Home consultation held regarding afternoon wage labor alternatives and scholarship eligibility.", author: "Ramesh Solanki", timestamp: "2026-09-25 04:00 PM" }
        ],
        followUps: [
            {
                id: "fu-2042-1",
                caseId: "SN-2042",
                studentId: "STU-8120",
                studentName: "Vikram Rathod",
                type: "Afternoon Shift Attendance Verification",
                dueDate: "2026-10-01",
                status: "overdue",
                assignedTo: "Ramesh Solanki",
                focus: "Check if student is attending post-lunch class hours"
            }
        ],
        outcome: {
            initialRisk: 74,
            currentRisk: 74,
            initialAttendance: 64,
            currentAttendance: 65,
            initialMarks: 38,
            currentMarks: 40,
            status: "MONITORING",
            riskHistory: [
                { date: "Sep 20", risk: 70 },
                { date: "Sep 24", risk: 74 },
                { date: "Sep 28", risk: 74 },
                { date: "Oct 03", risk: 74 }
            ],
            notes: "Attendance stabilized marginally. Follow-up required to confirm afternoon schedule adjustments."
        }
    },
    {
        id: "SN-2043",
        studentId: "STU-1004",
        studentName: "Meera Parmar",
        school: "Kasturba Balika Vidyalaya",
        grade: "Class 10-C",
        district: "Kheda Cluster",
        riskLevel: "High",
        riskScore: 58,
        riskAtCreation: 68,
        currentRisk: 58,
        initialAttendance: 68,
        currentAttendance: 76,
        initialMarks: 61,
        currentMarks: 65,
        primaryConcern: "Nutritional Anemia & Chronic Physical Fatigue",
        assignedTo: "Ramesh Solanki (Teacher - Anand)",
        status: "IN PROGRESS",
        createdAt: "2026-09-28T14:15:00.000Z",
        lastAction: "Anganwadi health referral created; follow-up due today",
        nextFollowUp: "2026-10-03", // DUE TODAY!
        priority: "HIGH",
        actions: [
            { id: "act-8", type: "parent-contact", label: "Consultation with Mother Kavita", status: "completed", date: "2026-09-29", completedAt: "2026-09-29" },
            { id: "act-9", type: "health-referral", label: "Anganwadi Iron-Folic Acid Supplementation", status: "completed", date: "2026-09-30", completedAt: "2026-09-30" },
            { id: "act-10", type: "sathi-mentor", label: "Sathi Buddy Check-in (Ananya Joshi)", status: "pending", date: "2026-10-01", completedAt: null }
        ],
        notesList: [
            { id: "note-2043-1", text: "Anganwadi supervisor confirmed iron supplement supply provided to mother.", author: "Ramesh Solanki", timestamp: "2026-09-30 01:20 PM" }
        ],
        followUps: [
            {
                id: "fu-2043-1",
                caseId: "SN-2043",
                studentId: "STU-1004",
                studentName: "Meera Parmar",
                type: "Health Supplement & Energy Check-in",
                dueDate: "2026-10-03",
                status: "due-today",
                assignedTo: "Ramesh Solanki",
                focus: "Review symptom improvement and classroom participation"
            }
        ],
        outcome: {
            initialRisk: 68,
            currentRisk: 58,
            initialAttendance: 68,
            currentAttendance: 76,
            initialMarks: 61,
            currentMarks: 65,
            status: "IMPROVING",
            riskHistory: [
                { date: "Sep 20", risk: 68 },
                { date: "Sep 28", risk: 68 },
                { date: "Oct 01", risk: 62 },
                { date: "Oct 03", risk: 58 }
            ],
            notes: "Observed reduction in reported dizzy spells. Student participated in full morning sessions this week."
        }
    },
    {
        id: "SN-2044",
        studentId: "STU-7089",
        studentName: "Rajesh Kumar",
        school: "Govt School Surat",
        grade: "Class 9-B",
        district: "Surat Rural",
        riskLevel: "Moderate",
        riskScore: 48,
        riskAtCreation: 68,
        currentRisk: 48,
        initialAttendance: 71,
        currentAttendance: 85,
        initialMarks: 54,
        currentMarks: 68,
        primaryConcern: "Math & Science Learning Backlogs",
        assignedTo: "Ramesh Solanki (Teacher - Anand)",
        status: "MONITORING",
        createdAt: "2026-09-18T10:00:00.000Z",
        lastAction: "Vidya Sethu Remedial Modules active; marked improving",
        nextFollowUp: "2026-10-12",
        priority: "MEDIUM",
        actions: [
            { id: "act-11", type: "remedial-support", label: "Vidya Sethu Math Remedial Kit", status: "completed", date: "2026-09-20", completedAt: "2026-09-20" },
            { id: "act-12", type: "sathi-mentor", label: "Peer Tutor Buddy (Karan Verma)", status: "completed", date: "2026-09-22", completedAt: "2026-09-22" },
            { id: "act-13", type: "parent-contact", label: "Term Check-in with Sunil Kumar", status: "completed", date: "2026-09-28", completedAt: "2026-09-28" }
        ],
        notesList: [
            { id: "note-2044-1", text: "Student demonstrated substantial confidence increase in classroom mathematics exercises.", author: "Ramesh Solanki", timestamp: "2026-09-28 02:30 PM" }
        ],
        followUps: [
            {
                id: "fu-2044-1",
                caseId: "SN-2044",
                studentId: "STU-7089",
                studentName: "Rajesh Kumar",
                type: "Remedial Unit Assessment Review",
                dueDate: "2026-10-12",
                status: "upcoming",
                assignedTo: "Ramesh Solanki",
                focus: "Review quiz results on fractions and algebra fundamentals"
            }
        ],
        outcome: {
            initialRisk: 68,
            currentRisk: 48,
            initialAttendance: 71,
            currentAttendance: 85,
            initialMarks: 54,
            currentMarks: 68,
            status: "IMPROVING",
            riskHistory: [
                { date: "Sep 15", risk: 68 },
                { date: "Sep 22", risk: 60 },
                { date: "Sep 29", risk: 52 },
                { date: "Oct 03", risk: 48 }
            ],
            notes: "Observed significant increase in classroom confidence. Math quiz grade increased by 14 points."
        }
    }
];

// ==========================================================================
// STUDENT INTERVENTION TIMELINES
// ==========================================================================
const INITIAL_TIMELINES = {
    "STU-9041": [
        { id: "tl-9041-1", date: "Sep 20, 2026", time: "09:00 AM", type: "Risk Warning", description: "Attendance dipped to 58% during seasonal harvest onset. Risk calculated at 88%.", actor: "Scholar Notify Engine" },
        { id: "tl-9041-2", date: "Oct 01, 2026", time: "10:15 AM", type: "Intervention Created", description: "Case SN-2041 opened with transit support and peer mentorship plan.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-9041-3", date: "Oct 02, 2026", time: "11:30 AM", type: "Parent Contact", description: "Bilingual phone contact with Ramesh Solanki (Father) regarding GSRTC free bus pass.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-9041-4", date: "Oct 02, 2026", time: "02:00 PM", type: "Scheme Match", description: "Enrolled in Free Student Bus Pass Scheme (GSRTC route #14).", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-9041-5", date: "Oct 03, 2026", time: "09:30 AM", type: "Mentor Assignment", description: "Assigned senior peer mentor Aarav Patel (Class 11-B) for daily morning check-ins.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-9041-6", date: "Oct 03, 2026", time: "04:00 PM", type: "Improvement", description: "Attendance rate increased to 74% across recent 5 days. Risk adjusted 88% → 72%.", actor: "Scholar Notify Engine" }
    ],
    "STU-8120": [
        { id: "tl-8120-1", date: "Sep 24, 2026", time: "11:00 AM", type: "Intervention Created", description: "Case SN-2042 opened for afternoon shift attendance deficits.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-8120-2", date: "Sep 25, 2026", time: "03:15 PM", type: "Parent Contact", description: "Discussed PM-POSHAN take-home ration entitlements with Sanjay Rathod.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-8120-3", date: "Sep 27, 2026", time: "12:00 PM", type: "Scheme Match", description: "Allocated monthly nutrition kit to offset household food expenses.", actor: "Ramesh Solanki (Teacher)" }
    ],
    "STU-1004": [
        { id: "tl-1004-1", date: "Sep 28, 2026", time: "02:15 PM", type: "Intervention Created", description: "Case SN-2043 initialized for chronic fatigue and nutritional anemia flag.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-1004-2", date: "Sep 29, 2026", time: "10:45 AM", type: "Parent Contact", description: "Spoke with mother Kavita Parmar regarding local Anganwadi health visit schedule.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-1004-3", date: "Sep 30, 2026", time: "01:30 PM", type: "Follow-up", description: "Anganwadi supervisor completed first home health round. Iron supplements dispensed.", actor: "Ramesh Solanki (Teacher)" }
    ],
    "STU-7089": [
        { id: "tl-7089-1", date: "Sep 18, 2026", time: "10:00 AM", type: "Intervention Created", description: "Case SN-2044 opened for foundational mathematics backlogs.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-7089-2", date: "Sep 20, 2026", time: "11:00 AM", type: "Scheme Match", description: "Allocated Vidya Sethu remedial workbook set.", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-7089-3", date: "Sep 22, 2026", time: "02:30 PM", type: "Mentor Assignment", description: "Paired with peer tutor Karan Verma (Class 11-A).", actor: "Ramesh Solanki (Teacher)" },
        { id: "tl-7089-4", date: "Sep 29, 2026", time: "03:45 PM", type: "Improvement", description: "Student completed all backlog worksheets. Math test score improved to 68%.", actor: "Scholar Notify Engine" }
    ],
    "STU-9102": [
        { id: "tl-9102-1", date: "Sep 26, 2026", time: "08:30 AM", type: "Risk Warning", description: "Severe risk detected (92%). Attendance dropped to 52% due to salt-pan seasonal labor.", actor: "Scholar Notify Engine" }
    ]
};

// ==========================================================================
// PARENT COMMUNICATION LANGUAGE & TONE TEMPLATES (7 LANGUAGES)
// ==========================================================================
const PARENT_COMMUNICATION_TEMPLATES = {
    languages: {
        en: "English",
        gu: "Gujarati (ગુજરાતી)",
        hi: "Hindi (हिन्दी)",
        ta: "Tamil (தமிழ்)",
        te: "Telugu (తెలుగు)",
        kn: "Kannada (ಕನ್ನಡ)",
        ml: "Malayalam (മലയാളം)"
    },
    tones: ["Formal", "Simple", "Concerned", "Urgent"],
    purposes: [
        "Attendance concern",
        "Academic concern",
        "General check-in",
        "Intervention follow-up",
        "Urgent concern"
    ],

    en: {
        Concerned: {
            attendance: "Dear {parentName},\n\nWe noticed that {studentName}'s attendance has recently declined to {attendance}. We would like to understand whether there are any commute or family difficulties affecting regular attendance and discuss possible support options like free bus passes.\n\nPlease let us know a convenient time to speak.\n\nWarm regards,\nTeacher {teacher}\n{school}",
            academic: "Dear {parentName},\n\nWe wanted to share that {studentName} may benefit from some extra academic guidance. Our school offers free remedial tutoring and peer mentorship to ensure steady confidence in class.\n\nWe would welcome a brief discussion at your convenience.\n\nWarm regards,\nTeacher {teacher}\n{school}",
            checkin: "Dear {parentName},\n\nThis is a routine check-in from {school}. We wanted to confirm how {studentName} is finding their studies and whether your family requires any school supplies or welfare scheme support.\n\nBest regards,\nTeacher {teacher}",
            followup: "Dear {parentName},\n\nFollowing up on our recent support plan for {studentName}, we are checking in to see if the assigned arrangements (such as commute assistance or tutoring) are functioning well.\n\nPlease feel free to share any feedback.\n\nWarm regards,\nTeacher {teacher}",
            urgent: "URGENT NOTICE\n\nDear {parentName},\n\n{studentName} has accumulated significant consecutive absences. Immediate communication with the school is required to ensure continued enrollment and support.\n\nPlease contact the school office as soon as possible.\n\nRespectfully,\nTeacher {teacher}\n{school}"
        },
        Simple: {
            attendance: "Hello {parentName},\n\n{studentName}'s attendance is {attendance}. We miss them in school and want to help with travel or study needs. Please call or visit us when free.\n\nTeacher {teacher}\n{school}",
            academic: "Hello {parentName},\n\nWe want to give {studentName} free extra learning help after school. Please let us know if this works for you.\n\nTeacher {teacher}",
            checkin: "Hello {parentName},\n\nJust checking in from school. Everything is going well with {studentName}. Please let us know if you need anything.\n\nTeacher {teacher}",
            followup: "Hello {parentName},\n\nChecking if the new support for {studentName} is helping. Let us know how things are at home.\n\nTeacher {teacher}",
            urgent: "Hello {parentName},\n\n{studentName} has missed multiple days. Please call or meet Teacher {teacher} at {school} today."
        },
        Formal: {
            attendance: "Respected {parentName},\n\nOfficial notification regarding the academic attendance record of {studentName} (Current: {attendance}). Under the State Student Retention Protocol, early intervention support is being provisioned.\n\nYou are requested to schedule a meeting with the undersigned.\n\nSincerely,\nTeacher {teacher}\n{school}",
            academic: "Respected {parentName},\n\nRegarding the academic progression of {studentName}. Structured remedial assistance has been scheduled to address foundational competencies.\n\nKindly acknowledge receipt of this communication.\n\nSincerely,\nTeacher {teacher}\n{school}",
            checkin: "Respected {parentName},\n\nRoutine institutional check-in regarding the educational welfare and state entitlement eligibility of {studentName}.\n\nRespectfully,\nTeacher {teacher}",
            followup: "Respected {parentName},\n\nIntervention review report regarding {studentName}. Please confirm whether ongoing welfare provisions meet the student's requirements.\n\nRespectfully,\nTeacher {teacher}",
            urgent: "PRIORITY ADMINISTRATIVE NOTICE\n\nRespected {parentName},\n\nCritical attendance alert recorded for {studentName}. Immediate parental consultation is mandated under district education guidelines.\n\nRespectfully,\nTeacher {teacher}\n{school}"
        },
        Urgent: {
            attendance: "URGENT ATTENDANCE ALERT\n\nDear {parentName},\n\n{studentName}'s attendance has dropped critically to {attendance}. Continued absence places enrollment at immediate risk. Free state welfare and travel support are available immediately.\n\nPlease contact Teacher {teacher} today at {school}.",
            academic: "URGENT ACADEMIC NOTICE\n\nDear {parentName},\n\n{studentName} requires immediate remedial support before upcoming evaluations. Please contact the school today to enroll in our free bridge session.\n\nTeacher {teacher}",
            checkin: "URGENT NOTICE\n\nDear {parentName},\n\nWe urgently request a check-in regarding {studentName}'s current wellbeing and school attendance. Please call the school immediately.\n\nTeacher {teacher}",
            followup: "URGENT FOLLOW-UP\n\nDear {parentName},\n\nAction required on {studentName}'s intervention plan. Please connect with Teacher {teacher} immediately.\n\n{school}",
            urgent: "EMERGENCY ENGAGEMENT NOTICE\n\nDear {parentName},\n\nImmediate parental presence or contact is requested regarding {studentName} at {school}. Please reach out to Teacher {teacher} today."
        }
    },

    gu: {
        Concerned: {
            attendance: "આદરણીય {parentName},\n\nઅમે જોયું કે {studentName}ની હાજરી ઘટીને {attendance} થઈ ગઈ છે. શું ગામડેથી શાળા સુધી આવવા-જવામાં કોઈ મુશ્કેલી છે? સરકાર તરફથી મફત બસ પાસ અને સહાય ઉપલબ્ધ છે.\n\nવાતચીત કરવા માટે અનુકૂળ સમય જણાવશો.\n\nશિક્ષક {teacher}\n{school}",
            academic: "આદરણીય {parentName},\n\n{studentName}ના ભણતરમાં થોડી સહાયની જરૂર જણાય છે. અમારી શાળામાં મફત વધારાનું શિક્ષણ (રેમેડિયલ વર્ગો) આપવામાં આવે છે. કૃપા કરીને અનુકૂળ સમયે મળશો.\n\nશિક્ષક {teacher}",
            checkin: "આદરણીય {parentName},\n\nશાળામાંથી નિયમિત ખબર-અંતર. {studentName}નું ભણતર કેવું ચાલે છે અને કોઈ સરકારી યોજનાની જરૂર હોય તો જણાવશો.\n\nશિક્ષક {teacher}",
            followup: "આદરણીય {parentName},\n\n{studentName} માટે શરૂ કરેલ સહાય બાબતે ફોલો-અપ. નવી વ્યવસ્થાથી બાળકને અનુકૂળતા રહે છે કે નહીં તે જણાવશો.\n\nશિક્ષક {teacher}",
            urgent: "અતિ તાકીદની સૂચના\n\nઆદરણીય {parentName},\n\n{studentName} ઘણા દિવસોથી ગેરહાજર છે. બાળકના ભવિષ્ય અને શાળામાં નોંધણી માટે તાત્કાલિક શાળાનો સંપર્ક કરશો.\n\nશિક્ષક {teacher}\n{school}"
        },
        Simple: {
            attendance: "નમસ્તે {parentName},\n\n{studentName}ની હાજરી {attendance} છે. બસ કે ભણવામાં કોઈ મદદ જોઈએ તો કહેશો. સમય મળે ત્યારે ફોન કરશો.\n\nશિક્ષક {teacher}",
            academic: "નમસ્તે {parentName},\n\nઅમે {studentName}ને શાળા પછી મફતમાં વધુ ભણાવીશું. તમને અનુકૂળ હોય તો જણાવશો.\n\nશિક્ષક {teacher}",
            checkin: "નમસ્તે {parentName},\n\n{studentName}ની શાળા સારી ચાલે છે. કોઈ મદદ જોઈએ તો જણાવશો.\n\nશિક્ષક {teacher}",
            followup: "નમસ્તે {parentName},\n\nનવી સહાય પછી {studentName}ને કેવું લાગે છે તે જણાવશો.\n\nશિક્ષક {teacher}",
            urgent: "નમસ્તે {parentName},\n\n{studentName} શાળાએ આવતો નથી. આજે જ શિક્ષક {teacher}ને મળવા વિનંતી."
        },
        Formal: {
            attendance: "માનનીય વાલીશ્રી {parentName},\n\nરાજ્ય શિક્ષણ વિભાગના માર્ગદર્શન હેઠળ {studentName}ની હાજરી ({attendance}) અંગે આ પત્ર પાઠવવામાં આવે છે. વિદ્યાર્થીને નિયમિત બનાવવા જરૂરી યોજનાકીય સહાય ઉપલબ્ધ છે.\n\nઆપને રૂબરૂ મુલાકાત માટે વિનંતી છે.\n\nશિક્ષક {teacher}\n{school}",
            academic: "માનનીય વાલીશ્રી {parentName},\n\n{studentName}ના શૈક્ષણિક મૂલ્યાંકન સંદર્ભે ઉપચારાત્મક શિક્ષણ સહાય મંજૂર કરવામાં આવી છે.\n\nસાદર,\nશિક્ષક {teacher}",
            checkin: "માનનીય વાલીશ્રી {parentName},\n\nવિદ્યા સમીક્ષા કેન્દ્ર અંતર્ગત વિદ્યાર્થી કલ્યાણ સમીક્ષા.\n\nસાદર,\nશિક્ષક {teacher}",
            followup: "માનનીય વાલીશ્રી {parentName},\n\nવિદ્યાર્થી સહાય યોજનાનું પ્રગતિ વિશ્લેષણ અને સમીક્ષા અહેવાલ.\n\nશિક્ષક {teacher}",
            urgent: "તાત્કાલિક વહીવટી નોટિસ\n\nમાનનીય વાલીશ્રી {parentName},\n\n{studentName}ની સતત ગેરહાજરી સંદર્ભે તાત્કાલિક પરામર્શ અનિવાર્ય છે.\n\nશિક્ષક {teacher}\n{school}"
        },
        Urgent: {
            attendance: "તાકીદની હાજરી ચેતવણી\n\nઆદરણીય {parentName},\n\n{studentName}ની હાજરી ચિંતાજનક રીતે {attendance} થઈ ગઈ છે. મફત સરકારી બસ પાસ અને અનાજ સહાય તરત જ ઉપલબ્ધ છે. આજે જ સંપર્ક કરો.\n\nશિક્ષક {teacher}\n{school}",
            academic: "તાકીદની શૈક્ષણિક સૂચના\n\nઆદરણીય {parentName},\n\nપરીક્ષા પૂર્વે {studentName}ને વધારાના શિક્ષણની તાત્કાલિક જરૂર છે. આજે જ શાળાનો સંપર્ક કરશો.\n\nશિક્ષક {teacher}",
            checkin: "તાકીદનો સંપર્ક અનુરોધ\n\nઆદરણીય {parentName},\n\n{studentName} બાબતે તાત્કાલિક વાતચીત જરૂરી છે. કૃપા કરીને ફોન કરશો.\n\nશિક્ષક {teacher}",
            followup: "તાકીદનું ફોલો-અપ\n\nઆદરણીય {parentName},\n\n{studentName}ની યોજના બાબતે તાત્કાલિક નિર્ણય લેવાનો છે.\n\nશિક્ષક {teacher}",
            urgent: "અતિ મહત્વપૂર્ણ કટોકટી સૂચના\n\nઆદરણીય {parentName},\n\n{studentName} બાબતે આજે જ શાળામાં ઉપસ્થિત રહેવા નમ્ર વિનંતી છે.\n\nશિક્ષક {teacher}\n{school}"
        }
    },

    hi: {
        Concerned: {
            attendance: "नमस्ते {parentName} जी,\n\nहमने देखा कि {studentName} की उपस्थिति हाल ही में घटकर {attendance} हो गई है। क्या आने-जाने या पारिवारिक स्तर पर कोई कठिनाई है? सरकार द्वारा मुफ्त बस पास और छात्रवृत्ति सहायता उपलब्ध है।\n\nकृपया बात करने के लिए सुविधाजनक समय बताएं।\n\nसादर,\nशिक्षक {teacher}\n{school}",
            academic: "नमस्ते {parentName} जी,\n\n{studentName} को पढ़ाई में अतिरिक्त मार्गदर्शन की आवश्यकता महसूस हो रही है। हमारे स्कूल में निशुल्क उपचारात्मक कक्षाएं संचालित हैं। इस संबंध में चर्चा के लिए समय निकालें।\n\nशिक्षक {teacher}",
            checkin: "नमस्ते {parentName} जी,\n\n{school} से सामान्य कुशल-क्षेम। {studentName} की पढ़ाई कैसी चल रही है और क्या किसी सरकारी योजना की आवश्यकता है, कृपया बताएं।\n\nशिक्षक {teacher}",
            followup: "नमस्ते {parentName} जी,\n\n{studentName} के लिए शुरू की गई सहायता व्यवस्था (बस पास/ट्यूशन) के बारे में जानकारी लेने के लिए यह संदेश भेजा गया है।\n\nशिक्षक {teacher}",
            urgent: "अति आवश्यक सूचना\n\nनमस्ते {parentName} जी,\n\n{studentName} लगातार स्कूल से अनुपस्थित हैं। नामांकन और सहायता सुरक्षित रखने के लिए तुरंत स्कूल से संपर्क करें।\n\nशिक्षक {teacher}\n{school}"
        },
        Simple: {
            attendance: "नमस्ते {parentName} जी,\n\n{studentName} की हाजिरी {attendance} है। स्कूल आने में कोई परेशानी हो तो बताएं, हम मदद करेंगे।\n\nशिक्षक {teacher}",
            academic: "नमस्ते {parentName} जी,\n\nहम {studentName} को स्कूल के बाद मुफ्त में पढ़ाना चाहते हैं। कृपया सहमति दें।\n\nशिक्षक {teacher}",
            checkin: "नमस्ते {parentName} जी,\n\n{studentName} ठीक है। किसी मदद की जरूरत हो तो बताइएगा।\n\nशिक्षक {teacher}",
            followup: "नमस्ते {parentName} जी,\n\nनई मदद से {studentName} को फायदा हो रहा है या नहीं, जरूर बताएं।\n\nशिक्षक {teacher}",
            urgent: "नमस्ते {parentName} जी,\n\n{studentName} स्कूल नहीं आ रहा है। आज ही शिक्षक {teacher} से मिलें।"
        },
        Formal: {
            attendance: "आदरणीय {parentName},\n\nविद्या समीक्षा केंद्र के अंतर्गत {studentName} की उपस्थिति ({attendance}) के संबंध में आधिकारिक सूचना। संस्था द्वारा आवश्यक कल्याणकारी सहयोग उपलब्ध कराया जा रहा है।\n\nसादर,\nशिक्षक {teacher}\n{school}",
            academic: "आदरणीय {parentName},\n\n{studentName} के शैक्षणिक संवर्धन हेतु विशेष उपचारात्मक कक्षाएं अनुशंसित की गई हैं।\n\nसादर,\nशिक्षक {teacher}",
            checkin: "आदरणीय {parentName},\n\nसंस्थागत विद्यार्थी कल्याण एवं अधिकार समीक्षा।\n\nसादर,\nशिक्षक {teacher}",
            followup: "आदरणीय {parentName},\n\nप्रदत्त सहयोग योजना की मासिक प्रगति रिपोर्ट एवं समीक्षा।\n\nसादर,\nशिक्षक {teacher}",
            urgent: "अति आवश्यक प्रशासनिक सूचना\n\nआदरणीय {parentName},\n\n{studentName} की निरंतर अनुपस्थिति पर तत्काल अभिभावक परामर्श अनिवार्य है।\n\nशिक्षक {teacher}\n{school}"
        },
        Urgent: {
            attendance: "तत्काल उपस्थिति सूचना\n\nनमस्ते {parentName} जी,\n\n{studentName} की उपस्थिति गिरकर {attendance} हो चुकी है। बिना शुल्क बस पास और राशन सहायता तुरंत उपलब्ध है। आज ही संपर्क करें।\n\nशिक्षक {teacher}\n{school}",
            academic: "आवश्यक शैक्षणिक चेतावनी\n\nनमस्ते {parentName} जी,\n\nपरीक्षा से पूर्व {studentName} को विशेष कक्षा की तत्काल आवश्यकता है।\n\nशिक्षक {teacher}",
            checkin: "तत्काल संपर्क अनुरोध\n\nनमस्ते {parentName} जी,\n\n{studentName} के बारे में तुरंत बात करना आवश्यक है। कृपया तुरंत फोन करें।\n\nशिक्षक {teacher}",
            followup: "अति आवश्यक फॉलो-अप\n\nनमस्ते {parentName} जी,\n\nसहायता योजना पर तुरंत निर्णय अपेक्षित है।\n\nशिक्षक {teacher}",
            urgent: "आपातकालीन अभिभावक बुलावा\n\nनमस्ते {parentName} जी,\n\n{studentName} के संबंध में आज ही स्कूल कार्यालय में उपस्थित होने का अनुरोध है।\n\nशिक्षक {teacher}\n{school}"
        }
    },

    ta: {
        Concerned: {
            attendance: "அன்புள்ள {parentName},\n\n{studentName} அவர்களின் பள்ளி வருகை {attendance} ஆக குறைந்துள்ளது. பயணம் அல்லது வீட்டு சூழல் காரணமாக ஏதேனும் சிரமம் உள்ளதா? இலவச பேருந்து பாஸ் உதவி உள்ளது. பேசுவதற்கு வசதியான நேரத்தை கூறவும்.\n\nஆசிரியர் {teacher}\n{school}",
            academic: "அன்புள்ள {parentName},\n\n{studentName} படிப்பில் கூடுதல் கவனம் செலுத்த இலவச சிறப்பு வகுப்பு தொடங்கப்பட்டுள்ளது. ஆலோசனைக்கு அழைக்கவும்.\n\nஆசிரியர் {teacher}",
            checkin: "அன்புள்ள {parentName},\n\n{studentName} நலம் விசாரிக்கிறோம். பள்ளி நலத்திட்ட உதவி தேவைப்படின் தெரிவிக்கவும்.\n\nஆசிரியர் {teacher}",
            followup: "அன்புள்ள {parentName},\n\nவழங்கப்பட்ட புதிய வசதிகள் {studentName} அவர்களுக்கு பயனுள்ளதாக உள்ளதா என அறிய விரும்புகிறோம்.\n\nஆசிரியர் {teacher}",
            urgent: "அவசர அறிவிப்பு\n\n{studentName} பல நாட்களாக பள்ளிக்கு வரவில்லை. உடனடியாக பள்ளி ஆசிரியரை தொடர்பு கொள்ளவும்.\n\nஆசிரியர் {teacher}\n{school}"
        },
        Simple: {
            attendance: "வணக்கம் {parentName},\n\n{studentName} வருகை {attendance} ஆக உள்ளது. பேருந்து அல்லது படிப்பு உதவி தேவைப்பட்டால் சொல்லுங்கள். ஆசிரியரை தொடர்பு கொள்ளவும்.\n\nஆசிரியர் {teacher}",
            academic: "வணக்கம் {parentName},\n\n{studentName} படிப்புக்கு பள்ளி முடிந்ததும் இலவச சிறப்பு வகுப்பு வழங்க விரும்புகிறோம்.\n\nஆசிரியர் {teacher}",
            checkin: "வணக்கம் {parentName},\n\nபள்ளியிலிருந்து நலம் விசாரிக்கிறோம். {studentName} பள்ளிக்கு மகிழ்ச்சியுடன் வருகிறார். உதவி தேவைப்படின் கூறவும்.\n\nஆசிரியர் {teacher}",
            followup: "வணக்கம் {parentName},\n\nபுதிய உதவி திட்டம் {studentName} அவர்களுக்கு பயனுள்ளதாக இருக்கிறதா என்று தெரிவியுங்கள்.\n\nஆசிரியர் {teacher}",
            urgent: "வணக்கம் {parentName},\n\n{studentName} பள்ளிக்கு வரவில்லை. உடனடியாக ஆசிரியர் {teacher} அவர்களை தொடர்பு கொள்ளவும்."
        },
        Formal: {
            attendance: "மதிப்பிற்குரிய {parentName},\n\nமாணவர் {studentName} அவர்களின் வருகை பதிவு ({attendance}) பற்றிய அதிகாரப்பூர்வ தகவல். அரசு உதவித்திட்டங்கள் மூலமாக உதவி செய்ய பள்ளி தயாராக உள்ளது. நேரில் வருகை தருமாறு கேட்டுக்கொள்ளப்படுகிறீர்கள்.\n\nஆசிரியர் {teacher}\n{school}",
            academic: "மதிப்பிற்குரிய {parentName},\n\n{studentName} அவர்களின் கல்வித்திறனை மேம்படுத்த சிறப்பு நிவாரண வகுப்புகள் ஒதுக்கப்பட்டுள்ளன.\n\nஆசிரியர் {teacher}\n{school}",
            checkin: "மதிப்பிற்குரிய {parentName},\n\nவித்யா சமிக்ஷா கேந்திரா வழிகாட்டுதலின்படி வழக்கமான மாணவர் நலம் மற்றும் நலத்திட்ட தகுதி ஆய்வு.\n\nஆசிரியர் {teacher}",
            followup: "மதிப்பிற்குரிய {parentName},\n\nவழங்கப்பட்ட தலையீட்டு திட்டத்தின் மாதாந்திர முன்னேற்ற ஆய்வு.\n\nஆசிரியர் {teacher}",
            urgent: "நிர்வாக ரீதியான அவசர அறிக்கை\n\nமதிப்பிற்குரிய {parentName},\n\n{studentName} தொடர் விடுப்பு எடுத்துள்ளதால் பெற்றோர் கலந்துரையாடல் மிக அவசியமாகிறது.\n\nஆசிரியர் {teacher}\n{school}"
        },
        Urgent: {
            attendance: "அவசர வருகை எச்சரிக்கை\n\nஅன்புள்ள {parentName},\n\n{studentName} பள்ளி வருகை {attendance} வரை குறைந்துள்ளது. இலவச பேருந்து பாஸ் உடனடியாக பெறலாம். இன்றே தொடர்பு கொள்ளவும்.\n\nஆசிரியர் {teacher}\n{school}",
            academic: "அவசர கல்வி அறிவிப்பு\n\nஅன்புள்ள {parentName},\n\nதேர்வுக்கு முன் {studentName} கூடுதல் பயிற்சி வகுப்பில் சேர வேண்டும். இன்றே பள்ளிக்கு வரவும்.\n\nஆசிரியர் {teacher}",
            checkin: "அவசர தொடர்பு கோரிக்கை\n\nஅன்புள்ள {parentName},\n\n{studentName} பற்றி உடனடியாக பேச வேண்டும். தயவுசெய்து அழைக்கவும்.\n\nஆசிரியர் {teacher}",
            followup: "அவசர தொடர் நடவடிக்கை\n\nஅன்புள்ள {parentName},\n\nஉதவித்திட்டம் குறித்து உடனே முடிவு செய்ய வேண்டும்.\n\nஆசிரியர் {teacher}",
            urgent: "அவசர ஆலோசனை அழைப்பு\n\nஅன்புள்ள {parentName},\n\n{studentName} தொடர்பாக இன்றே பள்ளிக்கு நேரில் வருமாறு கேட்டுக்கொள்கிறோம்.\n\nஆசிரியர் {teacher}\n{school}"
        }
    },

    te: {
        Concerned: {
            attendance: "నమస్కారం {parentName} గారు,\n\n{studentName} పాఠశాల హాజరు {attendance}కి తగ్గింది. ప్రయాణ ఇబ్బందులు ఏమైనా ఉంటే ఉచిత బస్సు పాస్ సదుపాయం ఉంది. దయచేసి మాట్లాడటానికి అనుకూలమైన సమయం చెప్పండి.\n\nఉపాధ్యాయులు {teacher}\n{school}",
            academic: "నమస్కారం {parentName} గారు,\n\n{studentName} చదువులో మరింత మెరుగుపడటానికి ఉచిత ప్రత్యేక తరగతులు ఏర్పాటు చేశాము. సంప్రదించండి.\n\nఉపాధ్యాయులు {teacher}",
            checkin: "నమస్కారం {parentName} గారు,\n\n{studentName} చదువుల గురించి విచారణ. ప్రభుత్వ పథకాల సహాయం కావాలంటే తెలియజేయండి.\n\nఉపాధ్యాయులు {teacher}",
            followup: "నమస్కారం {parentName} గారు,\n\n{studentName}కి అందించిన సహాయ పథకం ఎలా పనిచేస్తుందో తెలుసుకోవడానికి ఈ సందేశం.\n\nఉపాధ్యాయులు {teacher}",
            urgent: "అత్యవసర సమాచారం\n\n{studentName} చాలా రోజులుగా గైర్హాజరవుతున్నారు. వెంటనే పాఠశాలను సంప్రదించండి.\n\nఉపాధ్యాయులు {teacher}\n{school}"
        },
        Simple: {
            attendance: "నమస్తే {parentName} గారు,\n\n{studentName} హాజరు {attendance} ఉంది. బస్సు లేదా పుస్తకాల సహాయం కావాలంటే చెప్పండి. ఉపాధ్యాయుడిని కలవండి.\n\nఉపాధ్యాయులు {teacher}",
            academic: "నమస్తే {parentName} గారు,\n\nబడి తర్వాత {studentName}కి ఉచితంగా పాఠాలు చెప్పాలనుకుంటున్నాము. తెలియజేయండి.\n\nఉపాధ్యాయులు {teacher}",
            checkin: "నమస్తే {parentName} గారు,\n\n{studentName} బాగా చదువుకుంటున్నారు. ఏదైనా సాయం కావాలంటే చెప్పండి.\n\nఉపాధ్యాయులు {teacher}",
            followup: "నమస్తే {parentName} గారు,\n\nకొత్త సహాయం {studentName}కి ఉపయోగపడుతుందో లేదో తెలియజేయండి.\n\nఉపాధ్యాయులు {teacher}",
            urgent: "నమస్తే {parentName} గారు,\n\n{studentName} బడికి రాలేదు. ఈరోజే ఉపాధ్యాయులు {teacher}ను కలవండి."
        },
        Formal: {
            attendance: "గౌరవనీయులైన {parentName} గారికి,\n\n{studentName} హాజరు ({attendance}) పై అధికారిక సమాచారం. ప్రభుత్వ సంక్షేమ పథకాల ద్వారా సహాయం అందించబడుతుంది. పాఠశాలకు వచ్చి కలవవలసిందిగా కోరుచున్నాము.\n\nఉపాధ్యాయులు {teacher}\n{school}",
            academic: "గౌరవనీయులైన {parentName} గారికి,\n\n{studentName} విద్యాభివృద్ధి కోసం ప్రత్యేక రెమెడియల్ తరగతులు కేటాయించబడ్డాయి.\n\nఉపాధ్యాయులు {teacher}\n{school}",
            checkin: "గౌరవనీయులైన {parentName} గారికి,\n\nవిద్యా సమీక్షా కేంద్రం ఆధ్వర్యంలో విద్యార్థుల సంక్షేమ పరిశీలన.\n\nఉపాధ్యాయులు {teacher}",
            followup: "గౌరవనీయులైన {parentName} గారికి,\n\nఅందించిన సహాయక ప్రణాళిక పురోగతి సమీక్ష.\n\nఉపాధ్యాయులు {teacher}",
            urgent: "పరిపాలనా అత్యవసర నోటీసు\n\nగౌరవనీయులైన {parentName} గారికి,\n\n{studentName} నిరంతర గైర్హాజరీపై తక్షణమే సంప్రదించవలసిందిగా కోరుచున్నాము.\n\nఉపాధ్యాయులు {teacher}\n{school}"
        },
        Urgent: {
            attendance: "అత్యవసర హాజరు హెచ్చరిక\n\nనమస్కారం {parentName} గారు,\n\n{studentName} హాజరు {attendance}కి పడిపోయింది. ఉచిత బస్సు పాస్ వెంటనే పొందవచ్చు. ఈరోజే సంప్రదించండి.\n\nఉపాధ్యాయులు {teacher}\n{school}",
            academic: "అత్యవసర విద్యా సమాచారం\n\nనమస్కారం {parentName} గారు,\n\nపరీక్షల ముందు {studentName}కి ప్రత్యేక శిక్షణ అవసరం. పాఠశాలకు వెంటనే రండి.\n\nఉపాధ్యాయులు {teacher}",
            checkin: "అత్యవసర సంప్రదింపు అభ్యర్థన\n\nనమస్కారం {parentName} గారు,\n\n{studentName} గురించి తక్షణమే మాట్లాడాలి. వెంటనే ఫోన్ చేయండి.\n\nఉపాధ్యాయులు {teacher}",
            followup: "అత్యవసర తదుపరి చర్య\n\nనమస్కారం {parentName} గారు,\n\nసహాయక పథకంపై తక్షణ నిర్ణయం అవసరం.\n\nఉపాధ్యాయులు {teacher}",
            urgent: "అత్యవసర పిలుపు నోటీసు\n\nనమస్కారం {parentName} గారు,\n\n{studentName} విషయమై ఈరోజే పాఠశాలకు రావాలని కోరుతున్నాము.\n\nఉపాధ్యాయులు {teacher}\n{school}"
        }
    },

    kn: {
        Concerned: {
            attendance: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಅವರ ಶಾಲಾ ಹಾಜರಾತಿ {attendance} ಕ್ಕೆ ಕಡಿಮೆಯಾಗಿದೆ. ಪ್ರಯಾಣ ಅಥವಾ ಮನೆಯಲ್ಲಿ ಯಾವುದೇ ತೊಂದರೆ ಇದ್ದರೆ ಉಚಿತ ಬಸ್ ಪಾಸ್ ಸೌಲಭ್ಯವಿದೆ. ಮಾತನಾಡಲು ಅನುಕೂಲಕರ ಸಮಯ ತಿಳಿಸಿ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}",
            academic: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಅವರಿಗೆ ಕಲಿಕೆಯಲ್ಲಿ ನೆರವಾಗಲು ಉಚಿತ ವಿಶೇಷ ತರಗತಿಗಳನ್ನು ಹಮ್ಮಿಕೊಳ್ಳಲಾಗಿದೆ.\n\nಶಿಕ್ಷಕರು {teacher}",
            checkin: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಅವರ ವಿದ್ಯಾಭ್ಯಾಸದ ಕುರಿತು ವಿಚಾರಣೆ. ಯಾವುದೇ ಸರ್ಕಾರದ ನೆರವು ಬೇಕಿದ್ದರೆ ತಿಳಿಸಿ.\n\nಶಿಕ್ಷಕರು {teacher}",
            followup: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಅವರಿಗೆ ಒದಗಿಸಲಾದ ನೆರವಿನ ಕುರಿತು ಪ್ರಗತಿ ಪರಿಶೀಲನೆ.\n\nಶಿಕ್ಷಕರು {teacher}",
            urgent: "ತುರ್ತು ಸೂಚನೆ\n\n{studentName} ಸತತವಾಗಿ ಗೈರುಹಾಜರಾಗಿದ್ದಾರೆ. ದಯವಿಟ್ಟು ತಕ್ಷಣ ಶಾಲೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}"
        },
        Simple: {
            attendance: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಹಾಜರಾತಿ {attendance} ಇದೆ. ಬಸ್ ಅಥವಾ ಓದಿಗೆ ಸಹಾಯ ಬೇಕಿದ್ದರೆ ತಿಳಿಸಿ. ಶಿಕ್ಷಕರನ್ನು ಭೇಟಿ ಮಾಡಿ.\n\nಶಿಕ್ಷಕರು {teacher}",
            academic: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\nಶಾಲೆಯ ನಂತರ {studentName} ಗೆ ಉಚಿತ ಹೆಚ್ಚುವರಿ ತರಗತಿ ನಡೆಸಲು ಇಚ್ಚಿಸುತ್ತೇವೆ.\n\nಶಿಕ್ಷಕರು {teacher}",
            checkin: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಶಾಲೆಯಲ್ಲಿ ಚೆನ್ನಾಗಿದ್ದಾರೆ. ಯಾವುದೇ ಸಹಾಯ ಬೇಕಿದ್ದಲ್ಲಿ ತಿಳಿಸಿ.\n\nಶಿಕ್ಷಕರು {teacher}",
            followup: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\nಹೊಸ ಸೌಲಭ್ಯದಿಂದ {studentName} ಗೆ ಅನುಕೂಲವಾಗಿದೆಯೇ ಎಂದು ತಿಳಿಸಿ.\n\nಶಿಕ್ಷಕರು {teacher}",
            urgent: "ನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಶಾಲೆಗೆ ಬಂದಿಲ್ಲ. ಇಂದೇ ಶಿಕ್ಷಕರು {teacher} ರನ್ನು ಸಂಪರ್ಕಿಸಿ."
        },
        Formal: {
            attendance: "ಗೌರವಾನ್ವಿತ {parentName} ಅವರಿಗೆ,\n\nವಿದ್ಯಾರ್ಥಿ {studentName} ಅವರ ಶಾಲಾ ಹಾಜರಾತಿ ({attendance}) ಕುರಿತು ಅಧಿಕೃತ ಪ್ರಕಟಣೆ. ಸರಕಾರಿ ಯೋಜನೆಗಳ ನೆರವು ಲಭ್ಯವಿದೆ. ಶಾಲೆಗೆ ಭೇಟಿ ನೀಡಲು ಕೋರಲಾಗಿದೆ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}",
            academic: "ಗೌರವಾನ್ವಿತ {parentName} ಅವರಿಗೆ,\n\n{studentName} ಅವರ ಶೈಕ್ಷಣಿಕ ಸುಧಾರಣೆಗಾಗಿ ಪರಿಹಾರ ಬೋಧನೆ ತರಗತಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}",
            checkin: "ಗೌರವಾನ್ವಿತ {parentName} ಅವರಿಗೆ,\n\nವಿದ್ಯಾ ಸಮೀಕ್ಷಾ ಕೇಂದ್ರದ ವಿದ್ಯಾರ್ಥಿ ಕಲ್ಯಾಣ ಮತ್ತು ಹಿತರಕ್ಷಣೆ ಪರಿಶೀಲನೆ.\n\nಶಿಕ್ಷಕರು {teacher}",
            followup: "ಗೌರವಾನ್ವಿತ {parentName} ಅವರಿಗೆ,\n\nನೀಡಲಾದ ಸಹಾಯ ಯೋಜನೆಯ ಪ್ರಗತಿ ವರದಿ ಪರಿಶೀಲನೆ.\n\nಶಿಕ್ಷಕರು {teacher}",
            urgent: "ಆಡಳಿತಾತ್ಮಕ ತುರ್ತು ಸೂಚನೆ\n\nಗೌರವಾನ್ವಿತ {parentName} ಅವರಿಗೆ,\n\n{studentName} ಅವರ ನಿರಂತರ ಗೈರುಹಾಜರಿ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ತಕ್ಷಣದ ಭೇಟಿ ಕಡ್ಡಾಯವಾಗಿದೆ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}"
        },
        Urgent: {
            attendance: "ತುರ್ತು ಹಾಜರಾತಿ ಎಚ್ಚರಿಕೆ\n\nನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಹಾಜರಾತಿ {attendance} ಕ್ಕೆ ಇಳಿದಿದೆ. ಉಚಿತ ಬಸ್ ಪಾಸ್ ಸೌಲಭ್ಯ ತಕ್ಷಣ ಲಭ್ಯವಿದೆ. ಇಂದೇ ಸಂಪರ್ಕಿಸಿ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}",
            academic: "ತುರ್ತು ಶೈಕ್ಷಣಿಕ ಮಾಹಿತಿ\n\nನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\nಪರೀಕ್ಷೆಗೂ ಮುನ್ನ {studentName} ಅವರಿಗೆ ವಿಶೇಷ ತರಬೇತಿ ಅಗತ್ಯವಿದೆ. ಇಂದೇ ಶಾಲೆಗೆ ಭೇಟಿ ನೀಡಿ.\n\nಶಿಕ್ಷಕರು {teacher}",
            checkin: "ತುರ್ತು ಸಂಪರ್ಕ ವಿನಂತಿ\n\nನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ಬಗ್ಗೆ ತಕ್ಷಣ ಮಾತನಾಡಬೇಕಾಗಿದೆ. ದಯವಿಟ್ಟು ಕರೆ ಮಾಡಿ.\n\nಶಿಕ್ಷಕರು {teacher}",
            followup: "ತುರ್ತು ಫಾಲೋ-ಅಪ್\n\nನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\nಸಹಾಯ ಯೋಜನೆಯ ಕುರಿತು ತಕ್ಷಣದ ನಿರ್ಧಾರ ಅಗತ್ಯ.\n\nಶಿಕ್ಷಕರು {teacher}",
            urgent: "ತುರ್ತು ಸಭೆಯ ಆಹ್ವಾನ\n\nನಮಸ್ಕಾರ {parentName} ಅವರೇ,\n\n{studentName} ವಿಷಯವಾಗಿ ಇಂದೇ ಶಾಲೆಗೆ ಬರಲು ವಿನಂತಿ.\n\nಶಿಕ್ಷಕರು {teacher}\n{school}"
        }
    },

    ml: {
        Concerned: {
            attendance: "നമസ്കാരം {parentName},\n\n{studentName} ന്റെ സ്കൂൾ ഹാജർ {attendance} ആയി കുറഞ്ഞിട്ടുണ്ട്. യാത്രാ ബുദ്ധിമുട്ടുകൾ ഉണ്ടെങ്കിൽ സൗജന്യ ബസ് പാസ് സൗകര്യം ലഭ്യമാണ്. സംസാരിക്കാൻ സൗകര്യപ്രദമായ സമയം അറിയിക്കുക.\n\nഅധ്യാപകൻ {teacher}\n{school}",
            academic: "നമസ്കാരം {parentName},\n\n{studentName} ന് പഠനത്തിൽ കൂടുതൽ സഹായം നൽകാൻ സൗജന്യ പ്രത്യേക ക്ലാസുകൾ ഒരുക്കിയിട്ടുണ്ട്.\n\nഅധ്യാപകൻ {teacher}",
            checkin: "നമസ്കാരം {parentName},\n\n{studentName} ന്റെ പഠനകാര്യങ്ങൾ അന്വേഷിക്കുന്നു. ക്ഷേമപദ്ധതികൾ ആവശ്യമെങ്കിൽ അറിയിക്കുക.\n\nഅധ്യാപകൻ {teacher}",
            followup: "നമസ്കാരം {parentName},\n\n{studentName} ന് നൽകിയ സഹായ പദ്ധതികളുടെ പുരോഗതി വിലയിരുത്തുന്നു.\n\nഅധ്യാപകൻ {teacher}",
            urgent: "അടിയന്തര അറിയിപ്പ്\n\n{studentName} തുടർച്ചയായി സ്കൂളിൽ എത്തുന്നില്ല. ഉടൻ തന്നെ സ്കൂളുമായി ബന്ധപ്പെടുക.\n\nഅധ്യാപകൻ {teacher}\n{school}"
        },
        Simple: {
            attendance: "നമസ്കാരം {parentName},\n\n{studentName} ന്റെ ഹാജർ {attendance} ആണ്. യാത്രാ സൗകര്യത്തിനോ പഠനത്തിനോ സഹായം വേണമെങ്കിൽ അറിയിക്കുക.\n\nഅധ്യാപകൻ {teacher}",
            academic: "നമസ്കാരം {parentName},\n\n{studentName} ന് സ്കൂളിന് ശേഷം സൗജന്യ പ്രത്യേക ക്ലാസ് നൽകാൻ ആഗ്രഹിക്കുന്നു.\n\nഅധ്യാപകൻ {teacher}",
            checkin: "നമസ്കാരം {parentName},\n\n{studentName} പഠനത്തിൽ നന്നായി പോകുന്നു. സഹായം എന്തെങ്കിലും വേണമെങ്കിൽ പറയുക.\n\nഅധ്യാപകൻ {teacher}",
            followup: "നമസ്കാരം {parentName},\n\nപുതിയ സഹായം കൊണ്ട് {studentName} ന് പ്രയോജനമുണ്ടോ എന്ന് അറിയിക്കുക.\n\nഅധ്യാപകൻ {teacher}",
            urgent: "നമസ്കാരം {parentName},\n\n{studentName} സ്കൂളിൽ വന്നിട്ടില്ല. ഇന്ന് തന്നെ അധ്യാപകൻ {teacher} നെ ബന്ധപ്പെടുക."
        },
        Formal: {
            attendance: "ബഹുമാനപ്പെട്ട {parentName},\n\n{studentName} ന്റെ സ്കൂൾ ഹാജർനില ({attendance}) സംബന്ധിച്ച ഔദ്യോഗിക അറിയിപ്പ്. സർക്കാർ പദ്ധതികൾ വഴിയുള്ള ആനുകൂല്യങ്ങൾ ലഭ്യമാണ്. നേരിൽ കാണാൻ അഭ്യർത്ഥിക്കുന്നു.\n\nഅധ്യാപകൻ {teacher}\n{school}",
            academic: "ബഹുമാനപ്പെട്ട {parentName},\n\n{studentName} ന്റെ പഠനപുരോഗതിക്കായി പ്രത്യേക പരിശീലന ക്ലാസുകൾ ക്രമീകരിച്ചിരിക്കുന്നു.\n\nഅധ്യാപകൻ {teacher}\n{school}",
            checkin: "ബഹുമാനപ്പെട്ട {parentName},\n\nവിദ്യാ സമീക്ഷ കേന്ദ്രം വിദ്യാർത്ഥി ക്ഷേമ അവലോകനം.\n\nഅധ്യാപകൻ {teacher}",
            followup: "ബഹുമാനപ്പെട്ട {parentName},\n\nനൽകിയ സഹായ പദ്ധതിയുടെ പ്രതിമാസ പുരോഗതി വിലയിരുത്തൽ.\n\nഅധ്യാപകൻ {teacher}",
            urgent: "അടിയന്തര ഭരണനിർവ്വഹണ അറിയിപ്പ്\n\nബഹുമാനപ്പെട്ട {parentName},\n\n{studentName} ന്റെ തുടർച്ചയായ അസാന്നിധ്യം സംബന്ധിച്ച് അടിയന്തര കൂടിക്കാഴ്ച ആവശ്യപ്പെടുന്നു.\n\nഅധ്യാപകൻ {teacher}\n{school}"
        },
        Urgent: {
            attendance: "അടിയന്തര ഹാജർ മുന്നറിയിപ്പ്\n\nനമസ്കാരം {parentName},\n\n{studentName} ന്റെ ഹാജർ {attendance} ആയി കുറഞ്ഞു. സൗജന്യ യാത്രാ പാസ് ഉടൻ ലഭ്യമാണ്. ഇന്ന് തന്നെ ബന്ധപ്പെടുക.\n\nഅധ്യാപകൻ {teacher}\n{school}",
            academic: "അടിയന്തര പഠന അറിയിപ്പ്\n\nനമസ്കാരം {parentName},\n\nപരീക്ഷയ്ക്ക് മുൻപ് {studentName} ന് പ്രത്യേക ക്ലാസ് ആവശ്യമാണ്. ഉടൻ സ്കൂളിൽ എത്തുക.\n\nഅധ്യാപകൻ {teacher}",
            checkin: "അടിയന്തര സമ്പർക്ക അഭ്യർത്ഥന\n\nനമസ്കാരം {parentName},\n\n{studentName} നെ സംബന്ധിച്ച് അടിയന്തരമായി സംസാരിക്കണം. ഉടൻ വിളിക്കുക.\n\nഅധ്യാപകൻ {teacher}",
            followup: "അടിയന്തര തുടർനടപടി\n\nനമസ്കാരം {parentName},\n\nസഹായ പദ്ധതിയിൽ അടിയന്തര തീരുമാനം ആവശ്യമാണ്.\n\nഅധ്യാപകൻ {teacher}",
            urgent: "അടിയന്തര വിളിപ്പിക്കൽ നോട്ടീസ്\n\nനമസ്കാരം {parentName},\n\n{studentName} ന്റെ കാര്യത്തിൽ ഇന്ന് തന്നെ സ്കൂളിൽ ഹാജരാകാൻ അഭ്യർത്ഥിക്കുന്നു.\n\nഅധ്യാപകൻ {teacher}\n{school}"
        }
    }
};


