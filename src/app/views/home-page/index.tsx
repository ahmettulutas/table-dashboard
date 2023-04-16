import React from "react";
import Layout from "~/components/Layout";
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
            <div>Content here</div>
            <ErrorModal />
          </>
      }
    </Layout>
  );
};

export default HomePage;