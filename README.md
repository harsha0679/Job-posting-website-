# Job Posting Website

A full-stack **Job Posting Platform** built with **Next.js**, **Prisma ORM**, and **Neon Database**.  
This application allows users to post jobs, search for jobs, and manage applications through a personalized dashboard.  

---

## 🚀 Tech Stack
- **Frontend:** [Next.js](https://nextjs.org/) (React framework with server-side rendering & API routes)
- **ORM:** [Prisma](https://www.prisma.io/) (Type-safe database client)
- **Database:** [Neon](https://neon.tech/) (Serverless Postgres)

---

## ✨ Features
- 🔹 **Job Posting** – Employers can create and manage job listings  
- 🔹 **Job Searching** – Search and filter available jobs  
- 🔹 **Dashboard** – Personalized dashboard for users to track jobs and applications  
- 🔹 **Authentication** – Secure login system with session management  
- 🔹 **Responsive UI** – Optimized for desktop and mobile  

---

## 📂 Project Structure

my-next-app/
│── app/ # Next.js App Router pages & APIs
│── components/ # Reusable UI components
│── prisma/ # Prisma schema & migrations
│── public/ # Static assets (images, logos)
│── lib/ # Utility functions (auth, db client)


## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/job-posting-website.git
cd job-posting-website


2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the root directory:

DATABASE_URL="your-neon-database-url"
NEXTAUTH_SECRET="your-random-secret"
NEXTAUTH_URL="http://localhost:3000"

4. Run Prisma migrations
npx prisma migrate dev

5. Start the development server
npm run dev



Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
