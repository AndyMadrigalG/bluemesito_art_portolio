# syntax=docker/dockerfile:1
################################################################################

ARG NODE_VERSION=20
ARG ALPINE_VERSION=3.17
ARG PORT=3002

# Use node image and alpine as base for the image
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS builder

# Set working directory for build stage
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY src ./src
COPY public ./public
COPY tsconfig*.json ./

# Run the build script
RUN npm run build -t myHelloApp .

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runtime

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port that the application listens on.
ENV PORT=${PORT}
EXPOSE ${PORT}


HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:$PORT || exit 1

# Run the application.
CMD ["npm", "run", "start:prod"]
