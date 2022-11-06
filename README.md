## Project Overview

志が高く実力ある学生は、ビジネス現場での実践を通して自身のスキルを磨き、理想のキャリア実現を求めている。その経験数、質をより向上させるため、Web3型ジョブマッチングプラットフォーム”Bound”を提供する。これは以下の３つの優れた体験を学生に提供する。

1. 学生が自身のスキルと経験を企業の発行のNFT（SBT）で証明、技術チェックなどの選考プロセスを短縮したプロジェクトへの参画
2. ブロックチェーンによる技能、実績証明、仮想通貨決済、スマートコントラクトによる業務契約によって学生、企業の国境を越えたマッチング
3. 将来的にはジョブの掲載企業に独自トークンを発行。明確なインセンティブによって多くのジョブが集まりトランザクションの生成

既存のWantedlyなどのジョブプラットフォームと違い、Boundでは自身のウォレットによるスキル証明、スマートコントラクトによる企業との契約、報酬付与によって国境を越えて多くの企業のジョブへのアクセスが可能となる。そこでの実績がオンチェーン上に保存され自身のスキル証明とWeb3ライクなキャリア育成を可能にする。


## How to experience our product
- First please watch [Our Vision Demo](https://drive.google.com/file/d/1qFzZYMnEd674JBAAv4ivT86tnad0c0A1/view?usp=sharing)🎥
- Access to [Product URL](https://web3-blond-delta.vercel.app/) 🧑‍💻
- Login with your own wallet and go to a project page
- Apply a project and Mint NFT. After Status botton Changed to "Minted", your transaction successfully completed.
- Check your own transaction in [Thirdweb Dashboard](https://thirdweb.com/mumbai/0x583Da11bFE498C6E5E93289D93948CDe31ce9f61/events)

## Join our Discord!

For any questions, suggestions, join our discord at [Bound.xyz Discord Channel](https://discord.gg/UwHfbbbY).


## Getting Started

This example demonstrates how to use thirdweb Auth with Supabase.

Before running the project, you'll need to seutp and configure Supabase [as specified here](https://portal.thirdweb.com/auth/integrations/supabase).

To run the project, first clone this repository, and then run one of the following commands to install the dependencies:

```bash
npm install
# or
yarn install
```

Next, you need to create a `.env.local` file and add the `ADMIN_PRIVATE_KEY` variable to it with the private key of the wallet you want to use as the admin wallet to generate and verify payloads. Your file should use something like the following:

```.env
ADMIN_PRIVATE_KEY=...
```

Finally, you can run the project with one of the following commands:

```bash
npm run dev
# or
yarn dev
```

Now, you can navigate to [http://localhost:3000](http://localhost:3000) to visit the client side page where you can connect a wallet, sign-in with ethereum and view the payload, and use the payload to authenticate with the backend.
## Learn More

To learn more about thirdweb, take a look at the following resources:

- [thirdweb Auth Documentation](https://docs.thirdweb.com/auth) - learn about thirdweb Auth.
- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!
