const express = require('express');

const server = express()

server.listen(4000, () => {
    console.log("\n** server up and running on prt 4k**")
})