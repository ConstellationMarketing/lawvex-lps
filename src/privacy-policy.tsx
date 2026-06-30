import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LegalPage } from "./screens/LegalPage";

const privacySections = [
  {
    paragraphs: [
      `We recognize that you may be concerned about our use and disclosure of your personal information. Your privacy is very important to us, and the following will inform you of the information that we, Lawvex, LLP, may collect from you, and how it is used. By using our website, https://help.lawvex.com, you are accepting the practices described in this policy.`,
    ],
  },
  {
    title: "Information Collection",
    paragraphs: [
      `We may collect non-personal information, such as a domain name and IP Address. The domain name and IP address reveals nothing personal about you other than the IP address from which you have accessed our site. We may also collect information about the type of Internet browser you are using, operating system, what brought you to our Website, as well as which of our Web pages you have accessed.`,
      `Additionally, if you communicate with us regarding our Website or our services, we will collect any information that you provide to us in any such communication.`,
      `We may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.`,
    ],
  },
  {
    title: "Security",
    paragraphs: [
      `We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we receive it.`,
      `If we collect sensitive information, that information is encrypted and transmitted to us in a secure way.`,
      `We also protect your information offline. Only employees who need the information to perform a specific job are granted access to personally identifiable information.`,
      `The computers and servers in which we store personally identifiable information are kept in a secure environment.`,
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      `We use “cookies” on this site. A cookie is a piece of data stored on a site visitor’s hard drive to help us improve access to our site and identify repeat visitors.`,
      `Cookies can enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is not linked to any personally identifiable information on our site.`,
    ],
  },
  {
    title: "Sharing and Information Use",
    paragraphs: [
      `We use the collected information primarily for internal purposes, such as providing, maintaining, evaluating, and improving our services and Website, fulfilling requests for information, and providing customer support.`,
      `We will not sell or otherwise provide the information we collect to outside third parties for the purpose of direct or indirect mass email marketing.`,
      `We will disclose personal information and/or an IP address when required by law or in the good-faith belief that such action is necessary.`,
    ],
    items: [
      `Cooperate with investigations of purported unlawful activities and comply with legal process served on our company`,
      `Protect and defend the rights or property of our Website and related properties`,
      `Identify persons who may be violating the law, the rights of third parties, or otherwise misusing our Website or its related properties`,
    ],
  },
  {
    paragraphs: [
      `Please keep in mind that whenever you voluntarily disclose personal information online, that information can be collected and used by others. You are solely responsible for maintaining the secrecy of your personal information.`,
      `No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.`,
      `Message and data rates may apply for any messages sent to you from us and to us from you. If you have questions about your text plan or data plan, contact your wireless provider.`,
    ],
  },
  {
    title: "Links",
    paragraphs: [
      `This Website may contain links to other sites. We are not responsible for the content or privacy practices of other sites and encourage users to read privacy statements when they leave our site.`,
    ],
  },
  {
    title: "Surveys & Contests",
    paragraphs: [
      `From time to time our site may request information via surveys or contests. Participation is voluntary. Requested information may include contact and demographic information.`,
    ],
  },
  {
    title: "Consent",
    paragraphs: [
      `By using this Website, you consent to the collection and use of information as specified above. If we make changes to our Privacy Policy, we will post those changes on this page.`,
      `By submitting the website contact form you agree to receive marketing messaging and email from Lawvex at the phone number and email provided in the form. Data rates may apply. Reply STOP to opt out or click unsubscribe in the email to opt out.`,
      `If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 888-308-7003 or via email at info@lawvex.com.`,
    ],
  },
];

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LegalPage title="Privacy Policy" sections={privacySections} />
  </StrictMode>,
);
