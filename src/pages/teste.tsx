export default function Teste() {
  function handleOnClick() {
    window.navigator.vibrate(200);
    window.navigator.vibrate([200]);
  }

  return (
    <button type="button" onClick={handleOnClick}>
      Vibrar
    </button>
  );
}
