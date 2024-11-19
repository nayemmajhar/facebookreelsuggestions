document.body.onload = () => {
    document.addEventListener("scroll", function (e) {
        // Hide Reels and short videos suggestions
        for (let fbsugs of window.document.querySelectorAll('span[dir="auto"]')) {
            if(fbsugs.innerText === 'Suggested for you' || fbsugs.innerText === 'Reels and short videos'){
                fbsugs.closest('div[aria-labelledby]').remove()
            }
        }

        // Hide Suggested for you with Follow button
        for (let fbfollow of window.document.querySelectorAll('div[role="button"]')) {
            // child span has text 'Follow'
            if(fbfollow.querySelector('span') && fbfollow.querySelector('span').innerText === 'Follow'){
                fbfollow.closest('div.x1lliihq').remove()
                
            }
        }
    })
}
