function getTemplate(templateName) {
  if (templateName === REGISTRATION) {
    return getRegistrationTemplate();
  }

  if (templateName === AUTH) {
    return getAuthTemplate();
  }

  if (templateName === CREATE_ROOM) {
    return getCreateRoomTemplate();
  }

  return getStartTemplate();
}
