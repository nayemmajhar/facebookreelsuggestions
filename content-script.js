document.body.onload = () => {
    document.addEventListener("scroll", function (e) {
        for (let fbsugs of window.document.querySelectorAll('span[dir="auto"]')) {
            if(fbsugs.innerText === 'Suggested for you' || fbsugs.innerText === 'Reels and short videos'){
                fbsugs.closest('div[aria-labelledby]').remove()
            }
        }
    })
}
