function render(data) {
    let html = "<p><i>You: </i> " + data +
        "</p>";
    $('#comments').append(html);
}

$(document).ready(function() {
    $('#add-comment').click(function() {
        let comment = $('#comment-body').val();
        render(comment);
        document.getElementById('comment-body').value = "";
    })
});