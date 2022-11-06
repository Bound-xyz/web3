export const PROJECT_STATUS = {
  APPLICATION_REVIEW: "APPLICATION_REVIEW",
  WORKING: "WORKING",
  SUBMISSION_REVIEW: "SUBMISSION_REVIEW",
  COMPLETE: "COMPLETE",
} as const;

export type ProjectStatus = keyof typeof PROJECT_STATUS;
