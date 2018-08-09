const ubidotsService = require("./ubidotsServiceExample");
const Rx = require("rxjs");

Rx.Observable.defer(() => ubidotsService.getDataSources())
    .subscribe(
        (result) => { console.log(result) },
        (error) => { console.log(error) },
        () => { console.log("Finished!!") }
    )