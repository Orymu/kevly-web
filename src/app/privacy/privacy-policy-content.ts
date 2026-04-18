export const privacyPolicyLastUpdated = "April 15, 2026";

export type PrivacyPolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const privacyPolicyIntro =
  "Kevly values your privacy. This Privacy Policy explains what information we collect, how we use it, when we share it, and the choices you have when you use Kevly.";

export const privacyPolicySections: PrivacyPolicySection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    bullets: [
      "Account information, such as your email address, password, name, profile photo, and information related to account security.",
      "Product and activity information, such as spaces you create or join, invitations, expenses, settlements, balances, summaries, and receipt-related activity.",
      "Images and files, including profile photos, receipt images, and receipt details extracted to help you review and organize expenses.",
      "Device and app information, such as session information, notification token information if you enable notifications, and diagnostics used to keep Kevly secure and reliable.",
      "Limited information stored locally on your device, such as sign-in state, cached profile images, temporary receipt scan or review data, and app preferences.",
    ],
  },
  {
    title: "2. Permissions We May Request",
    paragraphs: [
      "Kevly may request access to certain device features when needed for a product feature.",
    ],
    bullets: [
      "Camera access so you can take a profile photo or scan or capture a receipt.",
      "Photo library access so you can select an existing image, such as a profile photo.",
      "Notification permission if notifications are available for your account or device.",
      "You can decline these permissions, but some features may not work properly without them.",
    ],
  },
  {
    title: "3. How We Use Information",
    bullets: [
      "To create and manage your account.",
      "To sign you in and keep your account secure.",
      "To provide the core Kevly product experience.",
      "To let you create spaces, invite others, and manage shared expenses.",
      "To process receipts and show editable receipt details.",
      "To display and manage profile images.",
      "To send service-related emails, such as account verification, password reset, and account deletion notices.",
      "To send notifications if you enable them.",
      "To prevent abuse, fraud, and security problems.",
      "To improve and maintain Kevly.",
    ],
  },
  {
    title: "4. Receipt and Image Handling",
    paragraphs: [
      "If you use receipt or image-related features, Kevly may process those files so the feature works as intended.",
      "For example, receipt images may be used to help extract and organize expense details, and profile photos may be used to display your account identity in the app.",
      "In some cases, Kevly may use third-party service providers to support file storage, processing, or receipt extraction.",
    ],
  },
  {
    title: "5. When We Share Information",
    paragraphs: ["We may share information in the following situations:"],
    bullets: [
      "With other users when you use shared spaces or invite other people, including information such as your name, profile photo, and shared expense or receipt-related records.",
      "With service providers that support hosting, storage, notifications, email delivery, file processing, security, monitoring, and technical operations.",
      "For legal or safety reasons, including to comply with law, protect Kevly and its users, enforce our terms, investigate misuse, or support a business transaction.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain information for as long as reasonably necessary to provide the service, maintain account and product functionality, comply with legal obligations, resolve disputes, and protect the security and integrity of Kevly.",
      "Some information may be retained longer when needed for recordkeeping, fraud prevention, security, or compliance.",
    ],
  },
  {
    title: "7. Account Deletion",
    paragraphs: [
      "You may be able to request account deletion.",
      "Kevly currently uses an account deletion flow that includes a grace period before finalization. During that period, you may be able to cancel the request. After finalization, your account information is removed or de-identified as appropriate.",
      "Some historical records may be retained in a form that no longer directly identifies you where retention is necessary for legal, security, accounting, fraud prevention, or record-integrity purposes.",
    ],
  },
  {
    title: "8. Security",
    paragraphs: [
      "We use reasonable safeguards designed to protect your information. However, no method of storage or transmission is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "9. Children",
    paragraphs: [
      "Kevly is not intended for children who are not legally permitted to use the service without appropriate consent. If you believe a child has provided personal information improperly, contact us so we can review the issue.",
    ],
  },
  {
    title: "10. International Processing",
    paragraphs: [
      "Your information may be processed or stored in countries other than your own, depending on where Kevly and its service providers operate.",
    ],
  },
  {
    title: "11. Your Choices",
    bullets: [
      "Access or update certain account information.",
      "Remove your profile photo.",
      "Manage device permissions such as camera, photo library, and notifications.",
      "Request account deletion.",
      "Choose not to use features that require certain permissions.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. If we make material changes, we may provide notice through the app, website, or other appropriate means. The updated version will include a revised \"Last updated\" date.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "If you have privacy questions or requests, you can contact us at privacy@kevly.app.",
    ],
  },
];
