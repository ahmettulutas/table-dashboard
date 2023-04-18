import React from "react";
import Layout from "~/components/Layout";
import Table from "~/components/Table";
import { LoadingSpinner } from "~/components/UIComponents";
import ErrorModal from "~/components/UIComponents/ErrorModal";
import { useAppSelector } from "~/utils/hooks";

const HomePage:React.FC = () => {
  const { loading } = useAppSelector(state => state.postSlice.posts);

  return (
    <Layout>
      {
        loading ?
          <LoadingSpinner />
          :
          <>
            <h1 className="my-6 text-2xl text-primaryBlackText dark:text-white">Gönderiler</h1>
            <Table />
            <ErrorModal />
          </>
      }
    </Layout>
  );
};

export default HomePage;