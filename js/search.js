var searchFunc=function(t,e,l){"use strict";var n="<i id='local-search-close'>×</i>",r=document.getElementById(e),a=document.getElementById(l);$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();a.innerHTML="",r.addEventListener("input",function(){var c='<ul class="search-result-list">',s=this.value.trim().toLowerCase().split(/[\s\-]+/);if(a.innerHTML="",!(this.value.trim().length<=0)){if(e.forEach(function(t){var l=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");var n,e=t.title.trim(),r=e.toLowerCase(),a=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),t=t.url,i=-1;""!==a?s.forEach(function(t,e){n=r.indexOf(t),i=a.indexOf(t),n<0&&i<0?l=!1:(i<0&&(i=0),0==e&&0)}):l=!1,l&&(c+="<li><a href='"+t+"' class='search-result-title' target='_blank'>"+e+"</a>",c+="</li>")}),-1===c.indexOf("<li>"))return a.innerHTML=n+"<ul><span class='local-search-empty'>没有找到相关内容<span></ul>";a.innerHTML=n+c}})}}),$(document).on("click","#local-search-close",function(){$("#local-search-input").val(""),$("#local-search-result").html("")})},getSearchFile=function(){searchFunc("/search.xml","local-search-input","local-search-result")};