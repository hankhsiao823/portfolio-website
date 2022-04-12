export default function scrollTo(id) {
  let anchor = document.getElementById(id);
  anchor.scrollIntoView({ behavior: "smooth" });
}
