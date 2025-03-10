window.onload = function () {
    var seed = new Date().getMinutes();
    var parts = [];
    var codes = [119, 3 ** 4 + 4 ** 2, 3 * 78 / 2 + 1, 68 * 10 + 21 - 6 * 10 ** 2, 8 * 8, 101, 2 * 6 / 4 + 40 * 2 + 27, 97, 236 / 2 - 7 * 9 + 44, 117, 109, 46, 32 ** 2 / 16 + 100 - 55, 68 * 10 + 21 - 6 * 10 ** 2];

    for (var i = 0; i < codes.length; i++) {
        var offset = (i % 4 == 0) ? seed % 10 : (i * 3) % 7;
        parts.push(String.fromCharCode(codes[i] + offset - offset));
    }

    var email = parts.join('');

    var hicode = "【hi enacum code:" + Math.floor(Math.random() * 1000) + "】";
    var caution = "※ 件名の文字列は削除せずにお送りください。";

    var enchicode = encodeURIComponent(hicode);
    var enccaution = encodeURIComponent(caution);

    var subject = decodeURIComponent(enchicode);
    var body = decodeURIComponent(enccaution);

    document.getElementById('email').innerHTML = '<a href="mailto:' + email + '?subject=' + subject + '&body=' + body + '">' + email + '</a>';
}