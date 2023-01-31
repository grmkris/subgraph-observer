# Subgraph Observer 🧙‍♀️
https://subgraph.observer

Subgraph Observer is a tool for monitoring the health of your subgraph. It is a free service that connects to your subgraph and compares its latest block with the latest block on the selected network.
- It runs entierly in your browser and does not require any installation.
- It is possible to share the link with other people to monitor the same subgraph.

Project is opensource and free to copy and modify, new PRs are welcome.

## How to run locally
```shell
git clone https://github.com/grmkris/subgraph-observer
cd subgraph-observer
pnpm install
pnpm run dev
```

## Stack
- React
- NextJS
- TailwindCSS
  - https://daisyui.com/ - TailwindCSS components
- Tanstack Query - remote state management
- Zustand - state management
- GraphQL Code Generator (`packages/subgraph-client`)
- Turborepo + pnpm

## Deploy your own on vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgrmkris%2Fsubgraph-observer)
