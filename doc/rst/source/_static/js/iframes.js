document.addEventListener('DOMContentLoaded', function(event) { 
    iframes = document.getElementsByTagName('iframe');
    for(var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        (function(iframe) {
            iframe.onload = function(e) {
                var height = iframe.contentDocument.body.scrollHeight;
                iframe.style.height = (height+40)+'px';
            };
        })(iframe);
    }
});
