(function () {
	'use strict';

	window.PureJSCarousel = function (settings) {
		this.carousel = document.querySelector(settings.carousel);
		if (!this.carousel) return;
		this.slides = this.carousel.querySelectorAll(settings.slide);
		this.btnNext = null;
		this.btnPrev = null;
		this.activeIndex = 0;
		this.speed = 400;
		this.delay = 0;
		this.maxIndex = null;
		this.isEnabled = null;
		this.build();
	};

	PureJSCarousel.prototype.build = function () {
		var _ = this,
			i;

		_.maxIndex = 0;
		_.isEnabled = 1;

		_.carousel.className += ' purejscarousel';

		//create slides container
		_.slidesContainer = document.createElement('div');
		_.slides[0].insertAdjacentElement('beforebegin', _.slidesContainer);
		_.slidesContainer.className += ' purejscarousel-slides-container';

		_.slidesContainer.style.marginLeft = -(_.slides[0].offsetWidth * _.slides.length) + 'px';
		_.slidesContainer.style.width = _.slides[0].offsetWidth * _.slides.length * 3 + 'px';

		_.maxIndex = Math.ceil(_.slidesContainer.offsetWidth / _.carousel.offsetWidth / 3) - 1;

		//create carousel btn-prev

		_.btnPrev = document.createElement('div');
		_.btnPrev.setAttribute('class', '');
		_.btnPrev.innerHTML = '<span class="material-icons plusOrMinus2">navigate_before</span>';
		_.btnPrev.setAttribute('data-is-native', 0);
		_.slides[0].insertAdjacentElement('beforebegin', _.btnPrev);
		_.btnPrev.className += ' purejscarousel-btn purejscarousel-btn-prev';
		if (window.addEventListener) _.btnPrev.addEventListener('click', () => _.goToPrevSlide());
		else if (window.attachEvent) _.btnPrev.attachEvent('onclick', () => _.goToPrevSlide());
		else _.btnPrev.onclick = () => _.goToPrevSlide();

		_.btnPrev.disabled = _.activeIndex === 0;
		//create carousel btn-next
		_.btnNext = document.createElement('div');
		_.btnNext.innerHTML = '<span class="material-icons plusOrMinus2">navigate_next</span>';
		_.btnNext.setAttribute('class', '');
		_.btnNext.setAttribute('data-is-native', 0);
		_.slides[0].insertAdjacentElement('beforebegin', _.btnNext);

		_.btnNext.className += ' purejscarousel-btn purejscarousel-btn-next';
		if (window.addEventListener) _.btnNext.addEventListener('click', () => _.goToNextSlide());
		else if (window.attachEvent) _.btnNext.attachEvent('onclick', () => _.goToNextSlide());
		else _.btnNext.onclick = () => _.goToNextSlide();
		_.btnNext.disabled = _.activeIndex === _.maxIndex;

		//build slides
		for (i = 0; i < _.slides.length; i++) {
			_.slides[i].className += ' purejscarousel-slide';
			_.slidesContainer.appendChild(_.slides[i]);
		}
		for (i = 0; i < _.slides.length; i++) {
			var slideClone = _.slides[i].cloneNode(true);
			slideClone.className += ' purejscarousel-slide-clone';
			_.slidesContainer.appendChild(slideClone);
		}
		for (i = 0; i < _.slides.length; i++) {
			var slideClone = _.slides[i].cloneNode(true);
			slideClone.className += ' purejscarousel-slide-clone';
			_.slidesContainer.querySelectorAll('.purejscarousel-slide')[i].insertAdjacentElement('beforebegin', slideClone);
		}
	};

	PureJSCarousel.prototype.setControl = function (val) {
		this.btnNext.disabled = !val;
		this.btnPrev.disabled = !val;
	};

	PureJSCarousel.prototype.goToNextSlide = function () {
		var newActiveIndex;
		if (this.btnNext.disabled === false) {
			newActiveIndex = this.activeIndex + 1 > this.maxIndex ? 0 : this.activeIndex + 1;
			this.goToSlide(newActiveIndex, 'next', 'dirBtn');
		}
	};

	PureJSCarousel.prototype.goToPrevSlide = function () {
		var newActiveIndex;
		if (this.btnPrev.disabled === false) {
			newActiveIndex = this.activeIndex - 1 < 0 ? this.maxIndex : this.activeIndex - 1;
			this.goToSlide(newActiveIndex, 'prev', 'dirBtn');
		}
	};

	PureJSCarousel.prototype.goToSlide = function (n, dir, trigger) {
		var _ = this,
			direction = dir ? dir : n > this.activeIndex ? 'next' : 'prev',
			slidesContainerWidth = this.slidesContainer.offsetWidth / 3,
			blockWidth = this.slides[0].offsetWidth * 3, //this.carousel.offsetWidth,
			currentPos = -slidesContainerWidth,
			scrollWidth = trigger === 'dirBtn' ? blockWidth : Math.abs(blockWidth * (this.activeIndex - n)),
			slidesCount,
			newPos;

		slidesCount = scrollWidth / this.slides[0].offsetWidth;
		newPos = direction === 'next' ? currentPos - scrollWidth : currentPos + scrollWidth;

		this.setControl(false);
		if ('transition' in document.body.style)
			this.slidesContainer.style.transition = 'margin-left ' + this.speed + 'ms' + ' linear ' + this.delay + 'ms';
		this.slidesContainer.style.marginLeft = newPos + 'px';
		if ('transition' in document.body.style) this.slidesContainer.addEventListener('transitionend', scrollEnd);
		else scrollEnd();

		function scrollEnd() {
			var i;
			if ('transition' in document.body.style) {
				_.slidesContainer.style.transition = null;
				_.slidesContainer.removeEventListener('transitionend', scrollEnd);
			}
			_.activeIndex = n;

			for (i = 0; i < slidesCount; i++) {
				if (direction === 'next') _.slidesContainer.appendChild(_.slidesContainer.children[0]);
				else _.slidesContainer.children[0].insertAdjacentElement('beforebegin', _.slidesContainer.lastElementChild);
			}
			_.slidesContainer.style.marginLeft = -_.slidesContainer.offsetWidth / 3 + 'px';
			_.setControl(true);
		}
	};

	PureJSCarousel.prototype.destroy = function () {
		var slideClones, i;

		if (this.isEnabled === 1) {
			this.isEnabled = 0;

			this.carousel.className = this.carousel.className.replace(' purejscarousel', '');

			if (this.btnNext.getAttribute('data-is-native').toString() === '1') {
				this.btnNext.className = this.btnNext.className.replace(' purejscarousel-btn purejscarousel-btn-next', '');
			} else {
				this.carousel.removeChild(this.btnNext);
				this.btnNext = null;
			}
			if (this.btnPrev.getAttribute('data-is-native').toString() === '1') {
				this.btnPrev.className = this.btnPrev.className.replace(' purejscarousel-btn purejscarousel-btn-prev', '');
			} else {
				this.carousel.removeChild(this.btnPrev);
				this.btnPrev = null;
			}

			slideClones = this.carousel.querySelectorAll('.purejscarousel-slide-clone');
			for (i = 0; i < slideClones.length; i++) slideClones[i].parentNode.removeChild(slideClones[i]);

			for (i = 0; i < this.slides.length; i++) {
				this.slides[i].className = this.slides[i].className.replace(' pure-js-carousel-slide', '');
				this.slidesContainer.insertAdjacentElement('beforebegin', this.slides[i]);
			}
			this.carousel.removeChild(this.slidesContainer);
			this.maxIndex = null;
			this.isEnabled = null;
		}
	};
})();
