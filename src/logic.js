const knight = () => {
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

	const toString = (coord) => {
		return `(${coord[0]}, ${coord[1]})`;
	};

	const knightMoves = (start, finish) => {
		const paths = [];
		const queue = []; //contains arrays
		const visited = new Set(); //contains strings

		queue.push([start, [start]]);

		while (queue.length > 0) {
			const [current, path] = queue.shift();
			visited.add(toString(current));

			if (toString(current) === toString(finish)) {
				paths.push(...path);
				console.log(
					`The shortest path took ${paths.length - 1} ${
						paths.length === 2 ? 'move' : 'moves'
					}`
				);
				paths.forEach((path) => {
					console.log(toString(path));
				});
			}

			const neighbours = returnNeighbours(current, finish);
			for (const neighbour of neighbours) {
				if (visited.has(toString(neighbour))) continue;

				if (
					neighbour[0] > 8 ||
					neighbour[0] < 0 ||
					neighbour[1] > 8 ||
					neighbour[1] < 0
				)
					continue;
				queue.push([neighbour, [...path, neighbour]]);
			}
		}
	};

	return { knightMoves };
};

const myKnight = Knight();
myKnight.knightMoves([0, 0], [1, 2]);
