export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  gender: string;
  phone: string;
  company: {
    title: string;
    department: string;
  };
};

type UsersResponse = {
  users: User[];
};

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data: UsersResponse = await response.json();
  return data.users;
}
