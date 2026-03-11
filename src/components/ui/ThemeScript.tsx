export function ThemeScript() {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('evilshadow-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.add('no-transition');
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            document.documentElement.classList.remove('no-transition');
          });
        });
      } catch(e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
