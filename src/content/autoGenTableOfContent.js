function autoGenTableOfContent() {
  $("#content-container>h2").each((i) => {
    $("#content-container>h2")[i].id = "AT" + i;
    $("#tableof-content").append(
      "<li><a onclick='smoothScroll(\"#AT" +
        i +
        "\")'>" +
        $("#content-container>h2")[i].innerText +
        "</a></li>",
    );
  });
}
function smoothScroll(target) {
  $.smoothScroll({
    scrollElement: $("#main-content"),
    scrollTarget: $(target),
    offset: -80,
  });
}

autoGenTableOfContent();
