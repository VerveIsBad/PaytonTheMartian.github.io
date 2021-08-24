function toggleAboutMe() {
    if (document.getElementById('about-me-text').style.display == 'none') {
        document.getElementById('about-me-text').style.display = 'block';
    } else {
        document.getElementById('about-me-text').style.display = 'none';
    }
}


function doLoadThings() {
    document.getElementById('secret-btn').addEventListener('click', function() {
        window.location.pathname = '/lab/experiments/secret-button/';
    });
}
