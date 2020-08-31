$('.startedscreen').hide()
$('.accountscreen').hide()
$('.loginContainer').hide()

$('#gettingStratedBtn').click(function(){
    $('.splashscreen').hide()
    $('.startedscreen').show()
})

$(".signupBtn").click(function(){
    $('.startedscreen').hide()
    $('.accountscreen').show()
})

$('.signInBtn').click(function(){
    $('.signupContainer').hide()
    $('.loginContainer').show()
})

$('.loginBtn').click(function(){
    $('.signupContainer').show()
    $('.loginContainer').hide()
})