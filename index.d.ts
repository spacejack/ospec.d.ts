// Type definitions for ospec
// Project: https://github.com/MithrilJS/mithril.js
// Definitions by: Mike Linkovich <https://github.com/spacejack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace Ospec {
	type Assertion = (description: string) => void;

	interface Spy<A extends any[], R> {
		(...args: A): R;
		callCount: number;
		args: A[];
	}

	interface Test {
		equals(other: any): Assertion;
		notEquals(other: any): Assertion;
		deepEquals(other: any): Assertion;
		notDeepEquals(other: any): Assertion;
	}

	interface Static {
		(value: any): Test;
		(name: string, fn: () => void | Promise<void>): void;
		(name: string, fn: (done: (err?: Error) => void, timeout: (delay: number) => void) => void): void;
		spec(name: string, fn: () => void): void;
		before(fn: () => void): void;
		beforeEach(fn: () => void): void;
		after(fn: () => void): void;
		afterEach(fn: () => void): void;
		spy<A extends any[] = any[]>(): Spy<A, undefined>;
		spy<A extends any[], R>(fn: (...args: A) => R): Spy<A, R>;
		timeout(delay: number): void;
		run(): void;
		"new"(): Static;
	}
}

declare const Ospec: Ospec.Static;

export = Ospec;
