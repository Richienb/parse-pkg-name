"use strict"

const parseName = require("parse-package-name")
const { default: ow } = require("ow")
const NamedRegExp = require("named-regexp-groups") // TODO: Remove `named-regexp-groups` in favour of native methods when NodeJS 8.x support ends (December 2019)

module.exports = (name) => {
    ow(name, ow.string)
    const { name: packageName } = parseName(name)
    const matches = packageName.match(new NamedRegExp("(@(?<org>.+)/)?(?<name>.+)"))
    return {
        org: matches.groups.org,
        name: matches.groups.name,
    }
}

module.exports.from = ({ org, name }) => {
    ow(org, ow.any(ow.string, ow.undefined))
    ow(name, ow.string)
    return org ? `@${org}/${name}` : name
}
