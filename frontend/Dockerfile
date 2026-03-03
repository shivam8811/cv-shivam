FROM oven/bun:1-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# --- Dev target: hot reload ---
FROM deps AS dev
COPY . .
CMD ["bun", "run", "dev", "--host", "0.0.0.0"]

# --- Production build ---
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS production
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=build --chown=bun:bun /app/.output ./.output
USER bun
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]