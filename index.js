"use strict"

const parseName = require("parse-package-name")
const { default: ow } = require("ow")

module.exports = (name) => {
    ow(name, ow.string)

    const { name: packageName } = parseName(name)
    const matches = packageName.match(/(?:@(?<org>.+)\/)?(?<name>.+)/)

    return {
        org: matches.groups.org,
        name: matches.groups.name,
    }
}

module.exports.from = ({ org, name }) => {
    ow(org, ow.optional.string)
    ow(name, ow.string)

    return org ? `@${org}/${name}` : name
}
