import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

interface NotionMagicLinkEmailProps {
  username: string;
}

export function NotionMagicLinkEmail({
  username,
}: NotionMagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>

      <Body style={{ backgroundColor: "#ffffff" }}>
        <Container style={{ padding: "20px" }}>
          <Heading>Login</Heading>

          <Link href="https://super-green-web.vercel.app">
            Click here to log in
          </Link>

         

          <Text style={{ color: "#999" }}>
            If you didn’t request this, ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
