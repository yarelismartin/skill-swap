/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';
import { AuthProvider } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector'; // TODO: COMMENT IN FOR AUTH

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Skill Swap</title>
      </Head>

      {/* TODO: Delete NoAuth component above and comment in code below for authentication */}
      <AuthProvider>
        <ViewDirectorBasedOnUserAuthStatus
          // if status is pending === loading
          // if status is logged in === view app
          // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </>
  );
}

export default MyApp;
