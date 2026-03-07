import { execute, COMMAND } from "./executor.js";

export const add = async (container, srcPort, trgPort, proposeName = null) => {

	const name = proposeName ? proposeName : `_${srcPort}`;

	if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
		throw new Error("Device name can only contain letters, digits, underscores and hyphens");
	}

	return await execute(
		`${COMMAND} config device add ${container} ${name} proxy listen=tcp:0.0.0.0:${srcPort} connect=tcp:127.0.0.1:${trgPort}`
	);
};

export const remove = async (container, name) =>
	await execute(`${COMMAND} config device remove ${container} ${name}`);

