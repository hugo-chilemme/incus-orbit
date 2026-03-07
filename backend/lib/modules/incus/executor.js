import { spawn } from "child_process";

const COMMAND = "incus";

/**
 * Execute an Incus CLI command.
 * Spawns a child process and returns the parsed output.
 *
 * - If the command returns JSON, it will be automatically parsed.
 * - Otherwise, the raw stdout string is returned.
 *
 * @param {string} command - Full Incus command to execute (ex: "incus list --format json").
 * @returns {Promise<any>} Parsed JSON output or raw stdout string.
 */
export const execute = async (command) => {
	console.log(`[incus] ${command}`);

	const [cmd, ...args] = command.split(" ");

	const sp = spawn(cmd, args, {
		shell: false,
		stdio: ["ignore", "pipe", "pipe"],
		env: { ...process.env, INCUS_INTERACTIVE: "0" }
	});

	return new Promise((resolve, reject) => {
		let stdout = "";
		let stderr = "";

		sp.stdout.on("data", (d) => {
			stdout += d.toString();
		});

		sp.stderr.on("data", (d) => {
			stderr += d.toString();
		});

		sp.on("close", (code) => {
			if (code === 0) {
				try {
					resolve(JSON.parse(stdout));
				} catch {
					resolve(stdout.trim());
				}
			} else {
				reject(new Error(stderr));
			}
		});
	});
};

export { COMMAND };