;(function ($) {
	"use strict";

	$(document).ready(function () {

		$('.ba-product-content').hide();

		$('.ba-tab-list').find('a').on('click', function(e){
			e.preventDefault();

			$('.ba-tab-list__item').find('.active').removeClass('active');
			$(this).addClass('active');
			$(this.hash).show().siblings().hide();
		}).first().click();


	});

})(jQuery);
