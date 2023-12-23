export default function Render_Search_Button() {
  function Item_Search() {
    console.log("!!! SEARCHING !!!");
  }
  return (
    <button
      className="btn btn-outline-success"
      onClick={() => {
        Item_Search();
      }}
    >
      Search
    </button>
  );
}
