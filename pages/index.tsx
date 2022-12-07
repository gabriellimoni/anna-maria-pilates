import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Anna Maria Studio de Pilates</title>
        <meta
          name="description"
          content="Studio de pilates em São Carlos - Anna Maria Studio de Pilates"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-center">
        <h1 className="text-center text-2xl font-bold">
          Anna Maria Studio de Pilates
        </h1>
        <h2 className="text-center text-lg italic">Em construção...</h2>
      </main>
    </div>
  );
}
