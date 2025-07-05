# Next.js Portfolio

A modern, secure portfolio website built with Next.js 14, React 18, and Tailwind CSS. Features comprehensive security scanning, automated CI/CD, and static export for GitHub Pages deployment.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Security First**: Comprehensive security scanning and vulnerability detection
- **Automated CI/CD**: GitHub Actions with security checks and deployment
- **Static Export**: Optimized for GitHub Pages deployment
- **Performance**: Optimized images, code splitting, and modern web standards
- **Monitoring**: Sentry integration for error tracking and performance monitoring
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 📋 Overview

This project is a personal portfolio website built with the latest web technologies. It leverages Next.js for server-side rendering and routing, React for UI components, and Tailwind CSS for styling. The project includes comprehensive security measures and automated deployment pipelines.

## 🏗️ Project Structure

```
NEXT-PORTFOLIO/
├── .github/            # GitHub Actions workflows
├── .idea/              # IDE configuration
├── app/                # Next.js app directory
│   ├── api/           # API routes (for development)
│   ├── atoms/         # Atomic design components
│   ├── data/          # Static data and content
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── utils/         # Utility functions
├── components/         # Reusable React components
│   ├── atoms/         # Basic UI components (Button, Text, etc.)
│   ├── molecules/     # Composite components (Cards, etc.)
│   └── organisms/     # Complex components (Header, etc.)
├── public/            # Static assets (images, icons)
├── style/             # Custom styling
├── .dockerignore      # Docker ignore file
├── .env               # Environment variables
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore file
├── .snyk              # Snyk security configuration
├── .semgrepignore     # Semgrep ignore patterns
├── SECURITY.md        # Security policy
├── docker-compose.yml # Docker Compose configuration
├── Dockerfile         # Docker configuration
├── next-env.d.ts      # Next.js TypeScript declarations
├── next.config.js     # Next.js configuration
├── package-lock.json  # npm lock file
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration 
├── README.md          # Project documentation
├── remove-exif.js     # Utility script
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── yarn.lock          # Yarn lock file
```

## 🛡️ Security Features

### Automated Security Scanning
- **Dependency Vulnerability Scanning**: npm audit and Snyk integration
- **Static Code Analysis**: Semgrep for security patterns
- **CodeQL Analysis**: GitHub's advanced security analysis
- **Secrets Detection**: TruffleHog to prevent credential leaks
- **Web Application Security**: OWASP ZAP for dynamic testing
- **Outdated Dependencies**: Automated checks for package updates

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Strict-Transport-Security

### Security Scripts
```bash
npm run security:audit    # Check for vulnerabilities
npm run security:outdated # Check outdated packages
npm run security:check    # Run both checks
npm run security:fix      # Fix vulnerabilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salmanprottoy/next-portfolio.git
   cd next-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

## 📜 Available Scripts

### Development
- `dev`: Runs the development server
- `build`: Builds the application for production
- `start`: Starts the production server
- `lint`: Runs the linter to check for code issues

### Security
- `security:audit`: Check for vulnerabilities
- `security:outdated`: Check outdated packages
- `security:check`: Run both security checks
- `security:fix`: Fix vulnerabilities automatically
- `security:fix-force`: Force fix vulnerabilities

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes a comprehensive CI/CD pipeline that runs on:
- **Pull requests** to main branch
- **Pushes** to main branch
- **Manual triggers**

### Pipeline Stages

1. **Security Scanning**
   - Dependency vulnerability scanning
   - Static code analysis
   - Secrets detection
   - Web application security testing

2. **Code Quality**
   - Linting and type checking
   - Build verification

3. **Deployment**
   - Static export for GitHub Pages
   - Automated deployment

### Security Tools Used

- **npm audit**: Dependency vulnerability scanning
- **Snyk**: Advanced vulnerability scanning (optional)
- **Semgrep**: Static analysis for security patterns
- **CodeQL**: GitHub's code security analysis
- **TruffleHog**: Secrets detection
- **OWASP ZAP**: Dynamic application security testing

## 🐳 Docker Support

This project includes Docker configuration for containerized deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Build the Docker image
docker build -t next-portfolio .

# Run the container
docker run -p 3000:3000 next-portfolio
```

## 🌐 Deployment

### GitHub Pages (Recommended)

The project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Pushes to main branch trigger deployment
2. **Static Export**: Optimized for static hosting
3. **Security Headers**: Configured for production security

### Manual Deployment

```bash
# Build for production
npm run build

# Export static files
npm run export

# Deploy to your preferred hosting service
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_BASE_PATH=/next-portfolio
SENTRY_DSN=your_sentry_dsn
```

### Security Configuration

- **Snyk**: Add `SNYK_TOKEN` to GitHub secrets for enhanced scanning
- **Sentry**: Configure for error tracking and performance monitoring

## 📊 Monitoring

### Sentry Integration

- Error tracking and performance monitoring
- Real-time alerts and notifications
- Performance metrics and insights

### GitHub Security

- CodeQL analysis results in Security tab
- Dependency vulnerability alerts
- Automated security scanning reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Security Issues**: Please report to salman.prottoy@gmail.com
- **Bug Reports**: Create an issue in the GitHub repository
- **Feature Requests**: Submit through GitHub issues

## 🔗 Links

- **Live Demo**: [Your GitHub Pages URL]
- **Documentation**: [Your documentation URL]
- **Security Policy**: [SECURITY.md](SECURITY.md)
