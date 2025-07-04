export const usePictureUrl = () => {
  const images = import.meta.glob('../assets/img/pictures/*', {
    eager: true,
    as: 'url',
  });
  return (name: string) => images[`../assets/img/pictures/${name}`];
};
