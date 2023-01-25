import '../lib/dayjs';
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <DefaultSeo 
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://schedule-call.vercel.app/',
            site_name: 'Schedule Call',
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
