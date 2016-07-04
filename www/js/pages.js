var FormPages = Backbone.View.extend({
    el: $('.form-pages'),
    events: {
    	"change label.fails input[type='radio']" : "showInputPage_1",
    	"change .determine select" : "showTextareaPage_2",
    	"change .payback-equity input[type='radio']" : "showPaybackEquityFieldsPage_2",
    	"change label.any-transaction input[type='radio']" : "showRadioBlockPage_6",
    	"change label.oper-history input[type='radio']" : "showRadioBlockPageHistory_7",
    	"change label.prev-sold input[type='radio']" : "showRadioBlockPagePrevSold_7",
    	"focusout .how-sold input[type='text']" : "showInputPage_7",
    	"change label.out-secur input[type='radio']" : "showOutSecurBlockPage_8",
    	"change label.any-exempt-offer input[type='radio']" : "showAnyExemptOfferBlockPage_8",
    	"change label.any-outst-securit input[type='radio']" : "showAnyOutstSecuritBlockPage_8",
    	"change label.other-rights input[type='radio']" : "showOtherRightsBlockPage_8",
    	"change .have-cik input[type='checkbox']" : "showInputPage_10",
        "click span.show-input": "showInputPage_FullText", // Обработчик клика для показа инпутов
        "focusout input.inserted-input" : "showSpanWithValue_FullText",
    },

    // show suitable radio block
	showRadioBlock: function($this) {
		var value = parseInt($this.val()),
			target = $this.closest('label').data('target');

		var $suitFieldsBlock = $('[data-radio-block-' + target + '="' + value + '"]').length ?
			$('[data-radio-block-' + target + '="' + value + '"]') :
			$('[data-radio-block-' + target + ']');

		if ($('[data-radio-block-' + target + '="' + value + '"]').length > 0) {

			$suitFieldsBlock.fadeIn();
		} else {

			$suitFieldsBlock.fadeOut();
		}
	},
    // for page_1
    showInputPage_1: function (event) {
    	var value = parseInt($(event.target).val());

		var $failInput = $('[data-radio-fail="' + value + '"]').length 
			? $('[data-radio-fail="' + value + '"]')
			: $('[data-radio-fail]');

		if ($('[data-radio-fail="' + value + '"]').length > 0) {
			$failInput.fadeIn();
		} else {
			$failInput.fadeOut();
		}
    },

    // for page_2
    showTextareaPage_2: function (event) {
    	if (parseInt($(event.target).find('option:selected').val()) == 5) {
			$('.wrap-textarea').fadeIn();
		} else {
			$('.wrap-textarea').fadeOut();
		}
    },
    showPaybackEquityFieldsPage_2: function (event) {
    	var value = parseInt($(event.target).val());

		$suitFields = $('[data-radio="' + value + '"] input');
		$allFields = $('[data-radio] input');

		if ($suitFields.length > 0) {
			$allFields.closest('.form-group').hide();
			$suitFields.closest('.form-group').fadeIn();
			$('.radio-check-fields').fadeIn();
		}
    },

    // for page_6
    showRadioBlockPage_6: function (event) {
    	this.showRadioBlock($(event.target));
    },

    // for page_7
    showRadioBlockPageHistory_7: function (event) {
    	this.showRadioBlock($(event.target));
    },
     showRadioBlockPagePrevSold_7: function (event) {
    	this.showRadioBlock($(event.target));
    },

    showInputPage_7: function (event) {
    	if (parseInt($(event.target).val()) > 100) {
			$('[data-input-more-value]').fadeIn();
		} else {
			$('[data-input-more-value]').fadeOut();
		}
    },

    // for page_8
    showOutSecurBlockPage_8: function (event) {
    	this.showRadioBlock($(event.target));
    },
    showAnyExemptOfferBlockPage_8: function (event) {
    	this.showRadioBlock($(event.target));
    },
    showAnyOutstSecuritBlockPage_8: function (event) {
    	this.showRadioBlock($(event.target));
    },
    showOtherRightsBlockPage_8: function (event) {
    	this.showRadioBlock($(event.target));
    },

    // for page_10
    showInputPage_10: function (event) {
    	$('.already-cik-fields').toggleClass('hide');
    },


    // for full-text
    showInputPage_FullText: function (event) {
        if ($(event.target).hasClass('noactive')) {
			return false;
		}

		var $this = $(event.target),
			inputId = $this.data('input-id'),
			$input = $('input' + '#' + inputId);

		$this.hide();

		if ($input.length == 0) {
			$input = $('<input type="text" id="' + inputId + '" name="' + inputId + '" class="inserted-input"/>');
			$this.after($input);
		}

		$input.fadeIn().focus();
    },

    showSpanWithValue_FullText: function (event) {
    	var $this = $(event.target),
			value = $this.val(),
			inputId = $this.attr('id'),
			$span = $('[data-input-id="' + inputId + '"]');

		if (value !== '') {
			$span.text(value);
		}

		$this.hide();
		$span.fadeIn();
    }
});



$(document).ready(function(){
	var formPages = new FormPages();
});
