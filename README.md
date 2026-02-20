# Mrityunjay's Portfolio

Welcome to the repository for my personal portfolio website, a showcase of my work, thoughts, and professional journey. 

## Features

- **Projects Showcase:** detailed views of my projects with tech stacks and links.
- **Blogs:** Technical articles and personal thoughts, categorized and optimized for reading.
- **Interactive Chatbot:** An AI-powered assistant to answer questions about my work.
- **Newsletter:** Subscription integration to keep in touch.
- **Photography:** A bento-grid style gallery of my photography (In personal section).
- **Dynamic Content:** Real-time content updates using a database-backed CMS approach (It is admin panel, only accessible to me).
- **Responsive Design:** Fully responsive layout with dark mode support.
- **Tech Stack Display:** A visual representation of the technologies I use.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) 
- **Animations:** [Framer Motion](https://www.framer.com/motion/) 
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **AI Integration:** [Vercel AI SDK](https://sdk.vercel.ai/docs)
- **Email:** [Resend](https://resend.com/)
- **Editor:** [Tiptap](https://tiptap.dev/) (Headless)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives and [ShadCN/UI](https://ui.shadcn.com/)

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (LTS version recommended)
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
