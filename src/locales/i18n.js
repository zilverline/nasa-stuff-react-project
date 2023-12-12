import locales from '.';

let localeName = 'en-us';

/**
 * Sets the locale to use for translations.
 * @param {string} name Name of the locale to set to.
 */
export function setLocale(name) {
  if (!name || typeof name != 'string') {
    console.warn('Failed to set locale, no name given.');
    return;
  }

  name = name.toLowerCase();
  if (name === 'nl-be') {
    name = 'nl-nl';
  }

  localeName = name;
}

/**
 * Formats the given string with the given arguments.
 * @param {string} value Value to replace placeholders in.
 * @param {...any} args Values of each placeholder item.
 * @returns {string} Formatted string.
 */
export function format(value, ...args) {
  for (let idx = 0; idx < args.length; idx++) {
    value = value.replace(`{${idx}}`, args[idx]);
  }

  return value;
}

/**
 * Uses the translation at the given key.
 * @param {string} key Key to use for translation.
 * @returns {string} Internationalized string.
 */
export function i18n(key) {
  let value = locales[localeName] || locales['en-us'];

  // Traverse '.' to get value
  for (let keyPart of key.split('.')) {
    value = value[keyPart];

    // No value found
    if (value == null) {
      return key;
    }
  }

  return value;
}
