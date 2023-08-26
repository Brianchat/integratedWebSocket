import type { ExtendedWebSocketServer } from '$lib/server/webSocketUtils';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			wss?: ExtendedWebSocketServer;
		}
		interface Platform {
		    env: {
		        COUNTER: DurableObjectNamespace;
		    };
		    context: {
		        waitUntil(promise: Promise<any>): void;
	       	};
	       	caches: CacheStorage & { default: Cache }
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
