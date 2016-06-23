$(document).ready(function(){
	$(document).on('change', '#determine', function(){
		if (parseInt($(this).find('option:selected').val()) == 5) {
			$('.wrap-textarea').fadeIn();
		} else {
			$('.wrap-textarea').fadeOut();
		}
	});

	$(document).on('change', 'input[name="payback-equity"]', function(){
		var value = parseInt($(this).val());

		$suitFields = $('[data-radio="' + value + '"]');
		$allFields = $('[data-radio]');

		if ($suitFields.length > 0) {
			$allFields.closest('.form-group').hide();
			$suitFields.closest('.form-group').fadeIn();
			$('.radio-check-fields').fadeIn();
		}
	});
});