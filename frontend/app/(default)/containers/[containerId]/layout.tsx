import type { Metadata } from "next";

type Props = {
	params: { containerId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { containerId } = params;
	return {
		title: `${containerId} | Incus Orbit`,
		description: `View details for container "${containerId}".`,
	};
}

export default async function ContainerPage({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { containerId: string };
}) {
	const { containerId } = params;

	return (
		<main className="w-full max-w-7xl mx-auto p-4 py-24">
			<h1 className="text-4xl font-bold mb-8">{containerId}</h1>
			{children}
		</main>
	);
}