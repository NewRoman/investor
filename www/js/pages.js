$(document).ready(function(){

	// show suitable radio block
	function showRadioBlock($this) {
		var value = parseInt($this.val()),
			target = $this.data('target');

		var $suitFieldsBlock = $('[data-radio-block-' + target + '="' + value + '"]').length ?
			$('[data-radio-block-' + target + '="' + value + '"]') :
			$('[data-radio-block-' + target + ']');

		if ($('[data-radio-block-' + target + '="' + value + '"]').length > 0) {

			$suitFieldsBlock.fadeIn();
		} else {

			$suitFieldsBlock.fadeOut();
		}
	}


	// page_1 script show input if click Yes radio btn name=fail
	$(document).on('change', 'input[name="fails"]', function(){
		var value = parseInt($(this).val());

		var $failInput = $('[data-radio-fail="' + value + '"]').length 
			? $('[data-radio-fail="' + value + '"]')
			: $('[data-radio-fail]');

		if ($('[data-radio-fail="' + value + '"]').length > 0) {
			$failInput.fadeIn();
		} else {
			$failInput.fadeOut();
		}
	});



	// page_2 script
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



	// page_6 script
	$(document).on('change', 'input[name="any_transaction"]', function(){

		showRadioBlock($(this));
	});

	// page_7 script
	$(document).on('change', 'input[name="oper_history"]', function(){

		showRadioBlock($(this));
	});

	$(document).on('change', 'input[name="prev_sold"]', function(){

		showRadioBlock($(this));
	});

	$(document).on('focusout', 'input[name="how_sold"]', function(){
		if (parseInt($(this).val()) > 100) {
			$('[data-input-more-value]').fadeIn();
		} else {
			$('[data-input-more-value]').fadeOut();
		}
	});


	// script for page_8
	$(document).on('change', 'input[name="out_secur"]', function(){

		showRadioBlock($(this));
	});
	$(document).on('change', 'input[name="any_exempt_offer"]', function(){

		showRadioBlock($(this));
	});
	$(document).on('change', 'input[name="any_outst_securit"]', function(){

		showRadioBlock($(this));
	});
	$(document).on('change', 'input[name="other_rights"]', function(){

		showRadioBlock($(this));
	});

	// script for page_10
	$(document).on('change', '#have_cik', function(){
		$('.already-cik-fields').toggleClass('hide');
	});
});