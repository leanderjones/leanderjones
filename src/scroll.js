$(document).on("scroll", function () {})

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
})

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
})

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fade")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible")
          } else {
            $(tag).removeClass("visible")
          }
    }
})
    