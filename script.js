
var Filter = {
				$column 			: $(".filter-wrapper .column"),
				eleWidth 			: $(".filter-wrapper .column").width()+20,
				eleHeight			: $(".filter-wrapper .column").height()+25,
				
		/*On Intilization load functions*/		
		init:function(){
				Filter.registerEvents();
				Filter.filterAnimation();				
		},
		
		/*Onload Adjust position of the Coloumns*/
		filterAnimation:function(){
			var $eles = Filter.$column.filter(':visible');
			for(var i=0; i<= $eles.length; i++){
					var $ele = $($eles[i]),
						getDataText = $ele.children("h4").text();
						$ele.attr("data-label", getDataText).css("transform","translate("+Filter.eleWidth*(i%3)+"px, "+Filter.eleHeight*Math.floor(i/3)+"px)");
			}
		},
		
		/*On Click events */
		registerEvents:function(){
			$(".filter-nav ul li").on("click","a",function(){
				var ourLabel = $(this).attr("data-label");
				$(".filter-nav ul li a").removeClass("active");
				$(this).addClass('active');
				
				if(ourLabel == "all"){
					$(".filter-nav ul li a").removeClass("active");
					$(this).addClass('active');
					$(".filter-wrapper").children("div.column").show();
				}
				else{
					$(".filter-wrapper").children("div.column:not([data-label='"+ourLabel+"'])").hide();
					$(".filter-wrapper").children("div.column[data-label='"+ourLabel+"']").show();
				}
				Filter.filterAnimation();
			});
			
			/*Lightbox Triggering*/
			/*Onload Lightbox will be hide.*/
			$(".lightbox").hide();
			
			/*When clicked on images Lightbox will be opend.*/
			 $(".filter-wrapper .column").click(function(){
				$(".lightbox").fadeIn(500);
				$(".lightbox .content img, .lightbox .content h3, .lightbox .content h4").remove();
				var imgSrc = $(this).children(".img").children("img").attr("src"),
					thisTitle = $(this).children("h3").text(),
					veicleType = $(this).children("h4").text(),
					imgDesc = $(this).children(".img").children("img").attr("alt");
				$(".lightbox .content").append("<img src='"+imgSrc+"' /> <h3> "+thisTitle+ "</h3> <h4> "+veicleType+ "</h4> <p> "+imgDesc+ "</p>");
				return false;
			});
			/*When clicked on close icon Lightbox will be closed.*/
			$(".close").click(function(){
				$(".lightbox").fadeOut(500);
				return false;
			});
		}
	}

Filter.init();
