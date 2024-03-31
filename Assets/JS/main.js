/* menu */
$("#menuToggler").click(() => {
    $("#menuList").toggleClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menuList").toggleClass("max-lg:top-full")
})

/* date */
let date = new Date()
setInterval(() => {
    date = new Date()
    $("#hours").html(`${date.getHours()}`)
    $("#minutes").html(`${date.getMinutes()}`)
    $("#seconds").html(`${date.getSeconds()}`)
    $("#date").html(`${date.toLocaleDateString("ru" ,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`)
}, 1000);