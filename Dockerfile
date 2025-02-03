# Use the official Node.js 18 image as the base image for building
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN yarn build

# Use a smaller Node.js image for the runtime
FROM node:18-slim AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app .

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
