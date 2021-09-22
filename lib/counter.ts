(global as any).counter = { count: 0 };

let counter = { count: 0 };

const globalCounter = (global as any).counter;

export { globalCounter, counter };
