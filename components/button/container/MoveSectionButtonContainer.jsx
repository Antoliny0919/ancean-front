export default function MoveSectionButtonContainer({
  children,
  buttonComponent,
  reference,
  ...rest
}) {
  const onScrollSection = () => {
    reference.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {buttonComponent({
        children: children,
        props: { onClick: onScrollSection },
        ...rest,
      })}
    </>
  );
}
