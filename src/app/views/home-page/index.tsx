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
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 container">
            <section className="grid gap-4 grid-cols-1 col-span-2">
              <div>Content here</div>
            </section>
            <ErrorModal />
          </div>
      }
    </Layout>
  );
};

export default HomePage;