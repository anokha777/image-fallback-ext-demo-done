document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('pluginActiveInactiveToggle').addEventListener('click', savePluginStateHandler);
  main();
});

function savePluginState(isImageFallbackPluginEnabled) {
  chrome.storage.sync.set({'isImageFallbackPluginEnabled': isImageFallbackPluginEnabled}, function() {
    console.log('Image fallback state is saved to- ', isImageFallbackPluginEnabled);
  });
}

function savePluginStateHandler(element) {
  const isImageFallbackPluginEnabled = document.getElementById('pluginActiveInactiveToggle').checked;
  savePluginState(isImageFallbackPluginEnabled);
}

function main() {
  chrome.storage.sync.get(['isImageFallbackPluginEnabled'], function(items) {
    document.getElementById('pluginActiveInactiveToggle').checked = items.isImageFallbackPluginEnabled === undefined ? true : items.isImageFallbackPluginEnabled;
  });
}
