const Queue = require("../lib/queue");

const connected = (G, s, r) => {
    const users = Object.keys(G);

    if (users.length === 0) {
        return false;
    }

    if (s === r) {
        return true;
    }

    const discovered = new Queue();

    discovered.enqueue(s);
    const enqueued = [s];

    while (discovered.first) {
        const user = discovered.dequeue();

        const following = G[user];

        for (const followedUser of following) {
            if (followedUser === r) {
                return true;
            }

            if (!enqueued.includes(followedUser)) {
                enqueued.push(followedUser);
                discovered.enqueue(followedUser);
            }
        }
    }

    return false;
};

module.exports = connected;
