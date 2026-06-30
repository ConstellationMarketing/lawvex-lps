import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LegalPage } from "./screens/LegalPage";

const termsSections = [
  {
    title: "Service Review",
    items: [
      `You can expect to receive SMS messages asking for a review of our services.`,
      `You can cancel the SMS service at any time. Just text “STOP” to the short code. After you send the SMS message “STOP” to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.`,
      `If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at info@lawvex.com.`,
      `Carriers are not liable for delayed or undelivered messages.`,
      `As always, message and data rates may apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.`,
      <>
        If you have any questions regarding privacy, please read our privacy policy:{" "}
        <a href="/privacy-policy/" className="text-lawvex-accent underline">
          Privacy Policy
        </a>
        .
      </>,
    ],
  },
];

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LegalPage title="Terms of Service" sections={termsSections} />
  </StrictMode>,
);
