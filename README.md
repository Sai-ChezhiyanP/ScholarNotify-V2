# Scholar Notify v2.0

> **State Education Retention System & Early Warning Platform (EWS)**  
> An intelligent multi-vector intervention platform designed to identify, analyze, and prevent student dropouts across public school clusters in real time. Built for **Smart India Hackathon (SIH)**.

---

## 📌 Overview

**Scholar Notify** is a mission-critical institutional web portal engineered for Teachers, School Principals, District Education Officers (DEO), and State Administrators (Vidya Samiksha Kendra - VSK). 

The platform bridges real-time student telemetry with targeted educator action: detecting early attendance and academic warning signs, diagnosing multidimensional root causes, automating welfare scheme matching, coordinating peer mentorship, and tracking intervention progress until full attendance recovery is achieved.

---

## 🌐 Multi-Language Indian Localization Engine (`i18n`)

> **New in this release**: Comprehensive multilingual localization supporting **11 major Indian languages** alongside English, enabling grassroots educators, teachers, and field officers to operate comfortably in their native regional language.

### Supported Languages
| Code | Language | Native Script | Direction |
| :---: | :--- | :--- | :---: |
| `en` | **English** | English | LTR |
| `hi` | **Hindi** | हिन्दी | LTR |
| `gu` | **Gujarati** | ગુજરાતી | LTR |
| `mr` | **Marathi** | मराठी | LTR |
| `ta` | **Tamil** | தமிழ் | LTR |
| `te` | **Telugu** | తెలుగు | LTR |
| `kn` | **Kannada** | ಕನ್ನಡ | LTR |
| `ml` | **Malayalam** | മലയാളം | LTR |
| `bn` | **Bengali** | বাংলা | LTR |
| `pa` | **Punjabi** | ਪੰਜਾਬੀ | LTR |
| `or` | **Odia** | ଓଡ଼ିଆ | LTR |
| `ur` | **Urdu** | اردو | RTL |

### Localization Features
- **Zero-Reload Instant Switching**: Select language from the top navigation bar or the sign-in portal; the entire DOM updates instantaneously without reloading the page or losing current workflow state.
- **Persistent Preference**: Stores educator language choice in browser `localStorage` (`scholar_notify_language`) across sessions.
- **Extensible Architecture (`js/i18n.js`)**: Add new regional dialects or institutional vocabularies dynamically via `ScholarI18n.addLanguage(config, translationsDict)`.
- **Bilingual Parent Communications**: WhatsApp advisories and automated parent notices adapt dynamically based on chosen regional preferences.

---

## 🐛 Bug Fixes & Stability Improvements (Branch Release)

This release addresses critical visual, layout, and telemetry bugs reported across institutional dashboards:

### 1. Viewport Scroll Position Retention on Tab Switching
- **Issue**: Switching between navigation tabs (*Overview, Action Center, Early Warning, Cases, Follow-ups, etc.*) retained the user's prior scroll position (e.g. Y = 700px), causing the destination page to render halfway down with top headers and filter controls hidden off-screen.
- **Fix**: Updated `switchTab()` in `js/app.js` to automatically and instantly reset scroll coordinates to `(0, 0)`.

### 2. Sticky Header Content Clipping
- **Issue**: The persistent platform header (~100px) clipped section headings, quick-action bars, and anchor targets upon navigation jumps.
- **Fix**: Configured `scroll-padding-top: 115px` on `html` and `scroll-margin-top: 115px` across all main sections (`.tab-content`, `.overview-section`, `section`, and `[id]`) in `css/styles.css`.

### 3. Live School Snapshot KPI Counter Suffix Duplication
- **Issue**: Live overview metric cards displayed redundant text suffixes glued directly to count-up numbers (e.g. `4 Active` on *Active Cases*, `2 Due` on *Follow-ups Due*, and `3 Students` on *Students Improving*), duplicating card titles and subtext.
- **Fix**: Cleaned count-up animations in `js/app.js` to render crisp, standardized numerical indicators (`11`, `4 (36.4%)`, `4`, `2`, `3`) with dedicated metadata sub-labels.

### 4. Multilingual DOM Attribute Coverage (`data-i18n`)
- **Issue**: Overview KPI cards, quick-action buttons (*Go to Action Center*, *Parent WhatsApp Batch*), and live school telemetry remained in English when switching languages.
- **Fix**: Added comprehensive `data-i18n` attributes across `index.html` and integrated corresponding dictionary translations in `js/i18n.js`.

### 5. Dynamic Parent WhatsApp Batch Counter
- **Issue**: Batch WhatsApp notification alert previously reported an arbitrary static count of 38 parents.
- **Fix**: Updated `triggerBatchNotification()` in `js/app.js` to calculate live counts dynamically from the active high-risk roster (`4` parents in current Anand cluster).

### 6. Local Server Port Synchronization
- **Issue**: Documentation previously referenced port 8080, causing connection errors when starting `server.py` on default port 8000.
- **Fix**: Synchronized documentation and server configurations to `http://localhost:8000`.

### 7. Floating Back-to-Top Navigation
- **Feature**: Added a sleek, non-intrusive floating circular button (`#backToTopBtn`) at the bottom-left corner that smoothly scrolls the educator back to top controls upon request.

### 8. Institutional Card Padding & Text Cut-Off Alignment Fix
- **Issue**: Cards across Overview, Action Center, and Explore modules used an invalid utility class `p-4.5` (unrecognized by standard Tailwind CSS), evaluating to `0px` internal padding. Text, numbers, and corner icons pressed directly against the card borders and appeared cut off at the top and bottom.
- **Fix**: Standardized padding across all cards to `p-5` (`1.25rem` / 20px), added `min-h-[148px]` for consistent vertical alignment across responsive columns, and established fallback padding in `.inst-card`.

### 9. Desktop Fluid Container & Typography Scaling (100% Zoom Optimization)
- **Issue**: Fixed `max-w-7xl` (1280px) and micro font classes (`text-[10px]`, `text-[11px]`) caused modern 1080p and 1440p displays at default 100% zoom to display wide empty black borders, making the UI feel overly zoomed out and small.
- **Fix**: Implemented responsive fluid container expansion (`1480px`–`1840px` across `min-width: 1280px`, `1440px`, `1680px`, and `1920px`), scaled root typography gracefully from `16.5px` to `17.5px`, and bumped micro-label legibility so the dashboard fills wide screens naturally.

---

## ✨ Key Platform Features

- 📊 **VSK Dashboard Overview**: Real-time institutional telemetry, district-level risk distribution, and interactive cluster surveillance.
- ⚠️ **Early Warning System (EWS)**: Algorithmic student-level risk scoring categorizing profiles into Severe (Red), High (Amber), Moderate (Yellow), and Low (Green) risk tiers.
- 🎯 **Multi-Vector Diagnostic Engine (DNA)**: Deep-dive root cause breakdown across Academic, Socio-Economic, Health & Nutrition, Behavioral, and Commute vectors.
- ⚡ **Universal Smart Intake**: Rapid student record intake via Excel (`.xlsx`/`.csv`) parsing with SheetJS, OCR document scanning with Tesseract.js, or voice input.
- 🤝 **Govt Welfare Schemes Matcher**: Automatic matching of student eligibility profiles with active government schemes (PM-POSHAN, transport vouchers, caste welfare DBT).
- 🎛️ **Support Plan Simulator**: Interactive "what-if" testing sandbox to forecast attendance improvements based on proposed intervention mixes.
- 👥 **Sathi Peer Mentorship**: Connects high-performing senior student mentors with vulnerable peers for academic companionship.
- 🚨 **Emergency Field Dispatch (SOS)**: Urgent escalation matrix and home-visit dispatch protocols for critical absenteeism cases.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Core** | HTML5, JavaScript (ES6+ Vanilla), CSS3 |
| **Styling & Design System** | Tailwind CSS CDN, Custom Institutional CSS tokens |
| **Localization (i18n)** | Custom lightweight i18n engine (`js/i18n.js`) |
| **Data Visualization** | Chart.js |
| **Document & Data Processing** | SheetJS (`xlsx`), Tesseract.js (OCR) |
| **Iconography & Fonts** | FontAwesome 6 Pro, Plus Jakarta Sans, Inter |
| **Local Web Server** | Python 3 (`http.server`) |

---

## 🚀 Quick Start

### Prerequisites
- Python 3.x installed on your system.
- Any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Running Locally

1. **Clone the repository and checkout the new branch:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sih-dropout-defenders.git
   cd sih-dropout-defenders
   git checkout -b feature/multilingual-and-bugfixes
   ```

2. **Start the local server:**
   ```bash
   python server.py
   ```
   *(Or alternatively: `python -m http.server 8000`)*

3. **Access the portal:**
   Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## 🔑 Demo Credentials

Use any of the official demo accounts below to explore different administrative roles:

| Role | Username | Password | District / Cluster |
| :--- | :--- | :--- | :--- |
| 👩‍🏫 **Teacher** | `teacher.anand` | `teacher@2026` | Anand Cluster |
| 🏛️ **District Education Officer (DEO)** | `deo.gujarat` | `deo@2026` | Gujarat State |
| ⚙️ **System Administrator (VSK Portal)** | `admin.vsk` | `admin@2026` | State Command Centre |

---

## 📜 License & Hackathon Context

This project is developed for **Smart India Hackathon (SIH)** under the theme of **Dropout Prevention & Student Retention in Primary and Secondary Education**.
