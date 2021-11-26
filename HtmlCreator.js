const allAttributes = [
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "alt",
  "async",
  "autocomplete",
  "autofocus",
  "autoplay",
  "charset",
  "checked",
  "cite",
  "class",
  "cols",
  "colspan",
  "content",
  "contenteditable",
  "controls",
  "coords",
  "data",
  "data-*",
  "datetime",
  "default",
  "defer",
  "dir",
  "dirname",
  "disabled",
  "download",
  "draggable",
  "enctype",
  "for",
  "form",
  "formaction",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "http-equiv",
  "id",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "multiple",
  "muted",
  "name",
  "novalidate",
  "onabort",
  "onafterprint",
  "onbeforeprint",
  "onbeforeunload",
  "onblur",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "oncontextmenu",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onhashchange",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onmousedown",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmousewheel",
  "onoffline",
  "ononline",
  "onpageshow",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onsearch",
  "onseeked",
  "onseeking",
  "onselect",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "onunload",
  "onvolumechange",
  "onwaiting",
  "onwheel",
  "open",
  "optimum",
  "pattern",
  "placeholder",
  "poster",
  "preload",
  "readonly",
  "rel",
  "required",
  "reversed",
  "rows",
  "rowspan",
  "sandbox",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "span",
  "spellcheck",
  "src",
  "srcdoc",
  "srclang",
  "srcset",
  "start",
  "step",
  "style",
  "tabindex",
  "target",
  "title",
  "translate",
  "type",
  "usemap",
  "value",
  "width",
  "wrap"
]

/**HtmlCreator constructor
 *
 * @params {HtmlElement} elem The element you are wanting to create. Represented by a string (e.g. 'div') or an actual HtmlElement.
*/
function HtmlCreator(elem) {
  if (isNullOrUndefined(elem)) { return; }
  this.element = (elem instanceof HtmlElement) ? elem : document.createElement(elem);
};

/**A static method that calls the `HtmlCreator` constructor and returns achainable object. */
HtmlCreator.Create = function(elem) {
  return new HtmlCreator(elem);
};

/**Adds and Id attribute and overwrites any previous Id.
 *
 * @params Id {String} The Id that you would like to add to the element.
*/
HtmlCreator.prototype.Id = function(id) {
  this.element.id = id || '';
  return this;
};

/**Adds a single class to the element.
 *
 * @param {String} className - The name of the class you want to add to the element.
*/
HtmlCreator.prototype.Class = function(className) {
  if (isNullOrUndefined(className)) { return; }

  className && this.element.classList.add(className);
  return this;
};

/**Adds multiple classes to the element.
 *
 * @param  {...classNames} classNames - An array or set of comma-separated strings that
 * represent the class names you want to add.
 *
 * @example someElement.Classes(['class1', 'class2', 'class3']);
 * @example someElement.Classes('class1', 'class2', 'class3');
 */
HtmlCreator.prototype.Classes = function(...classNames) {
  if (isNullOrUndefined(classNames)) { return; }

  for (className of classNames) {
      this.Class(className);
  }

  return this;
};

/**Adds textContent to the element.
 *
 * @params {String} text - The text that you would like to be the textContent.
*/
HtmlCreator.prototype.TextContent = function(text = '') {
  this.element.textContent = text;
  return this;
};

// {
//     elem: 'div',
//     id: 'testId',
//     classes: ['class1', 'class2'],
//     textContent: 'textContentStuff',
// }
//
// Add single child element and append to parent
HtmlCreator.prototype.AddChild = function(args = {}) {
  const child = HtmlCreator.Create(args.elem)
    .Id(args.id)
    .Classes(args.classes) // addClasses can take an array or a comma-separated list
    .TextContent(args.textContent);

  this.Append(child);

  return this;
};

// Add multiple child elements
// Takes array of objects
HtmlCreator.prototype.AddChildren = function(children = []) {
  for (child of children) {
      this.AddChild(child);
  }

  return this;
};

Html.Element.prototype.AddAttribute = function(attribute, value) {
    // Todo, implement attributeIsOfType
    if (!attributeIsOfType(attribute, allAttributes)) { return; }

    this.element.setAttribute(attribute, value);

    return this;
}

Html.Element.prototype.DataAttribute = function(dataAttribute, value) {
    if (isNullOrUndefined(dataAttribute) || isNullOrUndefined(value)) { return; }

    this.element.setAttribute(dataAttribute, value);

    return this;
}

/**Since this is truly a global function, there is nothing to check. */
Html.Element.prototype.Draggable = function() {
    this.element.draggable = true;

    return this;
}

Html.Element.prototype.OnClick = function(functionReference) {
    if (isNullOrUndefined(functionReference)) { return; }
    // TODO: Check for the shape of a function call with regex.

    this.element.setAttribute('onclick', functionReference);

    return this;
}

// Shared Attributes (but not global)
Html.Element.prototype.Required = function() {
    // if input, select, textarea
    const types = ['input', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.required = true;

    return this;
}


Html.Element.prototype.Checked = function() {
    const types = ['input'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.checked = true;

    return this;
}


Html.Element.prototype.AltText = function(altText = '') {
    const types = ['area', 'img', 'input'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.alt = altText;
}

Html.Element.prototype.Autofocus = function() {
    // button, input, select, textarea 
    const types = ['button', 'input', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.autofocus = true;

    return this;
}

//_blank, _parent, _self, _top
Html.Element.prototype.Target = function(target = '') {
    const types = ['a', 'area', 'base', 'form'];
    const targets = ['_blank', '_parent', '_self', '_top'];

    if (!htmlIsOfType(this.element, types)) { return; }
    if (!targets.includes(target)) { return; }

    this.element.target = target;

    return this;
}

Html.Element.prototype.Rel = function(rel = '') {
    const types = ['a', 'area', 'form', 'link'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.rel = rel;

    return this;
}

Html.Element.prototype.Disabled = function() {
    const types = ['button', 'fieldset', 'input', 'optgroup', 'option', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.setAttribute('disabled', true);

    return this;
}

Html.Element.prototype.For = function(forAttributeValue = '') {
    const types = ['label', 'output'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.htmlFor = forAttributeValue;

    return this;
}

Html.Element.prototype.Src = function(src  = '') {
    const types = ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.src = src;

    return this;
}

Html.Element.prototype.Value = function(value = '') {
    const types = ['button', 'input', 'li', 'option', 'meter', 'progress', 'param'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.value = value;

    return this;
}

Html.Element.prototype.Href = function(href = '') {
    const types = ['a', 'area', 'base', 'link'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.href = href;

    return this;
}

Html.Element.prototype.Placeholder = function(placeholder = '') {
    const types = ['input', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.placeholder = placeholder;

    return this;
}

Html.Element.prototype.Max = function(max = '') {
    const types = ['input', 'meter', 'progress'];
    if(!htmlIsOfType(this.element, types)) { return; }

    this.element.max = max;

    return this;
}

Html.Element.prototype.MaxLength = function(maxLength = '') {
    const types = ['input', 'textarea'];
    if(!htmlIsOfType(this.element, types)) { return; }

    this.element.maxLength = maxLength;

    return this;
}

Html.Element.prototype.Min = function(min = '') {
    const types = ['input', 'meter'];
    if(!htmlIsOfType(this.element, types)) { return; }

    this.element.min = min

    return this;
 }

// Select elements
Html.Element.prototype.Option = function() {
    // only for select
}
// Html.Element.prototype.Options = function() { // only for select }
// Html.Element.prototype.Selected = function() { // only for select }
// Html.Element.prototype.OptGroup = function(optgroupLabelName, [options]) { // only for select }

/**Sets the `name` attribute on a variety of elements.
 *
 * @param action {String} The value of the `name` attribute, e.g. 'MyName'.
*/
HtmlCreator.prototype.Name = function(name = '') {
    const types = ['button', 'fieldset', 'form', 'iframe', 'input', 'map', 'meta', 'object', 'output', 'param', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.name = name;

    return this;
}

// Forms

/**Sets the `action` attribute on a `form` element.
 *
 * @param action {String} The value of the `action` attribute, e.g. 'www.mysite.com'.
*/
HtmlCreator.prototype.Action = function(action = '') {
    if (!htmlIsOfType(this.element, ['form'])) { return; };

    this.element.action = action.toLowerCase();

    return this;
}

/**Sets the `method` attribute on a `form` element.
 *
 * @param formElement {HtmlElement} The form element you are setting the `method` attribute on.
 * @param method {String} The value of the `action` attribute, e.g. 'post'.
 */
HtmlCreator.prototype.Method = function(method = '') {
    if (!htmlIsOfType(this.element, ['form'])) { return; }

    this.element.method = method.toLowerCase();

    return this;
 }

// Appends an HtmlElement's inner element property
// to the current HtmlElement. Not chainable,
// but would be if you add return this.
HtmlCreator.prototype.Append = function(HtmlCreator) {
  this.element.appendChild(HtmlCreator.element);
  return this;
};

// Appends the current HtmlElement's inner
// element property to a DOM element.
// Return this to make chainable.
HtmlCreator.prototype.AppendTo = function(domElement) {
  domElement.appendChild(this.element);
  return this;
};

// Private Functions

/**A function that determines if the nodeName of the element passed in has the expected type.
 *
 * This is helpful because a lot of the functions that are part of this library
 * only apply to specific elements. Take for instance the `form` element.
 * This element has an `action` attribute. No other node type has that  attribute.

* So, that being the case, we need to check at the beginning of each special function
 * to see if the node is of the correct type. If not, we return false and take no further
 * action in the calling function.
 *
 * @param el {HtmlElement} - The element you are checking the nodeName of.
 * @param types {array} - An array of possible types to check the el's nodeName against.
 *
 * @returns boolean
 */
function htmlIsOfType(el, types = []) {
    if (isNullOrUndefined(el)) { return; }

    const nodeType = el.nodeName.toLowerCase();
    const lowerTypes = types.map(t => t.toLowerCase());

    const doesIncludeType = lowerTypes.includes(nodeType);

    if (!doesIncludeType) { return false; }

    return true;
}

function attributeIsOfType() { // todo }

/**Checks if the thing passed in is either null or undefined.
 *
 * @param {any} arg Thing thing you are checking for null-ness or undefined-ness.
 *
 * @returns {boolean} A boolean that indicates if the argument is null or undefined.
*/
function isNullOrUndefined(arg) {
    if (isNull(arg) || isUndefined(arg)) {
        return true;
    }

    return false;
}

/**Checks if the thing passed in is null.
 *
 * @param {any} arg Thing thing you are checking for null-ness.
 *
 * @returns {boolean} A boolean that indicates if the argument is null.
*/
function isNull(arg) {
    if (arguments.length < 1) {
        return undefined;
    } else if (arg === null) {
        return true;
    } else {
        return false;
    }
}

/**Checks to see if the supplied argument is equal to undefined.
 *
 * NOTE: Supports much older browsers that allow redefining 'undefined' (hence, the reasoning behind checking for `void(0)`).
 * @param  {} arg - The thing you are checking for undefined-ness.
 * @returns {boolean} - A boolean that indicates if the argument is undefined.
 */
function isUndefined(arg) {
    if (arg === undefined) {
        return true;
    } else if (arg === void(0)) {
        return true;
    } else if (typeof arg === 'undefined'){
        return true;
    } else {
        return false;
    }
}
