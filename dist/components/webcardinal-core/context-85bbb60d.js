let config;
function setWebCardinalConfig(controller) {
  config = controller.getConfig();
}
function getWebCardinalConfig() {
  return config;
}

export { getWebCardinalConfig as g, setWebCardinalConfig as s };
