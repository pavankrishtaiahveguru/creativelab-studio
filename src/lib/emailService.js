import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const contactTemplate = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE;
const discoveryTemplate = import.meta.env.VITE_EMAILJS_DISCOVERY_TEMPLATE;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function getMissingEmailEnv() {
  const missing = [];

  if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!contactTemplate) missing.push("VITE_EMAILJS_CONTACT_TEMPLATE");
  if (!discoveryTemplate) missing.push("VITE_EMAILJS_DISCOVERY_TEMPLATE");
  if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");

  return missing;
}

async function sendEmail(templateId, templateParams) {
  const missing = getMissingEmailEnv();
  if (missing.length > 0) {
    const error = new Error(
      `Missing EmailJS environment variables: ${missing.join(", ")}`,
    );
    error.code = "email-config-missing";
    throw error;
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}

export async function sendContactNotification(data) {
  const templateParams = {
    subject: "New Contact Form Submission",
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    body: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
  };

  return sendEmail(contactTemplate, templateParams);
}

export async function sendDiscoveryNotification(data) {
  const templateParams = {
    subject: "New Discovery Call Booking",
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    company: data.company,
    projectType: data.projectType,
    budget: data.budget,
    meetingDate: data.meetingDate,
    meetingTime: data.meetingTime,
    brief: data.brief,
    body: `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nProject Type: ${data.projectType}\nBudget: ${data.budget}\nMeeting Date: ${data.meetingDate}\nMeeting Time: ${data.meetingTime}\nBrief: ${data.brief}`,
  };

  return sendEmail(discoveryTemplate, templateParams);
}
