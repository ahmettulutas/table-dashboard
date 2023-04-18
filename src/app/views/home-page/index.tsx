import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "~/components/Layout";
import Table from "~/components/Table";
import { LoadingSpinner } from "~/components/UIComponents";
import Categories from "~/components/UIComponents/Categories";
import ErrorModal from "~/components/UIComponents/ErrorModal";
import { useAppSelector } from "~/utils/hooks";

const HomePage:React.FC = () => {
  const { loading } = useAppSelector(state => state.postSlice.posts);
  const { t } = useTranslation();
  return (
    <Layout>
      {
        loading ?
          <LoadingSpinner />
          :
          <>
            <h1 className="my-2 text-2xl text-primaryBlackText dark:text-white">{t("lbl.posts")}</h1>
            <Categories />
            <Table />
            <ErrorModal />
          </>
      }
    </Layout>
  );
};

export default HomePage;