class Knight {
  constructor() {}

  #returnSortedNeighbours(coord, destination) {
    const [sX, sY] = coord;
    const [fX, fY] = destination;
    const positive = [
      [sX + 1, sY + 2],
      [sX + 2, sY + 1],
    ];
    const negX = [
      [sX - 1, sY + 2],
      [sX - 2, sY + 1],
    ];
    const negY = [
      [sX + 1, sY - 2],
      [sX + 2, sY - 1],
    ];
    const negative = [
      [sX - 2, sY - 1],
      [sX - 1, sY - 2],
    ];
    if (sX < fX && sY < fY) return positive;
    if (sX > fX && sY > fY) return negative;
    if (sX >= fX) return negX;
    if (sY >= fY) return negY;
  }
  #toString(coord) {
    return `(${coord[0]}, ${coord[1]})`;
  }

  knightMoves(start, finish) {
    const queue = []; //contains arrays
    const visited = new Set(); //contains strings

    queue.push(start);

    while (queue.length > 0) {
      const current = queue.shift();
      visited.add(this.#toString(current));

      if (visited.has(this.#toString(finish))) return visited;

      const neighbours = this.#returnSortedNeighbours(current, finish);
      for (const neighbour of neighbours) {
        if (visited.has(this.#toString(neighbour))) continue;

        if (
          neighbour[0] > 8 ||
          neighbour[0] < 0 ||
          neighbour[1] > 8 ||
          neighbour[1] < 0
        )
          continue;
        queue.push(neighbour);
      }
    }
  }
}

const myKnight = new Knight();
console.log(myKnight.knightMoves([3, 1], [2, 2]));
