import {
  Body,
  Container,
  Head,
  Heading,
  Html,
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
      <Preview>
        Hey {username}, thanks for registering with Super Green Plantation 🌱
      </Preview>

      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Text style={greetingStyle}>Hey {username},</Text>

          <Heading style={headingStyle}>
            Welcome to Super Green Plantation 🌿
          </Heading>

          <Text style={textStyle}>
            Thank you for registering with <strong>Super Green Plantation</strong>.
            We’re excited to have you on board!
          </Text>

          <Text style={textStyle}>
            Our team will contact you soon with the next steps.
          </Text>

          <Text style={supportStyle}>
            If you have any questions or need assistance, feel free to reach out
            to our support team.
          </Text>

          <Text style={footerStyle}>
            If you didn’t request this, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------- Styles ---------- */

const bodyStyle = {
  backgroundColor: "#f9fafb",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "28px",
  maxWidth: "520px",
  margin: "0 auto",
};

const greetingStyle = {
  fontSize: "14px",
  color: "#374151",
  marginBottom: "8px",
};

const headingStyle = {
  color: "#111827",
  fontSize: "22px",
  fontWeight: "600",
  marginBottom: "16px",
};

const textStyle = {
  fontSize: "14px",
  color: "#4b5563",
  lineHeight: "1.6",
  marginBottom: "12px",
};

const supportStyle = {
  fontSize: "14px",
  color: "#374151",
  marginTop: "16px",
};

const footerStyle = {
  fontSize: "12px",
  color: "#9ca3af",
  marginTop: "24px",
};
