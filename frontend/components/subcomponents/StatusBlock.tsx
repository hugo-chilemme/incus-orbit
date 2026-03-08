import React from "react";
import { Loader2, Circle, XCircle } from "lucide-react";

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
		if (status === "Failed") {
			return "bg-red-900/20 text-red-400";
		}
		if (loadingStatuses.includes(status)) {
			return "bg-yellow-700/20 text-yellow-300";
		}
		return "bg-neutral-700/20 text-neutral-300";
	};

	const renderIcon = () => {
		if (loadingStatuses.includes(status)) {
			return <Loader2 size={10} className="inline-block mr-1 animate-spin" />;
		}
		if (status === "Failed") {
			return <XCircle size={10} className="inline-block mr-1" />;
		}
		return <Circle size={10} className="inline-block mr-1" />;
	};

	return (
		<span
			className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-semibold ${getStatusClasses()}`}
		>
			{renderIcon()}
			{status}
		</span>
	);
};

export default StatusBlock;