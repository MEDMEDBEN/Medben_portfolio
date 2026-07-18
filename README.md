# Portfolio Bennabi Mohamed — Inventaire des projets

Ce dépôt est le **portfolio web** (React + Vite + TypeScript + Tailwind) de Bennabi Mohamed,
ingénieur en informatique spécialité **Science des données**.
Ce README recense **tous les projets réels** intégrés (ou à intégrer) au portfolio : leur stack,
ce qu'ils **ont**, ce qui leur **manque**, leur **statut de déploiement**, et ce qui a été **ajouté**.

- **Dev local** : `npm run dev` → http://localhost:5173/Medben_portfolio/
- **Build** : `npm run build` · **Déploiement** : `npm run deploy` (GitHub Pages)
- **Section projets** : `src/app/components/Projects.tsx`
- **Images projets** : `src/assets/projects/` (importées → gérées par le base path Vite)

Légende statut : ✅ déployé · 🟡 déployable (prêt, pas en ligne) · 🔴 à faire · 🖼️ capture réelle intégrée

---

## 1. Applications & produits

### 🩺 MyPrescription — `C:\Users\MSI\myprescription`
Plateforme médicale complète pour cabinets/médecins (Algérie, conforme RGPD/ANPDP). **Polyrepo**.
- **Stack** : Next.js 14 (web), Bun + Express 5 + PostgreSQL (API), Electron (desktop offline-first),
  React Native (mobile), FastAPI + LangChain (chatbot IA), Next.js 16 (website).
- **A** : 7 composants applicatifs, auth Passport.js, i18n FR/AR/EN, RBAC, chatbot IA.
- **Manque** : lien de démo public / URL de production, captures d'écran réelles.
- **Statut** : 🔴 non déployé publiquement · GitHub : `github.com/myprescription2026`
- **Ajouté au portfolio** : ✅ carte corrigée (vraie description + stack + lien GitHub org).

### 💊 Tahour (طاهور) — `C:\Users\MSI\PHARMA\tahour`
Super-app de la pharmacie algérienne (trouver/réserver médicaments, pharmacies de garde,
envoi d'ordonnance par photo, matching temps réel, carte).
- **Stack** : Expo / React Native, TypeScript, Zustand, Reanimated 3, Expo Router, i18next (FR/AR RTL).
- **A** : app mobile fonctionnelle (données mock), animation de matching signature, 🖼️ mockup de présentation.
- **Manque** : backend réel (actuellement mock), build APK/store, lien de démo (Expo/APK).
- **Statut** : 🔴 non déployé (mobile) · GitHub : `github.com/MEDMEDBEN/Tahour`
- **Ajouté au portfolio** : ✅ carte + 🖼️ `tahour.png`.

### 📊 YamOps — `C:\Users\MSI\my_project\monitoring-dashboard`
Dashboard de supervision d'infrastructure Docker en temps réel (conteneurs, CPU/mémoire,
déploiements, incidents). Supervise l'infra MyPrescription.
- **Stack** : React 19 + SSR (Express 5 + Vite), Node.js, Docker.
- **A** : ✅ déployé en production, 🖼️ capture réelle, rendu côté serveur.
- **Manque** : le contenu source est encore proche du boilerplate Vite côté repo (l'UI live est aboutie).
- **Statut** : ✅ **déployé** → https://yamops.afaq.sa:8444/
- **Ajouté au portfolio** : ✅ carte + 🖼️ `yamops-monitoring.png` + lien live.

### 🛡️ ISEO — `C:\Users\MSI\iseo_page`
Écosystème digital pour ISEO (sécurité & serrurerie, 30 ans, Algérie). **3 variantes de site + 1 IA.**

| Élément | Dossier | Stack | Statut |
|---|---|---|---|
| Site premium (le vrai) | `iseo-next` | Next.js 15 · React 19 · Three.js/R3F · GSAP · Lenis · Framer Motion · ~58 pages FR/AR | ✅ `iseo-site.vercel.app` |
| Version statique | `iseo-premium` | HTML/CSS/JS + hero Three.js + bulle chat IA | 🟡 |
| Prototype | `iseo` | JSX (app, checkout, data) | 🔴 |
| 🤖 **Assistant IA de vente** | `vendeur/chatbot-boutique` | Flask + gunicorn, RAG catalogue JSON, LLM neutre (Gemini/OpenAI/Groq), multicanal **WhatsApp + Telegram + Messenger**, sécurité anti-injection/anti-spam, FR/AR/EN | 🔴 **non déployé** |

- **A** : site 3D immersif en ligne, bot IA complet et sécurisé, bulle de chat prête à brancher (1 ligne `BOT_ENDPOINT`).
- **Manque** : **déploiement du bot IA** (Render/Railway) + clés API canaux, branchement bulle ↔ bot, captures.
- **Ajouté au portfolio** : ✅ carte « ISEO — Sécurité & Assistant IA » + lien live du site.

---

## 2. Data Science Lab — `C:\Users\MSI\ds-lab` (NOUVEAU)

Application vitrine **créée dans ce cadre** pour présenter les projets de recherche/académiques
sous forme de démos interactives. Design cohérent avec le portfolio.
- **Stack** : React 19 + Vite + TypeScript + React Router + Recharts.
- **Dev** : `cd C:\Users\MSI\ds-lab && npm run dev` → http://localhost:5174/
- **A** : ✅ landing + design system, ✅ 5 pages projets (contexte, méthodo, métriques, résultats).
- **Manque** : les **démos interactives** de chaque page (actuellement « Bientôt »), déploiement Vercel.
- **Statut** : 🟡 déployable · 🔴 démos interactives à brancher.

| # | Projet (source UNIV) | Domaine | Démo interactive prévue | État |
|---|---|---|---|---|
| ✍️ | Générateur N-gram (`TALN`) | NLP | Génération de texte client-side (export modèle → JSON) | 🔴 |
| 🌲 | Bagging vs Boosting (`Tepred`) | ML ensembles | Graphes comparatifs RF/XGBoost/LightGBM (ROC, métriques) | 🔴 |
| 🐺 | Imputation SCA-GWO (`SCA-GWO-Imputation`) | Métaheuristique | Animation de convergence SCA→GWO | 🔴 |
| 🥗 | Optimiseur de régime (`PLO`) | Recherche opérationnelle | Solveur simplexe en direct | 🔴 |
| 🧠 | MLP + SMOA (`TP_stats2/projet`) | DL + métaheuristique | Comparaison baseline (0.83) vs optimisé (0.90) | 🔴 |

---

## 3. Autres projets UNIV (déployables, pas encore reliés au portfolio)

Chemins sous `C:\Users\MSI\UNIV\`.

| Projet | Dossier | Stack / Front | Ce qu'il a | Ce qui manque | Statut |
|---|---|---|---|---|---|
| **Data Viz déchets** | `Visualisation` | React 19 + Vite + D3.js / d3-sankey | Front complet, multi-pages, glassmorphism | Déploiement, capture UI | 🟡 → 🖼️ carte ajoutée au portfolio |
| **Brain Tumor** | `Porjet_devops/ING4_PROJ2_...` | CNN (IRM) + ML, FastAPI + Streamlit + Docker + Azure | Pipelines, API, app inference, CI | Hébergement (HF Spaces/Render) | 🟡 → carte ajoutée au portfolio |
| **App médicale FastAPI** | `Porjet_devops/ING4_POJ1_...` | FastAPI + templates HTML | Login, rôles médecin/patient/admin | Déploiement | 🟡 |
| **Web app Dockerisée** | `Porjet_devops/ING4_PROJ3_...` | Docker + Azure Pipelines + templates | Architecture, CI | Déploiement | 🟡 |
| **Forecasting / anomalies** | `TP_ML` (+ `Dashboard`) | Streamlit, séries temporelles | Notebooks + app Streamlit | Déploiement Streamlit Cloud | 🟡 |

**Notebooks-recherche sans front** (repris dans le Data Science Lab) : `SCA-GWO-Imputation`, `TALN`,
`Tepred`, `PLO`, `DL`, `IAGEN`.

---

## 4. Priorités de déploiement (recommandé)

1. 🤖 **Assistant IA ISEO** (`vendeur/chatbot-boutique`) → Render/Railway (Flask+gunicorn prêts), puis brancher la bulle. *Plus gros atout, invisible aujourd'hui.*
2. 📊 **Data Viz déchets** (`UNIV/Visualisation`) → Vercel (build Vite, zéro backend). Quick win.
3. 🧠 **Apps ML** (Brain Tumor, MLP+SMOA, Forecasting) → Streamlit Community Cloud.
4. 🔬 **Data Science Lab** (`ds-lab`) → Vercel une fois les démos interactives branchées.

---

## 5. Historique des ajouts (cette session)

- Portfolio : cartes **corrigées/ajoutées** → MyPrescription (corrigé), Tahour, YamOps, ISEO, Data Viz, Brain Tumor (+ Majlis & AI Analytics conservés). **8 cartes.**
- Images réelles intégrées : `tahour.png`, `yamops-monitoring.png`, `visualisation-waste.png`.
- **Data Science Lab** créé (`C:\Users\MSI\ds-lab`) : landing + 5 pages projets.

> ⏳ **Reste à faire** : démos interactives du Data Science Lab, déploiements (voir §4),
> captures réelles pour MyPrescription / ISEO / Brain Tumor, branchement du bot IA ISEO.
