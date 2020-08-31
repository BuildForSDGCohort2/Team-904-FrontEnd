$('.startedscreen').hide()
$('.accountscreen').hide()
$('#gettingStratedBtn').click(function(){
    $('.splashscreen').hide()
    $('.startedscreen').show()
})

$(".signupBtn").click(function(){
    $('.startedscreen').hide()
    $('.accountscreen').show()
})

$('.signInBtn').click(function(){
    alert('sign in button')
})