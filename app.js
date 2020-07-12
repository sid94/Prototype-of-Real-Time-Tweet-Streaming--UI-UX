function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    setInterval(function(){
        let data = $("#batchInsert").html()
        $(".wrapper").prepend( $(data).hide().delay(100).show('slow') )
        //$(".wrapper").prepend(data)
        //$(".tweet-container").animate({height: auto}, 5000, function(){console.log('Yammie!')})
        
    },5000)
});
