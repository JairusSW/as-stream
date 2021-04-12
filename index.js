const fs = require("fs");
const loader = require("@assemblyscript/loader");
const EventEmitter = require("events")
const { Readable, Writable, Duplex } = require('stream')

const consoleImports = require('as-console')

const asConsole = new consoleImports()

const imports = {
    ...asConsole.wasmImports
}
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);

asConsole.wasmExports = wasmModule.exports

module.exports = wasmModule.exports;

wasmModule.exports.test()