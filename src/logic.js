const returnNeighbours = (coord) => {
	const [sX, sY] = coord;

	return [
		[sX + 1, sY + 2],
		[sX + 2, sY + 1],
		[sX - 1, sY + 2],
		[sX - 2, sY + 1],
		[sX + 1, sY - 2],
		[sX + 2, sY - 1],
		[sX - 2, sY - 1],
		[sX - 1, sY - 2],
	];
};

const str = (coord) => {
	return `(${coord[0]}, ${coord[1]})`;
};

const returnShortestPath = (start, finish) => {
	const queue = []; //contains arrays
	const visited = new Set(); //contains strings

	queue.push([start, []]);

	while (queue.length > 0) {
		const [current, path] = queue.shift();
		visited.add(str(current));

		if (str(current) === str(finish)) {
			return path;
		}

		const neighbours = returnNeighbours(current, finish);
		for (const neighbour of neighbours) {
			if (visited.has(str(neighbour))) continue;

			if (
				neighbour[0] > 8 ||
				neighbour[0] < 1 ||
				neighbour[1] > 8 ||
				neighbour[1] < 1
			)
				continue;
			queue.push([neighbour, [...path, neighbour]]);
		}
	}
};

export default returnShortestPath;
