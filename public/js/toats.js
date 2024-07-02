//  TOASTS 
function closeToast(event) {
	let toastClose = event.target;
	toastClose.closest('.toast').remove();
}
function closeToastDuration() {
	if (document.querySelectorAll('.toast')) {
		let toasts = document.querySelectorAll('.toast');
		toasts.forEach(toast => {
			setTimeout(() => {
				toast.remove();
			}, 10000);
		});
	}
}
closeToastDuration();
if (document.getElementById('toast-container')) {
	let mutationObserver = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			closeToastDuration();
		});
	});
	mutationObserver.observe(document.getElementById('toast-container'), {
		attributes: true,
		characterData: true,
		childList: true,
		subtree: true,
		attributeOldValue: true,
		characterDataOldValue: true
	});
}