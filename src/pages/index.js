import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crisis</title>
        <meta name="description" content="No more bad Crisis to her" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero min-h-screen bg-gradient-to-br from-gray-600 to-red-300">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white/95">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Crisis</h1>
            <p className="mb-5 text-sm">
              RPGホラーゲーム
              <div className="divider divide-slate-400/25" />
              リアは中学一年生の2週間目を過ごそうとしていた。
              <br />
              しかし彼女はこの世の不条理から逃れるために自殺を図った。
              <br />
              リアの人生の岐路は全てあなたの手に委ねられている。
            </p>
            <div className="flex justify-center space-x-2">
              <Link href="./dl/" passHref>
                <a className="btn btn-secondary hover:animate-pulse">Download</a>
              </Link>
              <button className="btn btn-secondary hover:animate-pulse">
                Play on WEB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
