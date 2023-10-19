export const scrollToComponent = (target: string) =>
  document
    .getElementsByClassName(target)[0]
    ?.scrollIntoView({ behavior: 'smooth' });
