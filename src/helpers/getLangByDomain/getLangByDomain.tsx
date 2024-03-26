export const getLangByDomain = () => {
  const currentDomain = window.location.hostname.split('.');
  const domainCountry = currentDomain[currentDomain.length - 1];
  return domainCountry !== 'localhost' && domainCountry !== 'uk'
    ? domainCountry
    : 'en';
};
