#!/bin/bash

# Production Deployment Script for Next.js Portfolio with Load Balancing
# This script deploys 2 Next.js instances behind Nginx load balancer

set -e

echo "🚀 Starting production deployment..."

# Check if Docker and Docker Compose are installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please ensure Docker Desktop is running."
    exit 1
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose down

# Remove old images to ensure fresh build
echo "🧹 Cleaning up old images..."
docker system prune -f

# Build and start services
echo "🔨 Building and starting services..."
docker compose up --build -d

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
sleep 30

# Check service health
echo "🏥 Checking service health..."

# Check Nginx
if curl -f http://localhost/health > /dev/null 2>&1; then
    echo "✅ Nginx is healthy"
else
    echo "❌ Nginx health check failed"
    docker-compose logs nginx
    exit 1
fi

# Check Next.js instances
if curl -f http://localhost/api/health > /dev/null 2>&1; then
    echo "✅ Next.js instances are healthy"
else
    echo "❌ Next.js health check failed"
    docker-compose logs app1 app2
    exit 1
fi

# Show running containers
echo "📊 Running containers:"
docker compose ps

# Show load balancer statistics
echo "📈 Load balancer statistics:"
echo "Nginx is running on http://localhost"
echo "Direct access to instances:"
echo "  - Instance 1: http://localhost:3001 (internal)"
echo "  - Instance 2: http://localhost:3002 (internal)"

echo "🎉 Deployment completed successfully!"
echo "🌐 Your application is now available at: http://localhost" 