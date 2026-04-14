import { STEP_TITLES } from "../utils/constants";

export default function StepTracker({ currentStep }) {
  return (
    <div className="stepper" aria-label="Progress">
      {STEP_TITLES.map((title, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isComplete = currentStep > stepNumber;

        return (
          <div key={title} className="stepper-item">
            <div
              className={[
                "stepper-circle",
                isActive ? "active" : "",
                isComplete ? "complete" : "",
              ].join(" ")}
              aria-current={isActive ? "step" : undefined}
            >
              {isComplete ? "✓" : stepNumber}
            </div>

            <div className="stepper-copy">
              <div className="stepper-label">Step {stepNumber}</div>
              <div className="stepper-title">{title}</div>
            </div>

            {stepNumber < STEP_TITLES.length && <div className="stepper-line" />}
          </div>
        );
      })}
    </div>
  );
}
