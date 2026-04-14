export const EMPLOYEE_OPTIONS = ["10-50", "51-100", "101-250", "250+"];

export const INDUSTRY_OPTIONS = [
  "SaaS",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "Other",
];

export const LEAD_SOURCE_OPTIONS = [
  "Inbound form",
  "Outbound reach",
  "Referral",
  "Event/Webinar",
  "Content/Blog",
  "Paid ad",
  "LinkedIn",
  "Other",
];

export const STEP_TITLES = [
  "Company Information",
  "Primary Contact",
  "Source & Notes",
];

export const INITIAL_FORM = {
  company: {
    name: "",
    website: "",
    city: "",
    country: "",
    employeeCount: "",
    industry: "",
  },
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phone: "",
  },
  leadSource: "",
  notes: "",
  status: "New",
  createdAt: "",
};

export const INITIAL_STEP = 1;
export const DRAFT_KEY = "lead-wizard-draft-v1";