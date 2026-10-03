/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const substring = haystack.slice(i, i + n);

      if (substring === needle) return i;
    }
  }

  return -1;
};
