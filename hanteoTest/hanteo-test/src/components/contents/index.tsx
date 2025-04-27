import Layout from "./layout";
import "./contents.scss";
import ContentsTitle from "./ContentsTitle";
import List from "./List";

const Index = () => {
  return (
    <Layout>
      <ContentsTitle />
      <List />
      <List />
      <List />
      <List />
      <List />
    </Layout>
  );
};

export default Index;
