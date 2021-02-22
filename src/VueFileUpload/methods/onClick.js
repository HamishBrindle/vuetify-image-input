export default function(event) {
	event.preventDefault();
	let input = document.createElement('input');
	let {onChange, $parent} = this;
	input.setAttribute('type', 'file');
	input.setAttribute('accept', $parent.accept.join(','));
	input.addEventListener('change', onChange);
	input.click();
}
