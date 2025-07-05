# Use the official Node.js 20 image as the base image for building
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with frozen lockfile for consistency
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Production stage
FROM node:20-alpine AS runner

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the working directory
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Change ownership to the nextjs user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Set environment variable
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["yarn", "start"]
