import OceanWaveButton from '../../button/OceanWaveButton';

export default function MoveSectionButtonContainer({
  children,
  rgb,
  waveOption,
  reference,
}) {
  const onScrollSection = () => {
    reference.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <OceanWaveButton
      rgb={rgb}
      waveOption={waveOption}
      props={{ onClick: onScrollSection }}
    >
      {children}
    </OceanWaveButton>
  );
}
