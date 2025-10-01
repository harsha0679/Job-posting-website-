Job Posting Website

A full-stack Job Posting Platform built with Next.js, Prisma ORM, and Neon Database. This application allows users to post jobs, search for jobs, and manage applications through a personalized dashboard.

Features

Job Posting: Employers can create and manage job listings.

Job Search: Job seekers can search and filter job listings.

User Dashboard: Personalized dashboards for job seekers and employers to manage their profiles and applications.

Tech Stack

Frontend: Next.js

Backend: Node.js

Database: Neon (via Prisma ORM)

Authentication: NextAuth.js

Styling: Tailwind CSS

Prerequisites

Ensure you have the following installed:

Node.js
 (v16 or higher)

npm
 (comes with Node.js)

Neon Database
 account and project setup

Setup Instructions
1. Clone the Repository
git clone https://github.com/harsha0679/Job-posting-website-
cd Job-posting-website-

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a .env file in the root directory and add the following variables:

DATABASE_URL="your_neon_database_url"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"


Replace your_neon_database_url with your Neon database connection string and your_nextauth_secret with a secure string.

4. Set Up Prisma

Generate the Prisma client and apply migrations:

npx prisma generate
npx prisma migrate deploy

5. Run the Development Server

Start the application:

npm run dev


The application will be accessible at http://localhost:3000
.

Usage

Job Seekers: Register an account to browse and apply for jobs.

Employers: Create an account to post job listings and manage applications.

Deployment

For deployment, consider using platforms like Vercel
 or Netlify
. Ensure your environment variables are properly configured in the deployment platform's settings.

Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your proposed changes.
