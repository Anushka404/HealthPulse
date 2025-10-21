# 🏥 Health CarePulse

A modern, full-stack **Healthcare Management Platform** that enables **patients, doctors, and administrators** to seamlessly manage **appointments, health records, and reports** — all in one secure and responsive web application.

---

## 🌐 Live Demo

🔗 [https://health-care-pulse-kappa.vercel.app/](https://health-care-pulse-kappa.vercel.app/)

---

## ✨ Features

### 👩‍⚕️ Patient Features
- Register and log in securely via **Appwrite Authentication**
- Manage personal health profiles and records
- Schedule appointments with doctors
- View prescriptions and medical reports

### 🧑‍⚕️ Doctor Features
- Access and manage patient details
- Track appointment schedules
- Add and update patient records

### 🏢 Admin Features
- Centralized management of doctors and patients
- View analytics and overall system health data

---

## 🧱 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | Next.js, React.js, Tailwind CSS |
| **Backend** | Next.js (API Routes), Appwrite |
| **Database** | Appwrite Database |
| **Auth** | Appwrite Authentication |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel |

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Anant-404/Health_CarePulse.git

# Navigate to the project folder
cd Health_CarePulse

# Install dependencies
npm install

# Add your Appwrite environment variables
cp .env.example .env.local
# Fill in Appwrite endpoint, project ID, and API keys

# Run the app locally
npm run dev
