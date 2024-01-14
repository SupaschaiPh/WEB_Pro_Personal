function autoGenTableOfContent() {
    $("#content-container>h2").each(
        (i) => {
            $("#content-container>h2")[i].id="AT"+i
            $("#tableof-content").append(
                "<li><a href='#AT"+i+"'>" +
                $("#content-container>h2")[i].innerText
                + "</a></li>"
            )
        }
    )
}
autoGenTableOfContent()