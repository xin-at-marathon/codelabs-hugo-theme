import $ from 'jquery'

$(function () {
    let steps = []
    $('.steps li').each(function (index: number) {
        const step = $(this).text()
        if (step !== '菜谱一览' && step !== '菜谱总结') steps.push(step)
    })
    const e = $('#cookbook-begin')
    e.attr(
        'src',
        e.attr('src') + '&steps=' + encodeURIComponent(JSON.stringify(steps))
    )

    const observer = new MutationObserver(function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if ($(mutation.target).attr('selected')) {
                if ($(mutation.target).text() == '菜谱一览') {
                    iframeRefresh('#cookbook-begin')
                }
                if ($(mutation.target).text() == '菜谱总结') {
                    iframeRefresh('#cookbook-end')
                }
            }
        }
    })

    $('.steps li').each(function (index: number) {
        observer.observe($(this).get(0), {
            attributes: true
        })
    })
})

function iframeRefresh(e) {
    var c = $(e)
    c.attr('src', c.attr('src'))
}
