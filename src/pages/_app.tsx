import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider } from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;

  return (
    <NextAuthProvider
      session={session}
    >
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
