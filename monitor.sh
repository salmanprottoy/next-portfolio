#!/bin/bash

# Load Balancer Monitoring Script
# Monitors the health and performance of Next.js instances behind Nginx

echo "🔍 Load Balancer Monitoring Dashboard"
echo "====================================="

# Check if services are running
echo "📊 Container Status:"
docker compose ps

echo ""
echo "🏥 Health Checks:"

# Check Nginx health
if curl -s -f http://localhost/health > /dev/null; then
    echo "✅ Nginx: Healthy"
else
    echo "❌ Nginx: Unhealthy"
fi

# Check Next.js instances through load balancer
if curl -s -f http://localhost/api/health > /dev/null; then
    echo "✅ Next.js (Load Balanced): Healthy"
else
    echo "❌ Next.js (Load Balanced): Unhealthy"
fi

# Check individual instances (if accessible)
echo ""
echo "🔧 Individual Instance Status:"

# Check if we can access individual instances directly
if docker compose exec -T app1 curl -s -f http://localhost:3001/api/health > /dev/null 2>&1; then
    echo "✅ Instance 1 (app1): Healthy"
else
    echo "❌ Instance 1 (app1): Unhealthy"
fi

if docker compose exec -T app2 curl -s -f http://localhost:3002/api/health > /dev/null 2>&1; then
    echo "✅ Instance 2 (app2): Healthy"
else
    echo "❌ Instance 2 (app2): Unhealthy"
fi

echo ""
echo "📈 Performance Metrics:"

# Get container resource usage
echo "💾 Memory Usage:"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}"

echo ""
echo "🌐 Load Balancer Test:"
echo "Testing load distribution (10 requests):"

for i in {1..10}; do
    response=$(curl -s -w "%{http_code}" -o /dev/null http://localhost/api/health)
    echo "Request $i: HTTP $response"
done

echo ""
echo "📋 Recent Logs (last 10 lines):"
echo "Nginx logs:"
docker compose logs --tail=10 nginx

echo ""
echo "Next.js logs:"
docker compose logs --tail=10 app1 app2

echo ""
echo "🎯 Load Balancer Configuration:"
echo "Upstream servers: app1:3001, app2:3002"
echo "Load balancing method: least_conn"
echo "Health check interval: 30s"
echo "Fail timeout: 30s"
echo "Max fails: 3" 