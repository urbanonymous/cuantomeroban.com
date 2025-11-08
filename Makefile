.PHONY: help install dev start build prod clean lint format deploy preview check types

# Default target - show help
help:
	@echo "🚀 ¿Cuánto me roban? - Available Commands"
	@echo ""
	@echo "Development:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Run development server"
	@echo "  make start      - Run development server (alias for dev)"
	@echo "  make lint       - Run ESLint"
	@echo "  make format     - Format code with Prettier"
	@echo ""
	@echo "Production:"
	@echo "  make build      - Build for production"
	@echo "  make prod       - Build and start production server locally"
	@echo "  make preview    - Preview Cloudflare deployment locally"
	@echo ""
	@echo "Deployment:"
	@echo "  make check      - Check deployment (dry-run)"
	@echo "  make deploy     - Deploy to Cloudflare Workers"
	@echo ""
	@echo "Utilities:"
	@echo "  make clean      - Clean build artifacts"
	@echo "  make types      - Generate TypeScript types for Wrangler"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

# Run development server
dev:
	@echo "🔥 Starting development server..."
	npm run dev

# Alias for dev
start: dev

# Build for production
build:
	@echo "🏗️  Building for production..."
	npm run build

# Build and start production server locally
prod:
	@echo "🚀 Starting production server..."
	npm run start

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf .next
	rm -rf .open-next
	rm -rf .wrangler
	rm -rf node_modules/.cache

# Run linter
lint:
	@echo "🔍 Running ESLint..."
	npm run lint

# Format code with Prettier
format:
	@echo "✨ Formatting code..."
	npx prettier --write "src/**/*.{ts,tsx,js,jsx,json,css}"

# Check deployment (dry-run)
check:
	@echo "✅ Checking deployment (dry-run)..."
	npm run check

# Deploy to Cloudflare Workers
deploy:
	@echo "🚀 Deploying to Cloudflare Workers..."
	npm run deploy

# Preview deployment locally
preview:
	@echo "👀 Previewing Cloudflare deployment locally..."
	npm run preview

# Generate TypeScript types for Wrangler
types:
	@echo "📝 Generating Wrangler types..."
	npm run types

