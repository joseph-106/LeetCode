/**
 * @param {string} text
 * @return {string}
 */
const entityParser = function(text) {
    return text.replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&frasl;", "/").replaceAll("&amp;", "&");
};