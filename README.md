# ETH Prague 2023 - Event List

![CI badge](https://github.com/fs-public/ethprague23-eventlist/actions/workflows/ci.yml/badge.svg)

Motivation: todo Coinmandeer

**Authors**

1. [Filip Svoboda](https://github.com/fs-public) -- fullstack dev
2. [Daniel Klein](https://github.com/danielklein-arch) -- fullstack dev
3. [Coinmandeer](https://coinmandeer.com/) -- designer
4. [🌴 tree](https://social.gwei.cz/@tree) -- consultant

**Notice**: The project was conceived on [ETH Prague 2023](https://ethprague.com/) hackathon. However, midway at 5pm on Saturday 10. 6. 2023 we decided to drop from submission based on the growing scope of the project, partial unavailabilities of team members and several parallel sicknesses and injuries. However, we will continue to contribute to the project.

Deployed with Vercel at https://ethprague23-eventlist.vercel.app/.

## Installation

Make sure you have `pnpm@^8.6.1` installed (or run `npm/yarn install pnpm --global`).

To install dependencies of the project:

```bash
pnpm install
```

Afterwards, you run development environment with `pnpm dev` and build for production with `pnpm build`.

## Technologies

Fullstack project build with `Vue3` and `Nuxt3`. Uses `pinia`, `vue-use`, `unocss`, and `headlessui` on the frontend; connects to blockchain with `ethers`. Code quality assured with `eslint`, `typescript`, and `Github Actions`.

**Integrations**: web3 ([metamask](https://metamask.io/)), [IPFS](https://ipfs.tech/), [StreamETH](https://streameth.org/)

## Open points

- Finalize event standard -- see [proposal](https://ethevents.club/t/event-lists-an-event-list-standard/42), possibly RFC/EIP
- Decide balance between gatekeeping and permissionlessness
- Integrate StreamETH
- Integrate Lens protocol
- Run IPFS node and publish JSONs for real ETH events
- Discuss smart contract (Gnosis chain?) for IPFS hash repository
- Finish frontend views


## Event repositories

| Name  | URL | GitHub repository |
| ------------- | ------------- | ------------- |
| Prague Blockchain Week | https://explore.prgblockweek.com/23  | https://github.com/prgblockweek |
| Ethereum.org Events | https://ethereum.org/en/community/events/  | https://github.com/ethereum/ethereum-org-website/blob/dev/src/data/ | 
| Ethereum.org Events | https://ethereum.org/en/community/events/  | https://github.com/ethereum/ethereum-org-website/blob/dev/src/data/ |
| ethevents.xyz | https://ethevents.xyz/ | https://chronicle.ethevents.club/data/index.json |
| ETHGlobal Events | https://ethglobal.com/events | - |
| PWN | https://pwn.xyz/ | https://github.com/PWNFinance |
| Ethereumg | - | https://github.com/ethereumeg/ethereumeg |
| Web3 Privacy | https://prague.web3privacy.info/ | https://github.com/web3privacy/events |
| ETH Brno | https://ethbrno.cz/ | https://github.com/ethbrno/docs/tree/master/events |
