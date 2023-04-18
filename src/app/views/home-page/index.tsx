import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "~/components/Layout";
import Table from "~/components/Table";
import Categories from "~/components/UIComponents/Categories";
import ErrorModal from "~/components/UIComponents/ErrorModal";

const HomePage:React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <>
        <h1 className="my-2 text-2xl text-primaryBlackText dark:text-white">{t("lbl.posts")}</h1>
        <Categories />
        <Table />
        <ErrorModal />
      </>
    </Layout>
  );
};

export default HomePage;