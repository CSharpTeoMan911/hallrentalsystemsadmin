import { Render_Page_Navbar } from "./Bootstrap_Elements"; 

function Item_Search() {
  console.log("!!! SEARCHING !!!");
}

export default function Handler() {
  let page_index = 0;
  let action_button = undefined;
  if (window.location.pathname === "/") {
    action_button = "Add hall +";
  } else if (window.location.pathname === "/pictures") {
    action_button = "Add picture +";
  } else if (window.location.pathname === "/logs") {
    action_button = "Add hall +";
  }

  return (
   <Render_Page_Navbar page_index={page_index}/>
  );
}
