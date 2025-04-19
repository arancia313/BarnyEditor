class Extension {
    getInfo() {
        return {
            id: "extension",
            name: "Extension",
            blocks: [
                {
                    opcode: "block",
                    blocktype: "command",
                    text: "Hello world!"
                }
            ]
        }
    }

    block() {
        console.log("Hello world!")
    }
}

Scratch.extensions.register(new Extension())