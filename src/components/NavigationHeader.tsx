import { useState } from 'react';
import { createStyles, Header, Container, Group, Button, rem, Image, Burger, Paper, Portal, Flex } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  pointer: {
    cursor: "pointer"
  },
  linkUnder: {
    textDecoration: 'none',
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
  burgerWrapper: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'block',
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function NavigationHeader({ }: HeaderSimpleProps) {
  const { classes, cx } = useStyles();
  const [burgerOpened, setBurgerOpened] = useState(false);

  const handleBurgerClick = () => {
    setBurgerOpened(!burgerOpened);
  };

  return (
    <Header height={100} mb={10}>
      <Container className={classes.header}>
        <Link href="/">
          <Image
            className={classes.pointer}
            width={260}
            height={70}
            src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-PNG-HD-Quality.png"
            alt="Rick&Morty"
          />
        </Link>
        <Group spacing={5} className={classes.links}>
          <Link href="/">
            <Button color="cyan" radius="md" size='md' >
              Characters
            </Button>
          </Link>
          <Link href="/locations">
            <Button color="cyan" radius="md" size='md'>
              Locations
            </Button>
          </Link>
          <Link href="/episodes">
            <Button color="cyan" radius="md" size='md'>
              Episodes
            </Button>
          </Link>
        </Group>
        <Group className={classes.burgerWrapper}>
          <Burger color="cyan" opened={burgerOpened} onClick={handleBurgerClick} />
        </Group>
        {burgerOpened && (
          <Portal>
            <Paper p="md" shadow="xs" style={{ position: 'absolute', right: 10, top: 60 }}>
              <Flex direction="column">
                <Link className={classes.linkUnder} href="/">
                  <Button color='cyan' className={classes.link} onClick={handleBurgerClick} fullWidth>
                    Characters
                  </Button>
                </Link>
                <Link className={classes.linkUnder} href="/locations">
                  <Button my={5} color='cyan' className={classes.link} onClick={handleBurgerClick} fullWidth>
                    Locations
                  </Button>
                </Link>
                <Link className={classes.linkUnder} href="/episodes">
                  <Button color='cyan' className={classes.link} onClick={handleBurgerClick} fullWidth>
                    Episodes
                  </Button>
                </Link>
              </Flex>
            </Paper>
          </Portal>
        )}
      </Container>
    </Header>
  );
}




