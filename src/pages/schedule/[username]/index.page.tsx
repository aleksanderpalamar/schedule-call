import { Avatar } from "@palamar-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "../../../lib/prisma";
import { Container, UserHeader } from "./styles";

interface ScheduleProps {
  user: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
}

export default function Schedule({ user }: ScheduleProps) {
  console.log(user);

  return (
    <Container>
      <UserHeader>
        <Avatar src={user.avatarUrl} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </UserHeader>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  {/* 
    const users = await prisma.user.findMany({
    select: {
      username: true,
    }
  });

  const paths = users.map(user => ({
    params: {
      username: user.username,
    }
  }));
*/}

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username);

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
