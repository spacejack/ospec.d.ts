// Type definitions for ospec
// Project: https://github.com/MithrilJS/mithril.js
// Definitions by: Mike Linkovich <https://github.com/spacejack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace Ospec {
	type Assertion = (description: string) => void;

	interface Spy<A extends any[], R> {
		(...args: A): R;
		/** The number of times the function has been called */
		callCount: number;
		/** The arguments that were passed to the function in the last time it was called */
		args: A[];
	}

	interface Test {
		/** Asserts that two values are strictly equal */
		equals(other: any): Assertion;
		/** Asserts that two values are strictly not equal */
		notEquals(other: any): Assertion;
		/** Asserts that two values are recursively equal */
		deepEquals(other: any): Assertion;
		/** Asserts that two values are not recursively equal */
		notDeepEquals(other: any): Assertion;
	}

	interface Results {
		pass: boolean | null;
		error: Error;
		testError: Error;
		message: string;
	}

	interface Static {
		/** Starts an assertion */
		(value: any): Test;
		/** Defines a test */
		(name: string, fn: () => void | Promise<void>): void;
		/** Defines a test */
		(name: string, fn: (done: (err?: Error) => void, timeout: (delay: number) => void) => void): void;
		/** Defines a group of tests */
		spec(name: string, fn: () => void): void;
		/** Defines code to be run at the beginning of a test group */
		before(fn: () => void): void;
		/** Defines code to be run before each test in a group */
		beforeEach(fn: () => void): void;
		/** Defines code to be run at the end of a test group */
		after(fn: () => void): void;
		/** Defines code to be run after each test in a group */
		afterEach(fn: () => void): void;
		/** Returns a function that records the number of times it gets called, and its arguments */
		spy<A extends any[] = any[]>(): Spy<A, undefined>;
		/** Returns a function that records the number of times it gets called, and its arguments */
		spy<A extends any[], R>(fn: (...args: A) => R): Spy<A, R>;
		/** Amount of time (in milliseconds) to wait until bailing out of a test */
		timeout(delay: number): void;
		/** Configure the default amount of time (in milliseconds) to wait until bailing out of tests */
		specTimeout(delay: number): void;
		/** Runs the test suite */
		run(fn?: (results: Results) => void): void;
		/** Creates a new instance of ospec */
		"new"(): Static;
	}
}

declare const Ospec: Ospec.Static;

export = Ospec;
