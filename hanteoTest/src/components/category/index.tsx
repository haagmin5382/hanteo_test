import Layout from "./layout";
import "./category.scss";
import List from "./List";
import { ListData } from "./data.json";

const index = () => {
  return (
    <Layout>
      {ListData.map((obj) => (
        <List name={obj.name} link={obj.link} />
      ))}
    </Layout>
  );
};

export default index;
