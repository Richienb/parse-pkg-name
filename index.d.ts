interface ParsedPackage {
    /**
     * The organisation scope the package is in.
    */
    org: string

    /**
    * The name of the package.
    */
    name: string
}

declare const parsePackageName: {
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
    (name: string): ParsedPackage

    /**
    * Convert a parsed package name back to it's string form.
    * @param data The parsed package data.
    * @example
    * ```
    * const parsePackageName = require("parse-pkg-name");
    *
    * parsePackageName.from({ org: undefined, name: "a" })
    * //=> "a"
    *
    * parsePackageName.from({ org: "a", name: "b" })
    * //=> "@a/b"
    * ```
    */
    from(data: ParsedPackage): string
}

export = parsePackageName
