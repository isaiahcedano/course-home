import './FAQPage.css';
import {useEffect} from 'react';

const FAQPage = () => {
  useEffect(() => {
    (function(){
    	// FAQ Template - by CodyHouse.co
      var FaqTemplate = function(element) {
    		this.element = element;
    		this.sections = this.element.getElementsByClassName('cd-faq__group');
    		this.triggers = this.element.getElementsByClassName('cd-faq__trigger');
    		this.faqContainer = this.element.getElementsByClassName('cd-faq__items')[0];
    		this.faqsCategoriesContainer = this.element.getElementsByClassName('cd-faq__categories')[0];
    		this.faqsCategories = this.faqsCategoriesContainer.getElementsByClassName('cd-faq__category');
      	this.faqOverlay = this.element.getElementsByClassName('cd-faq__overlay')[0];
      	this.faqClose = this.element.getElementsByClassName('cd-faq__close-panel')[0];
      	this.scrolling = false;
      	initFaqEvents(this);
      };

      function initFaqEvents(faqs) {
      	// click on a faq category
    		faqs.faqsCategoriesContainer.addEventListener('click', function(event){
    			var category = event.target.closest('.cd-faq__category');
    			if(!category) return;
    			var mq = getMq(faqs),
    				selectedCategory = category.getAttribute('href').replace('#', '');
    			if(mq == 'mobile') { // on mobile, open faq panel
    				event.preventDefault();
    				faqs.faqContainer.scrollTop = 0;
    				Util.addClass(faqs.faqContainer, 'cd-faq__items--slide-in');
    				Util.addClass(faqs.faqClose, 'cd-faq__close-panel--move-left');
    				Util.addClass(faqs.faqOverlay, 'cd-faq__overlay--is-visible');
    				var selectedSection = faqs.faqContainer.getElementsByClassName('cd-faq__group--selected');
    				if(selectedSection.length > 0) {
    					Util.removeClass(selectedSection[0], 'cd-faq__group--selected');
    				}
    				Util.addClass(document.getElementById(selectedCategory), 'cd-faq__group--selected');
    			} else { // on desktop, scroll to section
    				if(!window.requestAnimationFrame) return;
    				event.preventDefault();
    				var windowScrollTop = window.scrollY || document.documentElement.scrollTop;
    				Util.scrollTo(document.getElementById(selectedCategory).getBoundingClientRect().top + windowScrollTop + 2, 200);
    			}
    		});

    		// on mobile -> close faq panel
    		faqs.faqOverlay.addEventListener('click', function(event){
    			closeFaqPanel(faqs);
    		});
    		faqs.faqClose.addEventListener('click', function(event){
    			event.preventDefault();
    			closeFaqPanel(faqs);
    		});

    		// on desktop -> toggle faq content visibility when clicking on the trigger element
    		faqs.faqContainer.addEventListener('click', function(event){
    			if(getMq(faqs) != 'desktop') return;
    			var trigger = event.target.closest('.cd-faq__trigger');
    			if(!trigger) return;
    			event.preventDefault();
    			var content = trigger.nextElementSibling,
    				parent = trigger.closest('li'),
    				bool = Util.hasClass(parent, 'cd-faq__item-visible');

    			Util.toggleClass(parent, 'cd-faq__item-visible', !bool);

    			//store initial and final height - animate faq content height
    			Util.addClass(content, 'cd-faq__content--visible');
    			var initHeight = bool ? content.offsetHeight: 0,
    				finalHeight = bool ? 0 : content.offsetHeight;

    			if(window.requestAnimationFrame) {
    				Util.setHeight(initHeight, finalHeight, content, 200, function(){
    					heighAnimationCb(content, bool);
    				});
    			} else {
    				heighAnimationCb(content, bool);
    			}
    		});

    		if(window.requestAnimationFrame) {
    			// on scroll -> update selected category
    			window.addEventListener('scroll', function(){
    				if(getMq(faqs) != 'desktop' || faqs.scrolling) return;
    				faqs.scrolling = true;
    				window.requestAnimationFrame(updateCategory.bind(faqs));
    			});
    		}
      };

      function closeFaqPanel(faqs) {
      	Util.removeClass(faqs.faqContainer, 'cd-faq__items--slide-in');
      	Util.removeClass(faqs.faqClose, 'cd-faq__close-panel--move-left');
      	Util.removeClass(faqs.faqOverlay, 'cd-faq__overlay--is-visible');
      };

      function getMq(faqs) {
    		//get MQ value ('desktop' or 'mobile')
    		return window.getComputedStyle(faqs.element, '::before').getPropertyValue('content').replace(/'|"/g, "");
      };

      function updateCategory() { // update selected category -> show green rectangle to the left of the category
      	var selected = false;
    		for(var i = 0; i < this.sections.length; i++) {
    			var top = this.sections[i].getBoundingClientRect().top,
    				bool = (top <= 0) && (-1*top < this.sections[i].offsetHeight);
    			Util.toggleClass(this.faqsCategories[i], 'cd-faq__category-selected', bool);
    			if(bool) selected = true;
    		}
    		if(!selected) Util.addClass(this.faqsCategories[0], 'cd-faq__category-selected');
    		this.scrolling = false;
      };

      function heighAnimationCb(content, bool) {
    		content.removeAttribute("style");
    		if(bool) Util.removeClass(content, 'cd-faq__content--visible');
      };

      var faqTemplate = document.getElementsByClassName('js-cd-faq'),
      	faqArray = [];
      if(faqTemplate.length > 0) {
    		for(var i = 0; i < faqTemplate.length; i++) {
    			faqArray.push(new FaqTemplate(faqTemplate[i]));
    		}
      };
    })();

    // Utility function
    function Util () {};

    /*
    	class manipulation functions
    */
    Util.hasClass = function(el, className) {
    	if (el.classList) return el.classList.contains(className);
    	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };

    Util.addClass = function(el, className) {
    	var classList = className.split(' ');
     	if (el.classList) el.classList.add(classList[0]);
     	else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
     	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
    };

    Util.removeClass = function(el, className) {
    	var classList = className.split(' ');
    	if (el.classList) el.classList.remove(classList[0]);
    	else if(Util.hasClass(el, classList[0])) {
    		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
    		el.className=el.className.replace(reg, ' ');
    	}
    	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
    };

    Util.toggleClass = function(el, className, bool) {
    	if(bool) Util.addClass(el, className);
    	else Util.removeClass(el, className);
    };

    Util.setAttributes = function(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    };

    /*
      DOM manipulation
    */
    Util.getChildrenByClassName = function(el, className) {
      var children = el.children,
        childrenByClass = [];
      for (var i = 0; i < el.children.length; i++) {
        if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
      }
      return childrenByClass;
    };

    /*
    	Animate height of an element
    */
    Util.setHeight = function(start, to, element, duration, cb) {
    	var change = to - start,
    	    currentTime = null;

      var animateHeight = function(timestamp){
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        var val = parseInt((progress/duration)*change + start);
        // console.log(val);
        element.setAttribute("style", "height:"+val+"px;");
        if(progress < duration) {
            window.requestAnimationFrame(animateHeight);
        } else {
        	cb();
        }
      };

      //set the height of the element before starting animation -> fix bug on Safari
      element.setAttribute("style", "height:"+start+"px;");
      window.requestAnimationFrame(animateHeight);
    };

    /*
    	Smooth Scroll
    */

    Util.scrollTo = function(final, duration, cb) {
      var start = window.scrollY || document.documentElement.scrollTop,
          currentTime = null;

      var animateScroll = function(timestamp){
      	if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if(progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final-start, duration);
        window.scrollTo(0, val);
        if(progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
          cb && cb();
        }
      };

      window.requestAnimationFrame(animateScroll);
    };

    /*
      Focus utility classes
    */

    //Move focus to an element
    Util.moveFocus = function (element) {
      if( !element ) element = document.getElementsByTagName("body")[0];
      element.focus();
      if (document.activeElement !== element) {
        element.setAttribute('tabindex','-1');
        element.focus();
      }
    };

    /*
      Misc
    */

    Util.getIndexInArray = function(array, el) {
      return Array.prototype.indexOf.call(array, el);
    };

    Util.cssSupports = function(property, value) {
      if('CSS' in window) {
        return CSS.supports(property, value);
      } else {
        var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
        return jsProperty in document.body.style;
      }
    };

    /*
    	Polyfills
    */
    //Closest() method
    if (!Element.prototype.matches) {
    	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
    	Element.prototype.closest = function(s) {
    		var el = this;
    		if (!document.documentElement.contains(el)) return null;
    		do {
    			if (el.matches(s)) return el;
    			el = el.parentElement || el.parentNode;
    		} while (el !== null && el.nodeType === 1);
    		return null;
    	};
    }

    //Custom Event() constructor
    if ( typeof window.CustomEvent !== "function" ) {

      function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
       }

      CustomEvent.prototype = window.Event.prototype;

      window.CustomEvent = CustomEvent;
    }

    /*
    	Animation curves
    */
    Math.easeInOutQuad = function (t, b, c, d) {
    	t /= d/2;
    	if (t < 1) return c/2*t*t + b;
    	t--;
    	return -c/2 * (t*(t-2) - 1) + b;
    };
  }, [])

  return (
    <>
      <section className="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
        <ul className="cd-faq__categories">
          <li>
            <a className="cd-faq__category truncate" href="#account">
              Account
            </a>
          </li>
          <li>
            <a className="cd-faq__category truncate" href="#payments">
              Payments
            </a>
          </li>
          <li>
            <a className="cd-faq__category truncate" href="#delivery">
              Delivery
            </a>
          </li>
        </ul>{" "}
        {/* cd-faq__categories */}
        <div className="cd-faq__items">
          <ul id="account" className="cd-faq__group">
            <li className="cd-faq__title">
              <h2>Account</h2>
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>Are the prices of the requested courses the same as the ones on the platform?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    No. Requested courses are $5.99
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>Are the prices permanant?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    Yes. At most the prices of every course will be $5.99
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>How long does it take for requested courses to be uploaded to the platform?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    We will do everything in our power to make sure the requested course is uploaded to the platform, so our customers can recieve a proper education, and this might take 2-7 days if the course is available, otherwise we will inform the requester the news.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
          </ul>{" "}
          {/* cd-faq__group */}
          <ul id="payments" className="cd-faq__group">
            <li className="cd-faq__title">
              <h2>Payments</h2>
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>How does payment work?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    The payment for any course is only through bitcoin. There is a guide where we'll indicate how to buy and send bitcoin.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>Are there refunds?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    No. Because of the very low prices and risk of fraud we do not offer refunds.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>
                  Will I recieve an invoice?
                </span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    Yes. A bitcoin invoice will be sent to the email address you registered with.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
          </ul>{" "}
          {/* cd-faq__group */}
          <ul id="delivery" className="cd-faq__group">
            <li className="cd-faq__title">
              <h2>Delivery</h2>
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>When will my course arrive?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    As soon as the purchase is successful, the course(s) with their corresponding cloud (mega, koofr, media) links as well with their password (if any) will be sent to the registered email address.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>What should I do if my course hasn't arrived?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    If after at most 1 hour you're purchase hasn't been sent to you, contact customer service immediately.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
            <li className="cd-faq__item">
              <a className="cd-faq__trigger" href="#0">
                <span>What if the courses are sent to the wrong email address?</span>
              </a>
              <div className="cd-faq__content">
                <div className="text-component">
                  <p>
                    This will not happen. Before purchase, you must register with an email address to which we send a confirmation link.
                  </p>
                </div>
              </div>{" "}
              {/* cd-faq__content */}
            </li>
          </ul>{" "}
          {/* cd-faq__group */}
        </div>{" "}
        {/* cd-faq__items */}
        <a href="#0" className="cd-faq__close-panel text-replace">
          Close
        </a>
        <div className="cd-faq__overlay" aria-hidden="true" />
      </section>{" "}
      {/* cd-faq */}
    </>

  );
};

export default FAQPage;
