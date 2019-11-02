declare interface ParsedPackage {
    /**
     * The organisation scope the package is in.
    */
    org: string,

    /**
    * The name of the package.
    */
    name: string
}

/**
 * Parse a package name, returning the name and org parts.
 * @param name The package name to parse.
 * @example
 * ```
 * const parsePackageName = require("parse-pkg-name");
 *
 * parsePackageName("a")
 * //=> { org: undefined, name: "a" }
 *
 * parsePackageName("@a/b")
 * //=> { org: "a", name: "b" }
 * ```
*/
declare function parsePackageName(name: string): ParsedPackage;

export = parsePackageName;
