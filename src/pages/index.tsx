import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import { AppHeader } from "~/components/Header";

const Home: NextPage = () => {
  const [colorScheme, setColorScheme] = useState("dark");

  return (
    <>
      <Head>
        <title>Expensus</title>
        <meta name="description" content="Track expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorSchemeProvider>
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{ colorScheme: "dark" }}
        >
          <main>
            <AppHeader />
          </main>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};
export default Home;
