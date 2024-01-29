import Image from '../../common/Image';

export default function ImageTool({ url }) {
  return (
    <div className="ce-block__content">
      <div className="cdx-block image-tool image-tool-filled">
        <div className="image-tool__image">
          <Image
            src={url}
            props={{ className: 'image-tool__image-picture' }}
            style={{ width: 'auto', height: 'auto' }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
