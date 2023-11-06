import Button from '../../common/Button';

export default function AuthButtonContainer({
  children,
  buttonLogic,
  width = 8,
}) {
  return (
    <Button buttonLogic={buttonLogic} fontSize={14} width={width}>
      {children}
    </Button>
  );
}
