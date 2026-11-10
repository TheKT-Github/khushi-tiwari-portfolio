# Khushi Tiwari — Personal Developer Portfolio

A modern, production-ready, dark-themed personal developer portfolio built for **Khushi Tiwari**. Designed with a deep midnight navy palette, refined violet-blue accents, glassmorphic cards, and responsive engineering to showcase software engineering capability for off-campus and developer roles.

---

## 1. Project Overview

- **Owner:** Khushi Tiwari (Aspiring Software Developer | Full Stack Developer)
- **Education:** B.Tech Computer Science, GLA University, Mathura (Graduation: June 2026)
- **Experience Highlights:**
  - *Intellect Design Arena Ltd.* — Associate Consultant (Java, Spring Boot, Angular, iTurmeric, Purple Fabric, GenAI)
  - *Embrizon Technologies* — Web Development Intern (React.js, JavaScript, HTML5, CSS3)
- **Featured Projects:**
  - **StyleSense AI** — Fashion Feedback & Product Intelligence Platform
    - Repository: [https://github.com/TheKT-Github/feedback-survey-system](https://github.com/TheKT-Github/feedback-survey-system)
    - Tech: Node.js, Express.js, MongoDB, Google Gemini API, RAG, Chart.js, JWT, PDFKit
  - **Priora** — Smart Task Prioritization System
    - Repository: [https://github.com/TheKT-Github/Priora](https://github.com/TheKT-Github/Priora)
    - Tech: Java 17, Spring Boot, Spring Security, Angular 16, Oracle SQL, Hibernate, JUnit, Mockito
  - **AttendFlow** — Leave Management System
    - Repository: *(Pending publication)*
    - Tech: React.js, Flask, REST APIs

---

## 2. Technology Stack

- **Framework:** React 18 (Functional components & hooks)
- **Bundler / Tooling:** Vite 5
- **Icons:** Lucide React
- **Email Service:** EmailJS Official SDK (`@emailjs/browser`)
- **Styling:** Modular CSS variables and design tokens (zero heavy UI dependencies like Tailwind/Bootstrap)
- **Typography:** Inter & Manrope (Google Fonts)

---

## 3. Project Structure

```
khushi-tiwari-portfolio/
│
├── public/
│   ├── favicon.svg                   # Monogram KT SVG Favicon
│   ├── resume.pdf                    # Verified Official Resume PDF
│   └── images/
│       ├── profile-placeholder.svg   # 150-180px Avatar placeholder
│       └── projects/
│           ├── stylesense.svg        # StyleSense AI preview
│           ├── priora.svg            # Priora Three-Zone preview
│           └── attendflow.svg        # AttendFlow workflow preview
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Sticky navigation & mobile drawer
│   │   ├── Footer.jsx                # Footer with links & dynamic year
│   │   ├── ProjectCard.jsx           # Cards with tags, code buttons & actions
│   │   ├── ProjectModal.jsx          # Architecture & drill-down modal
│   │   ├── SectionHeading.jsx        # Standardized section headings
│   │   ├── SocialLinks.jsx           # GitHub, LinkedIn & Mail buttons
│   │   └── ScrollToTop.jsx           # Smooth scroll-to-top floating trigger
│   │
│   ├── sections/
│   │   ├── Hero.jsx                  # Introduction & compact photo frame
│   │   ├── About.jsx                 # Background & architectural pillars
│   │   ├── Skills.jsx                # 7 Categorized skill cards
│   │   ├── Experience.jsx            # Intellect & Embrizon timeline
│   │   ├── Projects.jsx              # Featured & core projects
│   │   ├── Education.jsx             # GLA University & KV BHU
│   │   ├── Certifications.jsx        # Verified technical credentials
│   │   └── Contact.jsx               # Interactive contact form with EmailJS SDK
│   │
│   ├── data/
│   │   └── portfolioData.js          # Centralized configuration file
│   │
│   ├── styles/
│   │   ├── variables.css             # CSS design tokens & color variables
│   │   ├── animations.css            # Keyframes & reduced-motion queries
│   │   └── global.css                # Base reset, typography & utility classes
│   │
│   ├── App.jsx                       # Main application layout
│   └── main.jsx                      # React DOM root entry
│
├── .env.example                      # Sample environment variables
├── .gitignore                        # Git ignore patterns
├── index.html                        # HTML5 entry with metadata & SEO
├── package.json                      # NPM dependencies and scripts
├── vite.config.js                    # Vite bundler config
└── README.md                         # Documentation
```

---

## 4. Installation & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Steps

1. **Clone or open the repository folder:**
   ```bash
   cd khushi-tiwari-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173/` to view your portfolio live.

---

## 5. Production Build

To create an optimized, minified production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm run preview
```

---

## 6. EmailJS Contact Form Setup

The contact form is powered by the official **EmailJS SDK (`@emailjs/browser`)**.

- **Default state:** When API keys are not set, the form runs in a safe **Interactive Demo Mode**, validating input without falsely claiming an email was sent, and offers a 1-click fallback to the default email client (`mailto:khushitiwari69120@gmail.com`).
- **Live delivery state:** Once configured with your EmailJS credentials, incoming messages are dispatched directly to your inbox (`khushitiwari69120@gmail.com`), with the sender's email configured as `reply_to`.

### Step-by-Step Setup:
1. **Create an account:** Register at [EmailJS](https://www.emailjs.com/) (free tier includes 200 emails/month).
2. **Add Email Service:**
   - Go to **Email Services** > **Add New Service**.
   - Select **Gmail** (connect `khushitiwari69120@gmail.com`).
   - Note your **Service ID** (e.g. `service_abc123`).
3. **Create Email Template:**
   - Go to **Email Templates** > **Create New Template**.
   - Set Subject: `Portfolio Contact: {{subject}}`
   - Content:
     ```
     You received a message from {{from_name}} ({{from_email}}):

     Subject: {{subject}}

     Message:
     {{message}}
     ```
   - In Settings > **Reply To**, enter `{{reply_to}}` or `{{from_email}}`.
   - Save and note your **Template ID** (e.g. `template_xyz789`).
4. **Get Public Key:**
   - Go to **Account** > **API Keys**.
   - Note your **Public Key** (User ID).
5. **Configure locally:**
   - Create a `.env` file from `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Add your keys:
     ```env
     VITE_EMAILJS_SERVICE_ID=service_abc123
     VITE_EMAILJS_TEMPLATE_ID=template_xyz789
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - Restart the dev server (`npm run dev`).
6. **Configure on Vercel (for production):**
   - In your Vercel Project Dashboard, go to **Settings** > **Environment Variables**.
   - Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
   - Trigger a redeployment.

---

## 7. How to Update Your Portfolio

All information is completely centralized in `src/data/portfolioData.js`. You do not need to hunt through individual components to modify text.

- **To update projects:** Add or edit items in `projectsData` in `src/data/portfolioData.js`.
- **To update skills:** Edit categories or add items in `skillsData`.
- **To add new certifications:** Append to `certificationsData`.
- **To update your profile picture:**
  1. Place your photograph inside `public/images/` (e.g. `public/images/khushi.jpg`).
  2. Open `src/data/portfolioData.js` and update:
     ```javascript
     profilePhoto: "/images/khushi.jpg",
     ```
- **To update your resume:**
  Replace `public/resume.pdf` with your new PDF file anytime.

---

## 8. GitHub Upload Instructions

*(Note: Perform this when you are ready to push to your GitHub account)*

1. Initialize git (if not already initialized):
   ```bash
   git init
   ```
2. Stage and commit files:
   ```bash
   git add .
   git commit -m "feat: complete premium personal developer portfolio"
   ```
3. Create a repository on GitHub (e.g., `khushi-tiwari-portfolio`).
4. Set the remote and branch:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TheKT-Github/khushi-tiwari-portfolio.git
   ```
5. Push to GitHub:
   ```bash
   git push -u origin main
   ```

---

## 9. Vercel Deployment Instructions

1. Visit [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project** and select your repository `khushi-tiwari-portfolio`.
3. Framework Preset will be automatically detected as **Vite**.
4. Root Directory: `./` (leave default).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. (Optional) Add your environment variables (`VITE_EMAILJS_SERVICE_ID`, etc.) in the Vercel Project Settings under **Environment Variables**.
8. Click **Deploy**.

Any subsequent `git push` to your `main` branch will automatically trigger a fresh Vercel deployment!

---

## 10. License

Crafted for Khushi Tiwari. All personal and project information reserved.
