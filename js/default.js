$(function () {
    let head = $('head');

    head.append("<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\">\n");
    head.append("<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/stylesheet.css\">");
    head.append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">");

    $("header").load("/common/header.html");
    $("footer").load("/common/footer.html");
});