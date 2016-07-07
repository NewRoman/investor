var FormPages = Backbone.View.extend({
    el: $('.form-pages'),
    events: {
        "change .blockTriggerRadio" : "showBlock",

    	"change .determine select" : "showSecurityTextarea",

    	"focusout .how-sold input[type='text']" : "showSoldWithinPreceedingFields",

        "change .have-cik [type='checkbox']" : "showAlreadyCikFields",

        "click span.show-input": "showInputPage_FullText",
        
        "focusout input.inserted-input" : "showSpanWithValue_FullText",
    },

    // show suitable radio block
    showBlock: function(event) {
        let [hideBlocks, displayBlock] = event.target.dataset.target.split(':');
        $(hideBlocks).css('display', 'none');
        $(displayBlock).css('display', 'block');
    },

    // for page_2
    showSecurityTextarea: function (event) {
        if (parseInt($(event.target).find('option:selected').val()) == 5) {
            $('.wrap-textarea').fadeIn();
        } else {
            $('.wrap-textarea').fadeOut();
        }
    },

    // for page_7
    showSoldWithinPreceedingFields: function (event) {
    	if (parseInt($(event.target).val()) > 100) {
			$('.sold_within_the_preceeding_12_month').fadeIn();
		} else {
			$('.sold_within_the_preceeding_12_month').fadeOut();
		}
    },

    // for page_10
    showAlreadyCikFields: function (event) {
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
