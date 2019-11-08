
    var titles_images = {
        titles_images: ['Competition', 'Jump', 'In one wheel','Black Panter','Woods'],
        frame: 0, 
        set: function(title_method) {
            document.getElementById("title").innerHTML = "" + title_method + "";
        },
        init: function() {
            this.set(this.titles_images[this.frame]);
        },
        left: function() {
            this.frame--;
            if (this.frame < 0) this.frame = this.titles_images.length - 1;
            this.set(this.titles_images[this.frame]);
        },
        right: function() {
            this.frame++;
            if (this.frame == this.titles_images.length) this.frame = 0;
            this.set(this.titles_images[this.frame]);
        }
    };
	
    var slider_images = {
        slides_images: ['Images/image_1.jpg', 'Images/image_2.jpg', 'Images/image_3.jpg', 'Images/image_4.jpg', 'Images/image_5.jpg'],
        frame: 0,
        set: function(images) {
            document.getElementById("container").style.backgroundImage = "url(" + images + ")";
        },
        init: function() {
            this.set(this.slides_images[this.frame]);
        },
        left: function() {
            this.frame--;
            if (this.frame < 0) this.frame = this.slides_images.length - 1;
            this.set(this.slides_images[this.frame]);
        },
        right: function() {
            this.frame++;
            if (this.frame == this.slides_images.length) this.frame = 0;
            this.set(this.slides_images[this.frame]);
        }
    };
    window.onload = function() {
        slider_images.init();
        titles_images.init();
    };


    var Show = true;
	
	function Next() {
	    slider_images.right()
	    titles_images.right()
	}
	
	function Prev() {
	    slider_images.left()
	    titles_images.left()
	}
	
	function SlideShow_images() {
	    slider_images.right();
	    titles_images.right();
        if (Show) {
            setTimeout(SlideShow_images, 2500);
        }
    }

    function Start() {
	Show = true;
	SlideShow_images();
		document.getElementById('ButtonNext').disable = true;
		document.getElementById('ButtonPrev').disable = true;
}	

	
    function Stop() {
	Show = false;
	SlideShow_images();
		document.getElementById('ButtonNext').disable = false;
		document.getElementById('ButtonPrev').disable = flase;
	}
