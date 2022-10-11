let modal = document.querySelector(".lightbox-modal")
let photo = modal.querySelector(".lightbox-image")
let caption = modal.querySelector(".lightbox-caption")

function openLightbox(src, alt) {
	if (modal === null || photo === null || caption === null) {
		return
	}
	photo.src = src || ""
	photo.alt = alt || ""
	caption.textContent = alt || ""
	modal.classList.remove("hidden")
}

function closeLightbox() {
	if (modal === null || photo === null || caption === null) {
		return
	}
	photo.src = ""
	photo.alt = null
	caption.textContent = ""
	modal.classList.add("hidden")
}