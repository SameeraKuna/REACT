import { useEffect, useMemo, useState } from "react";
import FormField from "./components/FormField";
import SelectField from "./components/SelectField";
import StepTracker from "./components/StepTracker";
import StatusBanner from "./components/StatusBanner";
import TextAreaField from "./components/TextAreaField";
import { saveLeadToBackend } from "./utils/api";
import {
  EMPLOYEE_OPTIONS,
  INDUSTRY_OPTIONS,
  INITIAL_FORM,
  INITIAL_STEP,
  LEAD_SOURCE_OPTIONS,
} from "./utils/constants";
import { clearDraft, loadDraft, saveDraft } from "./utils/storage";

export default function App() {
  const [step, setStep] = useState(INITIAL_STEP);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [saveError, setSaveError] = useState("");
  const [pendingStep, setPendingStep] = useState(null);

  useEffect(() => {
    const draft = loadDraft();
    if (draft?.form) {
      setForm(draft.form);
      setStep(draft.step || 1);
    }
  }, []);

  useEffect(() => {
    saveDraft({ step, form });
  }, [step, form]);

  const currentStepValid = useMemo(() => {
    if (step === 1) return form.company.name.trim().length > 0;
    if (step === 2) return form.contact.email.trim().length > 0;
    return true;
  }, [step, form]);

  function updateCompany(field, value) {
    setForm((prev) => ({
      ...prev,
      company: {
        ...prev.company,
        [field]: value,
      },
    }));
  }

  function updateContact(field, value) {
    setForm((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      },
    }));
  }

  function updateMeta(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function validateStep(targetStep = step) {
    const nextErrors = {};

    if (targetStep === 1 && !form.company.name.trim()) {
      nextErrors.companyName = "Company name is required.";
    }

    if (targetStep === 2) {
      if (!form.contact.email.trim()) {
        nextErrors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.email.trim())) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function buildPayload() {
    return {
      company: {
        ...form.company,
      },
      contact: {
        ...form.contact,
      },
      leadSource: form.leadSource || "",
      notes: form.notes || "",
      status: "New",
      createdAt: new Date().toISOString(),
    };
  }

  async function attemptStepSave(nextStep) {
    setIsSaving(true);
    setSaveError("");
    setPendingStep(nextStep);

    try {
      await saveLeadToBackend(buildPayload());
      setStep(nextStep);
      setPendingStep(null);
    } catch (error) {
      setSaveError(error.message || "Unable to save this step.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleNext() {
    if (!validateStep(step)) return;
    await attemptStepSave(step + 1);
  }

  async function handleBack() {
    await attemptStepSave(step - 1);
  }

  async function handleFinalSave() {
    if (!validateStep(2)) {
      setStep(2);
      return;
    }

    setIsSaving(true);
    setSaveError("");

    try {
      await saveLeadToBackend(buildPayload());
      setSuccessMessage("Lead saved! ✓");
      clearDraft();

      setTimeout(() => {
        setForm(INITIAL_FORM);
        setStep(1);
        setErrors({});
        setSuccessMessage("");
      }, 1500);
    } catch (error) {
      setSaveError(error.message || "Unable to save lead.");
    } finally {
      setIsSaving(false);
    }
  }

  function continueAnyway() {
    if (pendingStep !== null) {
      setStep(pendingStep);
      setPendingStep(null);
      setSaveError("");
    }
  }

  function dismissError() {
    setSaveError("");
    setPendingStep(null);
  }

  const title =
    step === 1
      ? "Company Information"
      : step === 2
      ? "Primary Contact"
      : "Source & Notes";

  const subtitle =
    step === 1
      ? "Capture the company details first."
      : step === 2
      ? "Add the main person to reach out to."
      : "Track lead source and quick context.";

  return (
    <div className="app-shell">
      <div className="card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Lead Collection Wizard</p>
            <h1>{title}</h1>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>

        <StepTracker currentStep={step} />

        <StatusBanner
          type="success"
          message={successMessage}
        />

        <StatusBanner
          type="error"
          message={saveError}
          actions={[
            {
              label: "Dismiss",
              onClick: dismissError,
              variant: "secondary",
            },
            ...(pendingStep !== null
              ? [
                  {
                    label: "Continue anyway",
                    onClick: continueAnyway,
                    variant: "primary",
                  },
                ]
              : []),
          ]}
        />

        <div className="form-grid">
          {step === 1 && (
            <>
              <FormField
                label="Company name"
                required
                placeholder="ABC Company"
                value={form.company.name}
                onChange={(e) => updateCompany("name", e.target.value)}
                error={errors.companyName}
              />

              <FormField
                label="Website URL"
                optional
                type="url"
                placeholder="https://company.com"
                value={form.company.website}
                onChange={(e) => updateCompany("website", e.target.value)}
              />

              <FormField
                label="City"
                optional
                placeholder="Bangalore"
                value={form.company.city}
                onChange={(e) => updateCompany("city", e.target.value)}
              />

              <FormField
                label="Country"
                optional
                placeholder="India"
                value={form.company.country}
                onChange={(e) => updateCompany("country", e.target.value)}
              />

              <SelectField
                label="Employee count"
                optional
                value={form.company.employeeCount}
                onChange={(e) => updateCompany("employeeCount", e.target.value)}
                options={EMPLOYEE_OPTIONS}
                placeholder="Select employee range"
              />

              <SelectField
                label="Industry"
                optional
                value={form.company.industry}
                onChange={(e) => updateCompany("industry", e.target.value)}
                options={INDUSTRY_OPTIONS}
                placeholder="Select industry"
              />
            </>
          )}

          {step === 2 && (
            <>
              <FormField
                label="First name"
                optional
                placeholder="Sameera"
                value={form.contact.firstName}
                onChange={(e) => updateContact("firstName", e.target.value)}
              />

              <FormField
                label="Last name"
                optional
                placeholder="Kuna"
                value={form.contact.lastName}
                onChange={(e) => updateContact("lastName", e.target.value)}
              />

              <FormField
                label="Email"
                required
                type="email"
                placeholder="sameera@company.com"
                value={form.contact.email}
                onChange={(e) => updateContact("email", e.target.value)}
                error={errors.email}
              />

              <FormField
                label="Job title"
                optional
                placeholder="Growth Manager"
                value={form.contact.jobTitle}
                onChange={(e) => updateContact("jobTitle", e.target.value)}
              />

              <FormField
                label="Phone"
                optional
                type="tel"
                placeholder="+91 98765 43210"
                value={form.contact.phone}
                onChange={(e) => updateContact("phone", e.target.value)}
              />
            </>
          )}

          {step === 3 && (
            <>
              <SelectField
                label="Lead source"
                optional
                value={form.leadSource}
                onChange={(e) => updateMeta("leadSource", e.target.value)}
                options={LEAD_SOURCE_OPTIONS}
                placeholder="Select source"
              />

              <TextAreaField
                label="Notes"
                optional
                placeholder="Add quick context, optional data, or timeline..."
                rows={6}
                value={form.notes}
                onChange={(e) => updateMeta("notes", e.target.value)}
              />
            </>
          )}
        </div>

        <div className="actions">
          {step > 1 ? (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBack}
              disabled={isSaving}
            >
              {isSaving && pendingStep === step - 1 ? "Saving..." : "Back"}
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
              disabled={!currentStepValid || isSaving}
            >
              {isSaving && pendingStep === step + 1 ? "Saving..." : "Next"}
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleFinalSave}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save lead"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}