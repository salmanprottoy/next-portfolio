# Next.js Portfolio

A modern portfolio website built with Next.js 14, React 18, and Tailwind CSS.

## Overview

This project is a personal portfolio website built with the latest web technologies. It leverages Next.js for server-side rendering and routing, React for UI components, and Tailwind CSS for styling.

## Project Structure

```
NEXT-PORTFOLIO/
├── .idea/              # IDE configuration
├── app/                # Next.js app directory
├── components/         # Reusable React components
├── node_modules/       # Dependencies
├── public/             # Static assets
├── style/              # Custom styling
├── .dockerignore       # Docker ignore file
├── .env                # Environment variables
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore file
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile          # Docker configuration
├── next-env.d.ts       # Next.js TypeScript declarations
├── next.config.mjs     # Next.js configuration
├── package-lock.json   # npm lock file
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration 
├── README.md           # Project documentation
├── remove-exif.js      # Utility script
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Yarn lock file
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/salmanprottoy/next-portfolio.git
   cd next-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `dev`: Runs the development server
- `build`: Builds the application for production
- `start`: Starts the production server
- `lint`: Runs the linter to check for code issues

## Docker Support

This project includes Docker configuration for containerized deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d
```
