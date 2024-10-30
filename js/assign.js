$(document).ready(function () {
    console.log("Document is ready");

    // Check if jQuery is loaded
    if (typeof jQuery === "undefined") {
        console.error("jQuery is not loaded");
    } else {
        console.log("jQuery is loaded");
    }

    class StickyNavigation {
        constructor() {
            this.currentId = null;
            this.currentTab = null;
            this.tabContainerHeight = 70;
            let self = this;

            // Bind click event to tabs
            $('.et-hero-tab').click(function (event) {
                self.onTabClick(event, $(this));
            });

            // Bind scroll and resize events to window
            $(window).scroll(() => this.onScroll());
            $(window).resize(() => this.onResize());
        }

        // Handle tab click event
        onTabClick(event, element) {
            event.preventDefault();
            console.log("Tab clicked:", element.attr('href'));
            let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;

            // Smooth scroll animation
            $('html, body').animate({ scrollTop: scrollTop }, 600);
        }

        // Handle scroll event
        onScroll() {
            this.checkTabContainerPosition();
            this.findCurrentTabSelector();
        }

        // Handle window resize event
        onResize() {
            if (this.currentId) {
                this.setSliderCss();
            }
        }

        // Check if the tab container should stick to the top
        checkTabContainerPosition() {
            let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
            if ($(window).scrollTop() > offset) {
                $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
                console.log("Tab container is now fixed at the top.");
            } else {
                $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
                console.log("Tab container is back to normal.");
            }
        }

        // Find and highlight the current tab based on scroll position
        findCurrentTabSelector() {
            let newCurrentId;
            let newCurrentTab;
            let self = this;

            $('.et-hero-tab').each(function () {
                let id = $(this).attr('href');
                let offsetTop = $(id).offset().top - self.tabContainerHeight;
                let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;

                if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                    newCurrentId = id;
                    newCurrentTab = $(this);
                }
            });

            if (this.currentId !== newCurrentId || this.currentId === null) {
                this.currentId = newCurrentId;
                this.currentTab = newCurrentTab;
                console.log("Current tab changed to:", newCurrentId);
                this.setSliderCss();
            }
        }

        // Set CSS for the sliding tab indicator
        setSliderCss() {
            let width = 0;
            let left = 0;

            if (this.currentTab) {
                width = this.currentTab.css('width');
                left = this.currentTab.offset().left;
            }

            $('.et-hero-tab-slider').css({
                width: width,
                left: left
            });

            console.log("Slider CSS updated. Width:", width, "Left:", left);
        }
    }

    // Initialize the StickyNavigation
    new StickyNavigation();
});
