const ubidotsService = require("./ubidotsServiceExample");

ubidotsService.getDataSources()
    .then((result) => {
        console.log(result);
    });