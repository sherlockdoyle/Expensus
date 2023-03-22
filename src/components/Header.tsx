import { Avatar, Button, Group, Header, Text, Title } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

export const AppHeader = () => {
  const session = useSession();

  return (
    <Header height={48} px="md">
      <Group position="apart" sx={{ height: "100%" }}>
        {session.status === "authenticated" && (
          <Group>
            <Avatar
              src={session.data.user.image}
              radius="xl"
            />
            <Title order={3}>Notes for {session.data.user.name}</Title>
          </Group>
        )}

        <Group position="right">
          {session.status === "authenticated" ? (
            <Button variant="default" onClick={() => void signOut()}>
              Sign out
            </Button>
          ) : (
            <Button onClick={() => void signIn()}>Sign in</Button>
          )}
        </Group>
      </Group>
    </Header>
  );
};
