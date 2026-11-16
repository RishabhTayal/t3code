/** "app" opens pull request links in T3 Code; "provider" hands them to the system (e.g. the GitHub app). */
export type PullRequestLinkTarget = "app" | "provider";

export const DEFAULT_PULL_REQUEST_LINK_TARGET: PullRequestLinkTarget = "app";
