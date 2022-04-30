import { useState, useEffect } from "react";
import Link from "next/link";
import MainContainer from "../components/main-container";

const Users = ({ users }) => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: "loh" },
  //     { id: 2, name: "loh2" },
  //   ]);
  const usersf = [
    { id: 1, name: "loh" },
    { id: 2, name: "loh2" },
  ];
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // setUsers(users);
  }, []);

  return (
    <MainContainer keywords={"users-next-js"}>
      <h1>Cписок пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
