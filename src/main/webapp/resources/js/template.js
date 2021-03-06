var compUI={
      br : x=>{return $('<br/>')},
      div : x=>{return $('<div/>',{id:x});},
      image : (x,y)=>{return $('<img/>',{id : x, src : y});},
      input : (x,y)=>{return $('<input/>',{id : x, type : y});},
      h1 : x=>{return $('<h1/>',{id:x});},
      h2 : x=>{return $('<h2/>',{id:x});},
      h3 : x=>{return $('<h3/>',{id:x});},
      h4 : x=>{return $('<h4/>',{id:x});},
      h5 : x=>{return $('<h5/>',{id:x});},
      span : x=>{return $('<span/>',{id:x});},
      divX : ()=>{return $('<div/>');},
  	  spanX : ()=>{return $('<span/>');},
      a:x=>{return $('<a/>',{id:x});},
      iTxt : x=>{return $('<input/>',{id:x ,type :'text'});},
      btn : (x,y)=>{return $('<button/>', { id : x, type : y});},
      iBtn : x=>{return $('<input/>',{id:x, type:'button'});},
      aBtn : (x,y)=>{return $('<a>',{href:x,role:'button',id:y});},
      aName : (x)=>{return $('<a>',{name:x});},
	  select : x=>{return $('<select/>',{ id : x });},
	  inputBtn : (x,y,z)=>{return $('<input/>',{ id : x, type : y, value : z });},
	  option : (x,y)=>{return $('<option/>',{ value : x, text :y })},
	  li : x=>{return $('<li/>',{ id : x });}	
};



var search={
		navbar :()=>{return '<header role="banner" class="main-nav-header">'
			   +'<div class="main-nav-box">'
			      +'<div class="main-nav-table">'
			         +'<!-- logo -->'
			         +'<div class="main-nav-logobox">'
			            +'<div class="main-nav-logobox2">'
			               +'<div class="main-nav-logobox3">'
			                +'  <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: block;fill: currentColor;height: 1em;width: 1em;">'
			                  +'   <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>'
			                  +'</svg>'
			               +'</div>'
			            +'</div>'
			         +'</div>'
			         +'<!-- blank -->'
			         +'<div class="main-nav-blank"></div>'
			         +'<!-- menu -->'
			         +'<div class="main-nav-menubox">'
			            +'<div class="main-nav-menubox2">'
			               +'<nav class="main-nav-menunav">'
			                  +'<ul class="main-nav-ul" >'
			                     +'<li class="main-nav-li">'
			                        +'<div class="main-nav-element">'
			                           +'<button id="navHost" class="main-nav-btn" style="z-index:900;">'
			                              +'<div class="main-nav-btn-out">'
			                                 +'<div class="main-nav-btn-in">'
			                                    +'<span>호스팅 하기</span>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</button>'
			                        +'</div>'
			                     +'</li>'
			                     +'<li class="main-nav-li">'
			                        +'<div class="main-nav-element">'
			                           +'<button id="navHelp" class="main-nav-btn" style="z-index:900;">'
			                              +'<div class="main-nav-btn-out">'
			                                 +'<div class="main-nav-btn-in">'
			                                    +'<span>도움말</span>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</button>'
			                        +'</div>'
			                     +'</li>'
			                     +'<li class="main-nav-li">'
			                        +'<div class="main-nav-element">'
			                           +'<a href="" class="main-nav-a" style="z-index:900;">'
			                              +'<div class="main-nav-a-out">'
			                                 +'<div class="main-nav-a-in">'
			                                    +'<span>회원가입</span>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</a>'
			                        +'</div>'
			                     +'</li>'
			                     +'<li class="main-nav-li">'
			                        +'<div class="main-nav-element">'
			                           +'<a id="navLogin" class="main-nav-a" style="z-index: 901;">'
			                              +'<div class="main-nav-out">'
			                                 +'<div class="main-nav-a-in">'
			                                    +'<span>로그인</span>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</a>'
			                        +'</div>'
			                     +'</li>'
			                      +'<li class="main-nav-li">'
			                        +'<div class="main-nav-element">'
			                           +'<a id="navAdmin" class="main-nav-a" style="z-index: 900;">'
			                              +'<div class="main-nav-out">'
			                                 +'<div class="main-nav-a-in">'
			                                    +'<span>관리자</span>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</a>'
			                        +'</div>'
			                     +'</li> '
			                  +'</ul>'
			               +'</nav>'
			            +'</div>'
			         +'</div>'
			      +'</div>'
			   +'</div>'
			   +'</header>'
			   +'<div class="main-nav-filter-box1">'
			      +'<div class="main-nav-filter-box2">'
			         +'<div class="main-nav-filter-box3">'
			            +'<div>'
			               +'<div class="main-nav-filter-box4">'
			                  +'<div class="main-nav-filter-box5">'
			                        +'<!-- content in element 1 -->'
			                     +'<div class="main-nav-filter-element-1" style="width: 100%;">'
			                        +'<div>'
			                           +'<div class="main-nav-filter-element-2">'
			                              +'<div>'
			                                 +'<div class="main-nav-filter-element-3" aria-autocomplete="list" aria-expanded="true" role="combobox">'
			                                    +'<div class="main-nav-filter-element-4">'
			                                    +'<label class="main-nav-filter-element-label" for="GeocompleteController-via-SearchBarLarge-via-HeaderController">위치</label>'
			                                    +'<div class="main-nav-filter-element-5">'
			                                       +'<div class="main-nav-filter-element-6">'
			                                          +'<div class="main-nav-filter-element-7">'
			                                             +'<div>'
			                                              +'  <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 18px; width: 18px; display: block; fill: rgb(118, 118, 118);">'
			                                                +'   <path d="M10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6M23 22l-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c.3.3.8.3 1.1 0 .3-.3.4-.8.1-1.1" fill-rule="evenodd">'
			                                                   +'</path>'
			                                                +'</svg>'
			                                             +'</div>'
			                                          +'</div>'
			                                       +'</div>'
			                                       +'<div class="main-nav-filter-element-8">'
			                                      +'    <input type="text" autocomplete="off" class="main-nav-filter-element-8-input" id="GeocompleteController-via-SearchBarLarge-via-HeaderController" name="location" placeholder="모든 위치" value="" role="textbox">'
			                                       +'</div>'
			                                    +'</div>'
			                                    +'</div>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</div>'
			                        +'</div>'
			                        +'<div class="main-nav-filter-element-9" ></div>'
			                     +'</div>'
			                     +'<!-- content in element 2 -->'
			                     +'<div class="main-nav-filter-element-1" style="width: 100%;">'
			                        +'<div>'
			                           +'<div class="main-nav-filter-element-2">'
			                              +'<div>'
			                                 +'<div class="main-nav-filter-element-3" aria-autocomplete="list" aria-expanded="true" role="combobox">'
			                                    +'<div class="main-nav-filter-element-4">'
			                                    +'<label class="main-nav-filter-element-label">날짜</label>'
			                                    +'<div class="main-nav-filter-element-5">'
			                                       +'<div class="main-nav-filter-element-6">'
			                                          +'<div class="main-nav-filter-element-7">'
			                                             +'<div>'
			                                               +' <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:18px;width:18px;display:block;fill:currentColor;" data-reactid="162"><path d="M22 9.5V3h-4.75V1a.75.75 0 1 0-1.5 0v2H8.249l.001-2a.75.75 0 1 0-1.5 0l-.001 2H2v19.008a1 1 0 0 0 .992.992h18.016a1 1 0 0 0 .992-.992V9.5zm-18.5-5h3.248V5a.75.75 0 0 0 1.5 0v-.5h7.502V5a.75.75 0 0 0 1.5 0v-.5h3.25V8h-17V4.5zm0 17v-12h17v12h-17z" fill-rule="evenodd" data-reactid="163"></path></svg>'
			                                             +'</div>'
			                                          +'</div>'
			                                       +'</div>'
			                                       +'<div class="main-nav-filter-element-8">'
			                                        +'<input type="text" autocomplete="off" class="main-nav-filter-element-8-input" placeholder="모든 날짜" value="" role="textbox">'
			                                       +'</div>'
			                                    +'</div>'
			                                    +'</div>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</div>'
			                        +'</div>'
			                        +'<div class="main-nav-filter-element-9" ></div>'
			                     +'</div>'
			             +'<!-- content in element 2 -->'
			                     +'<div class="main-nav-filter-element-1" style="width: 100%;">'
			                        +'<div>'
			                           +'<div class="main-nav-filter-element-2">'
			                              +'<div>'
			                                 +'<div class="main-nav-filter-element-3" aria-autocomplete="list" aria-expanded="true" role="combobox">'
			                                    +'<div class="main-nav-filter-element-4">'
			                                    +'<label class="main-nav-filter-element-label">날짜</label>'
			                                    +'<div class="main-nav-filter-element-5">'
			                                       +'<div class="main-nav-filter-element-6">'
			                                          +'<div class="main-nav-filter-element-7">'
			                                             +'<div>'
			                                              +'  <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:18px;width:18px;display:block;fill:currentColor;" data-reactid="172"><path d="M3.31 11.565c-.657.503-1.101.992-1.47 1.664-1.141 2.08-1.464 6.818-.199 8.523 1.302 1.755 2.688 2.154 6.542 2.154 2.814 0 4.703-1.003 5.166-3.427.16-.839.139-1.547-.013-2.588l-.055-.367c-.122-.797-.163-1.179-.16-1.662.01-1.547.733-2.278 2.623-3.239.555-.283.903-.854.901-1.476-.001-.468-.2-.842-.538-1.209a3.055 3.055 0 0 1-.48-.69c-.315-.618-.397-1.19-.388-1.977v-.123c0-1.648.812-2.646 2.161-2.646 1.35 0 2.16.998 2.16 2.646 0 1.037-.233 1.974-.987 2.79-.34.368-.538.74-.54 1.209a1.65 1.65 0 0 0 .904 1.476c1.869.952 2.601 1.693 2.634 3.25.009.405.022.767.049 1.366.109 2.45.06 3.222-.338 3.904-.474.809-1.603 1.24-3.89 1.263-1.194.012-1.64-.018-2.362-.184a.75.75 0 1 0-.335 1.462c.86.198 1.41.235 2.713.222 2.758-.028 4.371-.643 5.168-2.006.611-1.043.666-1.932.543-4.727-.027-.589-.04-.941-.048-1.331-.048-2.273-1.14-3.377-3.454-4.556a.15.15 0 0 1-.083-.135c0-.016.032-.077.141-.196.61-.66.996-1.43 1.204-2.265.14-.558.182-1.028.182-1.542 0-2.416-1.407-4.146-3.661-4.146s-3.66 1.73-3.66 4.146l-.001.108c-.01 1.01.1 1.788.55 2.673.188.368.425.712.716 1.027.108.117.14.178.14.196a.15.15 0 0 1-.082.134c-2.343 1.192-3.429 2.289-3.442 4.567-.003.585.044 1.026.177 1.897l.054.357c.13.89.146 1.448.023 2.09-.298 1.564-1.513 2.21-3.692 2.21-3.422 0-4.397-.282-5.337-1.549-.86-1.159-.578-5.29.309-6.907.26-.475.566-.811 1.067-1.195.291-.223 1.9-1.297 2.423-1.673.446-.321.71-.839.709-1.388l-.001-.15a1.755 1.755 0 0 0-.649-1.34C6.01 7.628 5.537 6.17 5.537 4.721c0-1.928 1.107-3.13 2.646-3.13s2.646 1.202 2.646 3.13c0 1.465-.458 2.913-1.144 3.481-.415.344-.65.836-.65 1.404a1.698 1.698 0 0 0 .922 1.519c.408.208.57.29.791.407a.75.75 0 1 0 .7-1.327c-.23-.12-.396-.206-.808-.416a.198.198 0 0 1-.106-.177c0-.123.034-.193.108-.254 1.1-.911 1.687-2.77 1.687-4.637 0-2.73-1.75-4.63-4.146-4.63s-4.146 1.9-4.146 4.63c0 1.85.606 3.724 1.71 4.637.07.059.106.13.106.193v.15a.204.204 0 0 1-.084.163c-.487.35-2.12 1.441-2.459 1.7z" fill-rule="evenodd" data-reactid="173"></path></svg>'
			                                             +'</div>'
			                                          +'</div>'
			                                       +'</div>'
			                                       +'<div class="main-nav-filter-element-8">'
			                                        +'  <input type="text" autocomplete="off" class="main-nav-filter-element-8-input" placeholder="인원 1명" value="" role="textbox">'
			                                       +'</div>'
			                                    +'</div>'
			                                    +'</div>'
			                                 +'</div>'
			                              +'</div>'
			                           +'</div>'
			                        +'</div>'
			                        +'<div class="main-nav-filter-element-9" ></div>'
			                     +'</div>'
			                  +'</div>'
			               +'</div>'
			            +'</div>'
			         +'</div>'
			         +'<!-- side-menu -->'
			         +'<div class="nav-side-menu-box">'
			            +'<a href="" class="nav-side-menu-box1" role="tab" aria-selected="true" aria-busy="false">'
			               +'<span>숙소</span>'
			            +'</a>'
			         +'</div>'
			      +'</div>'
			   +'</div>'
			+'</div>';}
};



var main={/*main navbar*/
	navbar:()=>{return '<div id="mainNavbar" >'
			+'<div style="position: relative;">'
		+'	  <div id="mainLogobox" style="float:left" class="main-nav-logobox">'
		+'       <div class="main-nav-logobox2">'
		+'        <div  class="main-nav-logobox3" >'
		+'        <a id="logoHome" href=""  style="z-index: 900; text-decoration: none">'
		+'          <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: block;fill: #FF5A5F;height: 1em;width: 1em;">'
		+'  <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>'
		+'  </svg>'
		+'        </a>'
		+'   </div>'
		+'</div>'
		+'</div>'
		+'		<nav class="hy-navbar">'
		+'			<ul class="hy-navbar-ul">'
		+'				<li><a id="mainHelp">도움말</a></li>'
		+'				<li><a id="mainProfile">프로필가기</a></li>'
		+'				<li><a id="mainHost">호스팅가기</a></li>'
		+'				<li><a id="mainJoin">회원가입</a></li>'
		+'				<li><a id="mainLogin">로그인</a></li>'
		+'				<li><a id="mainAdmin">관리자</a></li>'
		+'			</ul>'
		+'		</nav>'
		+' </div>'
		+'	<!-- airbnb text -->'
		+'	<div style="padding: 15%;">'
		+'		<div><span class="hy-air-mainTxt">에어비앤비</span>'
		+'		<div> <span class="hy-air-mainSubTxt">독특한'
		+'			<a href="" class="hy-air-mainSubTxta">숙소</a>를 예약하고,'
		+'			현지인처럼  <br /> 살아보세요.</span>'
		+'	</div>'
		+'	<!--search box  -->'
		+'	<div class="inner-addon left-addon" style="position: relative;">'
		+'	    <i class="glyphicon glyphicon-search"></i>'
		+'	    <input type="text" class="form-control" aria-describedby="sizing-addon1" />'
		+'	   <button id="mainSearch" type="submit" class="hy-air-mainSearchBtn" style="position: absolute;right:0; top: 0px; background-color:#FF5A5F;text-align: center; text-decoration: none;cursor: pointer; border: none; color: white; padding:7px;  border-radius: 3px;">검색</button>'
		+'	</div>'
		+'		</div>'
		+'	</div>'
		+'</div>';},
/*footer*/
	footer :()=>{return '<div id="footer">'
		+'	<div class="jw_div_footer_2">'
		+'	<div class="jw_div_footer_3" style="background-color: transparent">'
		+'		<footer role="contentinfo">'
		+'			<div class="jw_div_footer_4">'
		+'				<div class="jw_div_footer_5">'
		+'					<div class="jw_div_contain_1">'
		+'						<div class="jw_div_footer_5">'								
		+'							<div class="jw_div_contain_1_2">'
		+'								<div class="jw_div_contain_1_3">'
		+'									<div class="jw_div_contain_1_4">'
		+'										<div class="jw_div_contain_1_5">'
		+'											<select id="language-selector" name="language-selector" class="jw_selector_1">'
		+'			                                </select>'
		+'										</div>'
		+'										<span class="jw_select_arow">'
		+'			                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="display: block; fill: rgb(72, 72, 72); height: 16px; width: 19px">'
		+'			                                   <path fill-rule="evenodd" d="M 16.291 4.295 a 1 1 0 1 1 1.414 1.415 l -8 7.995 a 1 1 0 0 1 -1.414 0 l -8 -7.995 a 1 1 0 1 1 1.414 -1.415 l 7.293 7.29 l 7.293 -7.29 Z"></path>'
		+'			                                </svg>'
		+'			                            </span>'
		+'                      				</div>'
		+'								</div>'
		+'							</div>'
		+'							<div class="jw_div_contain_1_2">'
		+'								<div class="jw_div_contain_1_3">'
		+'									<div class="jw_div_contain_1_4">'
		+'										<div class="jw_div_contain_1_5">'
		+'											<select id="currency-selector" name="currency-selector" class="jw_selector_1">'
		+'			                                 </select>'
		+'										</div>'
		+'										<span class="jw_select_arow">'
		+'			                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="display: block; fill: rgb(72, 72, 72); height: 16px; width: 19px">'
		+'			                                   <path fill-rule="evenodd" d="M 16.291 4.295 a 1 1 0 1 1 1.414 1.415 l -8 7.995 a 1 1 0 0 1 -1.414 0 l -8 -7.995 a 1 1 0 1 1 1.414 -1.415 l 7.293 7.29 l 7.293 -7.29 Z"></path>'
		+'			                                </svg>'
		+'			                            </span>'
		+'                      				</div>'
		+'								</div>'
		+'							</div>  '
		+'						</div>'
		+'					</div>'
		+'					<div class="jw_div_contain_2">'
		+'                    	<section>'
		+'                        	<h3 class="jw_topbrp_1"><div class="jw_footer_title_1"><span>에어비앤비</span></div></h3>'
		+'                        	<div style="margin-top: 16px">'
		+'                           		<ul class="jw_footer_ul_1">'
		+'                              	<li class="jw_footer_li_1">회사소개</li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>채용정보</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>미디어 정책</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>도움말</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>다양성과 소속감</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'                           		</ul>'
		+'                        	</div>'
		+'                     	</section>'  
		+'                  	</div>'
		+'                  	<div class="jw_div_contain_2">'
		+'                    	<section>'
		+'                        	<h3 class="jw_topbrp_1"><div class="jw_footer_title_1"><span>둘러보기</span></div></h3>'
		+'                        	<div style="margin-top: 16px">'
		+'                           		<ul class="jw_footer_ul_1">'
		+'                              	<li class="jw_footer_li_1">'
		                                   +'<div class="hy-dropdown"><span>신뢰와 안전</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div>'
		                                   +'</li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>여행 크래딧</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>Airbnb Citizen</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>출장 프로그램</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>가이드북</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>Airbnbmag</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>한국의 변경된 환불 정책</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'                           		</ul>'
		+'                        	</div>'
		+'                     	</section>'  
		+'                  	</div>'
		+'                  	<div class="jw_div_contain_2">'
		+'                    	<section>'
		+'                        	<h3 class="jw_topbrp_1"><div class="jw_footer_title_1"><span>둘러보기</span></div></h3>'
		+'                        	<div style="margin-top: 16px">'
		+'                           		<ul class="jw_footer_ul_1">'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>호스팅의 장점</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>호스팅의 기준</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>책임감 있는 호스트 되기</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                            <li class="jw_footer_li_1"><div class="hy-dropdown"><span>커뮤니티 센터</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'                           		</ul>'
		+'                        	</div>'
		+'                     	</section>'  
		+'                  	</div>'
		+'				</div>'
		+'				<div>'
		+'					<div style="margin-top: 48px; margin-bottom: 24px">'
		+'						<div style="margin-top: 16px; margin-bottom: 16px"><div class="jw_footer_hr"></div></div>'
		+'					</div>'
		+'				</div>'
		+'				<div class="jw_div_footer_5">'
		+'					<div class="jw_footer_6">'
		+'						<div itemscope="" itemtype="http://schema.org/Organization" class="jw_footer_6_1">'
		+'							<div class="jw_footer_bar">'
		+'								<div class="jw_footer_bar_1">'
		+'									<div style="margin-right: 8px;">'
		+'									<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: block; fill: rgb(118, 118, 118); height: 1.5em; width: 1.5em;"><path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>'
		+'									</div>'
		+'								</div>'
		+'								<div class="jw_footer_bar_1">'
		+'									<div class="jw_footer_bar_2">© Airbnb, Inc.</div>'
		+'								</div>'
		+'							</div>'
		+'						</div>'
		+'					</div>'
		+'					<div class="jw_footer_7">'
		+'						<ul class="jw_footer_ul_2">'
		+'		                    <li class="jw_footer_li_2"><div class="hy-dropdown"><span>이용약관</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                    <li class="jw_footer_li_2"><div class="hy-dropdown"><span>개인정보 보호정책</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'		                    <li class="jw_footer_li_2"><div class="hy-dropdown"><span>개인정보 보호정책</span><div class="hy-dropdown-content"><p>지원되지 않는 기능입니다.</p></div></div></li>'
		+'							<li class="jw_footer_li_3">'
		+'								<span class="jw_footer_icon"><a href="https://www.facebook.com/AirbnbKorea" target="_blank" rel="noopener noreferrer" class="jw_footer_icon_1" aria-expanded="false" aria-busy="false" itemprop="sameAs" style="padding: 0px;"><svg viewBox="0 0 32 32" role="img" aria-label="페이스북" focusable="false" style="display: block; fill: rgb(118, 118, 118); height: 1em; width: 1em;"><path fill-rule="evenodd" d="M8 14.408v-4.165c0-.424.35-.812.77-.812h2.519V7.347c0-4.84 2.484-7.311 7.42-7.347 1.645 0 3.219.212 4.692.636.455.141.63.424.595.883l-.56 4.062c-.035.178-.14.354-.315.531-.21.105-.42.176-.63.14-.875-.247-1.784-.352-2.799-.352-1.399 0-1.61.283-1.61 1.73v1.8H22.6c.42 0 .805.423.805.883l-.349 4.17c0 .422-.35.705-.77.705H18.08v16c0 .424-.349.812-.769.812h-5.213c-.42 0-.804-.388-.804-.812V15.185h-2.52A.781.781 0 0 1 8 14.408"></path></svg></a></span>'
		+'								<span class="jw_footer_icon"><a href="https://twitter.com/airbnb" target="_blank" rel="noopener noreferrer" class="jw_footer_icon_1" aria-expanded="false" aria-busy="false" itemprop="sameAs" style="padding: 0px;"><svg viewBox="0 0 32 32" role="img" aria-label="트위터" focusable="false" style="display: block; fill: rgb(118, 118, 118); height: 1em; width: 1em;"><path fill-rule="evenodd" d="M31 6.359c-1.16.493-2.32.821-3.546.952 1.293-.755 2.22-1.872 2.718-3.384a13.048 13.048 0 0 1-3.913 1.512c-1.226-1.282-2.75-1.939-4.51-1.939-3.413 0-6.167 2.728-6.167 6.115 0 .493.067.953.166 1.38-4.94-.23-9.513-2.596-12.664-6.378-.563.954-.861 1.972-.861 3.089 0 2.07 1.027 3.914 2.75 5.063-.995-.032-1.922-.295-2.816-.755v.066c0 2.89 2.12 5.424 4.94 5.982-.63.165-1.16.231-1.624.231-.298 0-.696-.033-1.127-.132a6.074 6.074 0 0 0 5.737 4.242c-2.22 1.742-4.775 2.63-7.658 2.63-.563 0-1.06-.034-1.425-.1 2.85 1.841 6 2.76 9.413 2.76 7.294 0 12.83-4.012 15.514-9.302 1.359-2.661 2.021-5.359 2.021-8.086v-.46c-.033-.165-.033-.296-.033-.329A12.663 12.663 0 0 0 31 6.36"></path></svg></a></span>'
		+'								<span class="jw_footer_icon"><a href="https://instagram.com/airbnb" target="_blank" rel="noopener noreferrer" class="jw_footer_icon_1" aria-expanded="false" aria-busy="false" itemprop="sameAs" style="padding: 0px;"><svg viewBox="0 0 24 24" role="img" aria-label="인스타그램" focusable="false" style="display: block; fill: rgb(118, 118, 118); height: 1em; width: 1em;"><path d="M23.094.906C22.489.301 21.767 0 20.922 0H3.078C2.233 0 1.511.301.906.906.301 1.511 0 2.233 0 3.078v17.844c0 .845.301 1.567.906 2.172.605.605 1.327.906 2.172.906h17.844c.845 0 1.567-.301 2.172-.906.605-.605.906-1.327.906-2.172V3.078c0-.845-.301-1.567-.906-2.172zM8.618 8.65c.943-.911 2.077-1.367 3.4-1.367 1.331 0 2.47.456 3.413 1.367.943.91 1.413 2.013 1.413 3.303 0 1.291-.473 2.393-1.413 3.304-.943.911-2.082 1.367-3.414 1.367-1.322 0-2.456-.456-3.399-1.367-.943-.91-1.413-2.013-1.413-3.304 0-1.29.47-2.392 1.413-3.303zm12.664 11.632c0 .27-.093.498-.277.681a.923.923 0 0 1-.671.275H3.632a.927.927 0 0 1-.681-.275.921.921 0 0 1-.274-.68V10.155H4.88a6.737 6.737 0 0 0-.314 2.047c0 2.001.73 3.708 2.187 5.119 1.457 1.413 3.213 2.118 5.266 2.118a7.5 7.5 0 0 0 3.749-.97 7.288 7.288 0 0 0 2.718-2.632 6.93 6.93 0 0 0 1-3.632c0-.708-.106-1.391-.314-2.048h2.109v10.124zm0-13.954c0 .301-.106.559-.314.767a1.046 1.046 0 0 1-.766.313h-2.719c-.303 0-.558-.105-.766-.313a1.046 1.046 0 0 1-.314-.767V3.75c0-.291.106-.543.314-.756.208-.213.465-.321.766-.321h2.719c.303 0 .558.108.766.32.208.214.314.466.314.757v2.58z" fill-rule="evenodd"></path></svg></a></span>'
		+'							</li>'
		+'						</ul>'
		+'					</div>'
		+'				</div>'
		+'			</div>'
		+'		</footer>'
		+'	</div>'
		+'</div>'
			+'</div>';}///111///
}
