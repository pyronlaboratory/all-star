var kofiwidget2 = kofiwidget2 || (function() {
var style = "";
var html = "";
var color = "";
var text = "";
var id = "";
return {
    /**
     * @description Generates HTML and CSS code for a Ko-fi donation button. It takes
     * three parameters: text, color, and ID, and uses them to create a customizable
     * button with a customizable background color and text.
     *
     * @param {string} pText - Used to specify the text to be displayed on the Ko-fi button.
     *
     * @param {string} pColor - Used to specify the background color of the "Ko-fi" button.
     *
     * @param {string} pId - Used to identify the Ko-fi user and is inserted into the
     * generated HTML code.
     */
    init: function(pText, pColor, pId) {
        color = pColor;
        text = pText;
        id = pId;
        style = "img.kofiimg{display: initial!important;vertical-align:middle;height:25px!important;width:35px!important;padding-top:0!important;padding-bottom:0!important;border:none;margin-top:0;margin-right:5px!important;margin-left:0!important;margin-bottom:3px!important;content:url('https://storage.ko-fi.com/cdn/cup-border.png')}.kofiimg:after{vertical-align:middle;height:25px;padding-top:0;padding-bottom:0;border:none;margin-top:0;margin-right:6px;margin-left:0;margin-bottom:4px!important;content:url('https://storage.ko-fi.com/cdn/whitelogo.svg')}.btn-container{display:inline-block!important;white-space:nowrap;min-width:160px}span.kofitext{color:#fff !important;letter-spacing: -0.15px!important;text-wrap:none;vertical-align:middle;line-height:33px !important;padding:0;text-align:center;text-decoration:none!important; text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);}.kofitext a{color:#fff !important;text-decoration:none:important;}.kofitext a:hover{color:#fff !important;text-decoration:none}a.kofi-button{box-shadow: none;line-height:36px!important;min-width:35vw;display:inline-block!important;background-color:#29abe0;padding:0.5em 1.5em !important;text-align:center !important;border-radius:30px;color:#fff;cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff !important;font-family:'Montserrat'!important;text-decoration:none;text-shadow:none;font-weight:600!important;font-size:1.1em !important}a.kofi-button:visited{color:#fff !important;text-decoration:none !important}a.kofi-button:hover{opacity:.85;color:#f5f5f5 !important;text-decoration:none !important}a.kofi-button:active{color:#f5f5f5 !important;text-decoration:none !important}.kofitext img.kofiimg {display: initial;animation: kofi-wiggle 3s infinite;}";
        style = style + "@keyframes kofi-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}";
        style = "<style>" + style + "</style>";
        html = "<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
        html += '<div class=btn-container><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:[color];" href="https://ko-fi.com/[id]" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg"/>[text]</span></a></div>';
    },
    /**
     * @description Constructs an HTML string by combining a predefined style with dynamic
     * text and attributes. It replaces placeholders in the HTML string with actual values,
     * such as color, text, and id, before returning the final HTML content.
     *
     * @returns {string} A string containing HTML markup with specified color, text, and
     * id attributes replaced.
     */
    getHTML: function() {
        var rtn = style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id);
        return rtn;
    },
    /**
     * @description Replaces placeholders in a string template with actual values and
     * writes the resulting HTML to the document, allowing dynamic rendering of text with
     * specified color, text content, and ID.
     */
    draw: function() {
        document.writeln(style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id));
    }
};
}());