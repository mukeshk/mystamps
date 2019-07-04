//
// IMPORTANT:
// You must update ResourceUrl.RESOURCES_VERSION each time whenever you're modified this file!
//

function initPage(ajax, importSeriesSaleUrl, csrfHeaderName, csrfTokenValue) {
	$('#import-series-sale-form').on('submit', function sendImportRequest(event) {
		event.preventDefault(); // DONE
		
		var url = $('#series-sale-url').val(); // DONE
		if (url == null) {
			return;
		}
		
		disableImportSeriesSaleForm(true); // DONE
		hideFieldErrors();
		hideImportFailedMessage(); // DONE
		
		var data = JSON.stringify({  // DONE
			url: url // DONE
		}); // DONE
		var headers = {};  // DONE
		headers[csrfHeaderName] = csrfTokenValue;  // DONE
		
		ajax({  // DONE
			url: importSeriesSaleUrl,  // DONE
			method: 'POST', // DONE
			contentType: 'application/json; charset=UTF-8',  // DONE
			headers: headers, // DONE
			data: data // DONE
		
		}).done(function populateAddSeriesSaleForm(result) {
			var urlField = $('#series-sale-url');
			var url = urlField.val();
			urlField.val('');
			
			populateTransactionDateWithTodayDate(); // TODO
			if (result.sellerId != null) {
				$('#seller').val(result.sellerId);
			}
			$('#url').val(url);
			$('#price').val(result.price);
			$('#currency').val(result.currency);
		
		}).fail(function showErrorMessages(jqXHR) {
			var status = jqXHR == null ? 500 : jqXHR.status || 500;
			switch (status) {
				case 400:
					var response = $.parseJSON(jqXHR.responseText);
					showImportUrlFieldErrors(response);
					break;
				default:
					$('#series-sale-url').val('');
					showImportFailedMessage();
					break;
			}
			
		}).always(function enableSubmitButton() {
			disableImportSeriesSaleForm(false);
		});
	});
}

function disableImportSeriesSaleForm(isDisabled) {
	$('#series-sale-submit-btn').prop('disabled', isDisabled);
	$('#series-sale-url').prop('disabled', isDisabled);
}

function showImportUrlFieldErrors(response) {
	var fieldErrors = response.fieldErrors.url.join(', ');
	$('#series-sale-url\\.errors').text(fieldErrors).removeClass('hidden');
	$('#import-series-sale-form').addClass('has-error');
}

function hideFieldErrors() {
	$('#series-sale-url\\.errors').addClass('hidden');
	$('#import-series-sale-form').removeClass('has-error')
}

function showImportFailedMessage() {
	$('#import-series-sale-failed-msg').removeClass('hidden');
}

function hideImportFailedMessage() {
	$('#import-series-sale-failed-msg').addClass('hidden');
}

function populateTransactionDateWithTodayDate() {
	var today = DateUtils.formatDateToDdMmYyyy(new Date());
	$('#date').val(today);
}
