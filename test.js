import test from "ava"
import parsePackageName from "."

test("parse", (t) => {
    t.deepEqual(parsePackageName("a"), { org: undefined, name: "a" })
    t.deepEqual(parsePackageName("@a/b"), { org: "a", name: "b" })
})

test("stringify", (t) => {
    t.is(parsePackageName.from({ org: undefined, name: "a" }), "a")
    t.is(parsePackageName.from({ org: "a", name: "b" }), "@a/b")
})
