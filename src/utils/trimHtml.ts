export default function trimHtml(str) {
    return str
        .replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/gm, ' ')
        .replace(/&#8217;/gm, '’')
        .replace(/&#8211;/gm, '–')

}
