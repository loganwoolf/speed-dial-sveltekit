interface SpeedDialLink {
	id: number;
	name: string;
	url: string;
}
function createID(): () => number {
	let id = 511;
	return () => id++;
}

export function createLink(info: Omit<SpeedDialLink, 'id'>) {
	const link = {
		id: id(),
		...info
	};
	speedDialLinks.push(link);
}

export function getAllLinks(): SpeedDialLink[] {
	return speedDialLinks;
}

export function updateLink(id: number, info: Omit<SpeedDialLink, 'id'>) {
	let link = speedDialLinks.find((link) => link.id === id);
	if (link) {
		link = {
			...link,
			...info
		};
	}
}

export function removeLink(id: number) {
	speedDialLinks = speedDialLinks.filter((link) => link.id !== id);
}

const id = createID();
let speedDialLinks: SpeedDialLink[] = [
	{
		id: id(),
		name: 'Google',
		url: 'https://www.google.com'
	},
	{
		id: id(),
		name: 'X (Twitter)',
		url: 'https://x.com'
	},
	{
		id: id(),
		name: 'YouTube',
		url: 'https://www.youtube.com'
	}
];
