import React from "react";
import { Loader2, Circle } from "lucide-react";

type StatusBlockProps = {
	status: string;
};

const loadingStatuses = [
	"Starting...",
	"Loading...",
	"Restarting...",
	"Stopping...",
];

export const StatusBlock: React.FC<StatusBlockProps> = ({ status }) => {
	const getStatusClasses = () => {
		if (status === "Running") {
			return "bg-green-700/20 text-green-300";
		}
		if (status === "Stopped") {
			return "bg-red-700/20 text-red-300";
		}
		if (loadingStatuses.includes(status)) {
			return "bg-yellow-700/20 text-yellow-300";
		}
		return "bg-neutral-700/20 text-neutral-300";
	};

	return (
		<span
			className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-semibold ${getStatusClasses()}`}
		>
			{loadingStatuses.includes(status) ? (
				<Loader2 size={10} className="inline-block mr-1 animate-spin" />
			) : (
				<Circle size={10} className="inline-block mr-1" />
			)}
			{status}
		</span>
	);
};

export default StatusBlock;