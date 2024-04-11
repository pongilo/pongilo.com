export default function Teste() {
  function handleOnClick() {
    navigator.vibrate(200);
  }

  return (
    <button type="button" onClick={handleOnClick}>
      Vibrar
    </button>
  );
}
