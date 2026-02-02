# Mrityunjay's Portfolio

![Built with Antigravity](https://img.shields.io/badge/Built%20with-Antigravity-4285F4?style=for-the-badge&logo=google)

Welcome to the repository for my personal portfolio website, a showcase of my work, thoughts, and professional journey. This project is built with the latest web technologies to ensure performance, accessibility, and a premium user experience.

## Features

- **Projects Showcase:** detailed views of my projects with tech stacks and links.
- **Blogs:** Technical articles and personal thoughts, categorized and optimized for reading.
- **Interactive Chatbot:** An AI-powered assistant to answer questions about my work.
- **Newsletter:** Subscription integration to keep in touch.
- **Photography:** A bento-grid style gallery of my photography.
- **Dynamic Content:** Real-time content updates using a database-backed CMS approach.
- **Responsive Design:** Fully responsive layout with dark mode support.
- **Tech Stack Display:** A visual representation of the technologies I use.

## Tech Stack

This project leverages a modern full-stack architecture:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Rough Notation](https://github.com/rough-stuff/rough-notation)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **AI Integration:** [Vercel AI SDK](https://sdk.vercel.ai/docs)
- **Email:** [Resend](https://resend.com/)
- **Editor:** [Tiptap](https://tiptap.dev/) (Headless)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives
- **Development Partner:** Antigravity — Architected, designed, and debugged using Google DeepMind's advanced agentic coding assistant.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (LTS version recommended)
- pnpm (Package Manager)
- PostgreSQL Database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mrityunjay-tiwari/mrityunjay.site
    cd mrityunjay.site
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and configure the necessary variables (Database URL, Auth secrets, API keys for Resend/AI, etc.).

4.  **Database Setup:**
    Initialize the Prisma client and push the schema to your database:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the development server:**

    ```bash
    npm run dev

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    ```

### Docker

To containerize and run the application using Docker:

1.  **Build the Docker image:**

    ```bash
    docker build -t portfolio .
    ```

2.  **Run the container:**

    ```bash
    docker run -p 3000:3000 portfolio
    ```

## Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.
