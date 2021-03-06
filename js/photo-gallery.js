$(document).ready(function(){        
	$('li img').on('click',function(){
		var src = $(this).attr('src');
		
		var title = $(this).attr('title');
		var titlesrc = '<div id="gallery-title">'+title+'</div>';
		
		var img = '<img src="' + src + '" class="img-responsive"/>';
		
		//start of new code new code
		var index = $(this).parent('li').index();   
		
		var html = ''
		html += titlesrc;
		html += img;                
		html += '<div style="height:25px;clear:both;display:block;">';
		html += '<a class="gallery-controls next" href="'+ (index+2) + '">next &raquo;</a>';
		html += '<a class="gallery-controls previous" href="' + (index) + '">&laquo; prev</a>';
		html += '</div>';
		
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(html);
			//new code
			$('a.gallery-controls').trigger('click');
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
		
		
		
		
   });	
})
        
         
$(document).on('click', 'a.gallery-controls', function(){
	var index = $(this).attr('href');
	var src = $('ul.row li:nth-child('+ index +') img').attr('src');
	
	var imgTitle = '';
	imgTitle = $('ul.row li:nth-child('+ index +') img').attr('title');   	
	
	$("#gallery-title").html(imgTitle);
	
	$('.modal-body img').attr('src', src);
	
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.row li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	
	return false;
});