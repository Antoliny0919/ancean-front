import Image from 'next/image';

export default function NextImage({ src, props = {} }) {
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <Image
      loader={myLoader}
      src={src}
      alt="no-img"
      width={0}
      height={0}
      // style={{ width: 'auto', height: 'auto' }}
      {...props}
    ></Image>
  );
}
