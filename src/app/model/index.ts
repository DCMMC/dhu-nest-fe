export interface User {
  username: string;
  desc: string;
  avatar: string;
}


export interface Catalog {
  name: string;
}

export interface Post {
  title: string;
  author: User;
  content: string;
}
