(global as any).counter = { count: 0 };

let scopeCounter = { count: 0 };

const globalCounter = (global as any).counter;

export { globalCounter, scopeCounter };
