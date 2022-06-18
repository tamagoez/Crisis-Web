import "~/styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
      <div className="flex justify-center bg-gray-400 py-5 text-white">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </>
  );
}

export default MyApp;
