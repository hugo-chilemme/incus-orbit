"use client";
import { useEffect, useState } from "react";
import ApiController from "@/lib/ApiController";
import { Loader2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner";
import StatusBlock from "@/components/subcomponents/StatusBlock";

import {
	RotateCcw,
	Play,
	Square
} from "lucide-react";

export default function Home() {
	const [containers, setContainers] = useState([]);
	const [loading, setLoading] = useState(true);


	async function getContainers () {
		await ApiController({
			method: "GET",
			url: "/containers",
		}).then(({data}) => {
			setContainers(data);
		});
	}

	useEffect(() => {
		(async () => {
			await getContainers();
			setLoading(false);
		})();
	}, []);
	const handleAction = async (action: "start" | "stop" | "restart", containerName: string) => {
		const statusMap: Record<typeof action, string> = {
			start: "Starting...",
			stop: "Stopping...",
			restart: "Restarting...",
		};
		const successMap: Record<typeof action, string> = {
			start: "started",
			stop: "stopped",
			restart: "restarted",
		};

		setContainers((prev) =>
			prev.map((container) =>
				container.name === containerName
					? { ...container, status: statusMap[action] }
					: container
			)
		);

		toast.promise(
			ApiController({
				method: "POST",
				url: `/containers/${containerName}/action`,
				data: { action },
			}).then(getContainers),
			{
				loading: `${statusMap[action]} ${containerName}...`,
				success: `${containerName} ${successMap[action]} successfully!`,
				error: `Failed to ${action} ${containerName}.`,
			}
		);
	};

	return (
		<main className="w-full max-w-7xl mx-auto p-4 py-24">
			<h1 className="text-4xl font-bold mb-8">Containers</h1>
			{loading ? (
				<div className="space-y-4 w-full p-4 border border-neutral-800 rounded-md flex items-center justify-center">
					<Loader2 className="animate-spin" size={24} />
				</div>
			) : (
				<div className="space-y-1">
					<div className="w-full p-4 px-6 border border-neutral-800 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center bg-neutral-900 font-medium gap-4 text-sm text-neutral-400">
						<span className="col-span-2">Name</span>
						<span>Status</span>
						<span>IP</span>
						<span>Profile</span>
						<span className="text-right">Actions</span>
					</div>
					{containers.map((container) => (
						<div className="w-full p-1 border border-neutral-900 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center text-neutral-500 gap-4" key={container.name}>
							<div className="p-3 col-span-2 hover:bg-neutral-900 rounded-md flex items-center gap-4">
								<h2 className="font-medium text-neutral-300 w-full">{container.name}</h2>
							</div>
							<div>
								<StatusBlock status={container.status} />
							</div>
							<p>{container.ip}</p>
							<p>{container.profile}</p>
							<div className="flex items-center justify-end gap-4">
								{ container.status === "Running" && (
									confirmAction(
										<RotateCcw size={14} />,
										`Restart ${container.name}`,
										`Are you sure you want to restart ${container.name}?`,
										() => handleAction("restart", container.name)
									)
								)}

								{ container.status === "Running" && (
									confirmAction(
										<Square size={14} />,
										`Stop ${container.name}`,
										`Are you sure you want to stop ${container.name}?`,
										() => handleAction("stop", container.name)
									)
								)}
								{ container.status === "Stopped" && (
									confirmAction(
										<Play size={14} />,
										`Start ${container.name}`,
										`Are you sure you want to start ${container.name}?`,
										() => handleAction("start", container.name)
									)
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</main>
	);
}


function confirmAction(button, title, message, onConfirm) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
				>
					{button}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{message}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}