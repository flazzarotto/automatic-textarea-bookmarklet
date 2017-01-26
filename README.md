# README

Bookmark this link (drag an drop it in your bookmarks bar):

[Flazzarotto Automatic Textarea Editor](javascript:void%20function(\){Element.prototype.hasClass=function(t\){return(%22%20%22+this.className+%22%20%22\).replace(/[\n\t]/g,%22%20%22\).indexOf(%22%20%22+t+%22%20%22\)%3E-1},Element.prototype.addClass=function(t\){this.className+=%22%20%22+t},Element.prototype.removeClass=function(t\){this.className=(%22%20%22+this.className+%22%20%22\).replace(/[\n\t]/g,%22%20%22\).replace(%22%20%22+t+%22%20%22,%22%20%22\).trim(\)},function(\){function%20t(t,a\){var%20o=t.length;for(i%20in%20t\){var%20r=document.createElement(%22script%22\);r.src=t[i],r.addEventListener(%22load%22,function(\){o--,o||a(e\)}\),s.appendChild(r\)}}function%20e(\){this.opts=[],this.acemode=%22%22,this.init=function(\){var%20t=%224%22,e=%22collapse%22,a=%225%22,s=!1,o=!0,i=%22normal%22,r=!0,n=%220%22,l=!1,c=!1,u=!1,h=!1,m=!1,p=!1;this.opts.indent_size=t,this.opts.indent_char=1==this.opts.indent_size%3F%22%22:%22%20%22,this.opts.max_preserve_newlines=a,this.opts.preserve_newlines=%22-1%22!==this.opts.max_preserve_newlines,this.opts.keep_array_indentation=s,this.opts.break_chained_methods=o,this.opts.indent_scripts=i,this.opts.brace_style=e,this.opts.space_before_conditional=r,this.opts.unescape_strings=l,this.opts.jslint_happy=c,this.opts.end_with_newline=u,this.opts.wrap_line_length=n,this.opts.indent_inner_html=h,this.opts.comma_first=m,this.opts.e4x=p},this.init(\),this.any=function(t,e\){return%20t||e},this.unpacker_filter=function(t\){var%20e=%22%22,a=%22%22,s=%22%22,o=!1;do%20o=!1,/^\s*\/\*/.test(t\)%3F(o=!0,a=t.substr(0,t.indexOf(%22*/%22\)+2\),t=t.substr(a.length\).replace(/^\s+/,%22%22\),e+=a+%22\n%22\):/^\s*\/\//.test(t\)%26%26(o=!0,a=t.match(/^\s*\/\/.*/\)[0],t=t.substr(a.length\).replace(/^\s+/,%22%22\),e+=a+%22\n%22\);while(o\);for(var%20i=[P_A_C_K_E_R,Urlencoded,JavascriptObfuscator],r=0;r%3Ci.length;r++\)i[r].detect(t\)%26%26(s=i[r].unpack(t\),s!=t%26%26(t=this.unpacker_filter(s\)\)\);return%20e+t},this.beautify=function(t\){var%20e=this.opts;return%20this.looks_like_html(t\)%3F(output=html_beautify(t,e\),this.acemode=%22ace/mode/html%22\):(output=js_beautify(t,e\),this.acemode=%22ace/mode/javascript%22\),output},this.looks_like_html=function(t\){var%20e=t.replace(/^[%20\t\n\r]+/,%22%22\);return%20e%26%26%22%3C%22===e.substring(0,1\)}}function%20a(t,e\){var%20a=document.createElement(%22div%22\);a.id=%22_%22+t.id,t.parentNode.insertBefore(a,t.nextSibling\);var%20s=ace.edit(a.id\);return%20t.style.display=%22none%22,s.getSession(\).setValue(t.value\),s.getSession(\).on(%22change%22,function(\){t.value=s.getSession(\).getValue(\)}\),s.getSession(\).setMode(e\),{editor:s,element:a}}var%20s=document.querySelector(%22body%22\),o=[%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/beautify.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/beautify-css.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/beautify-html.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/sanitytest.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/beautify-javascript-tests.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/beautify-css-tests.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/beautify-html-tests.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/javascriptobfuscator_unpacker.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/urlencode_unpacker.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/p_a_c_k_e_r_unpacker.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/myobfuscate_unpacker.js%22,%22https://raw.githubusercontent.com/flazzarotto/automatic-textarea-bookmarklet/master/lib/ace.js%22];t(o,function(t\){var%20t=new%20t,e=document.createElement(%22style%22\),s=24;e.innerHTML=%22.ace_editor{min-height:%20350px;%20resize:%20vertical;}.btn-custom-editor{display:block;%20width:%20%22+s+%22px;%20height:%20%22+s+%22px;%20text-align:%20center;%20background:%20%23535353;%20color:%20white;border:%201px%20solid%20black;%20box-shadow:%200px%201px%201px%20white%20inset;%20border-radius:%203px;%20line-height:%20%22+s+%22px;font-family:%20monospace;%20font-size:%20%22+s+%22px;%20text-decoration:%20none;%20margin:%205px;%20transform:%20rotateY(180deg\);transition:%200.3s%20ease%20box-shadow;}.btn-custom-editor:active{box-shadow:%200px%20-1px%201px%20white%20inset;%20transition:%200.3s%20ease%20box-shadow;}%22,document.querySelector(%22head%22\).append(e\);for(var%20o=document.querySelectorAll(%22textarea%22\),i=0;i%3Co.length;i++\){ta=o[i],ta.id=%22ace_beautified_editor%22+i;var%20r=document.createElement(%22a%22\);r.className=%22btn-custom-editor%22,r.innerHTML=%22%E2%9C%8E%22,r.title=%22Formater%20le%20code%20et%20remplacer%20par%20un%20%C3%A9diteur%22,r.href=%22%23%22,ta.nextSibling%3Fta.parentNode.insertBefore(r,ta.nextSibling\):ta.parentNode.appendChild(r\),r.toggle=ta,r.addEventListener(%22click%22,function(\){var%20e=this.toggle;this.hasClass(%22active%22\)%3F(this.editor%26%26this.editor.element%26%26(this.editor.element.parentNode.removeChild(this.editor.element\),delete%20this.editor,e.style.opacity=%22%22,e.style.height=%22%22,e.style.width=%22%22,e.style.left=%22%22,e.style.top=%22%22,e.style.display=%22%22,e.value=e.value.replace(/%3E[\n\t%20]+%3C/g,%22%3E%3C%22\).replace(/[\n\t%20]+/g,%22%20%22\).trim(\)\),this.removeClass(%22active%22\)\):(e.value=t.beautify(e.value\),this.editor=a(e,t.acemode\),this.addClass(%22active%22\)\)}\)}setInterval(function(\){window.dispatchEvent(new%20Event(%22resize%22\)\)},1e3\)}\)}(\)}(\);)
