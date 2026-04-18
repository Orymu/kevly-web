export const deleteAccountLastUpdated = "April 18, 2026";

export type DeleteAccountSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const deleteAccountIntro =
  "Kevly allows users to request account deletion from inside the app. This page explains how that flow works, what happens after you request deletion, and what data may be deleted or retained.";

export const deleteAccountSections: DeleteAccountSection[] = [
  {
    title: "How to request deletion in the app",
    paragraphs: [
      "If you can still access your account, the fastest way to request deletion is from inside the Kevly mobile app.",
    ],
    bullets: [
      "Open Kevly and sign in to your account.",
      "Go to Account.",
      "Open Security and Privacy.",
      "Select Delete account.",
      "Review the information shown in the app and confirm the request.",
    ],
  },
  {
    title: "What happens after you request deletion",
    paragraphs: [
      "After you request deletion, your account is scheduled for deletion in 30 days.",
      "During that grace period, you can still use Kevly and you may be able to cancel the deletion request from the app before the scheduled deletion date.",
    ],
    bullets: [
      "Your account deletion request is scheduled rather than applied instantly.",
      "You can cancel the deletion request during the waiting period if you change your mind.",
      "Once the scheduled deletion date is reached, the deletion process may become irreversible.",
    ],
  },
  {
    title: "What is deleted",
    bullets: [
      "Profile data such as your name, email address, username, and related account profile information.",
      "Your active sessions and account tokens.",
      "Other account-level sign-in data needed to keep the deleted account from remaining usable.",
    ],
  },
  {
    title: "What may remain",
    paragraphs: [
      "Kevly supports shared spaces and shared expense history. Because of that, some records may remain where needed to preserve other users' ledger history, shared-space integrity, fraud prevention, security, legal compliance, or auditability.",
    ],
    bullets: [
      "Space and expense data may remain for other members.",
      "Some historical records may be retained in a form that no longer directly identifies you.",
      "Your email address may become available for use with a new account after deletion is finalized.",
    ],
  },
  {
    title: "If you cannot access the app",
    paragraphs: [
      "If you cannot sign in or cannot complete the deletion flow in the app, contact us and include enough information for us to locate your account safely.",
      "For privacy and security reasons, we may ask you to verify account ownership before processing a deletion-related request outside the app.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For delete-account help, contact hello@kevly.app.",
    ],
  },
];
