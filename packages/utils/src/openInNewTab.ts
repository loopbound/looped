export let openInNewTab = (url: string) => {
  if (typeof window == 'undefined') return;

  // @ts-ignore
  window.open(url, '_blank').focus();
};
