import Column from "../components/column";
import Gallery from "../components/gallery";
import Layout from "../components/layout";

export default function Services() {
  return (
    <Layout page="services">
      <Column>
        <Gallery />
      </Column>
    </Layout>
  );
}