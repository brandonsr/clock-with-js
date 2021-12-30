if("serviceWorker" in navigator){
    console.log("existe")
    navigator.serviceWorker.register("./sw.js")
}