(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var btn = document.getElementById('sendBtn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var name = (document.getElementById('contact-name') || {}).value || '';
    var email = (document.getElementById('contact-email') || {}).value || '';
    var msg = (document.getElementById('contact-message') || {}).value || '';

    var to = 'reachme@aibigeni.com';
    var cc = 'support@aibigeni.com';
    var subject = 'AIBIGeni inquiry from ' + (name.trim() || 'Website Visitor');
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + msg;

    var mailto = 'mailto:' + to + '?cc=' + encodeURIComponent(cc)
      + '&subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  });
})();