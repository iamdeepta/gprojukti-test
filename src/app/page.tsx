// import styles from './page.module.css'

import { getStores } from "./apis";
import Landing from "./layouts/Landing";

const Home = async ({ searchParams }: any) => {
  const stores = await getStores(searchParams.page_size, searchParams.page);

  if (!stores.success) {
    return (
      <>
        <p>{stores.message}</p>
      </>
    );
  }

  return (
    <div>
      <Landing store={stores} searchParams={searchParams} />
    </div>
  );
};

export default Home;
