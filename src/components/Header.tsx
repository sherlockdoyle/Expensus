import {
  Avatar,
  Button,
  Group,
  Header,
  Menu,
  rem,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";

export const AppHeader = () => {
  const session = useSession();

  return (
    <Header height={48} px="md">
      <Group position="apart" sx={{ height: "100%" }}>
        <Group>
          <Title order={3}>Notes</Title>
        </Group>

        <Group position="right">
          {session.status === "authenticated" ? (
            <Menu position="bottom-end" withinPortal>
              <Menu.Target>
                <Button variant="defaultdef">
                  <Group spacing={7}>
                    <Avatar
                      src={session.data.user.image}
                      alt={session.data.user.name ?? undefined}
                      radius="xl"
                      size={20}
                    />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {session.data.user.name}
                    </Text>
                    <IconChevronDown size={rem(12)} stroke={1.5} />
                  </Group>
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Divider />
                <Menu.Item
                  icon={<IconLogout size="0.9rem" stroke={1.5} />}
                  onClick={() => void signOut()}
                >
                  Sign out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button onClick={() => void signIn()}>Sign in</Button>
          )}
        </Group>
      </Group>
    </Header>
  );
};
