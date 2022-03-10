import Layout from "../../components/Layout";

export default function Todo() {
  return (
    <Layout title="Todos - Todo" currentPage="todos">
      <h1>Welcom on todo</h1>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
