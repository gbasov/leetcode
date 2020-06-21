/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = dungeon => 
{
    const bottom = dungeon.length - 1;
    const right = dungeon[0].length - 1;

    for (let y = bottom; y >= 0; y--)
    {
        for (let x = right; x >= 0; x--) {
            const nextRooms = [];
            if (x < right) {
                nextRooms.push(dungeon[y][x+1]);
            }
            if (y < bottom) {
                nextRooms.push(dungeon[y+1][x]);
            }

            const hpToPassNext = nextRooms.length ? Math.min(...nextRooms) : 1;
            const hpToPassThisRoom = Math.max(1, hpToPassNext - dungeon[y][x]);

            dungeon[y][x] = hpToPassThisRoom;
        }
    }

    return dungeon[0][0];
};
