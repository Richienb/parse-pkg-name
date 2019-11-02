import test from "ava"
import parsePackageName from "."

test("main", (t) => {
    t.deepEqual(parsePackageName("a"), { org: undefined, name: "a" })
    t.deepEqual(parsePackageName("@a/b"), { org: "a", name: "b" })
})
