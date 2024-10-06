window.addEventListener('resize', function() {
    const iframe = document.querySelector('iframe');
    iframe.style.height = window.innerHeight + 'px';
    iframe.style.width = window.innerWidth + 'px';
  });
