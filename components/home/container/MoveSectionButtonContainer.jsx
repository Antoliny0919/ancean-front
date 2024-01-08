import ThreeDimensionalButton from '../../button/ThreeDimensionalButton';

export default function MoveSectionButtonContainer({
  children,
  color,
  shadow,
  hoverShadow,
  reference,
}) {
  const onScrollSection = () => {
    console.log(reference);
    reference.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThreeDimensionalButton
      color={color}
      shadow={shadow}
      hoverShadow={hoverShadow}
      props={{ onClick: onScrollSection }}
    >
      {children}
    </ThreeDimensionalButton>
  );
}
