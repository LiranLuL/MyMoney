export { Spinner };

function Spinner() {
  return (
    <div style={{ position: "absolute", top: "47vh", left: "47vw" }} className="text-center text-dark p-3">
      <span className="spinner-border spinner-border-lg align-center "></span>
    </div>
  );
}
