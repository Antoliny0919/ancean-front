import Image from 'next/image';

export default function ImageTool({ url }) {
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div className="ce-block__content">
      <div className="cdx-block image-tool image-tool-filled">
        <div className="image-tool__image">
          <Image
            loader={myLoader}
            className="image-tool__image-picture"
            src={url}
            alt="no-img"
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
