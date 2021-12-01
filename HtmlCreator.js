/**A collection of all valid HTML Attributes.
 * Courtesy of https://www.w3schools.com/tags/ref_attributes.asp.
 */
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

// ***********************************
// Constructors
// ***********************************

/**HtmlCreator constructor.
 * The HtmlCreator object provides functionality for all global or mostly global HTML element attributes.
 *
 * For instance, you will find a lot of functions that set attributes such as id, class, innerText, innerHTML, etc.
 *
 * You will _not_ find attributes that are related to very specific elements, like the `action` attribute on the `form` element.
 *
 * @params {HtmlElement} elem The element you are wanting to create. Represented by a string (e.g. 'div') or an actual HtmlElement.
*/
function HtmlCreator(elem) {
    if (isNullOrUndefined(elem)) { return; }

    this.element = (elem instanceof HTMLElement) ? elem : document.createElement(elem);
};

/**The HtmlAudioCreator object provides specific functionality related to `<audio>` elements.
 *
 * Inherets from the `HtmlCreator` object.
 *
 * @param {String} elem - The name of the element.
 */
function HtmlAudioCreator(elem) {
    if (isNullOrUndefined(elem)) { return; }

    HtmlCreator.call(this, elem);

    this.element = document.createElement('audio');
}

/**The HtmlFormCreator object provides specific functionality related to `<form>` elements.
 *
 * Inherets from the `HtmlCreator` object.
 *
 * @param {String} elem - The name of the element.
 */
function HtmlFormCreator(elem) {
    if (isNullOrUndefined(elem)) { return; }

    HtmlCreator.call(this, elem);

    this.element = document.createElement('form');
}

/**The HtmlSelect object provides specific functionality related to `<select>` elements.
 *
 * Inherets from the `HtmlCreator` object.
 *
 * @param {String} elem - The name of the element.
 */
function HtmlSelectCreator(elem) {
    if (isNullOrUndefined(elem)) { return; }

    HtmlCreator.call(this, elem);

    this.element = document.createElement('select');
}

/**The HtmlVideoCreator object provides specific functionality related to `<video>` elements.
 *
 * Inherets from the `HtmlCreator` object.
 *
 * @param {String} elem - The name of the element.
 */
function HtmlVideoCreator(elem) {
    if (isNullOrUndefined(elem)) { return; }

    HtmlCreator.call(this, elem);

    this.element = document.createElement('video');
}

// ***********************************
// Static Create Functions
// ***********************************

/**A static method that calls the `HtmlCreator` constructor and returns a chainable object.
 *
 * @params {String} - The name of the element you want to create.
 *
 * @returns `HtmlCreator`
*/
HtmlCreator.Create = function(elem) {
    if (isNullOrUndefined(elem)) { return; }

    return new HtmlCreator(elem.toLowerCase());
};

/**A static method that calls the `HtmlFormCreator` constructor and returns a chainable object. */
HtmlFormCreator.Create = function() {
    return new HtmlFormCreator('form');
}

/**A static method that calls the `HtmlSelectCreator` constructor and returns a chainable object. */
HtmlSelectCreator.Create = function() {
    return new HtmlSelectCreator('select');
}

/**A static method that calls the `HtmlAudioCreator` constructor and returns a chainable object. */
HtmlAudioCreator.Create = function() {
    return new HtmlAudioCreator('audio');
}

/**A static method that calls the `HtmlVideoCreator` constructor and returns a chainable object. */
HtmlVideoCreator.Create = function() {
    return new HtmlVideoCreator('video');
}

Object.setPrototypeOf(HtmlAudioCreator.prototype, HtmlCreator.prototype);
Object.setPrototypeOf(HtmlFormCreator.prototype, HtmlCreator.prototype);
Object.setPrototypeOf(HtmlSelectCreator.prototype, HtmlCreator.prototype);
Object.setPrototypeOf(HtmlVideoCreator.prototype, HtmlCreator.prototype);

// ***********************************
// Non-Attribute Related Functionality
// ***********************************

/**Appends any `HtmlElement` as a child of the current element.
 *
 * @param {HtmlElement} elem The element you want to add to this element.
 */
HtmlCreator.prototype.AddChild = function(elem) {
    if (isNullOrUndefined(elem)) { return; }

    this.Append(elem);

    return this;
};

/**Appends an array of any `HtmlElement`s to the current element.
 *
 * @param {Array} children An array of `HtmlElement`s that will be appended as children to the current element.
 */
HtmlCreator.prototype.AddChildren = function(children = []) {
    if (isNullOrUndefined(children)) { return; }

    for (child of children) {
        this.AddChild(child);
    }

    return this;
};

// Appends an HtmlElement's inner element property
// to the current HtmlElement.
HtmlCreator.prototype.Append = function(htmlElement) {
    if (isNullOrUndefined(htmlElement)) { return; }

    this.element.appendChild(htmlElement);

    return this;
};

/**Appends this element to a given `domElement`.
 *
 * @param {HTMLElement} domElement - The DOM element that you want to append this node to.
 */
HtmlCreator.prototype.AppendTo = function(domElement) {
    if (isNullOrUndefined(domElement)) { return; }

    domElement.appendChild(this.element);

    return this;
};

// ***********************************
// Global Attributes
// ***********************************

/**Adds and Id attribute and overwrites any previous Id.
 *
 * @params Id {String} The Id that you would like to add to the element.
*/
HtmlCreator.prototype.Id = function(id) {
    if (isNullOrUndefined(id)) { return; }

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

/**Sets the textContent property of the node.
 *
 * @params {String} text - The text that you would like to be the textContent.
*/
HtmlCreator.prototype.TextContent = function(text = '') {
    if (isNullOrUndefined(text)) { return; }

    this.element.textContent = text;

    return this;
};

/**Sets the innerText property of the node.
 *
 * @param {String} innerText - The value you would like to be the innerText.
 */
HtmlCreator.prototype.InnerText = function(innerText = '') {
    if (isNullOrUndefined(innerText)) { return; }

    this.element.innerText = innerText;

    return this;
}

/**Sets the innertHTML property of the node.
 * @param {String} innerHtml - The value of the innerHTML you want to set.
 */
HtmlCreator.prototype.InnerHtml = function(innerHtml = '') {
    if (isNullOrUndefined(innerHtml)) { return; }

    this.element.innerHTML = innerHtml;

    return this;
}

/**Sets any attribute as long as it is a valid attribute.
 *
 * @param {String} attribute - The attribute you want to set.
 * @param {String} value - The value you want to set the attribute to.
 */
HtmlCreator.prototype.AddAttribute = function(attribute, value) {
    if (isNullOrUndefined(attribute) || isNullOrUndefined(value)) { return; }
    if (!attributeExists(attribute)) { return; }

    this.element.setAttribute(attribute, value);

    return this;
}

/**Sets both the name and the value of the `data` attribute.
 *
 * @param {String} dataAttribute The `data` property name value, e.g. `data-some-string='string'`.
 * @param {*} value The value of the `data` property.
 */
HtmlCreator.prototype.DataAttribute = function(dataAttribute, value) {
    if (isNullOrUndefined(dataAttribute) || isNullOrUndefined(value)) { return; }

    this.element.setAttribute(dataAttribute, value);

    return this;
}

/**Activates the `draggable` attribute and an element, i.e. sets `draggable` to `true`. */
HtmlCreator.prototype.Draggable = function() {
    this.element.draggable = true;

    return this;
}

/**Sets a value for the `onclick` attribute. Returns silently if the param is not in the shape of a JS function call.
 *
 * @param {String} f - The function call, e.g. 'someFunction(someParam, anotherParam)'.
 */
HtmlCreator.prototype.OnClick = function(f) {
    if (isNullOrUndefined(f)) { return; }

    const isShapeOfFunction = isShapeOfFunction(f);

    if (isShapeOfFunction) {
        this.element.setAttribute('onclick', f);
    } else {
        return;
    }

    return this;
}

// ***********************************
// Shared Attributes (but not global)
// ***********************************

/**Sets the `required` attribute to `true`. */
HtmlCreator.prototype.Required = function() {
    const types = ['input', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.required = true;

    return this;
}

/**Sets the `checked` attribute to `true`.
 *
 * For use with the `<input>` element.
 */
HtmlCreator.prototype.Checked = function() {
    const types = ['input'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.checked = true;

    return this;
}

/**Sets the value of the `alt` attribute.
 *
 * For use with the `<area>`, `<img>`, and `<input>` elements.
 *
 * @param {String} altText The value of the `alt` attribute.
 */
HtmlCreator.prototype.AltText = function(altText = '') {
    if (isNullOrUndefined(altText)) { return; }

    const types = ['area', 'img', 'input'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.alt = altText;
}

/**Sets the `autofocus` property to `true`.
 *
 * For use with the `<button>`, `<input>`, `<select>` and `<textarea>` elements.
 */
HtmlCreator.prototype.Autofocus = function() {
    const types = ['button', 'input', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.autofocus = true;

    return this;
}

/**Sets the value of the `target` attribute.
 *
 * Ensures that only `_blank`, `_parent`, `_self`, and `_top` can be used as the value of `target` attribute.
 *
 * For use with the `<a>`, `<area>`, `<base>` and `<form>` elements.
 *
 * @param {String} target The value of the `target` attribute.
 */
HtmlCreator.prototype.Target = function(target = '') {
    if (isNullOrUndefined(target)) { return; }

    const types = ['a', 'area', 'base', 'form'];
    const targets = ['_blank', '_parent', '_self', '_top'];

    if (!htmlIsOfType(this.element, types)) { return; }
    if (!targets.includes(target)) { return; }

    this.element.target = target;

    return this;
}

/**Sets the value of the `rel` attribute.
 * 
 * For use with the `<a>`, `<area>`, `<form>`, and `<link>` elements. 
 * 
 * @param {String} rel The value of the `rel` attribute.
 */
HtmlCreator.prototype.Rel = function(rel = '') {
    if (isNullOrUndefined(rel)) { return; }

    const types = ['a', 'area', 'form', 'link'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.rel = rel;

    return this;
}

/**Sets the value of the `disabled` attribute to `true`.
 * 
 * For use with the `<button>`, `<fieldset>`, `<input>`, `<optgroup>`, `<option>`, `<select>`, and `<textarea>` elements. 
*/
HtmlCreator.prototype.Disabled = function() {
    const types = ['button', 'fieldset', 'input', 'optgroup', 'option', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.setAttribute('disabled', true);

    return this;
}

/**Sets the value of the `for` attribute.
 *
 * For the `<label>` and `<output>` elements.
 *
 * @param {String} forAttributeValue - The value of the `for` attribute.
 */
HtmlCreator.prototype.For = function(forAttributeValue = '') {
    if (isNullOrUndefined(forAttributeValue)) { return; }

    const types = ['label', 'output'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.htmlFor = forAttributeValue;

    return this;
}

/**Sets the `src` attribute.
 *
 * For use with the `<audio>`, `<embed>`, `<iframe>`, `<img>`, `<input>`, `<script>`, `<source>`, `<track>`, and `<video> elements.
 *
 * @param {String} src - The value of the `src` attribute.
 */
HtmlCreator.prototype.Src = function(src  = '') {
    if (isNullOrUndefined(src)) { return; }

    const types = ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.src = src;

    return this;
}

/**Sets the `value` attribute.
 *
 * For use with the `<button>`, `<input>`, `<li>`, `<option>`, `<meter>`, `<progress>`, and `<param>` elements.
 *
 * @param {String} value - The value of the `value` attribute.
 */
HtmlCreator.prototype.Value = function(value = '') {
    if (isNullOrUndefined(value)) { return; }

    const types = ['button', 'input', 'li', 'option', 'meter', 'progress', 'param'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.value = value;

    return this;
}

/**Sets the `href` attribute.
 *
 * For use with the `<a>`, `<area>`, `<base>`, and `<link>` elements.
 *
 * @param {String} href - The value of the `href` attribute.
 */
HtmlCreator.prototype.Href = function(href = '') {
    if (isNullOrUndefined(href)) { return; }

    const types = ['a', 'area', 'base', 'link'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.href = href;

    return this;
}

/**Sets the `placeholder` attribute.
 *
 * For use with the `<input>` and `<textarea>` elements.
 *
 * @param {String} placeholder - The value of the `placeholder` attribute
 */
HtmlCreator.prototype.Placeholder = function(placeholder = '') {
    if (isNullOrUndefined(placeholder)) { return; }

    const types = ['input', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.placeholder = placeholder;

    return this;
}

/**Sets the `max` attribute.
 *
 * For use with the `<input>`, `<meter>`, and `<progress>` elements.
 *
 * @param {String} max - The value of the `max` attribute.
 */
HtmlCreator.prototype.Max = function(max = '') {
    if (isNullOrUndefined(max)) { return; }

    const types = ['input', 'meter', 'progress'];
    if(!htmlIsOfType(this.element, types)) { return; }

    this.element.max = max;

    return this;
}

/**Sets the `maxLength` attribute.
 *
 * For use with the `<input>` and `<textarea>` elements.
 *
 * @param {String} maxLength - The value of the `maxLength` attribute.
 *
 */
HtmlCreator.prototype.MaxLength = function(maxLength = '') {
    if (isNullOrUndefined(maxLength)) { return; }

    const types = ['input', 'textarea'];
    if(!htmlIsOfType(this.element, types)) { return; }

    this.element.maxLength = maxLength;

    return this;
}

/**Sets the `min` attribute.
 *
 * For use with the `<input>` and `<meter>` elements.
 *
 * @param {String} min - The value of the `min` attribute.
 */
HtmlCreator.prototype.Min = function(min = '') {
    if (isNullOrUndefined(min)) { return; }

    const types = ['input', 'meter'];
    if(!htmlIsOfType(this.element, types)) { return; }

    this.element.min = min

    return this;
 }

/**Sets the `name` attribute on a variety of elements.
 *
 * @param action {String} The value of the `name` attribute, e.g. 'MyName'.
*/
HtmlCreator.prototype.Name = function(name = '') {
    if (isNullOrUndefined(name)) { return; }

    const types = ['button', 'fieldset', 'form', 'iframe', 'input', 'map', 'meta', 'object', 'output', 'param', 'select', 'textarea'];
    if (!htmlIsOfType(this.element, types)) { return; }

    this.element.name = name;

    return this;
}

// ***********************
// Select Elements
// ***********************

/**Creates an `<option>` element and appends it to the outer `<select>`.
 *
 * Only works in the context of having created a `<select>` first and then chaining the `.Option()` call to it.
 *
 * @param {String} value The value of the `value` attribute.
 * @param {Boolean} isSelected Indicates whether or not the option should be selected.
 */
HtmlSelectCreator.prototype.Option = function(value, isSelected) {
    if (isNullOrUndefined(value) || isNullOrUndefined(isSelected)) { return; }

    const option = HtmlCreator.Create('option');

    option.element.value = value;
    option.element.selected = isSelected;

    // Append to the outer `<select>`.
    option.AppendTo(this.element);

    return this;
}

/**Creates multiple `<option>` elements and appends them to the outer select.
 *
 * @param {Array} options An array of objects with two keys: `value` and `isSelected`.
 *
 * @example HtmlSelectCreator.Create().Options({value: 'test', isSelected: true}, {value='test2', isSelected: false})
 */
HtmlSelectCreator.prototype.Options = function(...options) {
	if (isNullOrUndefined(options)) { return; }

	for (option of options) {
		this.Option(option.value, option.isSelected);
	}

	return this;
}

// let select = HtmlSelectCreator.Create().OptGroup('testLabel', false, {value: 'test', isSelected: true}, {value: 'test2', isSelected: false})
HtmlSelectCreator.prototype.OptGroup = function(label, disabled, ...options) {
	if (isNullOrUndefined(label) || isNullOrUndefined(disabled)) { return; }

	const optgroup = HtmlCreator.Create('optgroup');

	optgroup.label = label;
	optgroup.disabled = disabled;

	let opt;
	for (option of options) {
		opt = this.Option(option.value, option.isSelected);
		opt.AppendTo(optgroup);
	}

	optgroup.AppendTo(this.element);

	return this;
}

// ***********************
// Forms
// ***********************

/**Sets the `action` attribute on a `form` element.
 *
 * @param action {String} The value of the `action` attribute, e.g. 'www.mysite.com'.
*/
HtmlFormCreator.prototype.Action = function(action = '') {
    if (isNullOrUndefined(action)) { return; }

    if (!htmlIsOfType(this.element, ['form'])) { return; };

    this.element.action = action.toLowerCase();

    return this;
}

/**Sets the `method` attribute on a `form` element.
 *
 * @param formElement {HtmlElement} The form element you are setting the `method` attribute on.
 * @param method {String} The value of the `action` attribute, e.g. 'post'.
 */
 HtmlFormCreator.prototype.Method = function(method = '') {
    if (isNullOrUndefined(method)) { return; }

    if (!htmlIsOfType(this.element, ['form'])) { return; }

    this.element.method = method.toLowerCase();

    return this;
 }

// ***********************
// Private Functions
// ***********************

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
 * @returns boolean - A boolean that indicates if the element passed in is of a certain type.
 */
function htmlIsOfType(el, types = []) {
    if (isNullOrUndefined(el) || isNullOrUndefined(types)) { return; }

    const nodeType = el.nodeName.toLowerCase();
    const lowerTypes = types.map(t => t.toLowerCase());

    const doesIncludeType = lowerTypes.includes(nodeType);

    if (!doesIncludeType) { return false; }

    return true;
}

/**Checks to see if the attribute passed to the function actually exists.
 *
 * `allAttributes` is defined at the top of this file.
 *
 * @param {String} attribute - The attribute you are checking for existence.
 * @returns {Boolean} - A boolean that indicates if a valid attribute has been passed to the function.
 */
function attributeExists(attribute) {
    if (isNullOrUndefined(attribute)) { return; }

    const lowerAttribute = attribute.toLowerCase();

    const attributeDoesExists = allAttributes.includes(lowerAttribute);

    return attributeDoesExists;
}

/**Checks to see if the string provided matches the shape of a JS function call.
 *
 * E.g. Matches 'someFunc()', 'some_func()', 'someFunc(arg)', 'someFunc(arg1, arg1)', 'someFunc().anotherFunc()', etc.
 * @param {string} shape - The string you are checking the shape of.
 * @returns {boolean} - A boolean that indicates if the string passed to the function is of the shape of a JS function call.
 */
function isShapeOfFunction(shape) {
    if (isNullOrUndefined(shape)) { return; }

    const regularExpression = /([a-zA-Z0-9_]\([^)]*\))/gi;

    const matches = shape.match(regularExpression) ?? [];

    return (matches.length > 0) ? true : false;
}

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
