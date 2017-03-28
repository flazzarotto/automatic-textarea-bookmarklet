    Element.prototype.hasClass = function (className) {
        return ( (" " + this.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1 );
    };

    Element.prototype.addClass = function (className) {
        this.className += " " + className;
    };

    Element.prototype.removeClass = function (className) {
        this.className = (" " + this.className + " ").replace(/[\n\t]/g, " ").replace(" " + className + " ", ' ').trim();
    };

    (function () {

        var body = document.querySelector('body');

        function codeLoader(scripts, callback) {
            var count = scripts.length;

            for (i in scripts) {
                var sc = document.createElement('script');
                sc.src = scripts[i];

                sc.addEventListener('load', function () {
                    count--;
                    if (!count) {
                        callback(Utils);
                    }
                });

                body.appendChild(sc);
            }


        }

        function Utils() {


            this.opts = [];

            this.acemode = "";

            this.init = function () {
                var tabsize = '4';
                var braceStyle = 'collapse';
                var detectPackers = true;
                var maxPreserveNewlines = '5';
                var keepArrayIndentation = false;
                var breakChainedMethods = true;
                var indentScripts = 'normal';
                var spaceBeforeConditional = true;
                var wrapLineLength = '0';
                var unescapeStrings = false;
                var jslintHappy = false;
                var endWithNewline = false;
                var indentInnerHtml = false;
                var commaFirst = false;
                var e4x = false;

                this.opts.indent_size = tabsize;
                this.opts.indent_char = this.opts.indent_size == 1 ? '\t' : ' ';
                this.opts.max_preserve_newlines = maxPreserveNewlines;
                this.opts.preserve_newlines = this.opts.max_preserve_newlines !== "-1";
                this.opts.keep_array_indentation = keepArrayIndentation;
                this.opts.break_chained_methods = breakChainedMethods;
                this.opts.indent_scripts = indentScripts;
                this.opts.brace_style = braceStyle;
                this.opts.space_before_conditional = spaceBeforeConditional;
                this.opts.unescape_strings = unescapeStrings;
                this.opts.jslint_happy = jslintHappy;
                this.opts.end_with_newline = endWithNewline;
                this.opts.wrap_line_length = wrapLineLength;
                this.opts.indent_inner_html = indentInnerHtml;
                this.opts.comma_first = commaFirst;
                this.opts.e4x = e4x;
            };

            this.init();


            this.any = function (a, b) {
                return a || b;
            };


            this.unpacker_filter = function (source) {
                var trailing_comments = '',
                    comment = '',
                    unpacked = '',
                    found = false;

                // cut trailing comments
                do {
                    found = false;
                    if (/^\s*\/\*/.test(source)) {
                        found = true;
                        comment = source.substr(0, source.indexOf('*/') + 2);
                        source = source.substr(comment.length).replace(/^\s+/, '');
                        trailing_comments += comment + "\n";
                    } else if (/^\s*\/\//.test(source)) {
                        found = true;
                        comment = source.match(/^\s*\/\/.*/)[0];
                        source = source.substr(comment.length).replace(/^\s+/, '');
                        trailing_comments += comment + "\n";
                    }
                } while (found);

                var unpackers = [P_A_C_K_E_R, Urlencoded, JavascriptObfuscator/*, MyObfuscate*/];
                for (var i = 0; i < unpackers.length; i++) {
                    if (unpackers[i].detect(source)) {
                        unpacked = unpackers[i].unpack(source);
                        if (unpacked != source) {
                            source = this.unpacker_filter(unpacked);
                        }
                    }
                }

                return trailing_comments + source;
            };


            this.beautify = function (source) {

                var opts = this.opts;

                if (this.looks_like_html(source)) {
                    output = html_beautify(source, opts);
                    this.acemode = "ace/mode/html";
                } else {
//                    if ($('#detect-packers').prop('checked')) {
//                        source = this.unpacker_filter(source);
//                    }
                    output = js_beautify(source, opts);
                    this.acemode = "ace/mode/javascript";
                }

                return output;
            };

            this.looks_like_html = function (source) {
                // <foo> - looks like html
                var trimmed = source.replace(/^[ \t\n\r]+/, '');
                return trimmed && (trimmed.substring(0, 1) === '<');
            };
        }

        var scs = [
            "https://bookmarklet.argus-lab.com/lib/beautify.js",
            "https://bookmarklet.argus-lab.com/lib/beautify-css.js",
            "https://bookmarklet.argus-lab.com/lib/beautify-html.js",
            "https://bookmarklet.argus-lab.com/lib/sanitytest.js",
            "https://bookmarklet.argus-lab.com/lib/beautify-javascript-tests.js",
            "https://bookmarklet.argus-lab.com/lib/beautify-css-tests.js",
            "https://bookmarklet.argus-lab.com/lib/beautify-html-tests.js",
            "https://bookmarklet.argus-lab.com/lib/javascriptobfuscator_unpacker.js",
            "https://bookmarklet.argus-lab.com/lib/urlencode_unpacker.js",
            "https://bookmarklet.argus-lab.com/lib/p_a_c_k_e_r_unpacker.js",
            "https://bookmarklet.argus-lab.com/lib/myobfuscate_unpacker.js",
            "https://bookmarklet.argus-lab.com/lib/ace.js"
        ];

        codeLoader(scs, function (Utils) {

            var Utils = new Utils();

            var style = document.createElement('style');
            var size = 24;
            style.innerHTML = ".ace_editor{min-height: 350px; resize: vertical;}" +
                ".btn-custom-editor{display:block; width: " + size + "px; height: " + size + "px; text-align: center; background: #535353; color: white;" +
                "border: 1px solid black; box-shadow: 0px 1px 1px white inset; border-radius: 3px; line-height: " + size + "px;" +
                "font-family: monospace; font-size: " + size + "px; text-decoration: none; margin: 5px; transform: rotateY(180deg);" +
                "transition: 0.3s ease box-shadow;}" +
                ".btn-custom-editor:active{box-shadow: 0px -1px 1px white inset; transition: 0.3s ease box-shadow;}";

            document.querySelector('head').append(style);

            var textareas = document.querySelectorAll('textarea');

            for (var i = 0; i < textareas.length; i++) {
                ta = textareas[i];
                ta.id = "ace_beautified_editor" + i;

                var btn = document.createElement('a');
                btn.className = "btn-custom-editor";
                btn.innerHTML = "✎";
                btn.title = "Formater le code et remplacer par un éditeur";
                btn.href = "#";

                if (ta.nextSibling) {
                    ta.parentNode.insertBefore(btn, ta.nextSibling);
                }
                else {
                    ta.parentNode.appendChild(btn);
                }

                btn.toggle = ta;

                btn.addEventListener('click', function () {

                    var ta = this.toggle;

                    if (!this.hasClass('active')) {

                        ta.value = Utils.beautify(ta.value);

                        this.editor = initEditor(ta, Utils.acemode);

                        this.addClass('active');
                    }
                    else {
                        if (this.editor && this.editor.element) {
                            this.editor.element.parentNode.removeChild(this.editor.element);
                            delete(this.editor);

                            ta.style.opacity = "";
                            ta.style.height = "";
                            ta.style.width = "";
                            ta.style.left = "";
                            ta.style.top = "";
                            ta.style.display = "";

                            ta.value = ta.value.replace(/>[\n\t ]+</g, '><').replace(/[\n\t ]+/g, ' ').trim();
                        }
                        this.removeClass('active');
                    }


                });

            }

            setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        });

        function initEditor(text, mode) {

            var div = document.createElement('div');
            div.id = "_" + text.id;
            text.parentNode.insertBefore(div, text.nextSibling);

            var editor = ace.edit(div.id);

            text.style.display = "none";

            editor.getSession().setValue(text.value);
            editor.getSession().on('change', function () {
                text.value = editor.getSession().getValue();
            });


            editor.getSession().setMode(mode);

            return {"editor": editor, "element": div};
        }


    })();
