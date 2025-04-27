"use client";
import Layout from "./layout";
import "./contents.scss";
import ContentsTitle from "./ContentsTitle";
import SongLists from "./SongLists";

const Index = () => {
  return (
    <Layout>
      <ContentsTitle />
      <SongLists />
    </Layout>
  );
};

export default Index;
