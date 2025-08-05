# -------- Stage 1: Build --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies with Yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN yarn build

# -------- Stage 2: Runtime --------
FROM node:20-alpine AS runner

WORKDIR /app

# Copy necessary build artifacts from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/next.config.js ./next.config.js

# Set Cloud Run port
ENV PORT=8080
EXPOSE 8080

# Start the Next.js server
CMD ["yarn", "start"]
