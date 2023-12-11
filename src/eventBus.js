/** Event bus used for communication between components */
const eventBus = {

  /**
   * Adds a listener for the given event.
   * @param {string} event Event that should be listened for.
   * @param {Function} callback Function to execute when the event has been triggered.
   */
  addListener(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },

  /**
   * Removes a listener for the given event.
   * @param {string} event Event that should be removed.
   * @param {Function} callback Function that should be removed.
   */
  removeListener(event, callback) {
    document.removeEventListener(event, callback);
  },

  /**
   * Sends an event with the given data.
   * @param {string} event Event that should be sent.
   * @param {any} data Data that should be sent with the event.
   */
  send(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  }

}

export default eventBus;
