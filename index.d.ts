// Type definitions for ospec
// Project: https://github.com/MithrilJS/mithril.js
// Definitions by: Mike Linkovich <https://github.com/spacejack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace Ospec {
	type Assertion = (value: any) => (description: string) => void;

	interface Spy {
		(...values: any[]): void;
		callCount: number;
		args: any[];
	}

	interface Test {
		equals: Assertion;
		notEquals: Assertion;
		deepEquals: Assertion;
	}

	interface Static {
		(value: any): Test;
		(name: string, f: (done: () => void) => void): void;
		spec(name: string, f: () => void): void;
		before(f: () => void): void;
		beforeEach(f: () => void): void;
		after(f: () => void): void;
		afterEach(f: () => void): void;
		spy(f?: (...args: []) => any): Spy;
		timeout(delay: number): void;
		run(): void;
		new: () => Static;
	}
}

declare const Ospec: Ospec.Static;

export = Ospec;
