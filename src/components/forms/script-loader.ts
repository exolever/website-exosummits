export function loadScript(url: string) {
  const scriptElement=document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = url;
  document.head.appendChild(scriptElement);
}

