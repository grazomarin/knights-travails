const returnNeighbors = (coord) => {
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
	].filter(([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7);
};

// returns the shortest path from start to finish without start
const returnShortestPath = (start, finish) => {
	const queue = []; // Queue for BFS
	const visited = new Set(); // Set for visited nodes
	const parents = new Map(); // Track the path by storing the parent of each node

	queue.push(start);
	visited.add(`${start[0]}-${start[1]}`);

	while (queue.length > 0) {
		const current = queue.shift();

		// Early exit when reaching the target
		if (current[0] === finish[0] && current[1] === finish[1]) {
			// Reconstruct the path by backtracking through the parents map
			const path = [];
			let head = current;

			// we can compare this way because we are using the same reference
			while (head !== start) {
				path.push(head);
				head = parents.get(`${head[0]}-${head[1]}`);
			}
			return path.reverse();
		}

		const neighbors = returnNeighbors(current);
		for (const neighbor of neighbors) {
			const neighborKey = `${neighbor[0]}-${neighbor[1]}`;
			// If neighbor has not been visited
			if (!visited.has(neighborKey)) {
				queue.push(neighbor);
				visited.add(neighborKey);
				parents.set(neighborKey, current); // Store the parent to reconstruct the path
			}
		}
	}

	return [];
};

export default returnShortestPath;
