// ============== Internal Imports ==============

import { NavBar } from "../components/componentindex.js";

const MyApp = ({ Component, pageProps }) => (
  
  <div>
    <NavBar/>
    <Component {...pageProps} />;
  </div>

  );
  
  export default MyApp;
  