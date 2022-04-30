import react from "react";
import { useRouter } from "next/router";

export default function User({ user }) {
  const router = useRouter();
  const { query } = useRouter();
  console.log(user);
  return (
    // <MainContainer>
    <div>
      <h1>Пользователь c id {query.id}</h1>
      <div>Имя пользователя - {user.name}</div>
    </div>
    // </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
