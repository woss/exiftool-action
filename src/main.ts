import * as core from "@actions/core";
import { execSync } from "node:child_process";
import { resolve } from "node:path";
/**
 * The main function for the action.
 * @returns {void} Resolves when the action is complete.
 */
export function run(): void {
  try {
    const p: string = resolve(__dirname, "../exiftool");
    core.addPath(p);
    core.debug(`Added ${p} to PATH`);
    const version: string = execSync(`exiftool -ver`).toString().trim();
    core.debug(`Exiftool version is ${version}`);
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
