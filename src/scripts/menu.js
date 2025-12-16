const menu = document.querySelector(".menu");

menu?.addEventListener("click", () => {
	const isExpanded =
	menu.getAttribute("area-expanded") === "true";
	menu.setAttribute("area-expanded", `${!isExpanded}`);
});
