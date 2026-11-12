export interface CaseStudyScreenshot {
  id: string;
  tabLabel: string;
  title: string;
  workflowRole: string;
  caption: string;
  underTheHood: string[];
  keyCapabilities: string[];
  src: string;
}

export interface TechLayer {
  layer: string;
  detail: string;
  tech: string;
}

export interface MetricHighlight {
  metric: string;
  label: string;
  sublabel?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  category: 'web' | 'mobile ai' | 'ai automation';
  categoryLabel: string;
  badge: string;
  badgeType: 'ai' | 'live' | 'in-progress';
  client: string;
  engagement: string;
  industry: string;
  timeline: string;
  platform: string;
  title: string;
  shortTitle: string;
  oneLiner: string;
  summary: string;
  subSummary?: string;
  heroImage: string;
  liveUrl?: string | null;
  liveUrlLabel?: string;
  hasShowcaseModal?: boolean;
  problem: {
    badge: string;
    headline: string;
    description: string;
    points: { title: string; desc: string }[];
  };
  solution: {
    badge: string;
    headline: string;
    description: string;
    points: { title: string; desc: string }[];
  };
  workflowWalkthrough?: {
    headline: string;
    subheadline: string;
    steps: {
      step: string;
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  screenshots?: CaseStudyScreenshot[];
  techLayers: TechLayer[];
  keyFeatures: string[];
  results: MetricHighlight[];
  techStack: string[];
  impact: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'sehat',
    slug: 'sehat-smartcare',
    category: 'mobile ai',
    categoryLabel: 'AI & Mobile Engineering',
    badge: 'FLAGSHIP AI CASE STUDY • ACTIVE BUILD',
    badgeType: 'ai',
    client: 'InfoHQ Internal Product',
    engagement: 'End-to-End Product Engineering',
    industry: 'Healthcare & Clinical AI',
    timeline: '12-Week Milestone Delivery',
    platform: 'Native Android (Kotlin) + FastAPI + FAISS Vector Search',
    title: 'SeHAT SmartCare AI — AI-Powered Health Assistance Platform',
    shortTitle: 'SeHAT SmartCare AI',
    oneLiner: 'An intelligent Android healthcare platform that translates complex lab reports into plain language, analyzes symptoms with clinical citations, and triggers one-tap emergency GPS dispatch.',
    summary: 'SeHAT SmartCare AI is an intelligent healthcare platform designed to make medical information transparent and accessible for everyday families. Built with Android, FastAPI, FAISS semantic search, medical language models, and computer vision OCR, the system delivers preliminary health clarity in English, Hindi, and Hinglish.',
    subSummary: 'The platform unifies 10 core clinical workflows — from differential symptom matching and lab report OCR to Doze-resistant medication reminders and live GPS emergency broadcasts.',
    heroImage: '/projects_images/SeHAT_SmartCare/SeHAT_Hero.webp',
    liveUrl: '#screens',
    liveUrlLabel: 'Interactive App Showcase',
    hasShowcaseModal: true,
    problem: {
      badge: 'The Healthcare Clarity Gap',
      headline: 'Why We Built SeHAT: Medical Reports Shouldn’t Need a Degree to Read',
      description: 'When families receive blood test results or pathology reports, they are confronted with dense clinical jargon, technical units, and cryptic abbreviations. Without immediate clinical context, patients experience high anxiety or turn to unverified internet forums.',
      points: [
        {
          title: 'Cryptic Pathology Jargon',
          desc: 'Phrases like "Microcytic Hypochromic Anemia" or "Platelet Count 110,000 /mcL" cause immediate panic when non-clinical users cannot contextualize normal reference ranges.'
        },
        {
          title: 'The Language Barrier in India',
          desc: 'Over 80% of Indian families think and communicate in Hindi or regional languages. Most medical apps provide English-only interfaces with zero colloquial voice support.'
        },
        {
          title: 'Fragmented Healthcare Apps',
          desc: 'Users are forced to juggle 4 separate apps: one for lab booking, one for pill alarms, another for first-aid, and standard phone calls during critical emergencies.'
        }
      ]
    },
    solution: {
      badge: 'The Engineered Solution',
      headline: 'A Unified, Trilingual Mobile Companion Powered by Context-Grounded AI',
      description: 'We engineered SeHAT as an all-in-one mobile platform combining a native Android client with high-speed Python microservices. By combining FAISS vector search with OCR and Speech Recognition, users can either photograph their reports or speak their symptoms naturally.',
      points: [
        {
          title: 'Instant Lab Report OCR',
          desc: 'CameraX and PDF parsers isolate test names, values, and biological reference intervals, generating jargon-free summaries in plain English, Hindi, or Hinglish.'
        },
        {
          title: 'RAG-Grounded Medical Chatbot',
          desc: 'FAISS vector search queries verified clinical medical guidelines, ensuring AI answers are strictly grounded and cited with standard medical disclaimers.'
        },
        {
          title: 'One-Tap Emergency GPS Broadcast',
          desc: 'High-priority FusedLocation fixes package Google Maps coordinates and broadcast live emergency alerts to trusted family contacts via SMS and WhatsApp.'
        }
      ]
    },
    workflowWalkthrough: {
      headline: 'How SeHAT Works in 3 Simple Steps',
      subheadline: 'Designed so any user — from a tech-savvy student to an elderly parent — gets instant health clarity.',
      steps: [
        {
          step: '01',
          title: 'Snap a Photo or Speak Your Query',
          desc: 'Take a clear photo of any blood test report or hold the mic button to describe your symptoms in Hindi, English, or conversational Hinglish.',
          icon: '📸'
        },
        {
          step: '02',
          title: 'AI Analyzes & Contextualizes',
          desc: 'The OCR pipeline parses numerical values against standard biological intervals while FAISS semantic retrieval grounds the answer in clinical guidelines.',
          icon: '⚡'
        },
        {
          step: '03',
          title: 'Plain-Language Advice & Action',
          desc: 'Receive clear, understandable explanations of what the results mean, follow-up questions to ask your doctor, or set automatic medication alerts.',
          icon: '✅'
        }
      ]
    },
    screenshots: [
      {
        id: 'screen-dashboard',
        tabLabel: '💬 Home & Chatbot',
        title: 'Home Dashboard & Multilingual AI Medical Chatbot',
        workflowRole: 'Central Clinical Hub & Trilingual RAG Interaction',
        caption: 'Central navigation dashboard with instant access to core health workflows, voice input integration, and an interactive RAG-powered clinical chatbot capable of responding in English, Hindi, and Hinglish with verified citations.',
        underTheHood: [
          'Microphone input captured via Android SpeechRecognizer and normalized into clean text queries in English, Hindi, or conversational Hinglish.',
          'FastAPI async backend generates embeddings using SentenceTransformers and executes cosine similarity retrieval against a FAISS vector index of verified clinical literature.',
          'Context-grounded medical LLM generates answers constrained by clinical safety guardrails, citing sources and appending standard medical disclaimers.'
        ],
        keyCapabilities: [
          'Direct access to clinical modules',
          'Trilingual speech-to-text input',
          'RAG citations & safety disclaimers',
          'Instant quick-query prompt chips'
        ],
        src: '/projects_images/SeHAT_SmartCare/homedashboard&aimeicalchatbot.webp'
      },
      {
        id: 'screen-checker-ocr',
        tabLabel: '🔬 Symptom & Report OCR',
        title: 'AI Symptom Checker & Medical Report Analyzer',
        workflowRole: 'Differential Clinical Assessment & Vision OCR Document Parsing',
        caption: 'Ranked differential symptom analysis with clinical matching (High, Moderate, Low Match), paired with a document OCR pipeline processing camera photos and PDFs of blood tests (CBC, Glucose, Platelets, Creatinine) into plain-language summaries.',
        underTheHood: [
          'Differential engine evaluates multi-symptom inputs against an indexed clinical association graph to produce probabilistic tiers: High, Moderate, and Low Match.',
          'CameraX captures test documents or user uploads PDFs, passing image buffers to an OCR extraction pipeline that isolates clinical test tokens and numerical values.',
          'Parsers normalize extracted values against standard biological reference intervals (e.g. Platelets: 150,000–450,000 /mcL), generating plain-language explanations of abnormal ranges.'
        ],
        keyCapabilities: [
          'Multi-symptom differential matcher',
          'Camera & PDF lab report OCR',
          'Reference-interval anomaly detection',
          'Jargon-free medical explanation'
        ],
        src: '/projects_images/SeHAT_SmartCare/AISymptomChecker&MedicalReportAnalyzer.webp'
      },
      {
        id: 'screen-insights-reminders',
        tabLabel: '💊 Insights & Reminders',
        title: 'Holistic Health Insights & Smart Medicine Reminders',
        workflowRole: '0–100 Daily Health Score & High-Precision Medication Scheduling',
        caption: 'Daily wellness assessment algorithm calculating a 0–100 health score with hydration and step counters, alongside a scheduled medication tracker with time-stamped dosage status and weekly adherence monitoring.',
        underTheHood: [
          'Holistic health scoring algorithm computes a daily composite score (0–100) based on self-reported hydration, physical step counter integration, sleep hours, and symptom volatility.',
          'Medication alert scheduler utilizes Android AlarmManager with RTC_WAKEUP and WorkManager fallback to guarantee high-reliability alerts even under aggressive battery Doze modes.',
          'Local SQLite persistence tracks taken, snoozed, and missed doses, calculating adherence rates and syncing records with Cloud Firestore.'
        ],
        keyCapabilities: [
          'Dynamic 0–100 daily wellness score',
          'Doze-resistant AlarmManager scheduling',
          'Adherence compliance tracking',
          'Offline-first local cache synchronization'
        ],
        src: '/projects_images/SeHAT_SmartCare/HealthInsights&MedicineReminders.webp'
      },
      {
        id: 'screen-sos-tips',
        tabLabel: '🚨 Emergency SOS & Tips',
        title: 'Instant Emergency SOS & Wellness Knowledge Feed',
        workflowRole: 'One-Tap Emergency Live GPS Dispatch & Offline Preventative Care',
        caption: 'One-tap critical SOS workflow dispatching live GPS coordinates to family contacts via SMS and WhatsApp, quick-dial 112 emergency integration, and an expert-curated lifestyle and preventative care knowledge feed.',
        underTheHood: [
          'SOS workflow requests high-priority satellite & network location fixes using Android FusedLocationProviderClient, assembling an actionable Google Maps coordinates link.',
          'Direct telephony and messaging intents automate dispatch of emergency SMS and WhatsApp notifications to pre-configured trusted emergency contacts in a single user tap.',
          'Direct-dial intent triggers emergency call to 112 without intermediate confirmation screens.',
          'Preventative care articles and lifestyle advisories are pre-cached in an offline database, allowing complete offline reading during remote travel.'
        ],
        keyCapabilities: [
          'One-tap live GPS emergency broadcast',
          'Automated SMS & WhatsApp dispatch',
          'Instant 112 emergency dialer intent',
          'Offline-cached preventative health feed'
        ],
        src: '/projects_images/SeHAT_SmartCare/HealthTips&EmergencySOS.webp'
      },
      {
        id: 'screen-auth',
        tabLabel: '🔐 Login & Security',
        title: 'Authentication & Profile Security',
        workflowRole: 'Zero-Trust Identity, Token Encryption & Isolated Clinical Profiles',
        caption: 'Secure Firebase Authentication supporting phone number verification, email/password credentials, and Google OAuth with encrypted session token handling.',
        underTheHood: [
          'Multi-provider authentication powered by Firebase Auth: Phone SMS OTP, Google OAuth credential exchange, and email/password authentication.',
          'Android Keystore-backed EncryptedSharedPreferences stores JWT session tokens and user state with AES-256 GCM encryption on the client device.',
          'Cloud Firestore security rules enforce strict per-UID authorization barriers, ensuring patient medical records and reports remain inaccessible to other users.'
        ],
        keyCapabilities: [
          'Phone SMS OTP & Google OAuth sign-in',
          'On-device AES-256 token encryption',
          'Cloud Firestore zero-trust security rules',
          'Personalized health record isolation'
        ],
        src: '/projects_images/SeHAT_SmartCare/login&signup.webp'
      }
    ],
    techLayers: [
      { layer: 'Android Native Client', detail: 'Native Kotlin application with CameraX OCR capture, AudioRecord speech streaming, and Material 3 design tokens.', tech: 'Kotlin, Java, Material 3' },
      { layer: 'FastAPI Microservice Backend', detail: 'Asynchronous Python 3.11 endpoints handling request sanitization, token validation, and multi-threaded inference.', tech: 'Python 3.11, FastAPI, Uvicorn' },
      { layer: 'Vector Retrieval & FAISS', detail: 'Dense SentenceTransformers embeddings indexed in FAISS for sub-second semantic retrieval across clinical literature.', tech: 'FAISS, SentenceTransformers' },
      { layer: 'Medical LLM & Safety Guardrails', detail: 'Constrained clinical inference enforcing medical safety prompts, verified citations, and automated disclaimer injection.', tech: 'Hugging Face, Medical LLM' },
      { layer: 'Computer Vision OCR Pipeline', detail: 'Image preprocessing, contrast normalization, and token extraction for blood tests, prescriptions, and lab values.', tech: 'Tesseract OCR, OpenCV' },
      { layer: 'Cloud Sync & Device Security', detail: 'AES-256 GCM token storage via Android Keystore paired with per-user isolated Cloud Firestore rules.', tech: 'Firebase Auth, Cloud Firestore' }
    ],
    keyFeatures: [
      'AI-assisted symptom analysis with ranked differential matches and safety disclaimers',
      'Medical report OCR and interpretation workflow for lab tests and prescriptions',
      'RAG-based medical chatbot grounded in verified clinical knowledge bases',
      'Semantic medical knowledge retrieval using FAISS vector indexing',
      'Trilingual interaction: English, Hindi, and colloquial Hinglish',
      'Voice-based input support for hands-free queries',
      'Cloud-backed user profile and medical report management',
      'Medicine reminder functionality with scheduled adherence tracking',
      'Health insights and wellness guidance with 0–100 daily score',
      'Emergency SOS assistance workflow with one-tap live GPS dispatch via SMS & WhatsApp'
    ],
    results: [
      { metric: '10 Workflows', label: 'Brought Into One Mobile App', sublabel: 'Zero app-switching friction' },
      { metric: '3 Languages', label: 'English, Hindi & Hinglish', sublabel: 'With hands-free voice input' },
      { metric: '< 1.2s', label: 'Vector Retrieval Speed', sublabel: 'FAISS semantic search' },
      { metric: '100%', label: 'Offline Persistence', sublabel: 'Doze-resistant alarms & tips' }
    ],
    techStack: [
      'Android',
      'Kotlin/Java',
      'Python',
      'FastAPI',
      'Medical LLM',
      'RAG',
      'FAISS',
      'SentenceTransformers',
      'OCR',
      'Firebase',
      'Hugging Face'
    ],
    impact: 'SeHAT SmartCare proves that advanced medical AI, vector search, and computer vision can be packaged into an intuitive, accessible mobile interface that bridges the clinical comprehension gap for everyday Indian families.'
  },
  {
    id: 'alpha-studio-tech',
    slug: 'alpha-studio-tech',
    category: 'web',
    categoryLabel: 'Web Platform Engineering',
    badge: 'CLIENT PROJECT • DELIVERED & LIVE',
    badgeType: 'live',
    client: 'Alpha Studio Tech',
    engagement: 'Design System & Frontend Architecture',
    industry: 'Digital Media & Creative Production',
    timeline: '2-Week Sprint Delivery',
    platform: 'Astro + TypeScript + Cloudflare Pages Edge',
    title: 'Alpha Studio Tech — High-Performance Agency Website',
    shortTitle: 'Alpha Studio Tech',
    oneLiner: 'A modern, sub-second digital agency website engineered for high conversion, 100/100 Core Web Vitals, and an elegant dark/light design system.',
    summary: 'Alpha Studio Tech needed a brand-new digital presence to showcase their commercial media productions and creative capabilities. InfoHQ engineered a custom Astro-powered platform deployed to Cloudflare Pages, eliminating the speed issues and maintenance overhead of traditional WordPress sites.',
    subSummary: 'The project features sub-second page transitions, dynamic portfolio showcase grids, mobile-first responsive design, and automated SEO optimization.',
    heroImage: '/projects_images/alpha-studio-mockup.jpg',
    liveUrl: 'https://alphastudiotech.online',
    liveUrlLabel: 'Visit Live Website',
    hasShowcaseModal: false,
    problem: {
      badge: 'The Digital Performance Barrier',
      headline: 'Creative Work Deserves an Instantaneous, High-Impact Canvas',
      description: 'Creative agencies often struggle with slow, plugin-heavy websites that take 4-6 seconds to load high-resolution portfolio images. High bounce rates and poor mobile responsiveness directly hurt their ability to close enterprise media clients.',
      points: [
        {
          title: 'Heavy CMS Bloat',
          desc: 'Traditional WordPress templates load 50+ third-party scripts, resulting in sluggish mobile navigation and failed Core Web Vitals.'
        },
        {
          title: 'Unoptimized Media Delivery',
          desc: 'High-res creative assets caused layout shifts (CLS) and slow visual renders for international visitors.'
        },
        {
          title: 'Weak Search Visibility',
          desc: 'Missing schema markup and unstructured metadata prevented their past projects from ranking effectively on search engines.'
        }
      ]
    },
    solution: {
      badge: 'The Edge-Native Architecture',
      headline: 'Zero-Bloat Static Generation Deployed Globally on Cloudflare Pages',
      description: 'InfoHQ replaced legacy CMS infrastructure with an edge-rendered Astro application. We engineered custom responsive SVG physics, modern WebP image pipelines, and semantic schema markup to ensure instantaneous browsing anywhere in the world.',
      points: [
        {
          title: 'Sub-Second Edge Rendering',
          desc: 'Pre-rendered static HTML delivered from Cloudflare edge nodes across 300+ cities with near-zero time-to-first-byte (TTFB).'
        },
        {
          title: '100% Client Code Ownership',
          desc: 'Clean, modular TypeScript and CSS code committed directly into the client repository with zero ongoing subscription lock-in.'
        },
        {
          title: 'Automated SEO & Schema Generation',
          desc: 'Dynamic JSON-LD schemas and OpenGraph cards automatically generated for social media and Google rich search snippets.'
        }
      ]
    },
    workflowWalkthrough: {
      headline: 'The 4-Stage Delivery Blueprint',
      subheadline: 'How InfoHQ delivered Alpha Studio Tech from design prototype to live production in 2 weeks.',
      steps: [
        {
          step: '01',
          title: 'Design System & Typography Tokens',
          desc: 'Established high-contrast typography, dark/light brand palettes, and responsive grid layouts.',
          icon: '🎨'
        },
        {
          step: '02',
          title: 'Static Architecture & Component Build',
          desc: 'Constructed reusable Astro components with zero-runtime JavaScript overhead for instant loading.',
          icon: '⚡'
        },
        {
          step: '03',
          title: 'Performance & Cross-Device QA',
          desc: 'Audited performance against Google Lighthouse and ensured fluid responsiveness across iPhone, Android, and Desktop.',
          icon: '🚀'
        },
        {
          step: '04',
          title: 'Edge Deployment & IP Handover',
          desc: 'Deployed to Cloudflare Pages edge network with SSL and delivered 100% repository ownership to the client.',
          icon: '🤝'
        }
      ]
    },
    techLayers: [
      { layer: 'Astro Static Engine', detail: 'Zero-JavaScript by default architecture delivering lightweight, high-speed HTML output.', tech: 'Astro 5.x' },
      { layer: 'TypeScript Strict Logic', detail: 'Type-safe component properties and structured project data validation.', tech: 'TypeScript' },
      { layer: 'Vanilla CSS Design System', detail: 'Custom CSS custom properties with responsive typography and fluid micro-interactions.', tech: 'CSS3, BEM Architecture' },
      { layer: 'Cloudflare Pages Edge', detail: 'Automated CI/CD deployments and distributed CDN caching across 300+ edge data centers.', tech: 'Cloudflare Pages, Git CI/CD' }
    ],
    keyFeatures: [
      'Sub-second page load times with 99+ Google Lighthouse score',
      'Modern responsive design optimized for mobile, tablet, and ultra-wide displays',
      'Dynamic project portfolio showcase with high-res media optimization',
      'Interactive service offerings breakdown with clear conversion paths',
      'Automated OpenGraph social sharing cards and Twitter metadata',
      'Direct WhatsApp and email consultation lead capture',
      'Custom domain configuration with automated SSL certificates'
    ],
    results: [
      { metric: '99+', label: 'Google Lighthouse Score', sublabel: 'Performance & Best Practices' },
      { metric: '< 0.4s', label: 'First Contentful Paint', sublabel: 'Global Edge Delivery' },
      { metric: '100%', label: 'Mobile Responsive', sublabel: 'Fluid on all screen sizes' },
      { metric: '2 Weeks', label: 'From Scope to Live Launch', sublabel: 'Zero downtime deployment' }
    ],
    techStack: [
      'Astro',
      'TypeScript',
      'Cloudflare Pages',
      'Vanilla CSS',
      'Responsive SVG',
      'Modern SEO',
      'Git CI/CD'
    ],
    impact: 'Alpha Studio Tech gained a striking, modern web platform that positions them as a top-tier creative studio. The sub-second speed and clean aesthetics provide their clients with an effortless browsing experience.'
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug || c.id === slug);
}

